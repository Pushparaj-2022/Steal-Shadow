"use client";

import { useState, useRef, useEffect, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export type ComboboxOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type ComboboxProps = {
  options: ComboboxOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export function Combobox({
  options,
  value,
  onChange,
  placeholder = "Search…",
  disabled = false,
  className,
}: ComboboxProps) {
  const id = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  const filtered = query.trim()
    ? options.filter((o) =>
        o.label.toLowerCase().includes(query.trim().toLowerCase())
      )
    : options;

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) {
      setHighlighted(-1);
    }
  }, [open]);

  const selectOption = (option: ComboboxOption) => {
    if (option.disabled) return;
    onChange(option.value);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setHighlighted(-1);
    if (!open) setOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((prev) => {
          const next = prev < filtered.length - 1 ? prev + 1 : 0;
          scrollHighlightedIntoView(next);
          return next;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((prev) => {
          const next = prev > 0 ? prev - 1 : filtered.length - 1;
          scrollHighlightedIntoView(next);
          return next;
        });
        break;
      case "Enter":
        e.preventDefault();
        if (highlighted >= 0 && filtered[highlighted]) {
          selectOption(filtered[highlighted]);
        }
        break;
      case "Escape":
        setOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const scrollHighlightedIntoView = (index: number) => {
    const list = listRef.current;
    if (!list) return;
    const item = list.children[index] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  };

  const displayValue = open ? query : (selectedOption?.label ?? query);

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-3 py-2 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-neutral-900 focus-within:ring-offset-1",
          disabled && "pointer-events-none opacity-50"
        )}
      >
        <input
          ref={inputRef}
          id={id}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={`${id}-listbox`}
          aria-autocomplete="list"
          disabled={disabled}
          value={displayValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 outline-none"
        />
        <button
          type="button"
          tabIndex={-1}
          aria-label="Toggle dropdown"
          onClick={() => {
            if (disabled) return;
            setOpen((prev) => !prev);
            if (!open) inputRef.current?.focus();
          }}
          className="text-neutral-400 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={`${id}-listbox`}
            role="listbox"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg"
          >
            <div className="max-h-60 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <li className="px-4 py-2.5 text-sm text-neutral-400 select-none">
                  No results found
                </li>
              ) : (
                filtered.map((option, index) => {
                  const isSelected = option.value === value;
                  const isHighlighted = index === highlighted;

                  return (
                    <li
                      key={option.value}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled}
                      onClick={() => selectOption(option)}
                      onMouseEnter={() => setHighlighted(index)}
                      className={cn(
                        "flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm select-none transition-colors",
                        isHighlighted && !option.disabled
                          ? "bg-neutral-100 text-neutral-900"
                          : "text-neutral-700",
                        option.disabled &&
                          "pointer-events-none opacity-40 cursor-not-allowed",
                        isSelected && "font-medium text-neutral-900"
                      )}
                    >
                      <span>{option.label}</span>
                      {isSelected && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 text-neutral-900 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </li>
                  );
                })
              )}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
