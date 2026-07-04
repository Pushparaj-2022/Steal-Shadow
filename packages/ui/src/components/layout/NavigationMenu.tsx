"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn, OVERLAY_MAX_W, useDismissableLayer } from "../../lib/utils";

export interface NavigationMenuItem {
  id: string;
  label: string;
  href?: string;
  children?: { id: string; label: string; href: string; description?: string }[];
}

interface NavigationMenuProps {
  items: NavigationMenuItem[];
  className?: string;
}

export function NavigationMenu({ items, className }: NavigationMenuProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useDismissableLayer(openId !== null, () => setOpenId(null), containerRef);

  return (
    <nav
      ref={containerRef}
      aria-label="Main"
      className={cn("flex flex-wrap items-center gap-1", className)}
    >
      {items.map((item) => {
        const hasChildren = !!item.children?.length;
        const isOpen = openId === item.id;

        if (!hasChildren) {
          return (
            <a
              key={item.id}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors truncate"
            >
              {item.label}
            </a>
          );
        }

        return (
          <div key={item.id} className="relative">
            <button
              onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
              aria-expanded={isOpen}
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isOpen ? "bg-neutral-100 text-neutral-900" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              )}
            >
              <span className="truncate">{item.label}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="shrink-0 text-neutral-400"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, scale: 0.95, y: -4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={cn("absolute left-0 top-full z-50 mt-2 w-64 origin-top-left rounded-xl border border-neutral-200 bg-white p-2 shadow-lg", OVERLAY_MAX_W)}
                >
                  {item.children!.map((child) => (
                    <a
                      key={child.id}
                      href={child.href}
                      onClick={() => setOpenId(null)}
                      className="block rounded-lg px-3 py-2 hover:bg-neutral-50 transition-colors"
                    >
                      <span className="block text-sm font-medium text-neutral-900 truncate">{child.label}</span>
                      {child.description && (
                        <span className="block text-xs text-neutral-500 mt-0.5 truncate">{child.description}</span>
                      )}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
