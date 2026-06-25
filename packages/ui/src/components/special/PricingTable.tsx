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
  const isAnnual = billing === "annual";

  const cols =
    plans.length === 1 ? "grid-cols-1" :
    plans.length === 2 ? "grid-cols-1 sm:grid-cols-2" :
    plans.length === 3 ? "grid-cols-1 sm:grid-cols-3" :
    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={cn("w-full space-y-8", className)}>
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-3">
        <span className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-neutral-900" : "text-neutral-400")}>
          Monthly
        </span>

        <button
          type="button"
          role="switch"
          aria-checked={isAnnual}
          onClick={() => setBilling((b) => (b === "monthly" ? "annual" : "monthly"))}
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
            isAnnual ? "bg-blue-500" : "bg-neutral-300",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out",
              isAnnual ? "translate-x-5" : "translate-x-0",
            )}
          />
        </button>

        <span className={cn("flex items-center gap-1.5 text-sm font-medium transition-colors", isAnnual ? "text-neutral-900" : "text-neutral-400")}>
          Annual
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
            Save 20%
          </span>
        </span>
      </div>

      {/* pt-4 so badge overhangs don't get clipped by the grid top edge */}
      <div className={cn("grid gap-4 pt-4", cols)}>
        {plans.map((plan) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
          return (
            <motion.div
              key={plan.id}
              layout
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-shadow",
                plan.highlight
                  ? "border-blue-400 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-xl shadow-blue-500/25"
                  : "border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md",
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow">
                  {plan.badge}
                </span>
              )}

              <div className="mb-5">
                <h3 className={cn("text-base font-bold", plan.highlight ? "text-white" : "text-neutral-900")}>
                  {plan.name}
                </h3>
                <p className={cn("mt-1 text-sm", plan.highlight ? "text-blue-100" : "text-neutral-500")}>
                  {plan.description}
                </p>
              </div>

              {/* Price: currency is static, only the number animates */}
              <div className="mb-6 flex items-end gap-0.5">
                <span className={cn("text-4xl font-black leading-none", plan.highlight ? "text-white" : "text-neutral-900")}>
                  {currency}
                </span>
                <div className="relative overflow-hidden" style={{ height: "2.5rem" }}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={price}
                      className={cn("block text-4xl font-black tabular-nums leading-none", plan.highlight ? "text-white" : "text-neutral-900")}
                      initial={{ y: "-100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {price}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className={cn("mb-0.5 ml-1 text-sm", plan.highlight ? "text-blue-100" : "text-neutral-400")}>
                  /mo
                </span>
              </div>

              <button
                type="button"
                onClick={plan.onCta}
                className={cn(
                  "mb-6 w-full rounded-xl py-2.5 text-sm font-bold transition-all active:scale-95",
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-neutral-900 text-white hover:opacity-90",
                )}
              >
                {plan.ctaLabel ?? `Get ${plan.name}`}
              </button>

              {features.length > 0 && (
                <ul className="mt-auto space-y-2.5">
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
