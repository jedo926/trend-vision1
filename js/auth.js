// Supabase Auth — handles login/signup/logout and session management.
// SUPABASE_ANON_KEY and SUPABASE_URL are set in index.html before this loads.

window.V1Auth = (function () {
  let _client = null;
  let _session = null;

  function init() {
    const { createClient } = window.supabase;
    _client = createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);

    _client.auth.onAuthStateChange(async (event, session) => {
      _session = session;
      if (session) {
        await _handleSession(session);
      } else {
        window.V1Profile = null;
        _hidePendingScreen();
        showAuthWall();
      }
    });

    // Restore existing session (fires before onAuthStateChange on some clients)
    _client.auth.getSession().then(async ({ data }) => {
      if (data.session && !_session) {
        _session = data.session;
        await _handleSession(_session);
      } else if (!data.session && !_session) {
        showAuthWall();
      }
    });
  }

  async function _handleSession(session) {
    try {
      const API = (window.CHAT_API_URL || "").replace(/\/$/, "");
      const res = await fetch(API + "/me/profile", {
        headers: { "Authorization": "Bearer " + session.access_token },
      });
      if (res.ok) {
        window.V1Profile = await res.json();
      } else {
        window.V1Profile = { approved: true, allowed_modules: null, is_admin: false };
      }
    } catch (_) {
      // Network error — allow through so the app isn't permanently broken
      window.V1Profile = { approved: true, allowed_modules: null, is_admin: false };
    }

    if (window.V1Profile && !window.V1Profile.approved) {
      _showPendingScreen();
    } else {
      _hidePendingScreen();
      hideAuthWall();
    }
  }

  function _showPendingScreen() {
    document.getElementById("auth-wall")?.classList.remove("visible");
    document.getElementById("app-shell-inner")?.classList.add("blurred");
    const el = document.getElementById("pending-screen");
    if (el) el.style.display = "flex";
  }

  function _hidePendingScreen() {
    const el = document.getElementById("pending-screen");
    if (el) el.style.display = "none";
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
