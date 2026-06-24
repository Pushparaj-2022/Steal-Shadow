"use client";

import { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface AccordionContextValue {
  value: string | null;
  onChange: (v: string | null) => void;
  multiple: boolean;
  openItems: Set<string>;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

interface AccordionProps {
  children: React.ReactNode;
  defaultValue?: string;
  multiple?: boolean;
  className?: string;
}

export function Accordion({ children, defaultValue, multiple = false, className }: AccordionProps) {
  const [value, setValue] = useState<string | null>(defaultValue ?? null);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultValue ? [defaultValue] : []));

  function onChange(v: string | null) {
    if (multiple) {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (v === null) return next;
        next.has(v) ? next.delete(v) : next.add(v);
        return next;
      });
    } else {
      setValue((prev) => (prev === v ? null : v));
    }
  }

  return (
    <AccordionContext.Provider value={{ value, onChange, multiple, openItems }}>
      <div className={cn("flex flex-col divide-y divide-neutral-100 rounded-2xl border border-neutral-200 bg-white overflow-hidden", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({ value, title, children, className }: AccordionItemProps) {
  const ctx = useContext(AccordionContext)!;
  const isOpen = ctx.multiple ? ctx.openItems.has(value) : ctx.value === value;

  return (
    <div className={cn(className)}>
      <button
        onClick={() => ctx.onChange(value)}
        className="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="shrink-0 text-neutral-400 ml-2"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 text-sm text-neutral-600 leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
