"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface SpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "ring" | "dots" | "bars" | "pulse";
  className?: string;
  color?: string;
}

const sizeMap = { xs: 12, sm: 16, md: 24, lg: 36, xl: 48 };

export function Spinner({ size = "md", variant = "ring", className, color = "currentColor" }: SpinnerProps) {
  const px = sizeMap[size];

  if (variant === "dots") {
    return (
      <span className={cn("inline-flex items-center gap-1", className)}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="rounded-full bg-current"
            style={{ width: px / 3, height: px / 3 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, delay: i * 0.18, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </span>
    );
  }

  if (variant === "bars") {
    return (
      <span className={cn("inline-flex items-end gap-0.5", className)} style={{ height: px }}>
        {[0, 1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="rounded-sm bg-current w-1"
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 0.7, delay: i * 0.12, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "bottom", height: px }}
          />
        ))}
      </span>
    );
  }

  if (variant === "pulse") {
    return (
      <span className={cn("relative inline-flex", className)} style={{ width: px, height: px }}>
        <motion.span
          className="absolute inset-0 rounded-full bg-current"
          animate={{ scale: [1, 2], opacity: [0.6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative rounded-full bg-current" style={{ width: px, height: px }} />
      </span>
    );
  }

  return (
    <motion.span
      className={cn("inline-block rounded-full border-2 border-current border-t-transparent", className)}
      style={{ width: px, height: px }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
    />
  );
}
