"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export interface Step {
  id: string | number;
  label: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({ steps, currentStep, orientation = "horizontal", className }: StepperProps) {
  if (orientation === "vertical") {
    return (
      <div className={cn("flex flex-col gap-0", className)}>
        {steps.map((step, i) => {
          const done = i < currentStep;
          const active = i === currentStep;
          return (
            <div key={step.id} className="flex gap-4">
              {/* Dot + connector */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: done ? "#10b981" : active ? "#3b82f6" : "transparent",
                    borderColor: done ? "#10b981" : active ? "#3b82f6" : "#d4d4d8",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold"
                >
                  {done ? (
                    <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className={active ? "text-white" : "text-zinc-400"}>{i + 1}</span>
                  )}
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="relative my-1 w-0.5 flex-1 bg-zinc-200">
                    <motion.div
                      initial={false}
                      animate={{ height: done ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full bg-emerald-500 origin-top"
                    />
                  </div>
                )}
              </div>
              {/* Content */}
              <div className={cn("pb-8 pt-0.5", i === steps.length - 1 && "pb-0")}>
                <p className={cn("text-sm font-semibold", active ? "text-zinc-900" : done ? "text-zinc-700" : "text-zinc-400")}>{step.label}</p>
                {step.description && <p className="mt-0.5 text-xs text-zinc-400">{step.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("flex items-start", className)}>
      {steps.map((step, i) => {
        const done = i < currentStep;
        const active = i === currentStep;
        return (
          <div key={step.id} className="flex flex-1 items-start last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: done ? "#10b981" : active ? "#3b82f6" : "transparent",
                  borderColor: done ? "#10b981" : active ? "#3b82f6" : "#d4d4d8",
                }}
                transition={{ duration: 0.3 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold"
              >
                {done ? (
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span className={active ? "text-white" : "text-zinc-400"}>{i + 1}</span>
                )}
              </motion.div>
              <div className="text-center">
                <p className={cn("text-xs font-semibold", active ? "text-zinc-900" : done ? "text-zinc-700" : "text-zinc-400")}>{step.label}</p>
                {step.description && <p className="mt-0.5 text-[11px] text-zinc-400">{step.description}</p>}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="relative mx-2 mt-4 h-0.5 flex-1 bg-zinc-200">
                <motion.div
                  initial={false}
                  animate={{ width: done ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute left-0 top-0 h-full bg-emerald-500 origin-left"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
