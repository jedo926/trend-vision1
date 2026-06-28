import os
from fastapi import FastAPI, HTTPException, Request, Depends
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

# ── Supabase + vector store ───────────────────────────────────
supabase_client = create_client(
    os.environ["SUPABASE_URL"],
    os.environ["SUPABASE_SERVICE_ROLE_KEY"],
)
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.2)

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

# ── Schema ────────────────────────────────────────────────────
class QueryRequest(BaseModel):
    question: str

# ── Endpoints ────────────────────────────────────────────────
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

    sources = []
    seen = set()
    for row in retrieved_docs:
        meta = row.get("metadata") or {}
        title = meta.get("title", "Documentation Page")
        url = meta.get("url", "https://docs.trendmicro.com/")
        if title not in seen:
            seen.add(title)
            sources.append({"title": title, "url": url})

    return {"answer": answer, "sources": sources}
