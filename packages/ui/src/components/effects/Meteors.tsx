"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface MeteorsProps {
  count?: number;
  className?: string;
  color?: string;
}

export function Meteors({ count = 15, className, color = "rgba(255,255,255,0.7)" }: MeteorsProps) {
  const meteors = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.floor(Math.random() * 100)}%`,
    delay: Math.random() * 4,
    duration: Math.random() * 2 + 1.5,
    size: Math.random() * 60 + 40,
  }));

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {meteors.map((m) => (
        <motion.span
          key={m.id}
          className="absolute top-0"
          style={{
            left: m.left,
            width: `${m.size}px`,
            height: "2px",
            borderRadius: "9999px",
            background: `linear-gradient(90deg, ${color}, transparent)`,
            boxShadow: `0 0 6px 1px ${color}`,
            rotate: "215deg",
            transformOrigin: "left center",
          }}
          animate={{
            x: ["0vw", "100vw"],
            y: ["0vh", "80vh"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: m.duration,
            repeat: Infinity,
            delay: m.delay,
            ease: "linear",
            repeatDelay: Math.random() * 4 + 2,
          }}
        />
      ))}
    </div>
  );
}
