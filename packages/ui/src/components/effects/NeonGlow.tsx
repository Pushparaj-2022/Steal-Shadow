"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

type NeonColor = "violet" | "blue" | "cyan" | "green" | "pink" | "orange";

interface NeonGlowProps {
  children: React.ReactNode;
  className?: string;
  color?: NeonColor;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
  pulse?: boolean;
  border?: boolean;
}

const COLORS: Record<NeonColor, { text: string; glow: string; border: string }> = {
  violet: { text: "text-violet-400", glow: "rgba(167,139,250,0.8)", border: "border-violet-400/60" },
  blue:   { text: "text-blue-400",   glow: "rgba(96,165,250,0.8)",  border: "border-blue-400/60"   },
  cyan:   { text: "text-cyan-400",   glow: "rgba(34,211,238,0.8)",  border: "border-cyan-400/60"   },
  green:  { text: "text-green-400",  glow: "rgba(74,222,128,0.8)",  border: "border-green-400/60"  },
  pink:   { text: "text-pink-400",   glow: "rgba(244,114,182,0.8)", border: "border-pink-400/60"   },
  orange: { text: "text-orange-400", glow: "rgba(251,146,60,0.8)",  border: "border-orange-400/60" },
};

export function NeonGlow({
  children,
  className,
  color = "violet",
  as: Tag = "span",
  pulse = false,
  border = false,
}: NeonGlowProps) {
  const { text, glow, border: borderColor } = COLORS[color];
  const shadow = `0 0 8px ${glow}, 0 0 20px ${glow.replace("0.8", "0.5")}, 0 0 40px ${glow.replace("0.8", "0.2")}`;

  return (
    <motion.div
      animate={pulse ? { opacity: [1, 0.7, 1] } : undefined}
      transition={pulse ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : undefined}
      style={{ display: "contents" }}
    >
      <Tag
        className={cn(
          text,
          border && `border rounded-lg px-3 py-1.5 ${borderColor}`,
          className
        )}
        style={{ textShadow: shadow, ...(border ? { boxShadow: shadow.replace(/text/g, "box") } : {}) }}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
