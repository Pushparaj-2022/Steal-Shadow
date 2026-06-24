"use client";

import { createContext, useCallback, useContext, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

type ToastVariant = "default" | "success" | "error" | "warning" | "info";

interface ToastItem {
  id: string;
  message: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: { label: string; onClick: () => void };
}

interface ToastContextValue {
  toast: (opts: Omit<ToastItem, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const icons: Record<ToastVariant, string> = {
  default: "ℹ",
  success: "✓",
  error: "✕",
  warning: "⚠",
  info: "ℹ",
};

const variantStyles: Record<ToastVariant, string> = {
  default: "bg-white border-neutral-200 text-neutral-900",
  success: "bg-white border-emerald-200 text-neutral-900",
  error: "bg-white border-red-200 text-neutral-900",
  warning: "bg-white border-amber-200 text-neutral-900",
  info: "bg-white border-blue-200 text-neutral-900",
};

const iconStyles: Record<ToastVariant, string> = {
  default: "bg-neutral-100 text-neutral-600",
  success: "bg-emerald-100 text-emerald-600",
  error: "bg-red-100 text-red-600",
  warning: "bg-amber-100 text-amber-600",
  info: "bg-blue-100 text-blue-600",
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((opts: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2);
    const duration = opts.duration ?? 4000;
    setToasts((prev) => [{ ...opts, id }, ...prev]);
    if (duration > 0) setTimeout(() => dismiss(id), duration);
  }, [dismiss]);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        <AnimatePresence initial={false}>
          {toasts.map((t) => {
            const v = t.variant ?? "default";
            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, x: 40 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={cn("pointer-events-auto rounded-xl border shadow-lg p-4 flex items-start gap-3", variantStyles[v])}
              >
                <span className={cn("shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold", iconStyles[v])}>
                  {icons[v]}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{t.message}</p>
                  {t.description && <p className="text-xs text-neutral-500 mt-0.5">{t.description}</p>}
                  {t.action && (
                    <button onClick={t.action.onClick} className="mt-1.5 text-xs font-medium text-violet-600 hover:underline">
                      {t.action.label}
                    </button>
                  )}
                </div>
                <button onClick={() => dismiss(t.id)} className="shrink-0 text-neutral-400 hover:text-neutral-700">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
