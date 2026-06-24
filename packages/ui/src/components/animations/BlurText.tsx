"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "../../lib/utils";

interface BlurTextProps {
  children: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "div";
  delay?: number;
  stagger?: number;
  once?: boolean;
  splitBy?: "words" | "chars";
  duration?: number;
  blurAmount?: number;
}

export function BlurText({
  children,
  className,
  as: Tag = "p",
  delay = 0,
  stagger = 0.06,
  once = true,
  splitBy = "words",
  duration = 0.6,
  blurAmount = 10,
}: BlurTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  const parts = splitBy === "words"
    ? children.split(" ")
    : children.split("");

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={cn(className)} aria-label={children}>
      {parts.map((part, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          style={splitBy === "words" ? { marginRight: "0.25em" } : undefined}
          initial={{ opacity: 0, filter: `blur(${blurAmount}px)`, y: 8 }}
          animate={inView
            ? { opacity: 1, filter: "blur(0px)", y: 0 }
            : { opacity: 0, filter: `blur(${blurAmount}px)`, y: 8 }
          }
          transition={{
            duration,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {part}
        </motion.span>
      ))}
    </Tag>
  );
}
