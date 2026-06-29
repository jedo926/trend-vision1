// Vision One Training Platform — App Orchestrator

function isModuleAllowed(moduleId) {
  const p = window.V1Profile;
  if (!p || !p.approved) return false;
  if (!p.allowed_modules) return true; // null = admin, all access
  return p.allowed_modules.includes(moduleId);
}

window.V1App = {
  currentLessonId: null,
  searchFocusedIdx: -1,
  searchResults: [],

  // SVG icon helpers (no emojis anywhere)
  icons: {
    clock: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3.5V6L7.5 7.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    check: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5L4.5 8L9 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    lock: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="2.5" y="5.5" width="8" height="6" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M4 5.5V4A2.5 2.5 0 019 4v1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    bookmark: `<svg width="11" height="12" viewBox="0 0 11 12" fill="none"><path d="M1.5 1.5H9.5V10.5L5.5 8L1.5 10.5V1.5Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
    bookmarkFill: `<svg width="11" height="12" viewBox="0 0 11 12" fill="currentColor"><path d="M1.5 1.5H9.5V10.5L5.5 8L1.5 10.5V1.5Z"/></svg>`,
    arrowRight: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    arrowLeft: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M10.5 6.5H2.5M2.5 6.5L6 3M2.5 6.5L6 10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    chevronRight: `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3.5 2L6.5 5L3.5 8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    info: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6.5 6v3.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="6.5" cy="3.5" r="0.6" fill="currentColor"/></svg>`,
    target: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.2"/><circle cx="6.5" cy="6.5" r="2.5" stroke="currentColor" stroke-width="1.2"/><circle cx="6.5" cy="6.5" r="0.7" fill="currentColor"/></svg>`,
    list: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M4.5 3.5H10.5M4.5 6.5H10.5M4.5 9.5H10.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="2.5" cy="3.5" r="0.6" fill="currentColor"/><circle cx="2.5" cy="6.5" r="0.6" fill="currentColor"/><circle cx="2.5" cy="9.5" r="0.6" fill="currentColor"/></svg>`,
    terminal: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="2" width="10" height="9" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M4 5.5L6 7.5L4 9.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 9.5H10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
    warning: `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5L12 11H1L6.5 1.5Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M6.5 5v3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="6.5" cy="9.5" r="0.55" fill="currentColor"/></svg>`,
    shield: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5L2 3.5v4c0 2.5 2 4.5 5 5 3-0.5 5-2.5 5-5v-4L7 1.5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
    star: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5l1.5 4h4l-3.5 2.5 1.5 4L7 9.5l-3.5 2.5 1.5-4L1.5 5.5h4L7 1.5z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/></svg>`,
    home: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 7L7 2l5.5 5M3 6.5V12h8V6.5M5.5 12V9.5h3V12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },

  // Module icon mapping (by module id prefix)
  moduleIcons: {
    'intro':        `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.3"/><path d="M8 5v3.5L10 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    'endpoint':     `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M5.5 12h5M8 12v1" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    'email':        `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M2 6l6 4 6-4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    'cloud':        `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.5 12a3 3 0 000-6 3 3 0 00-5.7-1A3 3 0 003.5 12h8z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    'network':      `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.2"/><circle cx="3" cy="8" r="1.2" stroke="currentColor" stroke-width="1.2"/><circle cx="13" cy="8" r="1.2" stroke="currentColor" stroke-width="1.2"/><circle cx="8" cy="3" r="1.2" stroke="currentColor" stroke-width="1.2"/><circle cx="8" cy="13" r="1.2" stroke="currentColor" stroke-width="1.2"/><path d="M6 8H4.2M9.8 8H11.8M8 6V4.2M8 9.8V11.8" stroke="currentColor" stroke-width="1.1"/></svg>`,
    'soc':          `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L3 5v4c0 2.8 2.2 5 5 5s5-2.2 5-5V5L8 2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    'risk':         `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l5 9H3L8 2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M8 6.5v2M8 10v.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    'identity':     `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="2.5" stroke="currentColor" stroke-width="1.3"/><path d="M3 13.5c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    'xdr':          `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5.5" height="5.5" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="8.5" y="2" width="5.5" height="5.5" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="2" y="8.5" width="5.5" height="5.5" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1" stroke="currentColor" stroke-width="1.2"/></svg>`,
    'final':        `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l1.5 4h4L10 8.5l1.5 4L8 10l-3.5 2.5 1.5-4L2.5 6h4L8 2z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
    'advanced':     `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M3 6l5-4 5 4M4 12h8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    'default':      `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.3"/><path d="M6 8h4M8 6v4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  },

  getModuleIcon(moduleId) {
    const key = Object.keys(this.moduleIcons).find(k => moduleId.startsWith(k)) || 'default';
    return this.moduleIcons[key];
  },

  // ============================================================
  // INIT
  // ============================================================
  init() {
    this.initTheme();
    this.initMode();
    this.renderSidebar();
    this.renderProgressDropdown();

    window.V1Progress.init();

    this.initHeaderSearch();
    this.initSidebarToggle();
    this.initSidebarTabs();
    this.initTroubleshooter();
    this.initBookmarkListeners();

    // Decide what to show on load
    const lastLesson = window.V1Storage.getLastLesson();
    if (lastLesson) {
      this.showResumeBanner(lastLesson);
      this.renderWelcome();
    } else {
      this.renderWelcome();
    }

    window.addEventListener("v1-storage-cleared", () => window.location.reload());
    window.addEventListener("v1-mode-changed", () => {
      this.renderSidebar();
      this.renderProgressDropdown();
      window.V1Progress.recalculate();
      if (this.currentLessonId) {
        this.renderLesson(this.currentLessonId);
      } else {
        this.renderWelcome();
      }
    });

    // Logo click → home
    const logoLink = document.getElementById("logo-home-link");
    if (logoLink) {
      logoLink.addEventListener("click", (e) => {
        e.preventDefault();
        this.currentLessonId = null;
        this.renderWelcome();
        this.updateSidebarActiveState(null);
      });
    }
  },

  // ============================================================
  // THEME
  // ============================================================
  initTheme() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    this.applyTheme(window.V1Storage.getTheme());
    btn.addEventListener("click", () => {
      const dark = document.documentElement.classList.contains("dark");
      const next = dark ? "light" : "dark";
      this.applyTheme(next);
      window.V1Storage.setTheme(next);
    });
  },

  applyTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
  },

  // ============================================================
  // MODE
  // ============================================================
  initMode() {
    const btnR = document.getElementById("mode-btn-reading");
    const btnE = document.getElementById("mode-btn-execution");
    if (!btnR || !btnE) return;
    this.applyModeUI(window.V1Storage.getMode());
    btnR.addEventListener("click", () => { window.V1Storage.setMode("reading"); this.applyModeUI("reading"); });
    btnE.addEventListener("click", () => { window.V1Storage.setMode("execution"); this.applyModeUI("execution"); });
  },

  applyModeUI(mode) {
    const btnR = document.getElementById("mode-btn-reading");
    const btnE = document.getElementById("mode-btn-execution");
    if (!btnR || !btnE) return;
    const exec = mode === "execution";
    btnE.classList.toggle("active", exec);
    btnE.setAttribute("aria-checked", exec);
    btnR.classList.toggle("active", !exec);
    btnR.setAttribute("aria-checked", !exec);
    document.body.classList.toggle("execution-mode", exec);
  },

  // ============================================================
  // SIDEBAR TABS
  // ============================================================
  initSidebarTabs() {
    const tabs = {
      syllabus:     { btn: "sidebar-tab-syllabus",     view: "sidebar-view-syllabus" },
      troubleshoot: { btn: "sidebar-tab-troubleshoot", view: "sidebar-view-troubleshoot" },
    };
    Object.entries(tabs).forEach(([key, cfg]) => {
      const btn = document.getElementById(cfg.btn);
      if (!btn) return;
      btn.addEventListener("click", () => {
        Object.values(tabs).forEach(t => {
          document.getElementById(t.btn)?.classList.remove("active");
          document.getElementById(t.view)?.classList.remove("active");
        });
        btn.classList.add("active");
        document.getElementById(cfg.view)?.classList.add("active");
      });
    });
  },

  // ============================================================
  // SIDEBAR TOGGLE
  // ============================================================
  initSidebarToggle() {
    const toggleBtn = document.getElementById("sidebar-toggle");
    const sidebar   = document.getElementById("sidebar-toc");
    if (!toggleBtn || !sidebar) return;

    const isOpen = window.V1Storage.getSidebarOpen();
    if (!isOpen) {
      sidebar.classList.add("collapsed");
      document.body.classList.add("sidebar-collapsed");
    }

    toggleBtn.addEventListener("click", () => {
      const collapsed = sidebar.classList.toggle("collapsed");
      document.body.classList.toggle("sidebar-collapsed", collapsed);
      window.V1Storage.setSidebarOpen(!collapsed);
      // mobile: use open class instead
      sidebar.classList.toggle("mobile-open", !collapsed);
    });
  },


  // ============================================================
  // SIDEBAR RENDER
  // ============================================================
  renderSidebar() {
    const container = document.getElementById("sidebar-nav-container");
    if (!container) return;
    container.innerHTML = "";

    const completed = window.V1Storage.getCompleted();
    const mode      = window.V1Storage.getMode();
    let prevDone    = true;

    window.V1_MODULES.forEach((mod) => {
      const modWrapper = document.createElement("div");
      modWrapper.className = "sidebar-module-wrapper";

      const modAdminLocked = !isModuleAllowed(mod.id);

      const modRow = document.createElement("div");
      modRow.className = "sidebar-module-row" + (modAdminLocked ? " mod-admin-locked" : "");
      modRow.setAttribute("data-module-id", mod.id);

      const chevron = document.createElement("span");
      chevron.className = "module-chevron";
      chevron.innerHTML = modAdminLocked ? this.icons.lock : "▾";

      const titleSpan = document.createElement("span");
      titleSpan.className = "module-title";
      titleSpan.textContent = mod.title;

      const meta = document.createElement("div");
      meta.className = "module-meta";

      if (modAdminLocked) {
        const lockPill = document.createElement("span");
        lockPill.className = "module-lock-pill";
        lockPill.textContent = "Locked";
        meta.appendChild(lockPill);
      } else {
        const pct = document.createElement("span");
        pct.className = "module-percent";
        pct.textContent = "0%";
        meta.appendChild(pct);
      }

      modRow.appendChild(chevron);
      modRow.appendChild(titleSpan);
      modRow.appendChild(meta);
      modWrapper.appendChild(modRow);

      const lessonsList = document.createElement("div");
      lessonsList.className = "sidebar-lessons-list";

      mod.lessons.forEach((les) => {
        const lesRow = document.createElement("div");
        lesRow.className = "sidebar-lesson-row";
        lesRow.setAttribute("data-id", les.id);

        const adminLocked = !isModuleAllowed(mod.id);
        const locked = !adminLocked && mode === "execution" && !prevDone && !mod.isAdvanced;
        if (adminLocked) lesRow.classList.add("admin-locked");
        else if (locked) lesRow.classList.add("locked");
        if (!adminLocked && completed.has(les.id)) lesRow.classList.add("completed");

        const statusIcon = document.createElement("span");
        statusIcon.className = "lesson-status-icon" + (completed.has(les.id) ? " completed" : " pending");
        statusIcon.innerHTML = adminLocked ? this.icons.lock : locked ? this.icons.lock : (completed.has(les.id) ? "✓" : "○");

        const lesTitle = document.createElement("span");
        lesTitle.className = "lesson-title-text";
        lesTitle.textContent = les.title;

        const bookmarkBtn = document.createElement("button");
        bookmarkBtn.className = "sidebar-bookmark-btn";
        bookmarkBtn.innerHTML = this.icons.bookmark;
        bookmarkBtn.setAttribute("aria-label", "Bookmark lesson");
        bookmarkBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (adminLocked || locked) return;
          this.toggleBookmark(les.id);
        });

        lesRow.appendChild(statusIcon);
        lesRow.appendChild(lesTitle);
        lesRow.appendChild(bookmarkBtn);

        lesRow.addEventListener("click", () => {
          if (adminLocked) { this.showBadgeToast("admin-locked"); return; }
          if (locked) { this.showBadgeToast("locked-step"); return; }
          this.navigateToLesson(les.id);
          // close mobile sidebar
          const sb = document.getElementById("sidebar-toc");
          if (sb && sb.classList.contains("mobile-open")) {
            sb.classList.remove("mobile-open");
          }
        });

        lessonsList.appendChild(lesRow);

        if (!mod.isAdvanced) {
          prevDone = completed.has(les.id);
        }
      });

      modWrapper.appendChild(lessonsList);
      container.appendChild(modWrapper);

      modRow.addEventListener("click", () => {
        if (modAdminLocked) { this.showBadgeToast("admin-locked"); return; }
        const collapsed = modWrapper.classList.toggle("collapsed");
        chevron.innerHTML = collapsed ? "▸" : "▾";
      });
    });
  },

  updateSidebarActiveState(lessonId) {
    document.querySelectorAll(".sidebar-lesson-row").forEach(row => {
      row.classList.toggle("active", row.getAttribute("data-id") === lessonId);
    });
    if (lessonId) {
      const activeRow = document.querySelector(`.sidebar-lesson-row[data-id="${lessonId}"]`);
      if (activeRow) activeRow.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  },

  // ============================================================
  // PROGRESS DROPDOWN
  // ============================================================
  renderProgressDropdown() {
    const container = document.getElementById("progress-nav-dropdown-content");
    if (!container) return;
    container.innerHTML = "";

    const completed = window.V1Storage.getCompleted();

    window.V1_MODULES.forEach((mod) => {
      const modLocked = !isModuleAllowed(mod.id);

      const sec = document.createElement("div");
      sec.className = "dropdown-module-section" + (modLocked ? " admin-locked" : "");

      const h5 = document.createElement("h5");
      if (modLocked) {
        h5.innerHTML = `<svg width="10" height="10" viewBox="0 0 13 13" fill="none" style="margin-right:4px;vertical-align:-1px;opacity:.8"><rect x="2.5" y="5.5" width="8" height="6" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M4 5.5V4A2.5 2.5 0 019 4v1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>${mod.title}<span class="dropdown-lock-pill">Admin Locked</span>`;
      } else {
        h5.textContent = mod.title;
      }
      sec.appendChild(h5);

      mod.lessons.forEach(les => {
        const row = document.createElement("div");
        row.className = "dropdown-lesson-row" + (modLocked ? " admin-locked" : "");
        row.setAttribute("data-id", les.id);

        const icon = document.createElement("span");
        icon.className = "lesson-status-icon" + (modLocked ? " locked" : completed.has(les.id) ? " completed" : " pending");
        icon.innerHTML = modLocked
          ? `<svg width="10" height="10" viewBox="0 0 13 13" fill="none"><rect x="2.5" y="5.5" width="8" height="6" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M4 5.5V4A2.5 2.5 0 019 4v1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`
          : completed.has(les.id) ? "✓" : "○";

        const text = document.createElement("span");
        text.textContent = les.title;

        row.appendChild(icon);
        row.appendChild(text);

        row.addEventListener("click", () => {
          if (!isModuleAllowed(mod.id)) { this.showBadgeToast("admin-locked"); return; }
          const mode = window.V1Storage.getMode();
          const sbRow = document.querySelector(`.sidebar-lesson-row[data-id="${les.id}"]`);
          if (mode === "execution" && sbRow && sbRow.classList.contains("locked")) {
            this.showBadgeToast("locked-step");
            return;
          }
          this.navigateToLesson(les.id);
          const panel = document.getElementById("progress-nav-panel");
          if (panel) panel.classList.remove("open");
        });

        sec.appendChild(row);
      });

      container.appendChild(sec);
    });
  },

  // ============================================================
  // NAVIGATION
  // ============================================================
  navigateToLesson(lessonId) {
    // Guard: block any path that leads to an admin-locked module
    const found = this.findLessonData(lessonId);
    if (found && !isModuleAllowed(found.mod.id)) {
      this.showBadgeToast("admin-locked");
      return;
    }
    this.currentLessonId = lessonId;
    window.V1Storage.setLastLesson(lessonId);
    this.renderLesson(lessonId);
    this.updateSidebarActiveState(lessonId);
    window.V1Progress.setActiveLesson(lessonId);

    // hide resume banner
    const banner = document.getElementById("resume-banner");
    if (banner) banner.classList.remove("show");

    // scroll to top of content area
    const contentArea = document.getElementById("main-content");
    if (contentArea) contentArea.scrollTo(0, 0);
    window.scrollTo(0, 0);
  },

  getAdjacentLesson(lessonId, direction) {
    const flat = [];
    window.V1_MODULES.forEach(mod => {
      mod.lessons.forEach(les => flat.push({ les, mod }));
    });
    const idx = flat.findIndex(f => f.les.id === lessonId);
    if (idx === -1) return null;
    const target = flat[idx + direction];
    return target ? target.les.id : null;
  },

  findLessonData(lessonId) {
    for (const mod of window.V1_MODULES) {
      const idx = mod.lessons.findIndex(l => l.id === lessonId);
      if (idx !== -1) return { les: mod.lessons[idx], mod, idx };
    }
    return null;
  },

  // ============================================================
  // WELCOME SCREEN
  // ============================================================
  renderWelcome() {
    const container = document.getElementById("main-content-container");
    if (!container) return;
    container.innerHTML = "";

    const completed = window.V1Storage.getCompleted();

    // Count totals
    let totalLessons = 0, totalMins = 0;
    const coreModules = window.V1_MODULES.filter(m => !m.isAdvanced);
    coreModules.forEach(m => {
      m.lessons.forEach(l => { totalLessons++; totalMins += l.estimatedMins || 5; });
    });

    const screen = document.createElement("div");
    screen.className = "welcome-screen";

    // Hero
    const hero = document.createElement("div");
    hero.className = "welcome-hero";
    hero.innerHTML = `
      <p class="welcome-eyebrow">Trend Micro Vision One</p>
      <h1 class="welcome-heading">Your security training<br>command center.</h1>
      <p class="welcome-sub">A structured, interactive curriculum covering endpoint, email, cloud, and network security operations. Work through each module at your own pace and track progress as you go.</p>
      <div class="welcome-stats">
        <div class="welcome-stat">
          <span class="welcome-stat-value">${coreModules.length}</span>
          <span class="welcome-stat-label">Modules</span>
        </div>
        <div class="welcome-stat">
          <span class="welcome-stat-value">${totalLessons}</span>
          <span class="welcome-stat-label">Lessons</span>
        </div>
        <div class="welcome-stat">
          <span class="welcome-stat-value">${totalMins}</span>
          <span class="welcome-stat-label">Minutes</span>
        </div>
        <div class="welcome-stat">
          <span class="welcome-stat-value">${completed.size}</span>
          <span class="welcome-stat-label">Completed</span>
        </div>
      </div>
    `;
    screen.appendChild(hero);

    // Module grid
    const gridLabel = document.createElement("p");
    gridLabel.style.cssText = "font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--t3);margin-bottom:12px;";
    gridLabel.textContent = "Course Modules";
    screen.appendChild(gridLabel);

    const grid = document.createElement("div");
    grid.className = "modules-grid";

    window.V1_MODULES.forEach(mod => {
      const modLessons = mod.lessons;
      const completedCount = modLessons.filter(l => completed.has(l.id)).length;
      const pct = Math.round((completedCount / modLessons.length) * 100);
      const totalMinsMod = modLessons.reduce((s, l) => s + (l.estimatedMins || 5), 0);
      const hasStarted = completedCount > 0;

      const adminLocked = !isModuleAllowed(mod.id);

      const card = document.createElement("div");
      card.className = "module-card" + (adminLocked ? " admin-locked" : "");
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");

      card.innerHTML = `
        <div class="module-card-header">
          <div class="module-card-icon">${this.getModuleIcon(mod.id)}</div>
          <span class="module-card-badge ${mod.isAdvanced ? 'advanced' : ''}">${mod.isAdvanced ? 'Advanced' : 'Core'}</span>
          ${adminLocked ? `<span class="module-card-lock-badge">Locked</span>` : ''}
        </div>
        <div>
          <div class="module-card-title">${mod.title}</div>
          <div class="module-card-meta">${modLessons.length} lessons &middot; ${totalMinsMod} min</div>
        </div>
        ${adminLocked ? `
        <div class="module-card-admin-lock">
          <svg width="16" height="16" viewBox="0 0 13 13" fill="none"><rect x="2.5" y="5.5" width="8" height="6" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M4 5.5V4A2.5 2.5 0 019 4v1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          Admin approval required
        </div>` : `
        <div class="module-card-progress">
          <div class="module-card-progress-bar">
            <div class="module-card-progress-fill" style="width:${pct}%"></div>
          </div>
          <span class="module-card-progress-label">${pct}% complete &middot; ${completedCount}/${modLessons.length} lessons</span>
        </div>
        <div class="module-card-lessons">
          ${modLessons.slice(0, 3).map(l => `
            <div class="module-card-lesson-item">
              <div class="module-card-lesson-dot ${completed.has(l.id) ? 'done' : ''}"></div>
              ${l.title}
            </div>
          `).join("")}
          ${modLessons.length > 3 ? `<div class="module-card-lesson-item" style="color:var(--t3)">+${modLessons.length - 3} more</div>` : ''}
        </div>`}
        ${adminLocked
          ? `<button class="module-card-request-btn" data-mod-id="${mod.id}" data-mod-title="${mod.title.replace(/"/g,'&quot;')}">Request Access</button>`
          : `<button class="module-card-action ${hasStarted && pct < 100 ? 'continue' : ''}">${pct === 100 ? 'Review' : hasStarted ? 'Continue' : 'Start'}</button>`
        }
      `;

      const startLesson = () => {
        if (adminLocked) { this.showBadgeToast("admin-locked"); return; }
        const target = modLessons.find(l => !completed.has(l.id)) || modLessons[0];
        if (target) this.navigateToLesson(target.id);
      };

      if (adminLocked) {
        const reqBtn = card.querySelector(".module-card-request-btn");
        if (reqBtn) reqBtn.addEventListener("click", e => { e.stopPropagation(); window._requestModuleAccess(mod.id, mod.title, reqBtn); });
        card.addEventListener("click", startLesson);
      } else {
        card.addEventListener("click", startLesson);
        card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); startLesson(); } });
        card.querySelector(".module-card-action").addEventListener("click", e => { e.stopPropagation(); startLesson(); });
      }

      grid.appendChild(card);
    });

    screen.appendChild(grid);
    container.appendChild(screen);
    container.style.animation = "fadeUp 0.25s ease-out";
  },

  // ============================================================
  // STEP LINK RENDERER
  // ============================================================
  _applyStepLinks(stepText, stepIdx, lessonId) {
    const links = (window.V1_STEP_LINKS || {})[lessonId];
    if (!links) return stepText;
    const forStep = links.filter(l => l.step === stepIdx);
    if (!forStep.length) return stepText;

    // Collect non-overlapping matches sorted by position
    const matches = [];
    for (const link of forStep) {
      const pos = stepText.indexOf(link.find);
      if (pos < 0) continue;
      matches.push({ start: pos, end: pos + link.find.length, url: link.url, text: link.find });
    }
    matches.sort((a, b) => a.start - b.start);

    let html = "";
    let cursor = 0;
    for (const m of matches) {
      if (m.start < cursor) continue; // skip overlaps
      html += stepText.slice(cursor, m.start);
      html += `<a href="${m.url}" target="_blank" rel="noopener noreferrer" class="step-link">${m.text}<svg class="step-link-icon" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8L8 2M8 2H4.5M8 2V5.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`;
      cursor = m.end;
    }
    html += stepText.slice(cursor);
    return html;
  },

  // ============================================================
  // SINGLE LESSON RENDER
  // ============================================================
  renderLesson(lessonId) {
    const container = document.getElementById("main-content-container");
    if (!container) return;

    const found = this.findLessonData(lessonId);
    if (!found) { this.renderWelcome(); return; }

    const { les, mod } = found;
    const completed = window.V1Storage.getCompleted();
    const mode      = window.V1Storage.getMode();

    container.innerHTML = "";
    container.style.animation = "fadeUp 0.2s ease-out";

    const view = document.createElement("div");
    view.className = "lesson-view";

    // Breadcrumb
    const bc = document.createElement("div");
    bc.className = "lesson-breadcrumb";
    bc.innerHTML = `
      <span onclick="V1App.currentLessonId=null;V1App.renderWelcome();V1App.updateSidebarActiveState(null)">${this.icons.home} Home</span>
      <span class="lesson-breadcrumb-sep">${this.icons.chevronRight}</span>
      <span>${mod.title}</span>
      <span class="lesson-breadcrumb-sep">${this.icons.chevronRight}</span>
      <span style="color:var(--t2)">${les.title}</span>
    `;
    view.appendChild(bc);

    // Execution mode: check if locked
    const prevLessonId = this.getAdjacentLesson(lessonId, -1);
    const isLocked = mode === "execution" && !mod.isAdvanced && prevLessonId && !completed.has(prevLessonId);

    if (isLocked) {
      view.innerHTML += `
        <div style="background:var(--s1);border:1px solid var(--border-sub);border-radius:var(--radius-xl);box-shadow:var(--sh-xs);">
          <div class="lesson-lock-overlay">
            <div class="lock-icon-svg">${this.icons.lock}</div>
            <p class="lock-overlay-title">Lesson Locked</p>
            <p class="lock-overlay-text">Complete the previous lesson to unlock this content in Guided mode.</p>
          </div>
        </div>
      `;
      container.appendChild(view);
      return;
    }

    // ---- LESSON HEADER ----
    const header = document.createElement("div");
    header.className = "lesson-header";

    const titleRow = document.createElement("div");
    titleRow.className = "lesson-title-row";

    const isCompleted = completed.has(les.id);
    const bookmarks   = window.V1Storage.getBookmarks();
    const isBookmarked = bookmarks.has(les.id);

    titleRow.innerHTML = `
      <h1 class="lesson-title">${les.title}</h1>
      <div class="lesson-header-actions">
        <span class="lesson-time-tag">${this.icons.clock} ${les.estimatedMins} min</span>
        <button class="lesson-bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-id="${les.id}" aria-label="${isBookmarked ? 'Remove bookmark' : 'Bookmark lesson'}">
          ${isBookmarked ? this.icons.bookmarkFill : this.icons.bookmark}
          ${isBookmarked ? 'Saved' : 'Save'}
        </button>
      </div>
    `;
    header.appendChild(titleRow);

    // Tab bar
    const tabList = document.createElement("div");
    tabList.className = "lesson-tab-list";
    tabList.innerHTML = `
      <button class="lesson-tab-btn active" data-target="tab-overview-${les.id}">Overview</button>
      <button class="lesson-tab-btn ${mode === 'execution' ? 'disabled' : ''}" data-target="tab-guide-${les.id}" ${mode === 'execution' ? 'disabled' : ''}>Guide &amp; Steps</button>
      <button class="lesson-tab-btn ${mode === 'execution' ? 'disabled' : ''}" data-target="tab-check-${les.id}" ${mode === 'execution' ? 'disabled' : ''}>Quick Check</button>
    `;
    header.appendChild(tabList);
    view.appendChild(header);

    // ---- LESSON BODY ----
    const body = document.createElement("div");
    body.className = "lesson-body";
    body.setAttribute("data-lesson-id", les.id);

    // ---- TAB 1: OVERVIEW ----
    const paneOverview = document.createElement("div");
    paneOverview.className = "lesson-tab-pane active";
    paneOverview.id = `tab-overview-${les.id}`;

    // What This Means
    paneOverview.innerHTML += `
      <div class="explainer-concept">
        <div class="explainer-label">${this.icons.info} What This Means</div>
        <p class="explainer-text">${les.content.whatThisMeans}</p>
      </div>
    `;

    // Why It Matters
    paneOverview.innerHTML += `
      <div class="explainer-why">
        <div class="explainer-label">${this.icons.target} Why It Matters</div>
        <p class="explainer-text">${les.content.whyItMatters}</p>
      </div>
    `;

    // Learning Objectives Grid
    const objSection = document.createElement("div");
    objSection.className = "objectives-section";
    objSection.innerHTML = `<p class="objectives-section-label">${this.icons.list} What You Will Learn</p>`;
    const objGrid = document.createElement("div");
    objGrid.className = "objectives-grid";
    les.content.whatYouWillLearn.forEach(item => {
      const card = document.createElement("div");
      card.className = "objective-card";
      card.innerHTML = `<div class="objective-bullet"></div><span class="objective-text">${item}</span>`;
      objGrid.appendChild(card);
    });
    objSection.appendChild(objGrid);
    paneOverview.appendChild(objSection);

    if (mode === "execution") {
      const proceedDiv = document.createElement("div");
      proceedDiv.className = "proceed-block";
      proceedDiv.innerHTML = `<button class="proceed-btn">Proceed to Guide &amp; Steps ${this.icons.arrowRight}</button>`;
      proceedDiv.querySelector(".proceed-btn").addEventListener("click", () => {
        const guideBtn = tabList.querySelector(`[data-target="tab-guide-${les.id}"]`);
        if (guideBtn) {
          guideBtn.removeAttribute("disabled");
          guideBtn.classList.remove("disabled");
          guideBtn.click();
        }
      });
      paneOverview.appendChild(proceedDiv);
    }

    body.appendChild(paneOverview);

    // ---- TAB 2: GUIDE & STEPS ----
    const paneGuide = document.createElement("div");
    paneGuide.className = "lesson-tab-pane";
    paneGuide.id = `tab-guide-${les.id}`;

    // Step pipeline visual
    const pipelineSection = document.createElement("div");
    pipelineSection.className = "step-pipeline-section";
    pipelineSection.innerHTML = `<p class="step-pipeline-label">Step-by-Step Procedure</p>`;
    const pipeline = document.createElement("div");
    pipeline.className = "step-pipeline";
    les.content.steps.forEach((step, i) => {
      const node = document.createElement("div");
      node.className = "step-node";
      node.innerHTML = `
        <div class="step-number">${String(i + 1).padStart(2, "0")}</div>
        <p class="step-text">${this._applyStepLinks(step, i, les.id)}</p>
      `;
      pipeline.appendChild(node);
    });
    pipelineSection.appendChild(pipeline);
    paneGuide.appendChild(pipelineSection);

    // Scenario
    paneGuide.innerHTML += `
      <div class="scenario-block">
        <div class="scenario-label">${this.icons.terminal} Real-World Scenario</div>
        <p class="scenario-text">${les.content.scenario}</p>
      </div>
    `;

    // Mistakes
    const mistakesDiv = document.createElement("div");
    mistakesDiv.className = "mistakes-section";
    mistakesDiv.innerHTML = `<p class="mistakes-label">${this.icons.warning} Common Mistakes to Avoid</p>`;
    const mistakesList = document.createElement("div");
    mistakesList.className = "mistakes-list";
    les.content.commonMistakes.forEach(m => {
      const item = document.createElement("div");
      item.className = "mistake-item";
      item.innerHTML = `<span class="mistake-icon">!</span><span>${m}</span>`;
      mistakesList.appendChild(item);
    });
    mistakesDiv.appendChild(mistakesList);
    paneGuide.appendChild(mistakesDiv);

    if (mode === "execution") {
      const verifyDiv = document.createElement("div");
      verifyDiv.className = "verification-check";
      verifyDiv.innerHTML = `
        <label class="verify-checkbox-label">
          <input type="checkbox" class="verify-checkbox-input">
          <span>I have completed all steps above and verified the scenario against my environment.</span>
        </label>
      `;
      verifyDiv.querySelector(".verify-checkbox-input").addEventListener("change", (e) => {
        const checkBtn = tabList.querySelector(`[data-target="tab-check-${les.id}"]`);
        if (checkBtn) {
          if (e.target.checked) {
            checkBtn.removeAttribute("disabled");
            checkBtn.classList.remove("disabled");
            checkBtn.click();
          } else {
            checkBtn.setAttribute("disabled", "");
            checkBtn.classList.add("disabled");
          }
        }
      });
      paneGuide.appendChild(verifyDiv);
    }

    body.appendChild(paneGuide);

    // ---- TAB 3: QUICK CHECK ----
    const paneCheck = document.createElement("div");
    paneCheck.className = "lesson-tab-pane";
    paneCheck.id = `tab-check-${les.id}`;

    // Summary
    paneCheck.innerHTML += `
      <div class="summary-block">
        <p class="summary-label">Key Takeaway</p>
        <p class="summary-text">${les.content.summary}</p>
      </div>
    `;

    // Quiz container (rendered by quiz.js)
    const quizContainer = document.createElement("div");
    quizContainer.className = "quick-check";
    quizContainer.id = `quiz-container-${les.id}`;
    paneCheck.appendChild(quizContainer);

    body.appendChild(paneCheck);

    // Tab event binding
    // ---- EXPLAINER STAGE (between tab-bar and body) ----
    let explainerWrap = null;
    if (window.V1Explainer) {
      const stepStrings = les.content.steps || [];

      explainerWrap = document.createElement("div");
      explainerWrap.className = "explainer-wrap";

      const stageEl = document.createElement("div");
      stageEl.className = "explainer-stage";

      const playBtn = document.createElement("button");
      playBtn.className = "play-explainer-btn";
      playBtn.style.display = "none";

      const progressTrack = document.createElement("div");
      progressTrack.className = "explainer-progress-track";
      const progressFill = document.createElement("div");
      progressFill.className = "explainer-progress-fill";
      progressTrack.appendChild(progressFill);

      explainerWrap.appendChild(stageEl);
      explainerWrap.appendChild(progressTrack);
      explainerWrap.appendChild(playBtn);
      // Appended to view after section is created (see below)

      window.V1Explainer.buildAndShow(les.id, mod.id, stepStrings, stageEl, playBtn, progressFill);
    }

    this.bindTabEvents(tabList, body);

    // ---- LESSON FOOTER ----
    const footer = document.createElement("div");
    footer.className = "lesson-footer";

    // Mark complete button
    const completeBtn = document.createElement("button");
    completeBtn.className = `mark-complete-btn ${isCompleted ? "completed" : ""}`;
    if (isCompleted) {
      completeBtn.disabled = true;
      completeBtn.innerHTML = `${this.icons.check} Completed`;
    } else {
      completeBtn.innerHTML = `Mark Complete`;
    }
    completeBtn.addEventListener("click", () => window.V1Progress.markComplete(les.id));
    footer.appendChild(completeBtn);

    // Next Step (advances active tab)
    const nextStepBtn = document.createElement("button");
    nextStepBtn.className = "next-step-btn";
    nextStepBtn.innerHTML = `Next Step ${this.icons.arrowRight}`;
    nextStepBtn.addEventListener("click", () => {
      const tabBtns = tabList.querySelectorAll(".lesson-tab-btn");
      const activeIdx = [...tabBtns].findIndex(b => b.classList.contains("active"));
      const target = tabBtns[activeIdx + 1];
      if (target && !target.disabled) target.click();
    });
    footer.appendChild(nextStepBtn);

    // Prev / Next Module nav
    const navBtns = document.createElement("div");
    navBtns.className = "lesson-nav-btns";

    const prevId = this.getAdjacentLesson(les.id, -1);
    const nextId = this.getAdjacentLesson(les.id, 1);

    if (prevId) {
      const prevBtn = document.createElement("button");
      prevBtn.className = "nav-btn";
      prevBtn.innerHTML = `${this.icons.arrowLeft} Previous Lesson`;
      prevBtn.addEventListener("click", () => this.navigateToLesson(prevId));
      navBtns.appendChild(prevBtn);
    }

    if (nextId) {
      const nextModBtn = document.createElement("button");
      nextModBtn.className = "nav-btn";
      nextModBtn.innerHTML = `Next Module ${this.icons.arrowRight}`;
      nextModBtn.addEventListener("click", () => this.navigateToLesson(nextId));
      navBtns.appendChild(nextModBtn);
    }

    footer.appendChild(navBtns);
    body.appendChild(footer);

    // Wrap body in a section that progress.js can observe
    const section = document.createElement("section");
    section.setAttribute("data-lesson-id", les.id);
    section.appendChild(body);

    // Insert explainer stage between tab-bar (header) and body-section
    if (explainerWrap) {
      view.appendChild(explainerWrap);

      // Hide on quiz tab, show on overview/guide tabs
      const quizTabBtn = tabList.querySelector('[data-target^="tab-check"]');
      const otherTabBtns = [...tabList.querySelectorAll(".lesson-tab-btn")].filter(b => b !== quizTabBtn);
      if (quizTabBtn) {
        quizTabBtn.addEventListener("click", () => { explainerWrap.style.display = "none"; });
        otherTabBtns.forEach(b => b.addEventListener("click", () => { explainerWrap.style.display = "block"; }));
      }
    }

    view.appendChild(section);

    container.appendChild(view);

    // Render quiz
    window.V1Quiz.render(les, quizContainer);

    // Wire bookmark button
    const bookmarkBtn = view.querySelector(".lesson-bookmark-btn");
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener("click", () => this.toggleBookmark(les.id));
    }
  },

  bindTabEvents(tabList, contentArea) {
    const btns  = tabList.querySelectorAll(".lesson-tab-btn");
    const panes = contentArea.querySelectorAll(".lesson-tab-pane");

    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const targetId = btn.getAttribute("data-target");
        panes.forEach(p => p.classList.toggle("active", p.id === targetId));
      });
    });
  },

  // ============================================================
  // RESUME BANNER
  // ============================================================
  showResumeBanner(lessonId) {
    const banner = document.getElementById("resume-banner");
    if (!banner || !lessonId) return;

    const found = this.findLessonData(lessonId);
    if (!found) return;

    banner.innerHTML = `
      <div class="resume-banner-content">
        <span>Resume where you left off: <strong>${found.les.title}</strong></span>
        <div class="resume-actions">
          <button id="resume-continue-btn">Continue ${this.icons.arrowRight}</button>
          <button id="resume-dismiss-btn" class="dismiss-btn">Dismiss</button>
        </div>
      </div>
    `;
    banner.classList.add("show");

    document.getElementById("resume-continue-btn")?.addEventListener("click", () => {
      this.navigateToLesson(lessonId);
    });
    document.getElementById("resume-dismiss-btn")?.addEventListener("click", () => {
      banner.classList.remove("show");
    });
  },

  // ============================================================
  // BOOKMARKS
  // ============================================================
  initBookmarkListeners() {
    // Initial state applied on render; no static elements to wire.
  },

  toggleBookmark(id) {
    const isBookmarked = window.V1Storage.toggleBookmark(id);
    // Update sidebar
    const sbRow = document.querySelector(`.sidebar-lesson-row[data-id="${id}"]`);
    if (sbRow) sbRow.classList.toggle("bookmarked", isBookmarked);

    // Update lesson header button if visible
    const btn = document.querySelector(`.lesson-bookmark-btn[data-id="${id}"]`);
    if (btn) {
      btn.classList.toggle("bookmarked", isBookmarked);
      btn.innerHTML = (isBookmarked ? this.icons.bookmarkFill : this.icons.bookmark) + (isBookmarked ? " Saved" : " Save");
      btn.setAttribute("aria-label", isBookmarked ? "Remove bookmark" : "Bookmark lesson");
    }
  },

  // ============================================================
  // MESH SEARCH (Header)
  // ============================================================
  initHeaderSearch() {
    const input    = document.getElementById("global-search-input");
    const dropdown = document.getElementById("search-dropdown");
    if (!input || !dropdown) return;

    let timer;
    input.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => this.runSearch(input.value), 150);
    });

    input.addEventListener("focus", () => {
      if (input.value.trim()) {
        dropdown.classList.add("visible");
      }
    });

    input.addEventListener("keydown", (e) => {
      const items = dropdown.querySelectorAll(".search-result-item");
      if (e.key === "ArrowDown") {
        e.preventDefault();
        this.searchFocusedIdx = Math.min(this.searchFocusedIdx + 1, items.length - 1);
        this.updateSearchFocus(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        this.searchFocusedIdx = Math.max(this.searchFocusedIdx - 1, 0);
        this.updateSearchFocus(items);
      } else if (e.key === "Enter") {
        const focused = dropdown.querySelector(".search-result-item.focused");
        if (focused) focused.click();
        else if (items.length > 0) items[0].click();
      } else if (e.key === "Escape") {
        this.closeSearch();
        input.blur();
      }
    });

    document.addEventListener("click", (e) => {
      if (!document.getElementById("header-search-wrapper")?.contains(e.target)) {
        this.closeSearch();
      }
    });
  },

  closeSearch() {
    const dropdown = document.getElementById("search-dropdown");
    const input    = document.getElementById("global-search-input");
    if (dropdown) dropdown.classList.remove("visible");
    if (input) input.setAttribute("aria-expanded", "false");
    this.searchFocusedIdx = -1;
  },

  updateSearchFocus(items) {
    items.forEach((item, i) => item.classList.toggle("focused", i === this.searchFocusedIdx));
    if (this.searchFocusedIdx >= 0 && items[this.searchFocusedIdx]) {
      items[this.searchFocusedIdx].scrollIntoView({ block: "nearest" });
    }
  },

  runSearch(query) {
    const input    = document.getElementById("global-search-input");
    const dropdown = document.getElementById("search-dropdown");
    if (!dropdown) return;

    const q = query.trim();
    if (!q) { this.closeSearch(); return; }

    const results = this.meshSearch(q);
    this.searchResults = results;
    this.searchFocusedIdx = -1;

    dropdown.innerHTML = "";

    if (results.length === 0) {
      dropdown.innerHTML = `<p class="search-empty">No results for "<strong>${q}</strong>". Try different keywords.</p>`;
      dropdown.classList.add("visible");
      if (input) input.setAttribute("aria-expanded", "true");
      return;
    }

    const header = document.createElement("div");
    header.className = "search-header";
    header.textContent = `${results.length} result${results.length > 1 ? "s" : ""} for "${q}"`;
    dropdown.appendChild(header);

    results.forEach(r => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.setAttribute("role", "option");
      item.setAttribute("tabindex", "-1");

      const title  = this.highlightMatch(r.lesson.title, q);
      const tags   = r.matchedFields.map(f => `<span class="search-result-tag">${f}</span>`).join("");
      const snippet = r.snippet ? `<p class="search-result-snippet">${this.highlightMatch(r.snippet, q)}</p>` : "";

      item.innerHTML = `
        <div class="search-result-title">${title}</div>
        <div class="search-result-meta">
          <span class="search-result-module">${r.module.title}</span>
          ${tags}
        </div>
        ${snippet}
      `;

      item.addEventListener("click", () => {
        this.navigateToLesson(r.lesson.id);
        this.closeSearch();
        const inp = document.getElementById("global-search-input");
        if (inp) { inp.value = ""; }
      });

      dropdown.appendChild(item);
    });

    dropdown.classList.add("visible");
    if (input) input.setAttribute("aria-expanded", "true");
  },

  // Weighted multi-field mesh search
  meshSearch(query) {
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    const results = [];

    window.V1_MODULES.forEach(mod => {
      mod.lessons.forEach(les => {
        let score = 0;
        const matchedFields = new Set();

        tokens.forEach(token => {
          // Title (10x)
          if (les.title.toLowerCase().includes(token)) {
            score += 10;
            matchedFields.add("title");
          }
          // Module title (2x)
          if (mod.title.toLowerCase().includes(token)) score += 2;

          // Content fields with weights
          const fields = [
            { key: "whatThisMeans",   weight: 5, label: "overview"     },
            { key: "whyItMatters",    weight: 4, label: "context"      },
            { key: "summary",         weight: 4, label: "summary"      },
            { key: "scenario",        weight: 3, label: "scenario"     },
          ];
          fields.forEach(f => {
            const val = les.content[f.key];
            if (val && val.toLowerCase().includes(token)) {
              score += f.weight;
              matchedFields.add(f.label);
            }
          });

          // Arrays
          if (les.content.whatYouWillLearn?.some(s => s.toLowerCase().includes(token))) {
            score += 4; matchedFields.add("objectives");
          }
          if (les.content.steps?.some(s => s.toLowerCase().includes(token))) {
            score += 4; matchedFields.add("steps");
          }
          if (les.content.commonMistakes?.some(s => s.toLowerCase().includes(token))) {
            score += 3; matchedFields.add("troubleshoot");
          }
        });

        if (score > 0) {
          // Extract best snippet
          let snippet = "";
          const fields = ["whatThisMeans", "scenario", "summary"];
          for (const f of fields) {
            const text = les.content[f] || "";
            const lower = text.toLowerCase();
            const hit = tokens.map(t => lower.indexOf(t)).find(i => i !== -1);
            if (hit !== undefined && hit !== -1) {
              const start = Math.max(0, hit - 40);
              snippet = (start > 0 ? "..." : "") + text.substring(start, hit + 100) + "...";
              break;
            }
          }

          results.push({ lesson: les, module: mod, score, snippet, matchedFields: [...matchedFields].slice(0, 3) });
        }
      });
    });

    return results.sort((a, b) => b.score - a.score).slice(0, 10);
  },

  highlightMatch(text, query) {
    if (!text || !query) return text;
    const tokens = query.split(/\s+/).filter(Boolean);
    let result = text;
    tokens.forEach(token => {
      const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      result = result.replace(new RegExp(`(${escaped})`, "gi"), `<mark>$1</mark>`);
    });
    return result;
  },

  // ============================================================
  // TROUBLESHOOTER
  // ============================================================
  initTroubleshooter() {
    const tsInput     = document.getElementById("troubleshoot-search-input");
    const resultsArea = document.getElementById("troubleshoot-results-container");
    const chips       = document.querySelectorAll(".ts-chip");

    if (!tsInput || !resultsArea) return;

    let timer;
    tsInput.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => this.performTroubleshoot(tsInput.value, resultsArea), 200);
    });

    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        tsInput.value = chip.getAttribute("data-query");
        this.performTroubleshoot(tsInput.value, resultsArea);
      });
    });
  },

  performTroubleshoot(query, container) {
    const q = query.toLowerCase().trim();
    if (!q) {
      container.innerHTML = `<p class="ts-empty">Describe an issue or select a quick help topic above.</p>`;
      return;
    }

    container.innerHTML = "";
    const matches = [];

    window.V1_MODULES.forEach(mod => {
      mod.lessons.forEach(les => {
        let score = 0;
        const matchMistakes = [];
        const matchSteps    = [];

        if (les.title.toLowerCase().includes(q)) score += 10;
        if (les.content.whatThisMeans.toLowerCase().includes(q)) score += 3;

        les.content.commonMistakes.forEach(m => {
          if (m.toLowerCase().includes(q)) { score += 5; matchMistakes.push(m); }
        });
        les.content.steps.forEach(s => {
          if (s.toLowerCase().includes(q)) { score += 4; matchSteps.push(s); }
        });
        if (les.content.scenario.toLowerCase().includes(q)) score += 3;

        if (score > 0) {
          matches.push({ lesson: les, moduleTitle: mod.title, score, matchMistakes, matchSteps });
        }
      });
    });

    matches.sort((a, b) => b.score - a.score);

    if (!matches.length) {
      container.innerHTML = `
        <div class="ts-no-results">
          <p>No guides matched <strong>"${query}"</strong>.</p>
          <p style="margin-top:6px;font-size:0.72rem;color:var(--t3)">Try: isolate, IP, unmanaged, AWS, SAML, vulnerability</p>
        </div>
      `;
      return;
    }

    matches.forEach(m => {
      const card = document.createElement("div");
      card.className = "ts-result-card";

      const title = document.createElement("h5");
      title.textContent = m.lesson.title;
      card.appendChild(title);

      const bc = document.createElement("div");
      bc.className = "ts-breadcrumb";
      bc.textContent = `Module: ${m.moduleTitle}`;
      card.appendChild(bc);

      if (m.matchMistakes.length || m.lesson.content.commonMistakes.length) {
        const sec = document.createElement("div");
        sec.className = "ts-section ts-mistakes";
        const items = m.matchMistakes.length ? m.matchMistakes : m.lesson.content.commonMistakes.slice(0, 2);
        sec.innerHTML = `<h6>What to Avoid</h6><ul>${items.map(x => `<li>${x}</li>`).join("")}</ul>`;
        card.appendChild(sec);
      }

      if (m.matchSteps.length || m.lesson.content.steps.length) {
        const sec = document.createElement("div");
        sec.className = "ts-section ts-steps";
        const items = m.matchSteps.length ? m.matchSteps : m.lesson.content.steps.slice(0, 2);
        sec.innerHTML = `<h6>How to Resolve</h6><ol>${items.map(x => `<li>${x}</li>`).join("")}</ol>`;
        card.appendChild(sec);
      }

      const goBtn = document.createElement("button");
      goBtn.className = "ts-go-btn";
      goBtn.textContent = "View Full Lesson";
      goBtn.addEventListener("click", () => {
        const mode  = window.V1Storage.getMode();
        const sbRow = document.querySelector(`.sidebar-lesson-row[data-id="${m.lesson.id}"]`);
        if (mode === "execution" && sbRow && sbRow.classList.contains("locked")) {
          this.showBadgeToast("locked-step");
          return;
        }
        this.navigateToLesson(m.lesson.id);
      });

      card.appendChild(goBtn);
      container.appendChild(card);
    });
  },

  // ============================================================
  // TOAST (locked-step warning only)
  // ============================================================
  showBadgeToast(badgeId) {
    if (badgeId !== "locked-step" && badgeId !== "admin-locked") return;
    const toast = document.createElement("div");
    toast.className = "badge-toast warning animate-in";
    const msg = badgeId === "admin-locked"
      ? `<span class="toast-ribbon">Module Locked</span><span class="toast-badge-name">Contact your admin to unlock this module.</span>`
      : `<span class="toast-ribbon">Access Restricted</span><span class="toast-badge-name">Complete previous lessons first.</span>`;
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove("animate-in");
      toast.classList.add("animate-out");
      setTimeout(() => toast.remove(), 350);
    }, 3000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  window.V1App.init();
});

// Track in-session requests so button shows "Requested" immediately
window._pendingRequests = new Set();

window._requestModuleAccess = async function(moduleId, moduleTitle, btn) {
  if (window._pendingRequests.has(moduleId)) return;
  const token = window.V1Auth?.getToken();
  if (!token) return;
  const API = (window.CHAT_API_URL || "").replace(/\/$/, "");
  btn.disabled = true;
  btn.textContent = "Sending…";
  try {
    const res = await fetch(API + "/me/access-request", {
      method: "POST",
      headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify({ module_id: moduleId, module_title: moduleTitle }),
    });
    if (res.ok) {
      window._pendingRequests.add(moduleId);
      btn.textContent = "Request Sent";
      btn.classList.add("requested");
    } else {
      btn.disabled = false;
      btn.textContent = "Request Access";
    }
  } catch (_) {
    btn.disabled = false;
    btn.textContent = "Request Access";
  }
};
