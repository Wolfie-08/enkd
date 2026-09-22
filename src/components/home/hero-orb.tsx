"use client";
import { useEffect, useRef } from "react";

// Dotted sphere drawn at device resolution, so it stays sharp at any size.
// Motion: slow spin on a tilted axis, a scan band sweeping the longitude, and a faint breath.
const DOTS = 2600;
const TILT = 0.45; // radians
const SPIN = 0.00022; // radians per ms
const SCAN_PERIOD = 4200; // ms per sweep
const SCAN_WIDTH = 0.35; // radians
const AMBER = [245, 165, 36];

// Fibonacci sphere, unit radius: x,y,z triples.
function spherePoints(n: number) {
  const pts = new Float32Array(n * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    pts[i * 3] = Math.cos(t) * r;
    pts[i * 3 + 1] = y;
    pts[i * 3 + 2] = Math.sin(t) * r;
  }
  return pts;
}

export function HeroOrb({ label, className }: { label: string; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const pts = spherePoints(DOTS);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dpr = 1;
    let raf = 0;
    let visible = true;

    const draw = (t: number) => {
      const w = canvas.width;
      const c = w / 2;
      ctx.clearRect(0, 0, w, w);
      const R = c * 0.82 * (1 + 0.02 * Math.sin(t / 1800));
      const a = t * SPIN;
      const ca = Math.cos(a), sa = Math.sin(a), ct = Math.cos(TILT), st = Math.sin(TILT);
      const scan = ((t % SCAN_PERIOD) / SCAN_PERIOD) * Math.PI * 2 - Math.PI;
      for (let i = 0; i < DOTS; i++) {
        const x = pts[i * 3], y = pts[i * 3 + 1], z = pts[i * 3 + 2];
        const x1 = x * ca - z * sa;
        const z1 = x * sa + z * ca;
        const y2 = y * ct - z1 * st;
        const z2 = y * st + z1 * ct;
        const depth = (z2 + 1) / 2; // 0 back, 1 front
        let d = Math.abs(Math.atan2(z1, x1) - scan);
        if (d > Math.PI) d = Math.PI * 2 - d;
        const hit = Math.max(0, 1 - d / SCAN_WIDTH);
        const alpha = Math.min(1, 0.1 + depth * 0.7 + hit * 0.3);
        const rad = (0.55 + depth * 1.25 + hit * 0.8) * dpr;
        const mix = hit * 0.6; // scan band lifts dots toward white
        ctx.fillStyle = `rgba(${AMBER[0] + (255 - AMBER[0]) * mix | 0},${AMBER[1] + (255 - AMBER[1]) * mix | 0},${AMBER[2] + (255 - AMBER[2]) * mix | 0},${alpha})`;
        ctx.beginPath();
        ctx.arc(c + x1 * R, c + y2 * R, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf && visible && !reduce && !document.hidden) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.height = Math.round(canvas.clientWidth * dpr);
      draw(performance.now());
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start(); else stop();
    });
    const ro = new ResizeObserver(resize);
    const onVisibility = () => (document.hidden ? stop() : start());
    io.observe(canvas);
    ro.observe(canvas);
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    start();
    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} role="img" aria-label={label} className={className} />;
}
