"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface WaveTextProps {
  children: string;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
  amplitude?: number;
  duration?: number;
  stagger?: number;
  colors?: string[];
  trigger?: "always" | "hover";
}

export function WaveText({
  children,
  className,
  as: Tag = "span",
  amplitude = 10,
  duration = 1.2,
  stagger = 0.08,
  colors,
  trigger = "always",
}: WaveTextProps) {
  const chars = children.split("");

  const char = (c: string, i: number) => {
    const color = colors ? colors[i % colors.length] : undefined;
    const motionProps =
      trigger === "always"
        ? {
            animate: { y: [0, -amplitude, 0] },
            transition: {
              duration,
              delay: i * stagger,
              repeat: Infinity,
              ease: "easeInOut" as const,
            },
          }
        : {
            whileHover: { y: -amplitude },
            transition: { type: "spring" as const, stiffness: 400, damping: 12 },
          };

    return (
      <motion.span
        key={i}
        className="inline-block"
        style={color ? { color } : undefined}
        {...motionProps}
      >
        {c === " " ? " " : c}
      </motion.span>
    );
  };

  return (
    <Tag className={cn("inline-flex flex-wrap", className)} aria-label={children}>
      {chars.map((c, i) => char(c, i))}
    </Tag>
  );
}
