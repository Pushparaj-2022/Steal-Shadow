"use client";

import { cn } from "../../lib/utils";
import { motion, type HTMLMotionProps } from "motion/react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  blur?: "sm" | "md" | "lg" | "xl" | "2xl";
  border?: boolean;
  glow?: boolean;
  glowColor?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  blur = "xl",
  border = true,
  glow = false,
  glowColor = "rgba(139,92,246,0.3)",
  hover = false,
  ...props
}: GlassCardProps) {
  const blurMap = {
    sm:  "backdrop-blur-sm",
    md:  "backdrop-blur-md",
    lg:  "backdrop-blur-lg",
    xl:  "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.015, y: -2 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={glow ? ({ "--glow": glowColor } as React.CSSProperties) : undefined}
      className={cn(
        "relative rounded-2xl bg-white/10",
        blurMap[blur],
        border && "border border-white/20",
        glow && "shadow-[0_0_40px_var(--glow)]",
        hover && "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
