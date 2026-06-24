"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface RippleProps {
  className?: string;
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  color?: string;
}

export function Ripple({
  className,
  mainCircleSize = 180,
  mainCircleOpacity = 0.3,
  numCircles = 7,
  color = "139,92,246",
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: `rgba(${color},0.4)`,
              backgroundColor: `rgba(${color},${Math.max(0, 0.05 - i * 0.005)})`,
            }}
            animate={{
              scale: [0.9, 1.06, 0.9],
              opacity: [opacity, opacity * 0.5, opacity],
            }}
            transition={{
              duration: 3.5 + i * 0.2,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
