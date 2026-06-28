# Vision One Interactive Training Website — Design Spec
**Date:** 2026-06-28  
**Stack:** HTML5, CSS3, Vanilla JavaScript (no frameworks)  
**Approach:** Data-driven SPA — content in JS objects, UI rendered at load time  
**Run mode:** Double-click `index.html` (no server required)

---

## File Structure

```
trend_vision1/
├── index.html              # App shell (~100 lines): header, sidebar, main
├── css/
│   └── style.css           # All styling, CSS custom properties, responsive
├── js/
│   ├── data/
│   │   └── modules.js      # All lesson content as JS objects
│   ├── app.js              # Orchestrator: DOM render, search, bookmarks, sidebar
│   ├── progress.js         # IntersectionObserver, header updates, completion state
│   ├── quiz.js             # Quiz render, answer checking, completion trigger
│   └── storage.js          # Single source of truth for all localStorage operations
└── docs/
    └── superpowers/specs/
        └── 2026-06-28-vision-one-training-site-design.md
```

---

## Architecture

`index.html` provides three layout zones:
1. **Fixed header** — always visible, shows current lesson + progress
2. **Collapsible sidebar** — ToC, search, bookmarks
3. **Scrollable main** — lesson content rendered by app.js from modules.js

No build step. No imports/exports (plain `<script>` tags in order). All modules share a global `V1App` namespace object.

### Script load order
```html
<script src="js/data/modules.js"></script>   <!-- data first -->
<script src="js/storage.js"></script>
<script src="js/quiz.js"></script>
<script src="js/progress.js"></script>
<script src="js/app.js"></script>            <!-- orchestrator last -->
```

---

## Data Model (`modules.js`)

```js
const V1_MODULES = [
  {
    id: "intro",
    title: "Introduction",
    icon: "🏠",
    estimatedMins: 15,
    isAdvanced: false,
    lessons: [
      {
        id: "intro-what-is-v1",
        title: "What is Trend Micro Vision One?",
        estimatedMins: 5,
        content: {
          whatThisMeans: "...",
          whyItMatters: "...",
          whatYouWillLearn: ["...", "..."],
          steps: ["...", "..."],
          scenario: "...",
          commonMistakes: ["...", "..."],
          summary: "..."
        },
        quiz: {
          questions: [
            {
              question: "...",
              options: ["A", "B", "C", "D"],
              correct: 0   // index into options
            }
          ]
        }
      }
    ]
  }
];
```

Advanced modules have `isAdvanced: true` — they render after the Final Assessment with a lock state until core 9 modules are 100% complete.

---

## Module Content Map

| # | Module | Source MD | Core Lessons |
|---|--------|-----------|--------------|
| 0 | Introduction | 01_Introduction.md | What is V1, Why use it, Key benefits, Platform overview |
| 1 | First Login | 02_Getting_Started.md | Accessing the portal, Dashboard orientation, Navigation basics |
| 2 | Dashboard Overview | 03_Dashboards_and_Reports.md | Main dashboard, Widgets, Risk insights, Alerts overview |
| 3 | Alerts & Workbench | 05_Agentic_SIEM_XDR.md | What is an alert, Severity levels, Workbench investigations, Investigation paths |
| 4 | Endpoint Security | 10_Endpoint_Security.md | Endpoints explained, Inventory, Activity, Endpoint risk |
| 5 | Email Security | 13_Email_and_Collaboration_Security.md | Email threats, Investigating malicious emails, Reviewing detections |
| 6 | Attack Surface Management | 04_Cyber_Risk_Exposure_Management.md | Understanding exposure, Risk scores, Prioritizing issues |
| 7 | Search & Investigations | 05_Agentic_SIEM_XDR.md (search sections) | Search basics, Finding devices, Finding users, Finding indicators |
| 8 | Response Actions | 05 + 10_Endpoint_Security.md | Isolating endpoints, Managing threats, Response workflows |
| 9 | Reports & Dashboards | 03_Dashboards_and_Reports.md | Generating reports, Sharing reports, Executive reporting |
| — | Final Assessment | All modules | Knowledge check (10 Qs), Completion certificate |
| A1 | Advanced: AI Security | 08_AI_Security.md | AI threat detection, AI-powered investigations |
| A2 | Advanced: Cloud & Network | 11 + 12 | Cloud posture, Network detection |
| A3 | Advanced: Workflow & Automation | 07_Workflow_and_Automation.md | Playbooks, Auto-response rules |
| A4 | Advanced: Zero Trust | 09_Zero_Trust_Secure_Access.md | Zero Trust principles, Access policies |
| A5 | Advanced: Threat Intelligence | 06_Threat_Intelligence.md | IOCs, Feeds, Intel-driven hunting |

---

## UI Components

### Fixed Header
```
[ T  Vision One Learning Guide ]    [ Module 3 → Workbench  |  67% ▓▓▓▓▓░░░  ▼ ]
```
- Left: SVG logo + title
- Right: current lesson label (from IntersectionObserver) + animated progress bar + chevron
- Clicking the right side opens the Progress Nav Panel

### Progress Nav Panel
- Full-width dropdown below header
- Lists every module + lesson with ✓ (complete) / ● (current) / ○ (upcoming)
- Click any lesson → smooth scroll + close panel
- Close on Escape or outside click

