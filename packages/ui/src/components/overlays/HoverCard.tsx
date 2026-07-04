"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn, OVERLAY_MAX_W } from "../../lib/utils";
import type { ReactNode } from "react";

type Placement = "top" | "bottom" | "left" | "right";

type HoverCardProps = {
  trigger: ReactNode;
  children: ReactNode;
  openDelay?: number;
  closeDelay?: number;
  placement?: Placement;
  className?: string;
};

const placementStyles: Record<Placement, string> = {
  bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
  top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
  left: "right-full mr-2 top-1/2 -translate-y-1/2",
  right: "left-full ml-2 top-1/2 -translate-y-1/2",
};

const placementOrigin: Record<Placement, string> = {
  bottom: "origin-top",
  top: "origin-bottom",
  left: "origin-right",
  right: "origin-left",
};

export function HoverCard({
  trigger,
  children,
  openDelay = 150,
  closeDelay = 200,
  placement = "bottom",
  className,
}: HoverCardProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleOpen = useCallback(() => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), openDelay);
  }, [openDelay]);

  const scheduleClose = useCallback(() => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), closeDelay);
  }, [closeDelay]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
    >
      <div
        aria-expanded={open}
        onFocus={scheduleOpen}
        onBlur={scheduleClose}
        className="inline-flex"
      >
        {trigger}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            onMouseEnter={scheduleOpen}
            onMouseLeave={scheduleClose}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={cn(
              "absolute z-50 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg",
              OVERLAY_MAX_W,
              placementOrigin[placement],
              placementStyles[placement],
              className
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
