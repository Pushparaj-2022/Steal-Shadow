"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IcPlus } from "@/components/icons";

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 dark:border-zinc-800 last:border-0">
      <button onClick={() => setOpen((o) => !o)} className="group flex w-full items-center justify-between gap-6 py-5 text-left">
        <span className="text-sm font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-400"
        >
          <IcPlus className="h-3 w-3" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
