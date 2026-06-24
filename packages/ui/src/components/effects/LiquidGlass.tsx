"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "motion/react";
import { cn } from "../../lib/utils";

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  intensity?: "low" | "medium" | "high";
  as?: "div" | "button";
  onClick?: () => void;
}

export function LiquidGlass({
  children,
  className,
  color = "#8b5cf6",
  intensity = "medium",
  as: Tag = "div",
  onClick,
}: LiquidGlassProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 150, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const scaleMap = { low: 1.05, medium: 1.12, high: 1.2 };
  const scale = scaleMap[intensity];

  const blobX = useTransform(x, [0, 1], ["20%", "80%"]);
  const blobY = useTransform(y, [0, 1], ["20%", "80%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={cn("relative overflow-hidden rounded-2xl", onClick && "cursor-pointer", className)}
    >
      {/* Liquid blob */}
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: blobX,
          top: blobY,
          width: "120%",
          paddingTop: "120%",
          background: `radial-gradient(circle at center, ${color}88 0%, ${color}22 60%, transparent 80%)`,
          filter: "blur(24px)",
        }}
        animate={{
          scale: hovered ? scale : 1,
          opacity: hovered ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      />

      {/* Frosted glass layer */}
      <div className="relative z-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
