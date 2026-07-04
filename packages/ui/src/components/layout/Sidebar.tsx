"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface SidebarProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Sidebar({ children, open = false, onOpenChange, className }: SidebarProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange?.(false);
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  return (
    <>
      <div
        className={cn(
          "hidden md:sticky md:top-0 md:flex md:h-screen md:w-64 md:shrink-0 md:translate-x-0 md:flex-col md:border-r md:border-neutral-200 md:bg-white md:flex",
          className
        )}
      >
        {children}
      </div>

      <div className="md:hidden">
        <AnimatePresence>
          {open && (
            <div className="fixed inset-0 z-50">
              <motion.div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => onOpenChange?.(false)}
              />
              <motion.div
                className={cn(
                  "absolute left-0 top-0 bottom-0 flex w-64 max-w-[80vw] flex-col bg-white shadow-2xl",
                  className
                )}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 350, damping: 35 }}
              >
                {children}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

interface SidebarItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function SidebarItem({ icon, children, active = false, onClick, className }: SidebarItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
        active ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-100",
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </button>
  );
}
