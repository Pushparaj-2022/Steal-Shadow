"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { cn } from "../../lib/utils";

type DrawerSide = "left" | "right" | "top" | "bottom";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: DrawerSide;
  size?: string;
  className?: string;
}

const slideVariants: Record<DrawerSide, Variants> = {
  left: { hidden: { x: "-100%" }, visible: { x: 0 } },
  right: { hidden: { x: "100%" }, visible: { x: 0 } },
  top: { hidden: { y: "-100%" }, visible: { y: 0 } },
  bottom: { hidden: { y: "100%" }, visible: { y: 0 } },
};

const positionMap: Record<DrawerSide, string> = {
  left: "left-0 top-0 bottom-0",
  right: "right-0 top-0 bottom-0",
  top: "top-0 left-0 right-0",
  bottom: "bottom-0 left-0 right-0",
};

export function Drawer({ open, onClose, children, side = "right", size, className }: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const defaultSize = side === "left" || side === "right" ? "w-80" : "h-64";

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className={cn("absolute bg-white shadow-2xl flex flex-col", positionMap[side], size ?? defaultSize, className)}
            variants={slideVariants[side]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function DrawerHeader({ children, onClose, className }: { children: React.ReactNode; onClose?: () => void; className?: string }) {
  return (
    <div className={cn("flex items-center justify-between p-5 border-b border-neutral-100", className)}>
      <h2 className="text-base font-semibold text-neutral-900">{children}</h2>
      {onClose && (
        <button onClick={onClose} className="rounded-lg p-1 hover:bg-neutral-100 text-neutral-500">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function DrawerBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex-1 overflow-y-auto p-5", className)}>{children}</div>;
}
