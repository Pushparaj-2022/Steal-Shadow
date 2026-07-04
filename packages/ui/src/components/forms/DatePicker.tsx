"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { Calendar } from "../data/Calendar";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  formatDate?: (date: Date) => string;
  disabled?: boolean;
  className?: string;
}

const defaultFormatDate = (date: Date) => date.toLocaleDateString();

export function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  formatDate = defaultFormatDate,
  disabled = false,
  className,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSelect = (date: Date) => {
    onChange?.(date);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative inline-flex w-full max-w-xs", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={cn(
          "flex h-10 w-full items-center justify-between gap-2 rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-900 outline-none transition-colors",
          "focus-visible:ring-2 focus-visible:ring-violet-500",
          disabled ? "cursor-not-allowed opacity-50" : "hover:border-neutral-300"
        )}
      >
        <span className={cn("truncate", !value && "text-neutral-400")}>
          {value ? formatDate(value) : placeholder}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="shrink-0 text-neutral-400"
        >
          <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 6.5H14" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 1.5V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 1.5V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute left-0 top-full z-50 mt-2 max-w-[calc(100vw-2rem)] origin-top"
          >
            <Calendar value={value} onChange={handleSelect} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
