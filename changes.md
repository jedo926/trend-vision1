# Changes Log

---

## 2026-06-28 — Chatbot UI

**Prompt:** i dont see a chatbot on the site?

**What was done:**
- `index.html` — Added floating chat button (bottom-right FAB) and a slide-up chat panel with header, scrollable messages area, typing indicator, and input row. FAB toggles open/close state with icon swap. Inline JS handles: toggling panel, sending questions to `POST http://localhost:8000/query`, rendering assistant replies with source links, showing animated typing dots while waiting, and graceful error message if backend is unreachable.
- `css/style.css` — Full chatbot CSS appended: FAB with accent glow, panel with slide-up animation, user/assistant message bubbles, bouncing typing dots, source link list, pill input, send button.

---

## 2026-06-28 — Fix resume banner dark mode contrast

**Prompt:** fix this Resume where you left off: Zero Trust Principles the color is off i cant see it on darkmode

**What was done:**
- `css/style.css` — `background: var(--t1)` on `.resume-banner` was using the primary *text* color as the background. In dark mode `--t1` is `#E6EDF3` (near-white), making `color: #fff` invisible. Changed background to `color-mix(in srgb, var(--accent) 8%, var(--s2))` — a subtle red-tinted surface that adapts to both modes — and text to `var(--t1)` so it always contrasts. Fixed `.dismiss-btn` too: replaced `rgba(255,255,255,0.12)` / `color: #fff` (hardcoded light values) with `var(--s3)` / `var(--t2)` which are semantic tokens that adapt to dark mode.

---

## 2026-06-28 — RAG Agent backend (`main.py`)

**Prompt:** Please create a production-ready FastAPI application in `main.py` to serve as our RAG API backend using an OpenAI Tools Agent instead of a rigid chain. Requirements: dotenv load, CORS all-origins, Supabase vector store (text-embedding-3-small, k=4), gpt-4o-mini OpenAI Tools Agent with a custom documentation retrieval tool, supportive system prompt, POST `/query` returning `answer` + deduplicated `sources`.

**What was done:**
- Replaced `create_retrieval_chain` + `create_stuff_documents_chain` with `create_openai_tools_agent` + `AgentExecutor`.
- Agent is equipped with `search_vision_one_docs` tool (wraps the Supabase retriever, captures retrieved docs per-request via closure for source extraction).
- Prompt uses `MessagesPlaceholder(variable_name="agent_scratchpad")` as required by the tools-agent pattern.
- Endpoint is sync `def` (FastAPI runs it in a threadpool); agent and tool are rebuilt per-request (lightweight — only the vector store, LLM, and retriever are module-level singletons).
- `python -m py_compile main.py` → Syntax OK; AST parsed 11 import statements.

---

## 2026-06-28 — Next Step tabs + Next Module button

**Prompt:** also when they press next it should take them to the next step not the next lesson add a button for next module at the bottom

**What was done:**
- `js/app.js` — "Next" button replaced with "Next Step": clicks the next disabled/enabled tab in the tab list (Overview → Guide & Steps → Quick Check). Previous "Next" lesson-navigation moved to a new "Next Module" button in the lesson-nav row. Renamed "Previous" to "Previous Lesson" for clarity.
- `css/style.css` — Added `flex-wrap: wrap` to `.lesson-footer` so the step button and lesson-nav row stack cleanly when space is tight.

---

## 2026-06-28 — Fix Resume Banner Bug

**Prompt:** fix this Resume where you left off: What is Trend Micro Vision One? its always stuck on one module it dont actually work

**What was done:**
- `css/style.css` — Removed `animation: slideDown 0.3s ease` from `.resume-banner` base class. The `slideDown` keyframe is an exit animation (opacity:1 → opacity:0), so it was firing immediately when `.show` was added — making the banner fade out the instant it appeared. Moved the animation to `.resume-banner.show` using `slideUp` (the correct entry animation: opacity:0 → opacity:1), so the banner now slides in smoothly and stays visible.

---

