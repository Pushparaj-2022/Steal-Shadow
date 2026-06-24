"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { cn } from "../../lib/utils";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  color: string;
  size: number;
  angle: number;
  spin: number;
  opacity: number;
}

export interface ConfettiProps {
  trigger?: boolean;
  count?: number;
  colors?: string[];
  gravity?: number;
  className?: string;
  children?: React.ReactNode;
}

export function Confetti({
  trigger,
  count = 120,
  colors = ["#7c3aed","#3b82f6","#10b981","#f59e0b","#ef4444","#ec4899"],
  gravity = 0.4,
  className,
  children,
}: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const raf = useRef(0);
  const [running, setRunning] = useState(false);

  const launch = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    particles.current = Array.from({ length: count }, () => ({
      x:  canvas.width  / 2,
      y:  canvas.height * 0.45,
      vx: (Math.random() - 0.5) * 20,
      vy: (Math.random() - 0.9) * 16,
      color:  colors[Math.floor(Math.random() * colors.length)],
      size:   Math.random() * 8 + 4,
      angle:  Math.random() * Math.PI * 2,
      spin:   (Math.random() - 0.5) * 0.3,
      opacity: 1,
    }));
    setRunning(true);
  }, [count, colors]);

  useEffect(() => { if (trigger) launch(); }, [trigger, launch]);

  useEffect(() => {
    if (!running) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles.current) {
        p.x += p.vx; p.y += p.vy;
        p.vy += gravity; p.vx *= 0.99;
        p.angle += p.spin; p.opacity -= 0.011;
        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          ctx.restore();
        }
      }
      if (alive) { raf.current = requestAnimationFrame(tick); }
      else { setRunning(false); }
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [running, gravity]);

  return (
    <div className={cn("relative", className)}>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
      {children && <div className="relative" onClick={launch}>{children}</div>}
    </div>
  );
}
