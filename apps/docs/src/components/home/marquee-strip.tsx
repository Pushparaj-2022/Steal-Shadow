"use client";

import { motion } from "motion/react";

const STRIP_A = ["Button","Modal","DataTable","ChatUI","KanbanBoard","SmartForm","FileUploader","Tooltip","Combobox","Drawer","Toast","RichEditor","PromptEditor","ThemeProvider","AgentStatus","CodeBlock"];
const STRIP_B = ["StreamingText","Badge","Avatar","Progress","Skeleton","Accordion","Tabs","Pagination","DatePicker","CommandMenu","Popover","Switch","Calendar","Select","ToolCallViewer","Sheet"];

export function MarqueeStrip() {
  return (
    <div className="border-y border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/40 py-5 space-y-3 overflow-hidden">
      {[{ row: STRIP_A, fwd: true, dur: 38 }, { row: STRIP_B, fwd: false, dur: 30 }].map(({ row, fwd, dur }, i) => {
        const d = [...row, ...row];
        return (
          <div key={i} className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent" />
            <motion.div
              animate={{ x: fwd ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
              className="flex gap-2.5 w-max"
            >
              {d.map((name, j) => (
                <span key={j} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/60 px-3.5 py-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400/60 dark:bg-blue-500/50 shrink-0" />
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
