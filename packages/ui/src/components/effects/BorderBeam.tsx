"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface BorderBeamProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export function BorderBeam({
  children,
  className,
  size = 80,
  duration = 3,
  delay = 0,
  colorFrom = "#8b5cf6",
  colorTo = "#3b82f6",
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      {/* Static border */}
      <div className="absolute inset-0 rounded-[inherit] border border-neutral-200" />

      {/* Animated beam */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `conic-gradient(from var(--beam-angle), transparent 0deg, transparent 300deg, ${colorFrom} 330deg, ${colorTo} 360deg)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: borderWidth,
        }}
        animate={{ "--beam-angle": ["0deg", "360deg"] } as Record<string, string[]>}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
      />

      {children}
    </div>
  );
}
