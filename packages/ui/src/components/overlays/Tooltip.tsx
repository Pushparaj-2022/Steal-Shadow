"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

type TooltipPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
  className?: string;
}

const placementStyles: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const placementAnim: Record<TooltipPlacement, object> = {
  top: { y: 4 },
  bottom: { y: -4 },
  left: { x: 4 },
  right: { x: -4 },
};

export function Tooltip({ content, children, placement = "top", delay = 0, className }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    timer.current = setTimeout(() => setVisible(true), delay);
  }

  function hide() {
    clearTimeout(timer.current ?? undefined);
    setVisible(false);
  }

  return (
    <span className="relative inline-flex" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            role="tooltip"
            className={cn("absolute z-50 pointer-events-none", placementStyles[placement])}
            initial={{ opacity: 0, ...placementAnim[placement] }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, ...placementAnim[placement] }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className={cn("bg-neutral-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-lg", className)}>
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
