import { useEffect, useRef } from 'react';

/*
  Full-page twinkling star background.
  - Tiny points of light (0.4px – 1.4px), mostly white with a few cyan / blue tints
  - Fixed to the viewport, so stars stay put while the page scrolls
  - Respects "reduce motion" (draws a static sky instead of animating)
*/
const COLORS = ['255,255,255', '255,255,255', '255,255,255', '170,225,255', '120,220,235'];

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let stars = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.round((width * height) / 22000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.4 + Math.random() * Math.random() * 1.1,   // mostly tiny, a few slightly bigger
        base: 0.35 + Math.random() * 0.55,               // base brightness
        speed: 0.4 + Math.random() * 1.6,                // twinkle speed
        phase: Math.random() * Math.PI * 2,
        vy: 0.12 + Math.random() * 0.28,                 // upward speed (px per frame)
        sway: Math.random() * 0.6 + 0.2,                 // side-to-side wobble size
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const draw = (time) => {
      const t = time / 1000;
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = reduceMotion ? 1 : 0.75 + 0.25 * Math.sin(t * s.speed + s.phase);
        const alpha = Math.max(0.08, s.base * twinkle);
        if (!reduceMotion) {
          s.y -= s.vy;
          s.x += Math.sin(t * 0.5 + s.phase) * 0.15 * s.sway;
          if (s.y < -2) { s.y = height + 2; s.x = Math.random() * width; }
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${alpha})`;
        if (s.r > 1) { ctx.shadowBlur = 6; ctx.shadowColor = `rgba(${s.color},.8)`; } else { ctx.shadowBlur = 0; }
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    build();
    frame = requestAnimationFrame(draw);

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { build(); if (reduceMotion) requestAnimationFrame(draw); }, 150);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-field" aria-hidden="true" />;
}
