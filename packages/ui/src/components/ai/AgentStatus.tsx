"use client";

import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export type AgentState = "idle" | "thinking" | "working" | "done" | "error" | "waiting";

export interface AgentStep {
  id: string;
  label: string;
  status: "pending" | "running" | "done" | "error" | "skipped";
  detail?: string;
  duration?: number;
}

interface AgentStatusProps {
  state: AgentState;
  label?: string;
  steps?: AgentStep[];
  className?: string;
  compact?: boolean;
  showSteps?: boolean;
}

const stateConfig: Record<AgentState, { label: string; color: string; icon: React.ReactNode; pulse: boolean }> = {
  idle: {
    label: "Idle",
    color: "bg-neutral-100 text-neutral-500 border-neutral-200",
    icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth={1.5} /></svg>,
    pulse: false,
  },
  thinking: {
    label: "Thinking…",
    color: "bg-violet-50 text-violet-600 border-violet-200",
    icon: <BrainIcon />,
    pulse: true,
  },
  working: {
    label: "Working…",
    color: "bg-blue-50 text-blue-600 border-blue-200",
    icon: <GearIcon />,
    pulse: true,
  },
  waiting: {
    label: "Waiting for input",
    color: "bg-amber-50 text-amber-600 border-amber-200",
    icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    pulse: false,
  },
  done: {
    label: "Done",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    pulse: false,
  },
  error: {
    label: "Error",
    color: "bg-red-50 text-red-600 border-red-200",
    icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" /></svg>,
    pulse: false,
  },
};

export function AgentStatus({
  state,
  label,
  steps = [],
  className,
  compact = false,
  showSteps = true,
}: AgentStatusProps) {
  const cfg = stateConfig[state];

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium w-fit",
        cfg.color
      )}>
        {cfg.pulse ? (
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            {cfg.icon}
          </motion.span>
        ) : cfg.icon}
        {label ?? cfg.label}
        {cfg.pulse && (
          <span className="relative flex h-2 w-2">
            <motion.span
              className="absolute inline-flex h-full w-full rounded-full bg-current opacity-50"
              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
          </span>
        )}
      </div>

      {showSteps && steps.length > 0 && !compact && (
        <div className="flex flex-col gap-1 pl-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <div className="relative flex flex-col items-center">
                <StepDot status={step.status} />
                {i < steps.length - 1 && (
                  <div className={cn("w-px flex-1 min-h-[1.5rem] mt-1", step.status === "done" ? "bg-emerald-300" : "bg-neutral-200")} />
                )}
              </div>
              <div className="pb-4 min-w-0">
                <p className={cn(
                  "text-sm font-medium",
                  step.status === "done" ? "text-neutral-700" :
                  step.status === "running" ? "text-violet-700" :
                  step.status === "error" ? "text-red-600" :
                  step.status === "skipped" ? "text-neutral-400 line-through" :
                  "text-neutral-400"
                )}>
                  {step.label}
                  {step.duration && step.status === "done" && (
                    <span className="ml-2 text-xs font-normal text-neutral-400">{step.duration}ms</span>
                  )}
                </p>
                {step.detail && step.status === "running" && (
                  <p className="text-xs text-neutral-500 mt-0.5">{step.detail}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

function StepDot({ status }: { status: AgentStep["status"] }) {
  if (status === "running") {
    return (
      <motion.span
        className="h-4 w-4 rounded-full border-2 border-violet-500 border-t-transparent mt-0.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    );
  }
  return (
    <div className={cn(
      "h-4 w-4 rounded-full flex items-center justify-center mt-0.5 border",
      status === "done" ? "bg-emerald-500 border-emerald-500" :
      status === "error" ? "bg-red-500 border-red-500" :
      status === "skipped" ? "bg-neutral-200 border-neutral-200" :
      "bg-white border-neutral-300"
    )}>
      {status === "done" && (
        <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      )}
      {status === "error" && (
        <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </div>
  );
}

function BrainIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <motion.svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </motion.svg>
  );
}
