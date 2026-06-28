/* Vision One — Explainer Engine
   3 scene types: flow | dashboard | network
   Syncs animation to pre-generated TTS via Whisper timestamps */

window.V1Explainer = (function () {
  const API = (window.CHAT_API_URL || "http://localhost:8000").replace(/\/$/, "");

  // Module prefix → scene type
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

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function truncate(s, n) {
    const words = s.split(" ");
    return words.length > n ? words.slice(0, n).join(" ") + "…" : s;
  }

  // ── SVG icon helpers ────────────────────────────────────────
  const ICONS = {
    login: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12h8M14 9l3 3-3 3"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3L4 7v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7L12 3z"/></svg>`,
    alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 20h20L12 2z"/><path d="M12 9v5M12 17v.5" stroke-linecap="round"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.5 18a5 5 0 000-10 5 5 0 00-9.5-1.5A4 4 0 005 18h12.5z"/></svg>`,
    network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><circle cx="3" cy="12" r="2"/><circle cx="21" cy="12" r="2"/><circle cx="12" cy="3" r="2"/><circle cx="12" cy="21" r="2"/><path d="M5 12h4M15 12h4M12 5v4M12 15v4"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
  };

  const STEP_ICONS = [ICONS.login, ICONS.search, ICONS.shield, ICONS.alert, ICONS.eye, ICONS.check];

  // ─────────────────────────────────────────────────────────────
  // FLOW SCENE — animated pipeline of steps
  // ─────────────────────────────────────────────────────────────
  function buildFlow(el, steps) {
    const nodes = steps.map((step, i) => `
      <div class="ex-node" data-step="${i}">
        <div class="ex-node-pulse"></div>
        <div class="ex-node-icon">${STEP_ICONS[i % STEP_ICONS.length]}</div>
        <div class="ex-node-num">${i + 1}</div>
        <div class="ex-node-label">${esc(truncate(step, 5))}</div>
      </div>
      ${i < steps.length - 1 ? '<div class="ex-arrow"><div class="ex-arrow-line"></div></div>' : ""}
    `).join("");

    el.innerHTML = `
      <div class="ex-scene ex-flow">
        <div class="ex-scene-bg">
          <div class="ex-bg-grid"></div>
        </div>
        <div class="ex-flow-title">Process Flow</div>
        <div class="ex-flow-nodes">${nodes}</div>
        <div class="ex-step-caption"></div>
      </div>`;
  }

  function activateFlow(el, stepIdx, steps) {
    el.querySelectorAll(".ex-node").forEach(node => {
      const s = parseInt(node.dataset.step);
      node.classList.remove("active", "completed", "waiting");
      if (stepIdx < 0) { node.classList.add("waiting"); return; }
      node.classList.add(s < stepIdx ? "completed" : s === stepIdx ? "active" : "waiting");
    });
    const caption = el.querySelector(".ex-step-caption");
    if (caption) {
      caption.textContent = stepIdx >= 0 && steps[stepIdx] ? steps[stepIdx] : "";
    }
    // Animate arrows between completed steps
    el.querySelectorAll(".ex-arrow").forEach((arrow, i) => {
      arrow.classList.toggle("active", i < stepIdx);
    });
  }

  // ─────────────────────────────────────────────────────────────
  // DASHBOARD SCENE — SOC console mockup
  // ─────────────────────────────────────────────────────────────
  const WIDGET_CONFIGS = [
    { label: "Risk Index", value: "72", unit: "/100", color: "#e3b341", icon: ICONS.shield },
    { label: "Active Alerts", value: "14", unit: " alerts", color: "#f85149", icon: ICONS.alert },
    { label: "Endpoints", value: "247", unit: " online", color: "#3fb950", icon: ICONS.network },
    { label: "Users", value: "58", unit: " monitored", color: "#58a6ff", icon: ICONS.user },
    { label: "Cloud Assets", value: "31", unit: " scanned", color: "#bc8cff", icon: ICONS.cloud },
  ];

  function buildDashboard(el, steps) {
    const widgets = steps.map((step, i) => {
      const cfg = WIDGET_CONFIGS[i % WIDGET_CONFIGS.length];
      return `
        <div class="ex-widget" data-step="${i}" style="--w-color:${cfg.color}">
          <div class="ex-widget-glow"></div>
          <div class="ex-widget-icon">${cfg.icon}</div>
          <div class="ex-widget-val">${cfg.value}<span class="ex-widget-unit">${cfg.unit}</span></div>
          <div class="ex-widget-label">${esc(cfg.label)}</div>
          <div class="ex-widget-bar"><div class="ex-widget-fill" style="background:${cfg.color}"></div></div>
          <div class="ex-widget-step">${esc(truncate(step, 6))}</div>
        </div>`;
    }).join("");

    el.innerHTML = `
      <div class="ex-scene ex-dashboard">
        <div class="ex-scene-bg"><div class="ex-bg-grid"></div></div>
        <div class="ex-dash-header">
          <div class="ex-dash-logo">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 3.5v3.5c0 2.8 2.2 4.9 5 5.5 2.8-.6 5-2.7 5-5.5V3.5L7 1z" stroke="#d6001c" stroke-width="1.2" stroke-linejoin="round"/></svg>
            Vision One Console
          </div>
          <div class="ex-dash-status"><span class="ex-dot-live"></span>Live</div>
        </div>
        <div class="ex-dash-widgets">${widgets}</div>
      </div>`;
  }

  function activateDashboard(el, stepIdx) {
    el.querySelectorAll(".ex-widget").forEach(w => {
      const s = parseInt(w.dataset.step);
      w.classList.remove("active", "completed");
      if (stepIdx < 0) return;
      if (s < stepIdx) w.classList.add("completed");
      if (s === stepIdx) w.classList.add("active");
    });
  }

  // ─────────────────────────────────────────────────────────────
  // NETWORK SCENE — topology with animated threat/detection flow
  // ─────────────────────────────────────────────────────────────
  const NET_NODES = [
    { id: "hub", label: "Vision One", x: 50, y: 50, icon: ICONS.shield, hub: true },
    { id: "internet", label: "Internet", x: 10, y: 10, icon: ICONS.network },
    { id: "email", label: "Email", x: 85, y: 15, icon: ICONS.mail },
    { id: "endpoint", label: "Endpoint", x: 90, y: 80, icon: ICONS.lock },
    { id: "cloud", label: "Cloud", x: 10, y: 85, icon: ICONS.cloud },
    { id: "user", label: "User", x: 50, y: 90, icon: ICONS.user },
  ];

  function buildNetwork(el, steps) {
    const nodeCount = Math.min(steps.length + 1, NET_NODES.length);
    const usedNodes = NET_NODES.slice(0, nodeCount);

    const nodesHtml = usedNodes.map((n, i) => `
      <div class="ex-net-node ${n.hub ? "ex-net-hub" : ""}" data-node="${n.id}"
           style="left:${n.x}%;top:${n.y}%">
        <div class="ex-net-pulse"></div>
        <div class="ex-net-icon">${n.icon}</div>
        <div class="ex-net-label">${esc(n.label)}</div>
      </div>`).join("");

    // Connections: hub to each spoke, activated per step
    const connsHtml = steps.map((_, i) => {
      const spoke = usedNodes[i + 1] || usedNodes[usedNodes.length - 1];
      const hub = usedNodes[0];
      const dx = spoke.x - hub.x, dy = spoke.y - hub.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      return `<div class="ex-net-conn" data-step="${i}"
                   style="left:${hub.x}%;top:${hub.y}%;width:${len}%;transform:rotate(${angle}deg)">
                <div class="ex-net-packet"></div>
              </div>`;
    }).join("");

    el.innerHTML = `
      <div class="ex-scene ex-network">
        <div class="ex-scene-bg"><div class="ex-bg-grid"></div></div>
        <div class="ex-net-canvas">
          ${connsHtml}
          ${nodesHtml}
        </div>
        <div class="ex-step-caption"></div>
      </div>`;
  }

  function activateNetwork(el, stepIdx, steps) {
    el.querySelectorAll(".ex-net-conn").forEach(c => {
      const s = parseInt(c.dataset.step);
      c.classList.remove("active", "completed");
      if (stepIdx < 0) return;
      if (s < stepIdx) c.classList.add("completed");
      if (s === stepIdx) c.classList.add("active");
    });
    // Hub always active, highlight step-specific spoke node
    el.querySelectorAll(".ex-net-node").forEach((n, i) => {
      n.classList.remove("active", "completed");
      if (i === 0) { n.classList.add("active"); return; }
      const s = i - 1;
      if (stepIdx >= 0) {
        if (s < stepIdx) n.classList.add("completed");
        if (s === stepIdx) n.classList.add("active");
      }
    });
    const caption = el.querySelector(".ex-step-caption");
    if (caption) {
      caption.textContent = stepIdx >= 0 && steps[stepIdx] ? steps[stepIdx] : "Monitoring…";
    }
  }

  // ─────────────────────────────────────────────────────────────
  // SCENE DISPATCH
  // ─────────────────────────────────────────────────────────────
  function buildScene(type, el, steps) {
    if (type === "dashboard") buildDashboard(el, steps);
    else if (type === "network") buildNetwork(el, steps);
    else buildFlow(el, steps);
  }

  function activateStep(type, el, stepIdx, steps) {
    if (type === "dashboard") activateDashboard(el, stepIdx);
    else if (type === "network") activateNetwork(el, stepIdx, steps);
    else activateFlow(el, stepIdx, steps);
  }

  // ─────────────────────────────────────────────────────────────
  // MAIN INIT — called per lesson
  // ─────────────────────────────────────────────────────────────
  async function init(lessonId, moduleId, steps, stageEl, playBtn, progressEl) {
    const token = window.V1Auth?.getToken();
    if (!token) return;

    let explainerData = null;
    try {
      const res = await fetch(`${API}/explainers/${lessonId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) return;
      explainerData = await res.json();
    } catch { return; }

    const sceneType = getSceneType(moduleId);
    buildScene(sceneType, stageEl, steps);
    activateStep(sceneType, stageEl, -1, steps); // intro state

    stageEl.style.display = "block";
    playBtn.style.display = "flex";

    const timestamps = (explainerData.step_timestamps || []).sort((a, b) => a.t - b.t);
    const audio = new Audio(explainerData.audio_url);
    let lastStep = -2;
    let playing = false;

    function syncStep() {
      const t = audio.currentTime;
      let current = -1;
      for (const ts of timestamps) {
        if (ts.t <= t) current = ts.step;
      }
      if (current !== lastStep) {
        lastStep = current;
        activateStep(sceneType, stageEl, current, steps);
      }
      if (progressEl) {
        const dur = audio.duration || explainerData.duration_seconds || 1;
        progressEl.style.width = `${(t / dur) * 100}%`;
      }
    }

    audio.addEventListener("timeupdate", syncStep);
    audio.addEventListener("ended", () => {
      playing = false;
      playBtn.innerHTML = replayIcon + " Replay";
      playBtn.disabled = false;
      if (progressEl) progressEl.style.width = "100%";
      activateStep(sceneType, stageEl, steps.length - 1, steps);
    });
    audio.addEventListener("error", () => {
      playBtn.disabled = false;
      playBtn.innerHTML = playIcon + " Play Explainer";
    });

    const playIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><polygon points="3,2 12,7 3,12"/></svg>`;
    const pauseIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="2" y="2" width="4" height="10" rx="1"/><rect x="8" y="2" width="4" height="10" rx="1"/></svg>`;
    const replayIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7A5 5 0 1 0 5 3.5" stroke-linecap="round"/><path d="M3 2v3h3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    playBtn.innerHTML = playIcon + " Play Explainer";
    playBtn.addEventListener("click", () => {
      if (!playing) {
        if (audio.ended) { audio.currentTime = 0; lastStep = -2; activateStep(sceneType, stageEl, -1, steps); }
        audio.play();
        playing = true;
        playBtn.innerHTML = pauseIcon + " Pause";
      } else {
        audio.pause();
        playing = false;
        playBtn.innerHTML = playIcon + " Resume";
      }
    });
  }

  return { init, getSceneType };
})();
