"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  trigger?: "hover" | "click";
  direction?: "horizontal" | "vertical";
  duration?: number;
  defaultFlipped?: boolean;
  onFlip?: (flipped: boolean) => void;
}

export function FlipCard({
  front,
  back,
  className,
  trigger = "hover",
  direction = "horizontal",
  duration = 0.5,
  defaultFlipped = false,
  onFlip,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(defaultFlipped);

  const toggle = (val: boolean) => {
    setFlipped(val);
    onFlip?.(val);
  };

  const isHoriz = direction === "horizontal";
  const rotateAxis = isHoriz ? "rotateY" : "rotateX";

  const hoverProps = trigger === "hover"
    ? { onHoverStart: () => toggle(true), onHoverEnd: () => toggle(false) }
    : { onClick: () => toggle(!flipped) };

  return (
    <motion.div
      className={cn("relative cursor-pointer select-none", className)}
      style={{ perspective: 1000 }}
      {...hoverProps}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ [rotateAxis]: flipped ? 180 : 0 }}
        transition={{ duration, ease: [0.22, 0.68, 0, 1.2] }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 w-full h-full rounded-[inherit]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {front}
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 w-full h-full rounded-[inherit]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: isHoriz ? "rotateY(180deg)" : "rotateX(180deg)",
          }}
        >
          {back}
        </div>
      </motion.div>
    </motion.div>
  );
}
