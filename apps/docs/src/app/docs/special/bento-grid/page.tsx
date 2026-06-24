"use client";

import { BentoGrid, BentoCard } from "@animui/ui";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const basicCode = `import { BentoGrid, BentoCard } from "@animui/ui";

export default function Example() {
  return (
    <BentoGrid cols={3} gap={4}>
      <BentoCard
        title="Analytics"
        description="Track your metrics in real time with beautiful dashboards."
        icon={<span>📊</span>}
        colSpan={2}
      />
      <BentoCard
        title="Security"
        description="Enterprise-grade security built in from day one."
        icon={<span>🔒</span>}
      />
      <BentoCard
        title="Integrations"
        description="Connect with 100+ tools your team already uses."
        icon={<span>🔗</span>}
      />
      <BentoCard
        title="Notifications"
        description="Stay informed with smart, contextual alerts."
        icon={<span>🔔</span>}
      />
      <BentoCard
        title="Collaboration"
        description="Work together seamlessly across your entire organization."
        icon={<span>🤝</span>}
      />
    </BentoGrid>
  );
}`;

const bentoGridProps = [
  {
    name: "cols",
    type: "2 | 3 | 4",
    default: "3",
    description: "Number of grid columns.",
  },
  {
    name: "gap",
    type: "number",
    default: "4",
    description: "Gap between cards (Tailwind spacing units).",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes.",
  },
];

const bentoCardProps = [
  {
    name: "title",
    type: "string",
    default: "—",
    description: "Card headline.",
  },
  {
    name: "description",
    type: "string",
    default: "—",
    description: "Supporting text below the title.",
  },
  {
    name: "icon",
    type: "ReactNode",
    default: "—",
    description: "Icon or decorative element.",
  },
  {
    name: "header",
    type: "ReactNode",
    default: "—",
    description: "Full-width content area above title (image, chart, etc.).",
  },
  {
    name: "colSpan",
    type: "1 | 2 | 3",
    default: "1",
    description: "Number of grid columns to span.",
  },
  {
    name: "rowSpan",
    type: "1 | 2",
    default: "1",
    description: "Number of grid rows to span.",
  },
  {
    name: "gradient",
    type: "string",
    default: "—",
    description: "CSS gradient for card background.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes.",
  },
];

export default function BentoGridPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Special</span>
        <span>/</span>
        <span className="text-foreground font-medium">BentoGrid</span>
      </nav>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">BentoGrid</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A CSS grid layout system with flexible spanning cards. Perfect for
          feature showcases, dashboards, and marketing pages where you want an
          asymmetric, magazine-style arrangement of content blocks.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Import</h2>
        <pre className="rounded-lg border bg-muted px-6 py-4 text-sm overflow-x-auto">
          <code>{`import { BentoGrid, BentoCard } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic Example */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Basic</h2>
        <p className="text-muted-foreground">
          A 3-column grid with five cards. The first card spans two columns
          using <code className="text-sm font-mono">colSpan=2</code>.
        </p>
        <ComponentPreview
          code={basicCode}
          preview={
            <BentoGrid cols={3} gap={4}>
              <BentoCard
                title="Analytics"
                description="Track your metrics in real time with beautiful dashboards."
                icon={<span>📊</span>}
                colSpan={2}
              />
              <BentoCard
                title="Security"
                description="Enterprise-grade security built in from day one."
                icon={<span>🔒</span>}
              />
              <BentoCard
                title="Integrations"
                description="Connect with 100+ tools your team already uses."
                icon={<span>🔗</span>}
              />
              <BentoCard
                title="Notifications"
                description="Stay informed with smart, contextual alerts."
                icon={<span>🔔</span>}
              />
              <BentoCard
                title="Collaboration"
                description="Work together seamlessly across your entire organization."
                icon={<span>🤝</span>}
              />
            </BentoGrid>
          }
        />
      </div>

      {/* BentoGrid Props */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          BentoGrid Props
        </h2>
        <PropsTable props={bentoGridProps} />
      </div>

      {/* BentoCard Props */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          BentoCard Props
        </h2>
        <PropsTable props={bentoCardProps} />
      </div>
    </div>
  );
}
