"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiplier?: number;
  className?: string;
  wordClassName?: string;
}

export function WordPullUp({
  words,
  delayMultiplier = 0.08,
  className,
  wordClassName,
}: WordPullUpProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex flex-wrap gap-x-[0.4em]">
        {words.split(" ").map((word, i) => (
          <span key={i} className="overflow-hidden">
            <motion.span
              className={cn("inline-block", wordClassName)}
              initial={{ y: "110%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * delayMultiplier,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
    </div>
  );
}
