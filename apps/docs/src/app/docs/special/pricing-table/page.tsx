"use client";

import { PricingTable } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { PricingTable } from "@stealshadow/ui";

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "For personal projects",
    monthlyPrice: 0,
    annualPrice: 0,
    ctaLabel: "Start free",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For teams and startups",
    monthlyPrice: 29,
    annualPrice: 23,
    highlight: true,
    badge: "Most popular",
    ctaLabel: "Start trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 99,
    annualPrice: 79,
    ctaLabel: "Contact sales",
  },
];

const features = [
  { label: "Projects",       plans: { starter: "3 projects",   pro: "Unlimited",   enterprise: "Unlimited" } },
  { label: "Team members",   plans: { starter: "1 member",     pro: "Up to 20",    enterprise: "Unlimited" } },
  { label: "Priority support",plans: { starter: false,         pro: true,          enterprise: true } },
  { label: "SSO / SAML",     plans: { starter: false,         pro: false,         enterprise: true } },
  { label: "Audit logs",     plans: { starter: false,         pro: false,         enterprise: true } },
];

export default function Example() {
  return <PricingTable plans={plans} features={features} />;
}`;

const PLAN_PROPS = [
  { name: "id", type: "string", default: "—", description: "Unique plan identifier — matches feature plan keys." },
  { name: "name", type: "string", default: "—", description: "Plan display name." },
  { name: "description", type: "string", default: "—", description: "Short description beneath the name." },
  { name: "monthlyPrice", type: "number", default: "—", description: "Monthly price as a number." },
  { name: "annualPrice", type: "number", default: "—", description: "Annual price (per month) shown when billed annually." },
  { name: "highlight", type: "boolean", default: "false", description: "Applies the highlighted/popular style to this plan." },
  { name: "badge", type: "string", default: "—", description: 'Badge text above the card (e.g. "Most popular").' },
  { name: "ctaLabel", type: "string", default: '"Get {name}"', description: "CTA button label." },
  { name: "onCta", type: "() => void", default: "—", description: "CTA button click handler." },
];

const TABLE_PROPS = [
  { name: "plans", type: "PricingPlan[]", default: "—", description: "Array of pricing plans to display." },
  { name: "features", type: "PricingFeature[]", default: "[]", description: "Feature comparison rows." },
  { name: "defaultBilling", type: '"monthly" | "annual"', default: '"monthly"', description: "Initial billing period state." },
  { name: "currency", type: "string", default: '"$"', description: "Currency symbol shown before the price." },
  { name: "className", type: "string", default: "—", description: "Applied to the outer container." },
];

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "For personal projects",
    monthlyPrice: 0,
    annualPrice: 0,
    ctaLabel: "Start free",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For teams and startups",
    monthlyPrice: 29,
    annualPrice: 23,
    highlight: true,
    badge: "Most popular",
    ctaLabel: "Start trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 99,
    annualPrice: 79,
    ctaLabel: "Contact sales",
  },
];

const FEATURES = [
  { label: "Projects",        plans: { starter: "3 projects",   pro: "Unlimited",   enterprise: "Unlimited" } },
  { label: "Team members",    plans: { starter: "1 member",     pro: "Up to 20",    enterprise: "Unlimited" } },
  { label: "Priority support", plans: { starter: false,         pro: true,          enterprise: true } },
  { label: "SSO / SAML",      plans: { starter: false,         pro: false,         enterprise: true } },
  { label: "Audit logs",      plans: { starter: false,         pro: false,         enterprise: true } },
];

export default function PricingTableDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">PricingTable</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">PricingTable</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animated pricing comparison table with monthly/annual billing toggle, feature rows with check/dash indicators, a highlighted "popular" plan, and animated price transitions.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ PricingTable }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Full example</h2>
        <ComponentPreview code={BASIC_CODE}>
          <PricingTable plans={PLANS} features={FEATURES} />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Feature rows</h2>
        <p className="text-neutral-500">
          Pass a <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">features</code> array. Each feature has a <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">label</code> and a <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">plans</code> map where keys are plan IDs and values are <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">true</code> (check), <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">false</code> (dash), or a custom string override.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">PricingPlan props</h2>
        <PropsTable props={PLAN_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">PricingTable props</h2>
        <PropsTable props={TABLE_PROPS} />
      </section>
    </div>
  );
}
