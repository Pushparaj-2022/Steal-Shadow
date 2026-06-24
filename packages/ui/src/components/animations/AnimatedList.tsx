"use client";

import { Children } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface AnimatedListProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  itemClassName?: string;
}

export function AnimatedList({
  children,
  delay = 0.08,
  className,
  itemClassName,
}: AnimatedListProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      {Children.map(children, (child, i) => (
        <motion.div
          key={i}
          className={itemClassName}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{
            duration: 0.4,
            delay: i * delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
