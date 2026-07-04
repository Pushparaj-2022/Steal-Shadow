"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn, OVERLAY_MAX_W, useDismissableLayer } from "../../lib/utils";
import type { ReactNode } from "react";

type Placement = "top" | "bottom" | "left" | "right";

type PopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
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

export function Popover({
  trigger,
  children,
  placement = "bottom",
  className,
}: PopoverProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useDismissableLayer(open, () => setOpen(false), containerRef);

  return (
    <div ref={containerRef} className="relative inline-flex">
      <div
        onClick={() => setOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
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
            role="dialog"
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

type PopoverTriggerProps = {
  children: ReactNode;
  className?: string;
};

export function PopoverTrigger({ children, className }: PopoverTriggerProps) {
  return <div className={className}>{children}</div>;
}

type PopoverContentProps = {
  children: ReactNode;
  className?: string;
};

export function PopoverContent({ children, className }: PopoverContentProps) {
  return <div className={className}>{children}</div>;
}
