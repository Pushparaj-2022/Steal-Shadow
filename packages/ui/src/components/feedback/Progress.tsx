"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "../../lib/utils";

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  variant?: "default" | "gradient" | "striped" | "glow";
  size?: "xs" | "sm" | "md" | "lg";
  label?: boolean;
  color?: string;
  animated?: boolean;
}

const sizeMap = { xs: "h-1", sm: "h-1.5", md: "h-2.5", lg: "h-4" };

export function Progress({
  value,
  max = 100,
  className,
  variant = "default",
  size = "md",
  label = false,
  animated = true,
}: ProgressProps) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100);
  const spring = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    spring.set(pct);
  }, [pct, spring]);

  const trackFill =
    variant === "gradient"
      ? "bg-gradient-to-r from-violet-500 to-indigo-500"
      : variant === "glow"
      ? "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.7)]"
      : "bg-violet-600";

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between text-xs text-neutral-500 mb-1.5">
          <span>Progress</span>
          <motion.span>{spring.get().toFixed(0)}%</motion.span>
        </div>
      )}
      <div
        className={cn("w-full rounded-full bg-neutral-100 overflow-hidden", sizeMap[size])}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <motion.div
          className={cn("h-full rounded-full origin-left", trackFill, variant === "striped" && "bg-stripes")}
          style={{ scaleX: animated ? spring : pct / 100, transformOrigin: "left" }}
          transition={animated ? undefined : { duration: 0 }}
        />
      </div>
    </div>
  );
}

interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  label?: boolean;
}

export function CircularProgress({ value, max = 100, size = 80, strokeWidth = 6, className, label = true }: CircularProgressProps) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100);
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const spring = useSpring(circ, { stiffness: 60, damping: 18 });

  useEffect(() => {
    spring.set(offset);
  }, [offset, spring]);

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e5e7eb" strokeWidth={strokeWidth} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#grad)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circ}
          style={{ strokeDashoffset: spring }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
      {label && (
        <span className="absolute text-sm font-semibold text-neutral-900" style={{ transform: "none" }}>
          {Math.round(pct)}%
        </span>
      )}
    </div>
  );
}
