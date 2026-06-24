"use client";

import { useRef } from "react";
import { motion, useInView, type TargetAndTransition } from "motion/react";
import { cn } from "../../lib/utils";

type SplitBy = "words" | "chars";

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "div";
  splitBy?: SplitBy;
  delay?: number;
  stagger?: number;
  once?: boolean;
  from?: "bottom" | "top" | "left" | "right" | "fade";
  duration?: number;
}

export function SplitText({
  children,
  className,
  as: Tag = "p",
  splitBy = "words",
  delay = 0,
  stagger = 0.05,
  once = true,
  from = "bottom",
  duration = 0.5,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  const parts = splitBy === "words"
    ? children.split(" ")
    : children.split("");

  const hidden: Record<string, TargetAndTransition> = {
    bottom: { y: 24, opacity: 0 },
    top:    { y: -24, opacity: 0 },
    left:   { x: -24, opacity: 0 },
    right:  { x: 24, opacity: 0 },
    fade:   { opacity: 0 },
  };
  const visible = { y: 0, x: 0, opacity: 1 };

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={cn("overflow-hidden", className)} aria-label={children}>
      {parts.map((part, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          aria-hidden
          style={splitBy === "words" ? { marginRight: "0.25em" } : undefined}
        >
          <motion.span
            className="inline-block"
            initial={hidden[from]}
            animate={inView ? visible : hidden[from]}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {part}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
