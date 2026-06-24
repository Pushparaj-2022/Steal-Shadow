"use client";

import { useScroll, useSpring, motion } from "motion/react";
import { cn } from "../../lib/utils";

interface ScrollProgressProps {
  position?: "top" | "bottom";
  color?: string;
  height?: number;
  className?: string;
}

export function ScrollProgress({
  position = "top",
  color = "#7c3aed",
  height = 3,
  className,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn("fixed left-0 right-0 z-50 origin-left", className)}
      style={{ [position]: 0, height, background: color, scaleX }}
    />
  );
}
