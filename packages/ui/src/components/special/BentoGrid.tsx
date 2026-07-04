"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}

export interface BentoCardProps {
  children?: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  header?: React.ReactNode;
  gradient?: string;
  href?: string;
}

const COLS_MAP = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const COL_SPAN_MAP = {
  1: "",
  2: "sm:col-span-2",
  3: "sm:col-span-2 lg:col-span-3",
};

export function BentoGrid({ children, cols = 3, className }: BentoGridProps) {
  return (
    <div className={cn("grid gap-4", COLS_MAP[cols], className)}>
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  title,
  description,
  icon,
  header,
  gradient,
}: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900",
        COL_SPAN_MAP[colSpan],
        className
      )}
      style={{
        gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined,
      }}
    >
      {/* Optional gradient wash */}
      {gradient && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
          style={{ background: gradient }}
        />
      )}
      {header && <div className="mb-4">{header}</div>}
      <div className="relative z-10 mt-auto">
        {icon && <div className="mb-3 text-3xl">{icon}</div>}
        {title && (
          <h3 className="mb-1 font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
        )}
        {children}
      </div>
    </motion.div>
  );
}
