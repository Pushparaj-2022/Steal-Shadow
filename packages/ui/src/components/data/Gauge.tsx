"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface GaugeProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  label?: string;
  color?: string;
  trackColor?: string;
  className?: string;
}

const sizes = {
  sm: { dim: 80,  stroke: 7,  font: "text-lg font-bold" },
  md: { dim: 120, stroke: 9,  font: "text-2xl font-bold" },
  lg: { dim: 160, stroke: 11, font: "text-3xl font-bold" },
};

export function Gauge({
  value,
  max = 100,
  size = "md",
  showValue = true,
  label,
  color = "#7c3aed",
  trackColor = "#e5e7eb",
  className,
}: GaugeProps) {
  const { dim, stroke, font } = sizes[size];
  const r  = (dim - stroke * 2) / 2;
  const cx = dim / 2;
  const circumference = 2 * Math.PI * r;
  const pct = Math.min(Math.max(value / max, 0), 1);
  const offset = circumference * (1 - pct);

  return (
    <div className={cn("inline-flex flex-col items-center gap-2", className)}>
      <div className="relative" style={{ width: dim, height: dim }}>
        <svg
          width={dim}
          height={dim}
          viewBox={`0 0 ${dim} ${dim}`}
          fill="none"
          style={{ transform: "rotate(-90deg)" }}
        >
          {/* Track */}
          <circle cx={cx} cy={cx} r={r} stroke={trackColor} strokeWidth={stroke} />
          {/* Progress arc */}
          <motion.circle
            cx={cx} cy={cx} r={r}
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </svg>
        {showValue && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={cn("tabular-nums text-zinc-900 dark:text-zinc-100", font)}>
              {Math.round(pct * max)}
            </span>
            {max !== 100 && (
              <span className="text-xs text-zinc-400">/ {max}</span>
            )}
          </div>
        )}
      </div>
      {label && (
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{label}</span>
      )}
    </div>
  );
}
