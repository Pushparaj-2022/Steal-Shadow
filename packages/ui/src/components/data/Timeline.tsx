"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

export type TimelineItem = {
  id: string | number;
  title: string;
  description?: string;
  time?: string;
  icon?: ReactNode;
  status?: "completed" | "active" | "pending";
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

const dotStyles: Record<string, string> = {
  completed:
    "bg-emerald-500 border-emerald-500 text-white",
  active:
    "bg-blue-500 border-blue-500 text-white",
  pending:
    "bg-white border-zinc-300 text-zinc-400",
};

const lineStyles: Record<string, string> = {
  completed: "bg-emerald-300",
  active: "bg-blue-200",
  pending: "bg-zinc-200",
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("flex flex-col", className)} aria-label="Timeline">
      {items.map((item, index) => {
        const status = item.status ?? "pending";
        const isLast = index === items.length - 1;

        return (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 24,
              delay: index * 0.08,
            }}
            className="relative flex gap-4"
          >
            {/* Left column: dot + line */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold",
                  dotStyles[status]
                )}
              >
                {item.icon ? (
                  item.icon
                ) : status === "completed" ? (
                  <CheckIcon />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              {!isLast && (
                <div
                  className={cn("mt-1 w-0.5 flex-1 min-h-6", lineStyles[status])}
                />
              )}
            </div>

            {/* Content */}
            <div className={cn("flex-1 pb-8", isLast && "pb-0")}>
              <div className="flex items-start justify-between gap-2 pt-1">
                <p
                  className={cn(
                    "min-w-0 text-sm font-semibold leading-tight",
                    status === "pending"
                      ? "text-neutral-400"
                      : "text-neutral-900"
                  )}
                >
                  {item.title}
                </p>
                {item.time && (
                  <time className="shrink-0 text-xs text-neutral-400">
                    {item.time}
                  </time>
                )}
              </div>
              {item.description && (
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              )}
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
