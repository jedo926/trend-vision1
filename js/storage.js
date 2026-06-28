// Vision One Interactive Training Website - Storage Layer
// Manages all persistence via localStorage under a single JSON object.

window.V1Storage = {
  STORAGE_KEY: "v1_training",

  _getData() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) {
      return {
        completed: [],
        bookmarks: [],
        badges: [],
        lastLesson: null,
        sidebarOpen: true,
        theme: "light",
        mode: "reading"
      };
    }
    try {
      const parsed = JSON.parse(data);
      if (!parsed.theme) parsed.theme = "light";
      if (!parsed.mode) parsed.mode = "reading";
      return parsed;
    } catch (e) {
      console.error("Failed to parse V1 storage data", e);
      return {
        completed: [],
        bookmarks: [],
        badges: [],
        lastLesson: null,
        sidebarOpen: true,
        theme: "light",
        mode: "reading"
      };
    }
  },

  _saveData(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  getTheme() {
    return this._getData().theme || "light";
  },

  setTheme(theme) {
    const data = this._getData();
    data.theme = theme;
    this._saveData(data);
  },

  getMode() {
    return this._getData().mode || "reading";
  },

  setMode(mode) {
    const data = this._getData();
    data.mode = mode;
    this._saveData(data);
    window.dispatchEvent(new CustomEvent("v1-mode-changed", { detail: { mode } }));
  },

  getCompleted() {
    return new Set(this._getData().completed || []);
  },

  setCompleted(id) {
    const data = this._getData();
    if (!data.completed) data.completed = [];
    if (!data.completed.includes(id)) {
      data.completed.push(id);
      this._saveData(data);
      this.checkAndAwardBadges();
    }
  },

  getBookmarks() {
    return new Set(this._getData().bookmarks || []);
  },

  toggleBookmark(id) {
    const data = this._getData();
    if (!data.bookmarks) data.bookmarks = [];
    const index = data.bookmarks.indexOf(id);
    if (index === -1) {
      data.bookmarks.push(id);
    } else {
      data.bookmarks.splice(index, 1);
    }
    this._saveData(data);
    return index === -1; // returns true if bookmarked, false if removed
  },

  getBadges() {
    return new Set(this._getData().badges || []);
  },

  awardBadge(badgeId) {
    const data = this._getData();
    if (!data.badges) data.badges = [];
    if (!data.badges.includes(badgeId)) {
      data.badges.push(badgeId);
      this._saveData(data);
      // Trigger a custom event to notify UI to show a toast or update
      window.dispatchEvent(new CustomEvent("v1-badge-awarded", { detail: { badgeId } }));
    }
  },

  getLastLesson() {
    return this._getData().lastLesson;
  },

  setLastLesson(id) {
    const data = this._getData();
    data.lastLesson = id;
    this._saveData(data);
  },

  getSidebarOpen() {
    const data = this._getData();
    return data.sidebarOpen !== false; // default to true
  },

  setSidebarOpen(isOpen) {
    const data = this._getData();
    data.sidebarOpen = isOpen;
    this._saveData(data);
  },

  clearAll() {
    localStorage.removeItem(this.STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("v1-storage-cleared"));
  },

  checkAndAwardBadges() {
    const completed = this.getCompleted();
    const completedCount = completed.size;

    // Calculate core modules count
    // Core modules are the ones where isAdvanced is false or not intro/final-assessment?
    // Let's check the spec:
    // Core lessons: modules 0-9. Final assessment and advanced are separate.
    // Total core lessons = 10 modules * 4 lessons = 40 lessons.
    // Let's count them dynamically from V1_MODULES
    const coreLessons = [];
    window.V1_MODULES.forEach(mod => {
      if (!mod.isAdvanced && mod.id !== "final-assessment") {
        mod.lessons.forEach(les => coreLessons.push(les.id));
      }
    });
    
    const totalCoreCount = coreLessons.length;
    let completedCoreCount = 0;
    coreLessons.forEach(id => {
      if (completed.has(id)) completedCoreCount++;
    });

    const percent = totalCoreCount > 0 ? (completedCoreCount / totalCoreCount) * 100 : 0;

    // Badges to award:
    // 1. first-step: 1st lesson complete
    if (completedCount >= 1) {
      this.awardBadge("first-step");
    }
    // 2. quarter-way: 25% of core
    if (percent >= 25) {
      this.awardBadge("quarter-way");
    }
    // 3. halfway: 50% of core
    if (percent >= 50) {
      this.awardBadge("halfway");
    }
    // 4. almost-there: 75% of core
    if (percent >= 75) {
      this.awardBadge("almost-there");
    }
    // 5. expert: 100% of core
    if (percent >= 100) {
      this.awardBadge("expert");
    }
  }
};
