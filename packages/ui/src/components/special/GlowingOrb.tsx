"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "../../lib/utils";

interface GlowingOrbProps {
  color?: string;
  size?: number;
  blur?: number;
  opacity?: number;
  stiffness?: number;
  damping?: number;
  className?: string;
  followMouse?: boolean;
}

export function GlowingOrb({
  color = "#8b5cf6",
  size = 500,
  blur = 100,
  opacity = 0.12,
  stiffness = 60,
  damping = 20,
  className,
  followMouse = true,
}: GlowingOrbProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness, damping });
  const y = useSpring(mouseY, { stiffness, damping });

  useEffect(() => {
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!followMouse) return;
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [followMouse, mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 z-0 overflow-hidden", className)}
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
    </motion.div>
  );
}
