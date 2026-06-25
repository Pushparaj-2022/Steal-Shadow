"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "../../lib/utils";

interface GlowingOrbProps {
  color?: string;
  size?: number;
  blur?: number;
  opacity?: number;
  stiffness?: number;
  damping?: number;
  followMouse?: boolean;
  /**
   * false (default) — position:fixed, follows the global cursor across the whole page.
   * true            — position:absolute relative to the nearest positioned parent,
   *                   follows the cursor only within that parent. The parent must have
   *                   position:relative and overflow:hidden.
   */
  contained?: boolean;
  className?: string;
}

export function GlowingOrb({
  color = "#8b5cf6",
  size = 500,
  blur = 100,
  opacity = 0.12,
  stiffness = 60,
  damping = 20,
  followMouse = true,
  contained = false,
  className,
}: GlowingOrbProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness, damping });
  const y = useSpring(mouseY, { stiffness, damping });

  // Set initial centre position
  useEffect(() => {
    if (contained) {
      const parent = wrapRef.current?.parentElement;
      if (parent) {
        const r = parent.getBoundingClientRect();
        mouseX.set(r.width / 2);
        mouseY.set(r.height / 2);
      }
    } else {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
  // run once on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contained]);

  // Track cursor
  useEffect(() => {
    if (!followMouse) return;

    if (contained) {
      // Listen on the parent so pointer-events-none on our div doesn't block events
      const parent = wrapRef.current?.parentElement;
      if (!parent) return;
      const onMove = (e: MouseEvent) => {
        const r = parent.getBoundingClientRect();
        mouseX.set(e.clientX - r.left);
        mouseY.set(e.clientY - r.top);
      };
      parent.addEventListener("mousemove", onMove, { passive: true });
      return () => parent.removeEventListener("mousemove", onMove);
    } else {
      const onMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      return () => window.removeEventListener("mousemove", onMove);
    }
  }, [followMouse, contained, mouseX, mouseY]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={cn(
        "pointer-events-none overflow-hidden",
        contained ? "absolute inset-0" : "fixed inset-0 z-0",
        className,
      )}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle at center, ${color}cc 0%, ${color}44 40%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          opacity,
        }}
      />
    </div>
  );
}
