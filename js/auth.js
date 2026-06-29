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

  async function _handleSession(session) {
    try {
      const API = (window.CHAT_API_URL || "").replace(/\/$/, "");
      const res = await fetch(API + "/me/profile", {
        headers: { "Authorization": "Bearer " + session.access_token },
      });
      window.V1Profile = res.ok ? await res.json() : { approved: true, allowed_modules: null, is_admin: false };
    } catch (_) {
      window.V1Profile = { approved: true, allowed_modules: null, is_admin: false };
    }

    if (window.V1Profile && !window.V1Profile.approved) {
      _showPendingScreen(window.V1Profile);
    } else {
      _hidePendingScreen();
      hideAuthWall();
    }
  }

  function _showPendingScreen(profile) {
    // Hide auth wall, show pending overlay
    document.getElementById("auth-wall")?.classList.remove("visible");
    document.getElementById("app-shell-inner")?.classList.add("blurred");

    const screen = document.getElementById("pending-screen");
    if (!screen) return;

    // Hide all sub-states
    ["pending-profile-form", "pending-waiting", "pending-declined"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });

    let subId;
    if (profile.declined) {
      subId = "pending-declined";
    } else if (!profile.name) {
      subId = "pending-profile-form";
    } else {
      subId = "pending-waiting";
      const nameEl = document.getElementById("pending-user-name");
      if (nameEl) nameEl.textContent = profile.name + (profile.role ? " · " + profile.role : "");
    }

    const sub = document.getElementById(subId);
    if (sub) sub.style.display = "block";
    screen.style.display = "flex";
  }

  function _hidePendingScreen() {
    const el = document.getElementById("pending-screen");
    if (el) el.style.display = "none";
  }

  // Called by the profile form submit button
  window._submitProfile = async function () {
    const name = (document.getElementById("profile-name-input")?.value || "").trim();
    const role = (document.getElementById("profile-role-input")?.value || "").trim();
    const errEl = document.getElementById("profile-form-error");
    const btn = document.getElementById("profile-submit-btn");

    if (!name || !role) {
      if (errEl) { errEl.textContent = "Please fill in both fields."; errEl.style.display = "block"; }
      return;
    }
    if (errEl) errEl.style.display = "none";
    if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

    try {
      const API = (window.CHAT_API_URL || "").replace(/\/$/, "");
      const res = await fetch(API + "/me/profile", {
        method: "PUT",
        headers: {
          "Authorization": "Bearer " + (_session ? _session.access_token : ""),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, role }),
      });
      if (!res.ok) throw new Error("Failed to save");
      // Update local profile and re-render pending screen
      if (window.V1Profile) { window.V1Profile.name = name; window.V1Profile.role = role; }
      _showPendingScreen(window.V1Profile);
    } catch (e) {
      if (errEl) { errEl.textContent = "Could not save. Please try again."; errEl.style.display = "block"; }
      if (btn) { btn.disabled = false; btn.textContent = "Send Access Request"; }
    }
  };

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
