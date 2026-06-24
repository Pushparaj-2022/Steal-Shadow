"use client";

import { useRef, useState, useEffect, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown, Check, Search } from "lucide-react";
import { cn } from "../../lib/utils";

export interface MultiSelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  maxVisible?: number;
  disabled?: boolean;
  className?: string;
  label?: string;
  noOptionsText?: string;
}

export function MultiSelect({
  options,
  value: controlled,
  onChange,
  placeholder = "Select options…",
  searchPlaceholder = "Search…",
  maxVisible,
  disabled = false,
  className,
  label,
  noOptionsText = "No options found",
}: MultiSelectProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>(controlled ?? []);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const values = controlled ?? selected;

  const update = (next: string[]) => {
    setSelected(next);
    onChange?.(next);
  };

  const toggle = (val: string) => {
    update(values.includes(val) ? values.filter((v) => v !== val) : [...values, val]);
  };

  const remove = (val: string) => update(values.filter((v) => v !== val));

  const filtered = options.filter(
    (o) =>
      !search ||
      o.label.toLowerCase().includes(search.toLowerCase()) ||
      o.description?.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard nav
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") { e.preventDefault(); setOpen(true); }
      return;
    }
    if (e.key === "Escape") { setOpen(false); setSearch(""); }
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, -1)); }
    if (e.key === "Enter" && activeIndex >= 0 && filtered[activeIndex]) {
      e.preventDefault();
      if (!filtered[activeIndex].disabled) toggle(filtered[activeIndex].value);
    }
    if (e.key === "Backspace" && !search && values.length) {
      remove(values[values.length - 1]);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setActiveIndex(-1); }, [search]);
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 50); }, [open]);

  const selectedOptions = options.filter((o) => values.includes(o.value));
  const visibleSelected = maxVisible ? selectedOptions.slice(0, maxVisible) : selectedOptions;
  const hiddenCount = maxVisible ? Math.max(0, selectedOptions.length - maxVisible) : 0;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-neutral-700">
          {label}
        </label>
      )}

      {/* Trigger */}
      <div
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={() => !disabled && setOpen((o) => !o)}
        className={cn(
          "flex min-h-[44px] w-full cursor-pointer flex-wrap items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm transition-all outline-none",
          "hover:border-neutral-300 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-100",
          open && "border-blue-400 ring-2 ring-blue-100",
          disabled && "cursor-not-allowed opacity-50 bg-neutral-50"
        )}
      >
        {/* Selected tokens */}
        <AnimatePresence mode="popLayout">
          {visibleSelected.map((opt) => (
            <motion.span
              key={opt.value}
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700"
            >
              {opt.icon && <span className="[&>svg]:h-3 [&>svg]:w-3">{opt.icon}</span>}
              {opt.label}
              <button
                type="button"
                onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); remove(opt.value); }}
                className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-blue-200 transition-colors"
                aria-label={`Remove ${opt.label}`}
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </motion.span>
          ))}
        </AnimatePresence>

        {hiddenCount > 0 && (
          <span className="inline-flex items-center rounded-lg bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-600">
            +{hiddenCount}
          </span>
        )}

        {values.length === 0 && (
          <span className="text-neutral-400">{placeholder}</span>
        )}

        <ChevronDown
          className={cn("ml-auto h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200", open && "rotate-180")}
        />
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 z-50 mt-1.5 rounded-xl border border-neutral-200 bg-white shadow-xl overflow-hidden"
          >
            {/* Search */}
            <div className="flex items-center gap-2 border-b border-neutral-100 px-3 py-2.5">
              <Search className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={searchPlaceholder}
                className="w-full bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 outline-none"
              />
            </div>

            {/* Options */}
            <div className="max-h-56 overflow-y-auto py-1" role="listbox" aria-multiselectable>
              {filtered.length === 0 ? (
                <p className="py-6 text-center text-sm text-neutral-400">{noOptionsText}</p>
              ) : (
                filtered.map((opt, i) => {
                  const isSelected = values.includes(opt.value);
                  return (
                    <motion.button
                      key={opt.value}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      disabled={opt.disabled}
                      onMouseDown={(e) => { e.preventDefault(); if (!opt.disabled) toggle(opt.value); }}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={cn(
                        "flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors",
                        activeIndex === i && !isSelected ? "bg-neutral-50" : "",
                        isSelected ? "bg-blue-50" : "",
                        opt.disabled ? "pointer-events-none opacity-40" : "hover:bg-neutral-50 cursor-pointer"
                      )}
                      whileTap={{ scale: 0.99 }}
                    >
                      {/* Checkbox */}
                      <span className={cn(
                        "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                        isSelected ? "border-blue-500 bg-blue-500" : "border-neutral-300"
                      )}>
                        {isSelected && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                      </span>

                      {opt.icon && <span className="shrink-0 text-neutral-500 [&>svg]:h-4 [&>svg]:w-4">{opt.icon}</span>}

                      <div className="flex-1 min-w-0">
                        <p className={cn("text-sm font-medium truncate", isSelected ? "text-blue-700" : "text-neutral-800")}>{opt.label}</p>
                        {opt.description && <p className="text-xs text-neutral-400 truncate">{opt.description}</p>}
                      </div>
                    </motion.button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {values.length > 0 && (
              <div className="border-t border-neutral-100 px-3 py-2 flex items-center justify-between">
                <span className="text-xs text-neutral-400">{values.length} selected</span>
                <button
                  type="button"
                  onMouseDown={(e) => { e.preventDefault(); update([]); }}
                  className="text-xs text-red-500 font-medium hover:text-red-700 transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
