"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "../../lib/utils";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right";
  splitBy?: "word" | "char" | "line";
  once?: boolean;
}

export function RevealText({
  children,
  className,
  delay = 0,
  stagger = 0.04,
  direction = "up",
  splitBy = "word",
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  const units =
    splitBy === "char"
      ? children.split("")
      : splitBy === "word"
      ? children.split(" ")
      : children.split("\n");

  const hidden = {
    opacity: 0,
    y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
    x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
  };

  const visible = { opacity: 1, y: 0, x: 0 };

  return (
    <span ref={ref} className={cn("inline", className)} aria-label={children}>
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden" aria-hidden>
          <motion.span
            className="inline-block"
            initial={hidden}
            animate={inView ? visible : hidden}
            transition={{
              duration: 0.5,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {unit}
            {splitBy === "word" && i < units.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
