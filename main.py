import os
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import SupabaseVectorStore
from langchain.agents import create_agent
from langchain.tools import tool
from supabase.client import create_client

load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

supabase_client = create_client(
    os.environ.get("SUPABASE_URL"),
    os.environ.get("SUPABASE_SERVICE_ROLE_KEY"),
)
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = SupabaseVectorStore(
    client=supabase_client,
    embedding=embeddings,
    table_name="documents",
    query_name="match_documents",
)
retriever = vector_store.as_retriever(search_kwargs={"k": 4})

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.2)

SYSTEM_PROMPT = (
    "You are an elite, supportive technical learning assistant for the Trend Micro Vision One platform. "
    "Your goal is to guide students when they are confused. "
    "If they ask specific configuration or setup questions, you MUST use your documentation retrieval tool to fetch the facts. "
    "Answer using ONLY the provided documentation context for technical steps. "
    "If information is completely missing from the docs, state that transparently, but remain helpful and encouraging."
)


class QueryRequest(BaseModel):
    question: str


@app.post("/query")
def ask_agent(request: QueryRequest):
    retrieved_docs = []

    @tool
    def search_vision_one_docs(query: str) -> str:
        """Search Trend Micro Vision One documentation for technical setup, configuration, and platform guidance."""
        docs = retriever.invoke(query)
        retrieved_docs.extend(docs)
        return "\n\n".join(doc.page_content for doc in docs)

    agent = create_agent(
        model=llm,
        tools=[search_vision_one_docs],
        system_prompt=SYSTEM_PROMPT,
    )

    result = agent.invoke({"messages": [{"role": "user", "content": request.question}]})
    answer = result["messages"][-1].content

    sources = []
    seen = set()
    for doc in retrieved_docs:
        title = doc.metadata.get("title", "Documentation Page")
        url = doc.metadata.get("url", "https://docs.trendmicro.com/")
        if title not in seen:
            seen.add(title)
            sources.append({"title": title, "url": url})

    return {"answer": answer, "sources": sources}