## 2026-06-28 — Remove Achievements and Certificates

**Prompt:** remove the achievements and certificates

**What was done:**
- `index.html` — Removed achievement shelf section and badges row.
- `css/style.css` — Removed achievement shelf, badge, and certificate CSS blocks.
- `js/app.js` — Removed `initBadges()`, `initCertificateForm()`, `renderCertificate()`, certificate block in `renderLesson()`, `v1-badge-awarded` event listener, all achievement toast logic. `showBadgeToast` now only handles the "locked-step" access-restricted warning.

---

## 2026-06-28 — Full Frontend Redesign

**Prompt:**
> Use the /frontend-design skill to improve the design: remove emojis, comprehensive explanations, every lesson alone (no scrolling), visual explainers, professional enterprise look, premium UX, fix dark mode, centralize modules, fix smart search with mesh search in header with dropdown, and plan the redesign.

**What was done:**
- `index.html` — Full restructure: search bar moved to header center with `⌘K` shortcut, SVG icons replacing all emojis, clean semantic HTML, hidden compat containers for `progress.js`.
- `css/style.css` — Complete rewrite with DM Sans + JetBrains Mono fonts, GitHub-dark inspired semantic design tokens (`--bg`, `--s1`–`--s3`, `--t1`–`--t3`, `--accent`), proper light/dark mode contrast, enterprise card layouts.
- `js/app.js` — Major rewrite: single-lesson view (no more scrollable wall), welcome screen with module cards + progress stats, visual explainers (step pipeline, objective cards, scenario callout, mistake strips), comprehensive mesh search (10-field weighted scoring, result highlighting, keyboard nav), all emoji strings replaced with inline SVG icons.
- Dark mode: fully corrected — separate semantic tokens per mode, no `--white` double-duty.
- Content area centered at `max-width: 860px` with `margin: auto`.
- Certificate section wired to final-assessment lesson.
- All JS files pass `node --check`; all required DOM IDs verified present.

---

## 2026-06-28 — RAG API Backend (`main.py`)

**Prompt:**
> Please create a production-ready FastAPI application in `main.py` to serve as our RAG API backend. Follow these specific instructions:
> 1. ENVIRONMENT: Load environment variables from the local `.env` file using `load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))`.
> 2. CORS SETUP: Configure CORSMiddleware to allow all origins ("*"), methods, and headers so our local static HTML files can query it without blocking.
> 3. SUPABASE & EMBEDDINGS: Connect to the Supabase vector store table named 'documents' using `OpenAIEmbeddings(model="text-embedding-3-small")` and our custom match function `match_documents`.
> 4. MODERN LANGCHAIN IMPORTS: Ensure you do NOT use legacy import paths. Use `from langchain.chains.retrieval import create_retrieval_chain` and `from langchain.chains.combine_documents import create_stuff_documents_chain`.
> 5. RAG CHAIN & PROMPT: Implement a strict QA chain using `gpt-4o-mini` with a system instruction telling it to answer questions using ONLY the provided context, and to state clearly if the information is missing. Set retriever search parameters to k=4.
> 6. ENDPOINT: Create a POST `/query` endpoint that takes a JSON body `{"question": "..."}` and returns a clean JSON payload containing the string `answer` and a deduplicated list of `sources` (extracting the 'title' and 'url' from the chunk metadata). Once written, please run a quick syntax validation check to ensure all modules load smoothly.

**What was done:**
- Found `main.py` already contained a near-complete implementation.
- Fixed the one non-conforming import on line 8: changed `from langchain.chains import create_retrieval_chain` → `from langchain.chains.retrieval import create_retrieval_chain` (modern path as specified).
- Ran `python -m py_compile main.py` — syntax OK; AST parsed 11 import statements successfully.
- All 6 requirements confirmed present: dotenv load, CORS `"*"`, Supabase + `text-embedding-3-small`, modern LangChain imports, `gpt-4o-mini` strict QA chain with `k=4`, and `POST /query` with deduplicated sources.
