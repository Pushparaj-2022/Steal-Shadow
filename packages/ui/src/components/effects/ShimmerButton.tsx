"use client";

import { cn } from "../../lib/utils";
import { motion } from "motion/react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  background?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: number;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  background = "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #6366f1 100%)",
  shimmerSize = "0.05em",
  borderRadius = "12px",
  shimmerDuration = 1.5,
  disabled,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden px-6 py-3 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      style={{ background, borderRadius }}
      {...props}
    >
      {/* Shimmer overlay */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: `linear-gradient(90deg, transparent 30%, ${shimmerColor}50 50%, transparent 70%)`,
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% center", "-200% center"] }}
        transition={{
          duration: shimmerDuration,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 0.5,
        }}
      />

      {/* Top shine */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${shimmerColor}60, transparent)` }}
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}
