"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

export interface DropdownMenuItem {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  separator?: boolean;
  onSelect?: () => void;
}

type Align = "start" | "end";

type DropdownMenuProps = {
  trigger: ReactNode;
  items: DropdownMenuItem[];
  align?: Align;
  className?: string;
};

const alignStyles: Record<Align, string> = {
  start: "left-0",
  end: "right-0",
};

const alignOrigin: Record<Align, string> = {
  start: "origin-top-left",
  end: "origin-top-right",
};

export function DropdownMenu({
  trigger,
  items,
  align = "start",
  className,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const close = () => setOpen(false);

  return (
    <div ref={containerRef} className="relative inline-flex">
      <div
        onClick={() => setOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((prev) => !prev);
          }
        }}
        className="inline-flex cursor-pointer select-none"
      >
        {trigger}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={cn(
              "absolute z-50 top-full mt-2 min-w-[200px] max-w-[calc(100vw-2rem)] rounded-xl border border-neutral-200/80 bg-white/95 p-1 shadow-xl backdrop-blur-xl",
              alignOrigin[align],
              alignStyles[align],
              className
            )}
          >
            {items.map((item) => {
              if (item.separator) {
                return <div key={item.id} className="my-1 h-px bg-neutral-100" />;
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => {
                    if (!item.disabled) {
                      item.onSelect?.();
                      close();
                    }
                  }}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                    item.disabled
                      ? "cursor-not-allowed text-neutral-300"
                      : item.danger
                      ? "text-red-600 hover:bg-red-50 cursor-pointer"
                      : "text-neutral-700 hover:bg-neutral-100 cursor-pointer"
                  )}
                >
                  {item.icon && (
                    <span className={cn("shrink-0 [&>svg]:h-4 [&>svg]:w-4", item.danger ? "text-red-500" : "text-neutral-500")}>
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1 truncate text-left font-medium">{item.label}</span>
                  {item.shortcut && (
                    <span className="shrink-0 text-[11px] font-mono text-neutral-400">{item.shortcut}</span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
