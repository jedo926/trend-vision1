import os
import tempfile
import httpx
from pathlib import Path
from fastapi import FastAPI, HTTPException, Request, Depends, UploadFile, File
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain.agents import create_agent
from langchain.tools import tool
from supabase.client import create_client
from markitdown import MarkItDown

load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

# ── Rate limiter ──────────────────────────────────────────────
limiter = Limiter(key_func=get_remote_address, default_limits=["60/minute"])

app = FastAPI(title="Vision One RAG API")
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Supabase + models ─────────────────────────────────────────
supabase_client = create_client(
    os.environ["SUPABASE_URL"],
    os.environ["SUPABASE_SERVICE_ROLE_KEY"],
)
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.2)
md_converter = MarkItDown()
DOCLING_URL = os.environ.get("DOCLING_URL", "").rstrip("/")  # e.g. https://docling.up.railway.app

ADMIN_EMAILS = {e.strip().lower() for e in os.environ.get("ADMIN_EMAILS", "abdulmajeedtayyar92@gmail.com").split(",")}

SYSTEM_PROMPT = (
    "You are an elite, supportive technical learning assistant for the Trend Micro Vision One platform. "
    "Your goal is to guide students when they are confused. "
    "If they ask specific configuration or setup questions, you MUST use your documentation retrieval tool to fetch the facts. "
    "Answer using ONLY the provided documentation context for technical steps. "
    "If information is completely missing from the docs, state that transparently, but remain helpful and encouraging."
)

# ── Auth ──────────────────────────────────────────────────────
bearer_scheme = HTTPBearer(auto_error=False)

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)):
    if not credentials:
        raise HTTPException(status_code=401, detail="Authentication required")
    try:
        user = supabase_client.auth.get_user(credentials.credentials)
        if not user or not user.user:
            raise ValueError("invalid")
        return user.user
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

def verify_admin(user=Depends(verify_token)):
    if (user.email or "").lower() not in ADMIN_EMAILS:
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

# ── Helpers ───────────────────────────────────────────────────
def chunk_text(text: str, chunk_size: int = 800, overlap: int = 100) -> list[str]:
    words = text.split()
    chunks, i = [], 0
    while i < len(words):
        chunk = " ".join(words[i : i + chunk_size])
        if chunk.strip():
            chunks.append(chunk)
        i += chunk_size - overlap
    return chunks

# ── Schema ────────────────────────────────────────────────────
class QueryRequest(BaseModel):
    question: str

# ── Public endpoints ──────────────────────────────────────────
@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/query")
@limiter.limit("20/minute")
def ask_agent(
    request: Request,
    body: QueryRequest,
    user=Depends(verify_token),
):
    retrieved_docs = []

    @tool
    def search_vision_one_docs(query: str) -> str:
        """Search Trend Micro Vision One documentation for technical setup, configuration, and platform guidance."""
        vector = embeddings.embed_query(query)
        res = supabase_client.rpc("match_documents", {
            "query_embedding": vector,
            "match_count": 4,
            "match_threshold": 0.5,
        }).execute()
        rows = res.data or []
        for row in rows:
            retrieved_docs.append(row)
        return "\n\n".join(row.get("content", "") for row in rows)

    agent = create_agent(
        model=llm,
        tools=[search_vision_one_docs],
        system_prompt=SYSTEM_PROMPT,
    )
    result = agent.invoke({"messages": [{"role": "user", "content": body.question}]})
    answer = result["messages"][-1].content

    sources, seen = [], set()
    for row in retrieved_docs:
        meta = row.get("metadata") or {}
        title = meta.get("title", "Documentation Page")
        url = meta.get("url", "https://docs.trendmicro.com/")
        if title not in seen:
            seen.add(title)
            sources.append({"title": title, "url": url})

    return {"answer": answer, "sources": sources}

# ── Admin endpoints ───────────────────────────────────────────
@app.get("/admin/health")
def admin_health(user=Depends(verify_admin)):
    try:
        res = supabase_client.table("documents").select("id", count="exact").limit(1).execute()
        doc_count = res.count or 0
        supabase_ok = True
    except Exception:
        doc_count = -1
        supabase_ok = False
    return {
        "backend": "ok",
        "supabase": supabase_ok,
        "document_count": doc_count,
        "docling": bool(DOCLING_URL),
        "docling_url": DOCLING_URL or None,
    }

@app.get("/admin/users")
def list_users(user=Depends(verify_admin)):
    res = supabase_client.auth.admin.list_users()
    users = [
        {"id": u.id, "email": u.email, "created_at": str(u.created_at), "last_sign_in": str(u.last_sign_in_at)}
        for u in res
    ]
    return {"users": users, "total": len(users)}

@app.delete("/admin/users/{user_id}")
def delete_user(user_id: str, admin=Depends(verify_admin)):
    supabase_client.auth.admin.delete_user(user_id)
    return {"deleted": user_id}

@app.get("/admin/documents")
def list_documents(user=Depends(verify_admin)):
    res = supabase_client.table("documents").select("id, metadata").limit(200).execute()
    return {"documents": res.data, "count": len(res.data)}

@app.delete("/admin/documents/{doc_id}")
def delete_document(doc_id: str, user=Depends(verify_admin)):
    supabase_client.table("documents").delete().eq("id", doc_id).execute()
    return {"deleted": doc_id}

@app.delete("/admin/documents")
def delete_all_documents(user=Depends(verify_admin)):
    supabase_client.table("documents").delete().neq("id", "00000000-0000-0000-0000-000000000000").execute()
    return {"deleted": "all"}

@app.post("/admin/ingest")
async def ingest_document(file: UploadFile = File(...), user=Depends(verify_admin)):
    filename = file.filename or "upload.pdf"
    suffix = Path(filename).suffix or ".pdf"
    file_bytes = await file.read()

    # Use docling-serve if configured, else markitdown
    if DOCLING_URL and suffix.lower() in {".pdf", ".docx", ".pptx", ".xlsx", ".html", ".htm"}:
        try:
            async with httpx.AsyncClient(timeout=120) as client:
                resp = await client.post(
                    f"{DOCLING_URL}/v1/convert/file",
                    files={"files": (filename, file_bytes, "application/octet-stream")},
                )
                resp.raise_for_status()
                data = resp.json()
                text = (data.get("document") or {}).get("md_content") or ""
        except Exception as e:
            raise HTTPException(status_code=502, detail=f"Docling error: {e}")
    else:
        with tempfile.NamedTemporaryFile(suffix=suffix, delete=False) as tmp:
            tmp.write(file_bytes)
            tmp_path = tmp.name
        try:
            result = md_converter.convert(tmp_path)
            text = result.text_content or ""
        finally:
            os.unlink(tmp_path)

    if not text.strip():
        raise HTTPException(status_code=422, detail="Could not extract text from file")

    chunks = chunk_text(text)
    if not chunks:
        raise HTTPException(status_code=422, detail="No content chunks generated")

    rows = []
    for chunk in chunks:
        vector = embeddings.embed_query(chunk)
        rows.append({
            "content": chunk,
            "metadata": {"title": file.filename, "source": "admin_upload"},
            "embedding": vector,
        })

    supabase_client.table("documents").insert(rows).execute()
    return {"ingested_chunks": len(rows), "filename": file.filename}
