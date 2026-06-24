"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

export interface ContextMenuItem {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  separator?: boolean;
  items?: ContextMenuItem[];
  onSelect?: () => void;
}

interface ContextMenuProps {
  children: React.ReactNode;
  items: ContextMenuItem[];
  className?: string;
}

interface MenuPosition { x: number; y: number }

function MenuList({
  items,
  onClose,
  depth = 0,
}: {
  items: ContextMenuItem[];
  onClose: () => void;
  depth?: number;
}) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveSubmenu(id);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setActiveSubmenu(null), 150);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: depth === 0 ? -4 : 0, x: depth > 0 ? -4 : 0 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.13, ease: [0.22, 1, 0.36, 1] }}
      className="min-w-[200px] rounded-xl border border-neutral-200/80 bg-white/95 p-1 shadow-xl backdrop-blur-xl"
      style={{ transformOrigin: "top left" }}
    >
      {items.map((item) => {
        if (item.separator) {
          return <div key={item.id} className="my-1 h-px bg-neutral-100" />;
        }

        const hasSubmenu = item.items && item.items.length > 0;

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => hasSubmenu && handleEnter(item.id)}
            onMouseLeave={() => hasSubmenu && handleLeave()}
          >
            <button
              type="button"
              disabled={item.disabled}
              onClick={() => {
                if (!hasSubmenu && !item.disabled) {
                  item.onSelect?.();
                  onClose();
                }
              }}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                item.disabled
                  ? "cursor-not-allowed text-neutral-300"
                  : item.danger
                  ? "text-red-600 hover:bg-red-50 cursor-pointer"
                  : "text-neutral-700 hover:bg-neutral-100 cursor-pointer",
                activeSubmenu === item.id && "bg-neutral-100"
              )}
            >
              {item.icon && (
                <span className={cn("shrink-0 [&>svg]:h-4 [&>svg]:w-4", item.danger ? "text-red-500" : "text-neutral-500")}>
                  {item.icon}
                </span>
              )}
              <span className="flex-1 text-left font-medium">{item.label}</span>
              {item.shortcut && (
                <span className="shrink-0 text-[11px] font-mono text-neutral-400">{item.shortcut}</span>
              )}
              {hasSubmenu && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-neutral-400" />}
            </button>

            {/* Submenu */}
            <AnimatePresence>
              {hasSubmenu && activeSubmenu === item.id && (
                <div className="absolute left-full top-0 pl-1.5 z-50">
                  <MenuList items={item.items!} onClose={onClose} depth={depth + 1} />
                </div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
}

export function ContextMenu({ children, items, className }: ContextMenuProps) {
  const [pos, setPos] = useState<MenuPosition | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setPos(null), []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    // Clamp to viewport
    const x = Math.min(e.clientX, window.innerWidth - 220);
    const y = Math.min(e.clientY, window.innerHeight - 300);
    setPos({ x, y });
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) close();
    };
    const keyHandler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [close]);

  return (
    <>
      <div
        className={cn("select-none", className)}
        onContextMenu={handleContextMenu}
      >
        {children}
      </div>

      <AnimatePresence>
        {pos && (
          <div
            ref={containerRef}
            className="fixed z-[9999]"
            style={{ left: pos.x, top: pos.y }}
          >
            <MenuList items={items} onClose={close} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
