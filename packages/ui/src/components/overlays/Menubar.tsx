"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import type { DropdownMenuItem } from "./DropdownMenu";

interface MenubarContextValue {
  openId: string | null;
  setOpenId: (id: string | null) => void;
}

const MenubarContext = createContext<MenubarContextValue | null>(null);

function useMenubarContext() {
  const ctx = useContext(MenubarContext);
  if (!ctx) {
    throw new Error("MenubarMenu must be used within a Menubar");
  }
  return ctx;
}

type MenubarProps = {
  children: React.ReactNode;
  className?: string;
};

export function Menubar({ children, className }: MenubarProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openId) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenId(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openId]);

  return (
    <MenubarContext.Provider value={{ openId, setOpenId }}>
      <div
        ref={containerRef}
        className={cn(
          "inline-flex items-center gap-1 rounded-xl border border-neutral-200 bg-white p-1 flex-wrap",
          className
        )}
      >
        {children}
      </div>
    </MenubarContext.Provider>
  );
}

type MenubarMenuProps = {
  label: string;
  items: DropdownMenuItem[];
  className?: string;
};

export function MenubarMenu({ label, items, className }: MenubarMenuProps) {
  const { openId, setOpenId } = useMenubarContext();
  const id = useRef(`menubar-menu-${label}-${Math.random().toString(36).slice(2)}`).current;
  const open = openId === id;

  const close = () => setOpenId(null);

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpenId(open ? null : id)}
        onMouseEnter={() => {
          if (openId && openId !== id) setOpenId(id);
        }}
        className={cn(
          "cursor-pointer select-none rounded-lg px-3 py-1.5 text-sm font-medium text-neutral-700 transition-colors",
          open ? "bg-neutral-100" : "hover:bg-neutral-100",
          className
        )}
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute z-50 top-full mt-2 left-0 origin-top-left min-w-[200px] max-w-[calc(100vw-2rem)] rounded-xl border border-neutral-200/80 bg-white/95 p-1 shadow-xl backdrop-blur-xl"
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
