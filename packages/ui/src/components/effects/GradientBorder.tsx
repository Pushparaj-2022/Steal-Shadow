"use client";

import { cn } from "../../lib/utils";
import { motion } from "motion/react";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  gradient?: string;
  borderWidth?: number;
  borderRadius?: string;
  animated?: boolean;
  duration?: number;
}

export function GradientBorder({
  children,
  className,
  innerClassName,
  gradient = "linear-gradient(135deg, #8b5cf6, #3b82f6, #10b981, #8b5cf6)",
  borderWidth = 2,
  borderRadius = "16px",
  animated = true,
  duration = 4,
}: GradientBorderProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ padding: borderWidth, borderRadius, background: gradient }}
    >
      {animated && (
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{
            borderRadius,
            background: `conic-gradient(from 0deg, #8b5cf6, #3b82f6, #10b981, #8b5cf6)`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        />
      )}
      <div
        className={cn("relative z-10 rounded-[inherit] bg-white dark:bg-neutral-950", innerClassName)}
        style={{ borderRadius: `calc(${borderRadius} - ${borderWidth}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
