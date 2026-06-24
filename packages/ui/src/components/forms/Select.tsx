"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  searchable?: boolean;
  clearable?: boolean;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  error,
  disabled,
  className,
  searchable = false,
  clearable = false,
}: SelectProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = options.find((o) => o.value === value);
  const filtered = searchable
    ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  useEffect(() => {
    if (!open) { setSearch(""); setFocused(0); return; }
    if (searchable) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open, searchable]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleKey(e: React.KeyboardEvent) {
    if (disabled) return;
    switch (e.key) {
      case "Enter": case " ":
        e.preventDefault();
        if (!open) { setOpen(true); break; }
        if (filtered[focused] && !filtered[focused].disabled) {
          onChange?.(filtered[focused].value);
          setOpen(false);
        }
        break;
      case "Escape":
        setOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!open) { setOpen(true); break; }
        setFocused((f) => Math.min(f + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocused((f) => Math.max(f - 1, 0));
        break;
    }
  }

  return (
    <div className={cn("flex flex-col gap-1 w-full", className)} ref={containerRef}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          id={id}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          disabled={disabled}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={handleKey}
          className={cn(
            "w-full h-10 px-3 text-sm text-left rounded-xl border bg-white flex items-center justify-between gap-2 transition-colors",
            open ? "border-violet-500 ring-2 ring-violet-500/20" : "border-neutral-200",
            error && "border-red-400",
            disabled && "opacity-50 cursor-not-allowed bg-neutral-50",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          )}
        >
          <span className={cn("flex items-center gap-2 truncate", !selected && "text-neutral-400")}>
            {selected?.icon}
            {selected?.label ?? placeholder}
          </span>
          <span className="flex items-center gap-1 shrink-0">
            {clearable && selected && (
              <span
                role="button"
                aria-label="Clear selection"
                onClick={(e) => { e.stopPropagation(); onChange?.(""); }}
                className="text-neutral-400 hover:text-neutral-700 rounded p-0.5"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            )}
            <motion.svg
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="h-4 w-4 text-neutral-400"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute z-50 w-full mt-1 bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -6, scaleY: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            >
              {searchable && (
                <div className="p-2 border-b border-neutral-100">
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search…"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setFocused(0); }}
                    className="w-full text-sm px-2 py-1.5 rounded-lg border border-neutral-200 outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400"
                  />
                </div>
              )}
              <ul
                ref={listRef}
                role="listbox"
                aria-label={label}
                className="max-h-56 overflow-y-auto py-1"
              >
                {filtered.length === 0 && (
                  <li className="px-3 py-2 text-sm text-neutral-400 text-center">No options found</li>
                )}
                {filtered.map((opt, i) => (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={opt.value === value}
                    aria-disabled={opt.disabled}
                    onClick={() => {
                      if (opt.disabled) return;
                      onChange?.(opt.value);
                      setOpen(false);
                    }}
                    onMouseEnter={() => setFocused(i)}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 text-sm cursor-pointer transition-colors",
                      i === focused && !opt.disabled && "bg-violet-50 text-violet-700",
                      opt.value === value && "font-medium",
                      opt.disabled && "opacity-40 cursor-not-allowed"
                    )}
                  >
                    {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                    <div>
                      <div>{opt.label}</div>
                      {opt.description && <div className="text-xs text-neutral-400 mt-0.5">{opt.description}</div>}
                    </div>
                    {opt.value === value && (
                      <svg className="h-4 w-4 text-violet-600 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
