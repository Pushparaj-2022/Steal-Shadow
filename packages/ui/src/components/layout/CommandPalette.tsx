"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import { cn } from "../../lib/utils";

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  group?: string;
  shortcut?: string[];
  onSelect: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: CommandItem[];
  placeholder?: string;
  className?: string;
}

export function CommandPalette({
  open,
  onClose,
  items,
  placeholder = "Search commands…",
  className,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => { setSelectedIndex(0); }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && filtered[selectedIndex]) {
        filtered[selectedIndex].onSelect();
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, selectedIndex, onClose]);

  // Scroll selected into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  // Group by group field
  const groups: Record<string, CommandItem[]> = {};
  filtered.forEach((item) => {
    const g = item.group ?? "";
    if (!groups[g]) groups[g] = [];
    groups[g].push(item);
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={cn(
                "pointer-events-auto w-full max-w-xl rounded-2xl border border-neutral-200 bg-white shadow-2xl overflow-hidden",
                className
              )}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3.5">
                <Search className="h-4 w-4 shrink-0 text-neutral-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholder}
                  className="flex-1 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 outline-none"
                />
                {query && (
                  <button onClick={() => setQuery("")} className="text-neutral-400 hover:text-neutral-600 transition-colors">
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
                <kbd className="hidden sm:flex items-center gap-0.5 rounded border border-neutral-200 px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-80 overflow-y-auto overscroll-contain py-2">
                {filtered.length === 0 ? (
                  <p className="py-10 text-center text-sm text-neutral-400">No results for &quot;{query}&quot;</p>
                ) : (
                  Object.entries(groups).map(([group, groupItems]) => {
                    let absoluteIndex = 0;
                    // Find offset for this group
                    Object.entries(groups).some(([g, gi]) => {
                      if (g === group) return true;
                      absoluteIndex += gi.length;
                      return false;
                    });
                    return (
                      <div key={group}>
                        {group && (
                          <p className="px-4 pb-1 pt-3 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            {group}
                          </p>
                        )}
                        {groupItems.map((item, j) => {
                          const idx = absoluteIndex + j;
                          return (
                            <button
                              key={item.id}
                              data-index={idx}
                              onClick={() => { item.onSelect(); onClose(); }}
                              onMouseEnter={() => setSelectedIndex(idx)}
                              className={cn(
                                "flex w-full items-center gap-3 rounded-lg mx-1 px-3 py-2.5 text-left transition-colors",
                                selectedIndex === idx ? "bg-neutral-100" : "hover:bg-neutral-50"
                              )}
                              style={{ width: "calc(100% - 8px)" }}
                            >
                              {item.icon && (
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 [&>svg]:h-4 [&>svg]:w-4">
                                  {item.icon}
                                </span>
                              )}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-neutral-800 truncate">{item.label}</p>
                                {item.description && (
                                  <p className="text-xs text-neutral-400 truncate">{item.description}</p>
                                )}
                              </div>
                              {item.shortcut && (
                                <div className="flex items-center gap-0.5 shrink-0">
                                  {item.shortcut.map((k, ki) => (
                                    <kbd key={ki} className="rounded border border-neutral-200 px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">{k}</kbd>
                                  ))}
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-neutral-100 px-4 py-2 flex items-center gap-3 text-[10px] text-neutral-400">
                <span><kbd className="font-mono">↑↓</kbd> navigate</span>
                <span><kbd className="font-mono">↵</kbd> select</span>
                <span><kbd className="font-mono">esc</kbd> close</span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return { open, setOpen, close: () => setOpen(false) };
}
