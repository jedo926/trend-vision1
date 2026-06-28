// Supabase Auth — handles login/signup/logout and session management.
// SUPABASE_ANON_KEY and SUPABASE_URL are set in index.html before this loads.

window.V1Auth = (function () {
  let _client = null;
  let _session = null;

  function init() {
    const { createClient } = window.supabase;
    _client = createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);

    _client.auth.onAuthStateChange((event, session) => {
      _session = session;
      if (session) {
        hideAuthWall();
      } else {
        showAuthWall();
      }
    });

    // Restore existing session
    _client.auth.getSession().then(({ data }) => {
      _session = data.session;
      if (_session) {
        hideAuthWall();
      } else {
        showAuthWall();
      }
    });
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
