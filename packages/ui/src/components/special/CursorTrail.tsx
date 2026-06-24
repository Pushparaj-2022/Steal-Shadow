"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface CursorTrailProps {
  color?: string;
  size?: number;
  length?: number;
  className?: string;
  children?: React.ReactNode;
}

export function CursorTrail({
  color = "139,92,246",
  size = 14,
  length = 22,
  className,
  children,
}: CursorTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trail = useRef<{ x: number; y: number }[]>([]);
  const mouse = useRef({ x: -200, y: -200 });
  const raf = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouse.current = { x: -200, y: -200 }; };

    canvas.parentElement?.addEventListener("mousemove", onMove);
    canvas.parentElement?.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.current.unshift({ ...mouse.current });
      if (trail.current.length > length) trail.current.length = length;

      trail.current.forEach((pt, i) => {
        const t = 1 - i / length;
        const r = size * t * 0.5;
        if (r < 0.5) return;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${t * 0.65})`;
        ctx.fill();
      });
      raf.current = requestAnimationFrame(draw);
    };
    raf.current = requestAnimationFrame(draw);

    return () => {
      canvas.parentElement?.removeEventListener("mousemove", onMove);
      canvas.parentElement?.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf.current);
    };
  }, [color, size, length]);

  return (
    <div className={cn("relative", className)}>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />
      {children}
    </div>
  );
}
