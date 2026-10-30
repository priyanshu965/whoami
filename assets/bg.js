// Animated "cyber" backdrop: drifting network nodes with links, occasional
// packet pulses travelling along links, and a faint hex/binary rain layer.
// Usage: <canvas id="cyber-bg"></canvas> + this script.
(function () {
  const canvas = document.getElementById("cyber-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, dpr, nodes, packets, glyphs;
  const LINK_DIST = 150;
  const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent-rgb").trim() || "0, 229, 160";

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth = window.innerWidth;
    h = canvas.clientHeight = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.round(Math.min(90, (w * h) / 16000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.6,
    }));
    packets = [];
    glyphs = Array.from({ length: Math.round(w / 60) }, () => newGlyph(true));
  }

  function newGlyph(randomY) {
    const chars = "01ABCDEF";
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : -20,
      speed: Math.random() * 0.4 + 0.15,
      text: Array.from({ length: 6 }, () => chars[(Math.random() * chars.length) | 0]).join(""),
      alpha: Math.random() * 0.08 + 0.03,
    };
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    ctx.font = "12px 'JetBrains Mono', monospace";
    for (const g of glyphs) {
      ctx.fillStyle = `rgba(${accent}, ${g.alpha})`;
      ctx.fillText(g.text, g.x, g.y);
      g.y += g.speed;
      if (g.y > h + 20) Object.assign(g, newGlyph(false));
    }

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK_DIST) {
          ctx.strokeStyle = `rgba(${accent}, ${0.14 * (1 - d / LINK_DIST)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          if (Math.random() < 0.0004 && packets.length < 12) packets.push({ a, b, t: 0 });
        }
      }
    }

    for (const n of nodes) {
      ctx.fillStyle = `rgba(${accent}, 0.55)`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }

    packets = packets.filter((p) => p.t <= 1);
    for (const p of packets) {
      p.t += 0.015;
      const x = p.a.x + (p.b.x - p.a.x) * p.t;
      const y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.fillStyle = `rgba(${accent}, 0.9)`;
      ctx.shadowColor = `rgba(${accent}, 1)`;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    if (!reduceMotion) requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  resize();
  step();
})();
