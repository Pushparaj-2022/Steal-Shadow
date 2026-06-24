"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface FloatingItem {
  content: React.ReactNode;
  x?: string;
  y?: string;
  delay?: number;
  duration?: number;
  amplitude?: number;
}

interface FloatingElementsProps {
  items: FloatingItem[];
  className?: string;
}

export function FloatingElements({ items, className }: FloatingElementsProps) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: item.x ?? "50%", top: item.y ?? "50%" }}
          animate={{
            y: [0, -(item.amplitude ?? 16), 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: item.duration ?? 4,
            delay: item.delay ?? i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.content}
        </motion.div>
      ))}
    </div>
  );
}
