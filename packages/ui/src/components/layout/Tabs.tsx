"use client";

import { createContext, useContext, useId, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface TabsContextValue {
  active: string;
  setActive: (v: string) => void;
  layoutId: string;
  variant: "underline" | "pill" | "enclosed";
}

const TabsContext = createContext<TabsContextValue | null>(null);

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
  variant?: "underline" | "pill" | "enclosed";
}

export function Tabs({ defaultValue, children, className, variant = "underline" }: TabsProps) {
  const [active, setActive] = useState(defaultValue);
  const layoutId = useId();

  return (
    <TabsContext.Provider value={{ active, setActive, layoutId, variant }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  const ctx = useContext(TabsContext)!;

  const listStyles = {
    underline: "flex border-b border-neutral-200 gap-0",
    pill: "inline-flex bg-neutral-100 rounded-xl p-1 gap-1",
    enclosed: "flex border border-neutral-200 rounded-t-xl overflow-hidden",
  }[ctx.variant];

  return <div className={cn(listStyles, className)} role="tablist">{children}</div>;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function TabsTrigger({ value, children, className, disabled }: TabsTriggerProps) {
  const ctx = useContext(TabsContext)!;
  const isActive = ctx.active === value;

  const triggerBase = "relative text-sm font-medium transition-colors focus-visible:outline-none cursor-pointer";

  const variantTrigger = {
    underline: cn("px-4 py-2.5 text-neutral-500 hover:text-neutral-900", isActive && "text-violet-600"),
    pill: cn("px-3 py-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 z-10", isActive && "text-violet-700"),
    enclosed: cn("px-4 py-2.5 border-r last:border-r-0 border-neutral-200 text-neutral-500 hover:bg-neutral-50", isActive && "bg-white text-neutral-900 font-semibold"),
  }[ctx.variant];

  return (
    <button
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => ctx.setActive(value)}
      className={cn(triggerBase, variantTrigger, disabled && "opacity-40 cursor-not-allowed", className)}
    >
      {children}
      {ctx.variant === "underline" && isActive && (
        <motion.span
          layoutId={ctx.layoutId}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600 rounded-full"
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        />
      )}
      {ctx.variant === "pill" && isActive && (
        <motion.span
          layoutId={ctx.layoutId}
          className="absolute inset-0 rounded-lg bg-white shadow-sm"
          style={{ zIndex: -1 }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        />
      )}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const ctx = useContext(TabsContext)!;
  if (ctx.active !== value) return null;

  return (
    <motion.div
      role="tabpanel"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn("mt-4", className)}
    >
      {children}
    </motion.div>
  );
}
