"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

type ToolCallStatus = "pending" | "running" | "done" | "error";

interface ToolCallViewerProps {
  name: string;
  args?: Record<string, unknown>;
  result?: unknown;
  status?: ToolCallStatus;
  className?: string;
}

const statusBadgeClasses: Record<ToolCallStatus, string> = {
  pending:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  running: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  done: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  error: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

const statusLabel: Record<ToolCallStatus, string> = {
  pending: "pending",
  running: "running",
  done: "done",
  error: "error",
};

interface CollapseBlockProps {
  label: string;
  content: string;
  defaultOpen?: boolean;
}

function CollapseBlock({ label, content, defaultOpen = false }: CollapseBlockProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-t border-neutral-100 dark:border-neutral-800">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-4 py-2 text-left text-xs font-medium text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
      >
        <span>{label}</span>
        <svg
          className={cn(
            "h-3.5 w-3.5 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            <pre
              className={cn(
                "mx-4 mb-3 overflow-x-auto rounded-lg bg-neutral-50 p-3 text-xs leading-relaxed dark:bg-neutral-800",
                "text-neutral-700 dark:text-neutral-300"
              )}
            >
              <code>{content}</code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ToolCallViewer({
  name,
  args,
  result,
  status = "pending",
  className,
}: ToolCallViewerProps) {
  const badgeClass = statusBadgeClasses[status];
  const hasResult = result !== undefined;

  const argsJson = args !== undefined ? JSON.stringify(args, null, 2) : "{}";
  const resultJson = hasResult ? JSON.stringify(result, null, 2) : "";

  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3">
        {/* Status badge */}
        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
            badgeClass
          )}
        >
          {statusLabel[status]}
        </span>

        {/* Pulsing dot for running */}
        {status === "running" && (
          <motion.span
            className="inline-block h-2 w-2 shrink-0 rounded-full bg-blue-500"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        )}

        {/* Tool name */}
        <span className="min-w-0 flex-1 truncate font-mono text-sm font-medium text-neutral-800 dark:text-neutral-100">
          {name}
        </span>
      </div>

      {/* Arguments section */}
      {args !== undefined && (
        <CollapseBlock label="Arguments" content={argsJson} defaultOpen={false} />
      )}

      {/* Result section */}
      {hasResult && (
        <CollapseBlock label="Result" content={resultJson} defaultOpen={status === "done"} />
      )}
    </div>
  );
}
