// Vision One Interactive Training Website - Progress Tracking
// Uses IntersectionObserver to track the active lesson in view and manages progress calculations.

window.V1Progress = {
  observer: null,

  init() {
    // Set up IntersectionObserver for lesson sections
    const options = {
      root: null, // viewport
      rootMargin: "-64px 0px -20% 0px", // offset for the fixed header (64px)
      threshold: 0.2 // 20% visibility to trigger transition smoothly
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lessonId = entry.target.getAttribute("data-lesson-id");
          if (lessonId) {
            this.setActiveLesson(lessonId);
          }
        }
      });
    }, options);

    // Start observing all lesson sections
    document.querySelectorAll("section[data-lesson-id]").forEach(section => {
      this.observer.observe(section);
    });

    this.recalculate();
  },

  setActiveLesson(lessonId) {
    // Save last read lesson in storage
    window.V1Storage.setLastLesson(lessonId);

    // Find lesson in modules to get titles
    let activeLesson = null;
    let activeModule = null;
    
    window.V1_MODULES.forEach(mod => {
      const les = mod.lessons.find(l => l.id === lessonId);
      if (les) {
        activeLesson = les;
        activeModule = mod;
      }
    });

    if (!activeLesson || !activeModule) return;

    // 1. Update header label
    const headerLabel = document.getElementById("header-current-lesson-label");
    if (headerLabel) {
      headerLabel.innerText = `${activeModule.title} → ${activeLesson.title}`;
    }

    // 2. Update active class in sidebar ToC
    document.querySelectorAll(".sidebar-lesson-row").forEach(row => {
      if (row.getAttribute("data-id") === lessonId) {
        row.classList.add("active");
        // Scroll sidebar to keep active item in view if needed
        row.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        row.classList.remove("active");
      }
    });

    // 3. Update active class in progress dropdown ToC
    document.querySelectorAll(".dropdown-lesson-row").forEach(row => {
      if (row.getAttribute("data-id") === lessonId) {
        row.classList.add("active");
      } else {
        row.classList.remove("active");
      }
    });
  },

  recalculate() {
    const completed = window.V1Storage.getCompleted();

    // Core lessons: modules 0-9.
    const coreLessons = [];
    const advancedLessons = [];

    window.V1_MODULES.forEach(mod => {
      mod.lessons.forEach(les => {
        if (mod.isAdvanced) {
          advancedLessons.push(les.id);
        } else {
          coreLessons.push(les.id);
        }
      });
    });

    const totalCore = coreLessons.length;
    let completedCoreCount = 0;
    coreLessons.forEach(id => {
      if (completed.has(id)) completedCoreCount++;
    });

    const corePercent = totalCore > 0 ? Math.round((completedCoreCount / totalCore) * 100) : 0;

    // Update progress bars in UI
    const progressBars = document.querySelectorAll(".v1-progress-bar-fill");
    progressBars.forEach(bar => {
      bar.style.width = `${corePercent}%`;
    });

    const progressTexts = document.querySelectorAll(".v1-progress-percent-text");
    progressTexts.forEach(text => {
      text.innerText = `${corePercent}%`;
    });

    // Update accessibility attributes
    const progressContainers = document.querySelectorAll("[role='progressbar']");
    progressContainers.forEach(container => {
      container.setAttribute("aria-valuenow", corePercent);
    });

    // Update module-level progress percentages in sidebar
    window.V1_MODULES.forEach(mod => {
      const modLessons = mod.lessons.map(l => l.id);
      let modCompletedCount = 0;
      modLessons.forEach(id => {
        if (completed.has(id)) modCompletedCount++;
      });
      const modPercent = Math.round((modCompletedCount / modLessons.length) * 100);

      // Update sidebar module percentage badge
      const percentBadge = document.querySelector(`.sidebar-module-row[data-module-id="${mod.id}"] .module-percent`);
      if (percentBadge) {
        percentBadge.innerText = `${modPercent}%`;
        if (modPercent === 100) {
          percentBadge.classList.add("completed");
        } else {
          percentBadge.classList.remove("completed");
        }
      }
    });

    // Update individual lesson completion checkboxes/icons in ToC
    document.querySelectorAll(".lesson-status-icon").forEach(icon => {
      const lessonId = icon.closest("[data-id]").getAttribute("data-id");
      if (completed.has(lessonId)) {
        icon.className = "lesson-status-icon completed";
        icon.innerHTML = "✓";
      } else {
        icon.className = "lesson-status-icon pending";
        icon.innerHTML = "○";
      }
    });

    // Check and update achievement shelf badges
    this.updateBadgesUI();

    // Toggle advanced modules lock state based on core completion
    const isCoreComplete = corePercent === 100;
    const advancedContainer = document.getElementById("advanced-modules-section");
    const advancedLockBanner = document.getElementById("advanced-lock-banner");

    if (isCoreComplete) {
      if (advancedContainer) advancedContainer.classList.remove("locked");
      if (advancedLockBanner) advancedLockBanner.style.display = "none";
    } else {
      if (advancedContainer) advancedContainer.classList.add("locked");
      if (advancedLockBanner) advancedLockBanner.style.display = "block";
    }
  },

  markComplete(id) {
    window.V1Storage.setCompleted(id);
    this.recalculate();

    // Highlight the "Mark Complete" button for the lesson if it exists
    const btn = document.querySelector(`section[data-lesson-id="${id}"] .mark-complete-btn`);
    if (btn) {
      btn.disabled = true;
      btn.innerText = "Completed ✓";
      btn.classList.add("completed");
    }

    // Refresh quiz state in case it was checked
    const quizForm = document.getElementById(`quiz-form-${id}`);
    if (quizForm) {
      const lesson = this.findLessonById(id);
      if (lesson) {
        window.V1Quiz.prefillAndDisable(lesson, quizForm);
      }
    }
  },

  updateBadgesUI() {
    const earnedBadges = window.V1Storage.getBadges();
    const badgeElements = document.querySelectorAll(".achievement-badge");

    badgeElements.forEach(badgeEl => {
      const badgeId = badgeEl.getAttribute("data-badge-id");
      if (earnedBadges.has(badgeId)) {
        badgeEl.classList.add("earned");
        badgeEl.classList.remove("locked");
        // Update screen reader text
        const srText = badgeEl.querySelector(".sr-only");
        if (srText) srText.innerText = "(Earned)";
      } else {
        badgeEl.classList.remove("earned");
        badgeEl.classList.add("locked");
        const srText = badgeEl.querySelector(".sr-only");
        if (srText) srText.innerText = "(Locked)";
      }
    });
  },

  findLessonById(id) {
    for (const mod of window.V1_MODULES) {
      const les = mod.lessons.find(l => l.id === id);
      if (les) return les;
    }
    return null;
  }
};