### Collapsible Sidebar
- Top: search `<input>` 
- Below: module/lesson tree
  - Module row: expand/collapse chevron, title, total time, completion %
  - Lesson row: status icon, title, time, bookmark icon
- Collapses to icon rail on screens < 768px
- State persisted in localStorage

### Resume Banner
Shown on return visits when `lastLesson` exists in localStorage:
```
"Welcome back! You were last on: Workbench Investigations"  [Continue →]
```
Dismissable. Appears at top of main content area.

### Achievement Shelf
Row of 5 badges below resume banner:
- First Step (1st lesson complete)
- Quarter Way (25%)
- Halfway (50%)
- Almost There (75%)
- Vision One Expert (100% core)

Earned: full color with glow. Unearned: greyscale + lock. Tapping shows tooltip with badge name.

---

## Lesson Template (rendered per lesson)

Every lesson section renders these blocks in order:
1. **Header** — lesson title + module breadcrumb + estimated time + bookmark button
2. **What This Means** — plain-English explanation (1–2 sentences)
3. **Why It Matters** — business impact (1–2 sentences)
4. **What You'll Learn** — `<ul>` of 3–5 bullet points
5. **Step-by-Step** — `<ol>` numbered instructions
6. **Example Scenario** — real-world story paragraph
7. **Common Mistakes** — `<ul>` with ⚠️ items
8. **Quick Summary** — 2–3 sentence recap
9. **Quick Check** — quiz component (3–5 MCQ)
10. **Mark Complete** button → saves to storage, updates all UI
11. **Next Lesson** → smooth scroll to next section

---

## JavaScript Modules

### `storage.js`
```js
// All localStorage access goes through here — nothing else touches localStorage
const V1Storage = {
  getCompleted()   // → Set<lessonId>
  setCompleted(id) // save + trigger badge check
  getBookmarks()   // → Set<lessonId>
  toggleBookmark(id)
  getBadges()      // → Set<badgeId>
  getLastLesson()  // → lessonId | null
  setLastLesson(id)
  clearAll()
}
```

### `progress.js`
```js
// IntersectionObserver watches each [data-lesson-id] section
// threshold: 0.4 — fires when 40% of section visible
// On intersection: update header label, recalculate %, update progress bar
const V1Progress = {
  init()           // set up observer after app renders
  recalculate()    // recompute % from storage, update bar + header
  markComplete(id) // called by quiz.js and mark-complete button
}
```

### `quiz.js`
```js
// Renders quiz for a lesson, handles answer checking
const V1Quiz = {
  render(lessonData, container)
  // On correct answer: calls V1Progress.markComplete(lessonId)
  // On wrong answer: shows hint, allows retry (no penalty)
}
```

### `app.js`
```js
// Orchestrator — runs on DOMContentLoaded
const V1App = {
  init()          // render all modules, init progress, check resume
  renderModules() // walks V1_MODULES, builds all lesson sections
  initSearch()    // search input → filter sidebar + highlight + scroll
  initSidebar()   // expand/collapse, bookmark clicks
  showResumeBanner()
  checkAdvancedUnlock() // show/hide advanced modules based on core completion
}
```

---

## Visual Design

### CSS Custom Properties
```css
:root {
  --red:        #D71920;  /* Trend Micro brand red */
  --red-dark:   #A81218;
  --white:      #FFFFFF;
  --gray-light: #F5F5F7;
  --gray-mid:   #E0E0E5;
  --gray-dark:  #6B6B6B;
  --text:       #1A1A2E;
  --success:    #22C55E;
  --shadow:     0 2px 12px rgba(0,0,0,0.08);
  --radius:     10px;
}
```

### Layout
- Header: 64px fixed, `z-index: 1000`
- Sidebar: 280px, collapsible, sticky below header
- Main: `margin-left: 280px`, max-width 860px centered, `padding-top: 80px`
- Cards: `border-radius: var(--radius)`, `box-shadow: var(--shadow)`, white bg
- Section bg alternates: white / `var(--gray-light)`

### Responsive breakpoints
- `< 768px`: sidebar hidden (hamburger toggle), header stacks
- `768px–1024px`: sidebar collapses to icon rail (48px)
- `> 1024px`: full sidebar + main

---

## localStorage Schema

```js
// Key: "v1_training"
{
  completed:  ["intro-what-is-v1", "intro-why-use-it", ...],  // lessonIds
  bookmarks:  ["module3-workbench", ...],
  badges:     ["first-step", "quarter-way"],
  lastLesson: "module3-workbench",
  sidebarOpen: true
}
```

---

## Accessibility

- All interactive elements: `tabindex`, `:focus-visible` ring
- Progress bar: `role="progressbar"` + `aria-valuenow`
- Quiz options: `role="radio"` group
- Sidebar: `role="navigation"` + `aria-label`
- Skip-to-content link at top of `<body>`
- Color contrast: all text meets WCAG AA (4.5:1 minimum)

---

## Search

- `<input>` in sidebar header
- On keyup (debounced 200ms): filter lessons whose `title` or `content.*` contains the query
- Sidebar items not matching: `opacity: 0.3`
- Sidebar items matching: highlighted border + smooth scroll to first match on Enter
- Clear button resets state

---

## Scope Notes

- No user accounts, no backend, no analytics
- Certificate page = a styled HTML section with the user's completion date from localStorage
- Advanced modules unlock via JS class toggle — no server gating needed
- `changes.md` will be maintained per project CLAUDE.md instructions
