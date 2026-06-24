"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

interface ParticleFieldProps {
  count?: number;
  color?: string;
  speed?: number;
  connectionDistance?: number;
  className?: string;
  interactive?: boolean;
}

export function ParticleField({
  count = 80,
  color = "99,102,241",
  speed = 0.4,
  connectionDistance = 120,
  className,
  interactive = true,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const particles = useRef<Particle[]>([]);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    function init() {
      particles.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed * 2,
        vy: (Math.random() - 0.5) * speed * 2,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${p.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${color},${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      if (interactive) {
        for (const p of particles.current) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance * 1.5) {
            const opacity = (1 - dist / (connectionDistance * 1.5)) * 0.6;
            ctx.beginPath();
            ctx.moveTo(mouse.current.x, mouse.current.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(${color},${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      rafId.current = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      init();
    });
    ro.observe(canvas);

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function onMouseLeave() {
      mouse.current = { x: -9999, y: -9999 };
    }

    if (interactive) {
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseleave", onMouseLeave);
    }

    init();
    draw();

    return () => {
      cancelAnimationFrame(rafId.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [count, color, speed, connectionDistance, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full", className)}
    />
  );
}
