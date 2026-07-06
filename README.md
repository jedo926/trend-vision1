# TrendVision1: AI-Powered Cybersecurity Training Platform

A full-stack training platform for Trend Micro security products, built end-to-end during my AI & Full-Stack internship at **Trend Micro**: interactive lessons, dynamic quizzes, progress tracking, and a RAG-based AI assistant grounded in product documentation.

**Live:** [trendvision1.vercel.app](https://trendvision1.vercel.app)

## What it does

- **Learning engine**: structured training modules with dynamic assessments, per-user progress tracking, and voice-enabled lessons
- **AI assistant**: Retrieval-Augmented Generation over internal product docs using LangChain agents, OpenAI embeddings, and a Supabase vector store; documents are ingested through a MarkItDown/Docling pipeline (`ingest_local.py`)
- **LLM firewall**: a custom prompt-security pipeline (`llm/firewall/`) with input/output policies and secret detection, covered by tests (`tests/test_firewall.py`)
- **Admin panel**: content and user management (`admin.html`)

## Stack

| Layer | Tech |
|---|---|
| Backend | Python, FastAPI, LangChain, OpenAI, slowapi rate limiting |
| Frontend | Vanilla JS modules (quiz, progress, auth, explainer), HTML/CSS |
| Data | Supabase (Postgres + vector store, auth) |
| Deploy | Vercel (frontend) + Railway (API) |

## Run locally

```bash
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # OPENAI_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
uvicorn main:app --reload
```

Ingest docs for the RAG assistant: drop PDFs into `docs_input/` and run `python ingest_local.py`.

## Tests

```bash
pytest tests/
```

---
Built by [Abdulmajeed Tayyar](https://github.com/jedo926): sole owner of design, implementation, releases, and monitoring.
