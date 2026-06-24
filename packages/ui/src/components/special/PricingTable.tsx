"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Minus } from "lucide-react";
import { cn } from "../../lib/utils";

export interface PricingFeature {
  label: string;
  plans: Record<string, boolean | string>;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  highlight?: boolean;
  badge?: string;
  ctaLabel?: string;
  onCta?: () => void;
  color?: string;
}

interface PricingTableProps {
  plans: PricingPlan[];
  features?: PricingFeature[];
  className?: string;
  defaultBilling?: "monthly" | "annual";
  currency?: string;
}

export function PricingTable({
  plans,
  features = [],
  className,
  defaultBilling = "monthly",
  currency = "$",
}: PricingTableProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">(defaultBilling);

  return (
    <div className={cn("space-y-8", className)}>
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={cn("text-sm font-medium", billing === "monthly" ? "text-neutral-900" : "text-neutral-400")}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={billing === "annual"}
          onClick={() => setBilling((b) => (b === "monthly" ? "annual" : "monthly"))}
          className={cn(
            "relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
            billing === "annual" ? "bg-blue-500" : "bg-neutral-200"
          )}
        >
          <motion.span
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={cn("absolute h-4 w-4 rounded-full bg-white shadow-sm", billing === "annual" ? "left-7" : "left-1")}
          />
        </button>
        <span className={cn("text-sm font-medium flex items-center gap-1.5", billing === "annual" ? "text-neutral-900" : "text-neutral-400")}>
          Annual
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
            Save 20%
          </span>
        </span>
      </div>

      {/* Plan cards */}
      <div className={cn(
        "grid gap-4",
        plans.length === 1 ? "grid-cols-1" :
        plans.length === 2 ? "grid-cols-1 sm:grid-cols-2" :
        plans.length === 3 ? "grid-cols-1 sm:grid-cols-3" :
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      )}>
        {plans.map((plan) => {
          const price = billing === "annual" ? plan.annualPrice : plan.monthlyPrice;
          return (
            <motion.div
              key={plan.id}
              layout
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-shadow",
                plan.highlight
                  ? "border-blue-400 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-xl shadow-blue-500/20"
                  : "border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md"
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow">
                  {plan.badge}
                </span>
              )}

              <div className="mb-4">
                <h3 className={cn("text-base font-bold", plan.highlight ? "text-white" : "text-neutral-900")}>
                  {plan.name}
                </h3>
                <p className={cn("mt-1 text-sm", plan.highlight ? "text-blue-100" : "text-neutral-500")}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6 flex items-end gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={price}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={cn("text-4xl font-black tabular-nums", plan.highlight ? "text-white" : "text-neutral-900")}
                  >
                    {currency}{price}
                  </motion.span>
                </AnimatePresence>
                <span className={cn("mb-1 text-sm", plan.highlight ? "text-blue-100" : "text-neutral-400")}>
                  /mo
                </span>
              </div>

              <button
                type="button"
                onClick={plan.onCta}
                className={cn(
                  "mb-6 w-full rounded-xl py-2.5 text-sm font-bold transition-all",
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-neutral-900 text-white hover:opacity-90"
                )}
              >
                {plan.ctaLabel ?? `Get ${plan.name}`}
              </button>

              {/* Features */}
              {features.length > 0 && (
                <ul className="space-y-2.5">
                  {features.map((feature) => {
                    const val = feature.plans[plan.id];
                    return (
                      <li key={feature.label} className="flex items-center gap-2.5">
                        {val === false ? (
                          <Minus className={cn("h-4 w-4 shrink-0", plan.highlight ? "text-blue-300" : "text-neutral-300")} />
                        ) : (
                          <Check className={cn("h-4 w-4 shrink-0", plan.highlight ? "text-white" : "text-emerald-500")} />
                        )}
                        <span className={cn("text-sm", plan.highlight ? "text-blue-100" : "text-neutral-600")}>
                          {typeof val === "string" ? val : feature.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
