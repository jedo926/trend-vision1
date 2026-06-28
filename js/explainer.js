/* Vision One — Explainer Engine v2
   3 scene types: flow | dashboard | network
   Preloads availability list for instant Play button display */

window.V1Explainer = (function () {
  const API = (window.CHAT_API_URL || "http://localhost:8000").replace(/\/$/, "");
  const _cache = {}; // lesson_id → explainer data (null = checked, no data)
  let _available = null; // Set of lesson_ids that have explainers

  const SCENE_MAP = {
    intro: "flow", "getting-started": "dashboard", dashboards: "dashboard",
    "alerts-workbench": "dashboard", endpoint: "network", email: "network",
    cloud: "network", network: "network", soc: "flow", risk: "dashboard",
    identity: "flow", xdr: "network", final: "flow", advanced: "flow",
  };

  function getSceneType(moduleId) {
    const key = Object.keys(SCENE_MAP).find(k => moduleId.startsWith(k)) || "flow";
    return SCENE_MAP[key];
  }

  function esc(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function trunc(s, n) { const w = s.split(" "); return w.length > n ? w.slice(0, n).join(" ") + "…" : s; }

  // ── SVG icons ───────────────────────────────────────────────
  const IC = {
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3L4 7v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7L12 3z"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>`,
    alert:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 20h20L12 2z"/><path d="M12 9v5M12 17v.5" stroke-linecap="round"/></svg>`,
    check:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    user:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
    cloud:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.5 18a5 5 0 000-10 5 5 0 00-9.5-1.5A4 4 0 005 18h12.5z"/></svg>`,
    mail:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>`,
    lock:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
    eye:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    net:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><circle cx="3" cy="12" r="2"/><circle cx="21" cy="12" r="2"/><circle cx="12" cy="3" r="2"/><circle cx="12" cy="21" r="2"/><path d="M5 12h4M15 12h4M12 5v4M12 15v4"/></svg>`,
    play:   `<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><polygon points="3,2 12,7 3,12"/></svg>`,
    pause:  `<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="2" y="2" width="4" height="10" rx="1"/><rect x="8" y="2" width="4" height="10" rx="1"/></svg>`,
    replay: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7A5 5 0 1 0 5 3.5" stroke-linecap="round"/><path d="M3 2v3h3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  };

  const STEP_IC = [IC.shield, IC.search, IC.alert, IC.eye, IC.lock, IC.check];

  // ════════════════════════════════════════════════════════════
  // FLOW SCENE — animated pipeline
  // ════════════════════════════════════════════════════════════
  function buildFlow(el, steps) {
    const nodes = steps.map((step, i) => `
      <div class="ex-node ex-node-waiting" data-step="${i}">
        <div class="ex-node-rings">
          <div class="ex-ring r1"></div>
          <div class="ex-ring r2"></div>
          <div class="ex-ring r3"></div>
        </div>
        <div class="ex-node-body">
          <div class="ex-node-num">${i + 1}</div>
          <div class="ex-node-icon">${STEP_IC[i % STEP_IC.length]}</div>
          <div class="ex-node-label">${esc(trunc(step, 4))}</div>
        </div>
        <div class="ex-node-check">${IC.check}</div>
      </div>
      ${i < steps.length - 1 ? `
        <div class="ex-conn" data-conn="${i}">
          <div class="ex-conn-rail"></div>
          <div class="ex-conn-pkt p1"></div>
          <div class="ex-conn-pkt p2"></div>
        </div>` : ""}
    `).join("");

    el.innerHTML = `
      <div class="ex-scene ex-flow">
        <div class="ex-scene-bg">
          <div class="ex-grid"></div>
          <div class="ex-stream"></div>
        </div>
        <div class="ex-flow-label">
          <span class="ex-scene-tag">Process Flow</span>
          <span class="ex-step-indicator"></span>
        </div>
        <div class="ex-flow-row">${nodes}</div>
        <div class="ex-caption"></div>
      </div>`;
  }

  function activateFlow(el, stepIdx, steps) {
    el.querySelectorAll(".ex-node").forEach(nd => {
      const s = parseInt(nd.dataset.step);
      nd.className = "ex-node " + (s < stepIdx ? "ex-node-done" : s === stepIdx ? "ex-node-active" : "ex-node-waiting");
    });
    el.querySelectorAll(".ex-conn").forEach(c => {
      const s = parseInt(c.dataset.conn);
      c.classList.toggle("ex-conn-active", s < stepIdx);
    });
    const cap = el.querySelector(".ex-caption");
    if (cap) cap.textContent = stepIdx >= 0 && steps[stepIdx] ? steps[stepIdx] : "";
    const ind = el.querySelector(".ex-step-indicator");
    if (ind) ind.textContent = stepIdx >= 0 ? `Step ${stepIdx + 1} of ${steps.length}` : "";
  }

  // ════════════════════════════════════════════════════════════
  // DASHBOARD SCENE — SOC console
  // ════════════════════════════════════════════════════════════
  const W_CFG = [
    { label: "Risk Index",      val: 72,  max: 100, color: "#e3b341", ic: IC.shield },
    { label: "Active Alerts",   val: 14,  max: 50,  color: "#f85149", ic: IC.alert  },
    { label: "Endpoints",       val: 247, max: 500, color: "#3fb950", ic: IC.net    },
    { label: "Users Monitored", val: 58,  max: 100, color: "#58a6ff", ic: IC.user   },
    { label: "Cloud Assets",    val: 31,  max: 60,  color: "#bc8cff", ic: IC.cloud  },
  ];

  function sparkline(n) {
    const pts = Array.from({ length: 8 }, (_, i) =>
      `${i * 14},${20 - Math.round(8 + Math.sin(i * 0.9 + n) * 7)}`).join(" ");
    return `<svg class="ex-spark" viewBox="0 0 98 24" preserveAspectRatio="none">
      <polyline points="${pts}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  function buildDashboard(el, steps) {
    const widgets = steps.map((step, i) => {
      const cfg = W_CFG[i % W_CFG.length];
      const pct = Math.round((cfg.val / cfg.max) * 100);
      return `
        <div class="ex-widget" data-step="${i}" style="--wc:${cfg.color}">
          <div class="ex-widget-sweep"></div>
          <div class="ex-widget-top">
            <div class="ex-widget-icon">${cfg.ic}</div>
            <div class="ex-widget-label">${esc(cfg.label)}</div>
          </div>
          <div class="ex-widget-val" data-target="${cfg.val}">
            <span class="ex-widget-num">${cfg.val}</span>
          </div>
          <div class="ex-widget-bar-wrap">
            <div class="ex-widget-bar" style="--pct:${pct}%"></div>
          </div>
          ${sparkline(i)}
          <div class="ex-widget-desc">${esc(trunc(step, 7))}</div>
        </div>`;
    }).join("");

    el.innerHTML = `
      <div class="ex-scene ex-dashboard">
        <div class="ex-scene-bg"><div class="ex-grid"></div></div>
        <div class="ex-dash-top">
          <div class="ex-dash-logo">${IC.shield} Vision One Console</div>
          <div class="ex-dash-live"><span class="ex-live-dot"></span>Live</div>
        </div>
        <div class="ex-dash-grid">${widgets}</div>
        <div class="ex-caption"></div>
      </div>`;
  }

  function activateDashboard(el, stepIdx, steps) {
    el.querySelectorAll(".ex-widget").forEach(w => {
      const s = parseInt(w.dataset.step);
      w.classList.remove("ex-widget-active", "ex-widget-done");
      if (s < stepIdx) w.classList.add("ex-widget-done");
      if (s === stepIdx) {
        w.classList.add("ex-widget-active");
        // Animate number count-up
        const span = w.querySelector(".ex-widget-num");
        const target = parseInt(w.dataset.target || span?.textContent || 0);
        if (span && target) countUp(span, target);
      }
    });
    const cap = el.querySelector(".ex-caption");
    if (cap) cap.textContent = stepIdx >= 0 && steps[stepIdx] ? steps[stepIdx] : "";
  }

  function countUp(el, target) {
    const start = Math.max(0, target - Math.round(target * 0.4));
    const dur = 600;
    const t0 = performance.now();
    function frame(now) {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(start + (target - start) * p);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // ════════════════════════════════════════════════════════════
  // NETWORK SCENE — threat topology
  // ════════════════════════════════════════════════════════════
  const NET = [
    { id: "hub",      label: "Vision One", x: 50, y: 48, ic: IC.shield, hub: true  },
    { id: "attacker", label: "Attacker",   x: 12, y: 12, ic: IC.alert              },
    { id: "email",    label: "Email GW",   x: 85, y: 15, ic: IC.mail               },
    { id: "endpoint", label: "Endpoint",   x: 88, y: 80, ic: IC.lock               },
    { id: "cloud",    label: "Cloud",      x: 12, y: 82, ic: IC.cloud              },
    { id: "user",     label: "User",       x: 50, y: 88, ic: IC.user               },
  ];

  function buildNetwork(el, steps) {
    const count = Math.min(steps.length + 1, NET.length);
    const nodes = NET.slice(0, count);
    const hub = nodes[0];

    const conns = steps.map((_, i) => {
      const spoke = nodes[i + 1] || nodes[nodes.length - 1];
      const dx = spoke.x - hub.x, dy = spoke.y - hub.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      const ang = Math.atan2(dy, dx) * 180 / Math.PI;
      return `<div class="ex-conn2" data-step="${i}"
                   style="left:${hub.x}%;top:${hub.y}%;width:${len}%;transform-origin:left center;transform:rotate(${ang}deg)">
                <div class="ex-conn2-line"></div>
                <div class="ex-pkt2 pk1"></div>
                <div class="ex-pkt2 pk2"></div>
                <div class="ex-pkt2 pk3"></div>
              </div>`;
    }).join("");

    const nodeHtml = nodes.map(n => `
      <div class="ex-net-node ${n.hub ? "ex-hub-node" : ""}" data-node="${n.id}"
           style="left:${n.x}%;top:${n.y}%">
        <div class="ex-hub-radar"></div>
        <div class="ex-net-ring"></div>
        <div class="ex-net-ico">${n.ic}</div>
        <div class="ex-net-lbl">${esc(n.label)}</div>
      </div>`).join("");

    el.innerHTML = `
      <div class="ex-scene ex-network">
        <div class="ex-scene-bg"><div class="ex-grid"></div></div>
        <div class="ex-net-canvas">
          ${conns}
          ${nodeHtml}
        </div>
        <div class="ex-caption"></div>
      </div>`;
  }

  function activateNetwork(el, stepIdx, steps) {
    el.querySelectorAll(".ex-conn2").forEach(c => {
      const s = parseInt(c.dataset.step);
      c.classList.remove("ex-conn2-active", "ex-conn2-done");
      if (s < stepIdx) c.classList.add("ex-conn2-done");
      if (s === stepIdx) c.classList.add("ex-conn2-active");
    });
    el.querySelectorAll(".ex-net-node").forEach((n, i) => {
      n.classList.remove("ex-net-active", "ex-net-done");
      if (i === 0) return; // hub always stays active via CSS
      const s = i - 1;
      if (s < stepIdx) n.classList.add("ex-net-done");
      if (s === stepIdx) n.classList.add("ex-net-active");
    });
    const cap = el.querySelector(".ex-caption");
    if (cap) cap.textContent = stepIdx >= 0 && steps[stepIdx] ? steps[stepIdx] : "Monitoring all layers…";
  }

  // ── Dispatch ─────────────────────────────────────────────────
  function buildScene(type, el, steps) {
    if (type === "dashboard") buildDashboard(el, steps);
    else if (type === "network") buildNetwork(el, steps);
    else buildFlow(el, steps);
  }

  function activateStep(type, el, stepIdx, steps) {
    if (type === "dashboard") activateDashboard(el, stepIdx, steps);
    else if (type === "network") activateNetwork(el, stepIdx, steps);
    else activateFlow(el, stepIdx, steps);
  }

  // ── Preload availability list (called once after login) ──────
  async function preload() {
    if (_available) return;
    const token = window.V1Auth?.getToken();
    if (!token) return;
    try {
      const res = await fetch(`${API}/explainers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) return;
      const data = await res.json();
      _available = new Set(data.lesson_ids || []);
    } catch { _available = new Set(); }
  }

  // ── Main entry point ─────────────────────────────────────────
  function buildAndShow(lessonId, moduleId, steps, stageEl, playBtn, progressEl) {
    const sceneType = getSceneType(moduleId);

    try {
      buildScene(sceneType, stageEl, steps);
      activateStep(sceneType, stageEl, -1, steps);
    } catch (e) {
      console.warn("V1Explainer build failed", e);
      return;
    }

    // If preload already confirmed audio exists → show button immediately
    if (_available?.has(lessonId)) {
      _showPlayBtn(playBtn, IC);
    }

    // Async: fetch audio data + wire controls
    (async () => {
      const token = window.V1Auth?.getToken();
      if (!token) return;

      let data = _cache[lessonId];
      if (data === undefined) {
        try {
          const res = await fetch(`${API}/explainers/${lessonId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          data = res.ok ? await res.json() : null;
        } catch { data = null; }
        _cache[lessonId] = data;
        if (data && _available) _available.add(lessonId);
      }

      if (!data) { playBtn.style.display = "none"; return; }

      _wireAudio(data, sceneType, stageEl, playBtn, progressEl, steps);
    })();
  }

  function _showPlayBtn(btn) {
    btn.innerHTML = IC.play + " Play Explainer";
    btn.style.display = "flex";
  }

  function _wireAudio(data, sceneType, stageEl, playBtn, progressEl, steps) {
    const raw = (data.step_timestamps || []).sort((a, b) => a.t - b.t);

    // If Whisper didn't detect all "Step N" markers, fill in evenly-spaced fallbacks
    const dur = data.duration_seconds || 30;
    const detected = new Set(raw.filter(ts => ts.step >= 0).map(ts => ts.step));
    const timestamps = [...raw];
    if (detected.size < steps.length) {
      const introEnd = dur * 0.18;  // first 18% = whatThisMeans + scenario
      const stepSpan = (dur - introEnd) / steps.length;
      steps.forEach((_, i) => {
        if (!detected.has(i)) {
          timestamps.push({ step: i, t: introEnd + i * stepSpan });
        }
      });
      timestamps.sort((a, b) => a.t - b.t);
    }

    const audio = new Audio(data.audio_url);
    let lastStep = -2;
    let playing = false;

    audio.addEventListener("timeupdate", () => {
      const t = audio.currentTime;
      let cur = -1;
      for (const ts of timestamps) { if (ts.t <= t) cur = ts.step; }
      if (cur !== lastStep) { lastStep = cur; activateStep(sceneType, stageEl, cur, steps); }
      if (progressEl) {
        const dur = audio.duration || data.duration_seconds || 1;
        progressEl.style.width = `${(t / dur) * 100}%`;
      }
    });

    audio.addEventListener("ended", () => {
      playing = false;
      playBtn.innerHTML = IC.replay + " Replay";
      playBtn.disabled = false;
      if (progressEl) progressEl.style.width = "100%";
      activateStep(sceneType, stageEl, steps.length - 1, steps);
    });
    audio.addEventListener("error", () => {
      playing = false; playBtn.disabled = false;
      playBtn.innerHTML = IC.play + " Play Explainer";
    });

    // Make sure button is visible and wired
    playBtn.style.display = "flex";
    playBtn.innerHTML = IC.play + " Play Explainer";
    // Remove any previous listener by replacing the element
    const fresh = playBtn.cloneNode(true);
    playBtn.parentNode?.replaceChild(fresh, playBtn);
    fresh.innerHTML = IC.play + " Play Explainer";
    fresh.style.display = "flex";
    fresh.addEventListener("click", () => {
      if (!playing) {
        if (audio.ended) { audio.currentTime = 0; lastStep = -2; activateStep(sceneType, stageEl, -1, steps); }
        audio.play();
        playing = true;
        fresh.innerHTML = IC.pause + " Pause";
      } else {
        audio.pause();
        playing = false;
        fresh.innerHTML = IC.play + " Resume";
      }
    });
  }

  // Call preload whenever auth state changes
  const _origHide = document.getElementById?.bind(document);
  // Hook into auth: preload when token becomes available
  setTimeout(() => {
    const poll = setInterval(() => {
      if (window.V1Auth?.getToken()) { clearInterval(poll); preload(); }
    }, 200);
    setTimeout(() => clearInterval(poll), 10000);
  }, 0);

  return { buildAndShow, getSceneType, preload };
})();
