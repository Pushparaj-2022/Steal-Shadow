"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  closeOnBackdrop?: boolean;
  title?: string;
  description?: string;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "default" | "destructive";
}

const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
  full: "max-w-full m-4",
};

export function Modal({
  open,
  onClose,
  children,
  size = "md",
  className,
  closeOnBackdrop = true,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "default",
}: ModalProps) {
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

  const shorthandContent = title ? (
    <>
      <ModalHeader onClose={onClose}>{title}</ModalHeader>
      {description && <ModalBody>{description}</ModalBody>}
      <ModalFooter>
        <button
          onClick={() => {
            onCancel?.();
            onClose();
          }}
          className="rounded-lg px-4 py-2 text-sm font-medium border border-neutral-200 hover:bg-neutral-50 transition-colors"
        >
          {cancelText}
        </button>
        <button
          onClick={() => {
            onConfirm?.();
            onClose();
          }}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            confirmVariant === "destructive"
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-neutral-900 hover:bg-neutral-700 text-white"
          )}
        >
          {confirmText}
        </button>
      </ModalFooter>
    </>
  ) : null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeOnBackdrop ? onClose : undefined}
          />
          <motion.div
            role="dialog"
            aria-modal
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 8 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className={cn("relative w-full bg-white rounded-2xl shadow-2xl", sizeMap[size], className)}
          >
            {children ? children : shorthandContent}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function ModalHeader({ children, onClose, className }: { children: React.ReactNode; onClose?: () => void; className?: string }) {
  return (
    <div className={cn("flex items-center justify-between p-6 border-b border-neutral-100", className)}>
      <h2 className="text-lg font-semibold text-neutral-900">{children}</h2>
      {onClose && (
        <button onClick={onClose} className="rounded-lg p-1 hover:bg-neutral-100 transition-colors text-neutral-500">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function ModalBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function ModalFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex items-center justify-end gap-2 p-6 border-t border-neutral-100", className)}>{children}</div>;
}
