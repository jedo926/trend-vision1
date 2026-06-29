// Supabase Auth — handles login/signup/logout and session management.
// SUPABASE_ANON_KEY and SUPABASE_URL are set in index.html before this loads.

window.V1Auth = (function () {
  let _client = null;
  let _session = null;
  let _pollTimer = null;

  function init() {
    const { createClient } = window.supabase;
    _client = createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);

    _client.auth.onAuthStateChange(async (event, session) => {
      _session = session;
      if (session) {
        await _handleSession(session);
      } else {
        window.V1Profile = null;
        if (_pollTimer) { clearInterval(_pollTimer); _pollTimer = null; }
        showAuthWall();
      }
    });

    // Restore existing session
    _client.auth.getSession().then(async ({ data }) => {
      if (data.session && !_session) {
        _session = data.session;
        await _handleSession(_session);
      } else if (!data.session && !_session) {
        showAuthWall();
      }
    });
  }

  async function _fetchProfile(token) {
    try {
      const API = (window.CHAT_API_URL || "").replace(/\/$/, "");
      const res = await fetch(API + "/me/profile", {
        headers: { "Authorization": "Bearer " + token },
      });
      return res.ok ? await res.json() : null;
    } catch (_) { return null; }
  }

  function _applyProfile(profile) {
    window.V1Profile = profile || { approved: true, allowed_modules: null, is_admin: false };
    window.V1App?.renderSidebar();
    window.V1App?.renderProgressDropdown();
    // Re-render welcome (dashboard) if no lesson is active
    if (window.V1App && !window.V1App.currentLessonId) {
      window.V1App.renderWelcome();
    }
  }

  async function _handleSession(session) {
    const profile = await _fetchProfile(session.access_token);
    _applyProfile(profile);
    hideAuthWall();

    // Poll every 20s so access changes reflect without a refresh
    if (_pollTimer) clearInterval(_pollTimer);
    _pollTimer = setInterval(async () => {
      const { data } = await _client.auth.getSession();
      if (!data.session) return;
      const fresh = await _fetchProfile(data.session.access_token);
      if (!fresh) return;
      const changed =
        JSON.stringify(fresh.allowed_modules) !== JSON.stringify(window.V1Profile?.allowed_modules);
      if (changed) {
        const hadAccess = (mid) => (window.V1Profile?.allowed_modules || []).includes(mid);
        window.V1Profile = fresh;
        window.V1App?.renderSidebar();
        window.V1App?.renderProgressDropdown();
        if (window.V1App && !window.V1App.currentLessonId) {
          window.V1App.renderWelcome();
        }
        // Toast only when new modules were granted (not removed)
        const gained = (fresh.allowed_modules || []).some(m => !hadAccess(m));
        if (gained) window.V1App?.showBadgeToast("access-granted");
      }
    }, 20000);
  }

  function getToken() {
    return _session ? _session.access_token : null;
  }

  function getUser() {
    return _session ? _session.user : null;
  }

  async function signIn(email, password) {
    const { data, error } = await _client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }

  async function signUp(email, password) {
    const { data, error } = await _client.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  }

  async function signOut() {
    await _client.auth.signOut();
  }

  function showAuthWall() {
    document.getElementById("auth-wall")?.classList.add("visible");
    document.getElementById("app-shell-inner")?.classList.add("blurred");
  }

  function hideAuthWall() {
    document.getElementById("auth-wall")?.classList.remove("visible");
    document.getElementById("app-shell-inner")?.classList.remove("blurred");
  }

  return { init, getToken, getUser, signIn, signUp, signOut };
})();
