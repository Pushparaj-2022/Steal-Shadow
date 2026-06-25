"use client";

import { BentoGrid, BentoCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { BentoGrid, BentoCard } from "@animui/ui";

export default function Example() {
  return (
    <BentoGrid cols={3}>
      <BentoCard title="Analytics" description="Track metrics in real time." icon={<span>📊</span>} colSpan={2} />
      <BentoCard title="Security" description="Enterprise-grade security." icon={<span>🔒</span>} />
      <BentoCard title="Integrations" description="Connect 100+ tools." icon={<span>🔗</span>} />
      <BentoCard title="Notifications" description="Smart contextual alerts." icon={<span>🔔</span>} />
      <BentoCard title="Collaboration" description="Work together seamlessly." icon={<span>🤝</span>} />
    </BentoGrid>
  );
}`;

const bentoGridProps = [
  { name: "cols", type: "2 | 3 | 4", default: "3", description: "Number of grid columns." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

const bentoCardProps = [
  { name: "title", type: "string", default: "—", description: "Card headline." },
  { name: "description", type: "string", default: "—", description: "Supporting text below the title." },
  { name: "icon", type: "ReactNode", default: "—", description: "Icon or decorative element." },
  { name: "header", type: "ReactNode", default: "—", description: "Full-width content above title (image, chart, etc.)." },
  { name: "colSpan", type: "1 | 2 | 3", default: "1", description: "Number of grid columns to span." },
  { name: "rowSpan", type: "1 | 2", default: "1", description: "Number of grid rows to span." },
  { name: "gradient", type: "string", default: "—", description: "CSS gradient for card background." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

export default function BentoGridPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Special</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">BentoGrid</span>
      </nav>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">BentoGrid</h1>
        <p className="text-lg text-neutral-500 max-w-2xl">
          A CSS grid layout with flexible spanning cards. Perfect for feature showcases,
          dashboards, and marketing pages that need an asymmetric, magazine-style layout.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ BentoGrid, BentoCard }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic</h2>
        <p className="text-neutral-500 text-sm">
          A 3-column grid with five cards. The first card spans two columns using{" "}
          <code className="font-mono text-xs bg-neutral-100 px-1 rounded">colSpan=2</code>.
        </p>
        <ComponentPreview code={basicCode}>
          <BentoGrid cols={3}>
            <BentoCard title="Analytics" description="Track metrics in real time." icon={<span>📊</span>} colSpan={2} />
            <BentoCard title="Security" description="Enterprise-grade security." icon={<span>🔒</span>} />
            <BentoCard title="Integrations" description="Connect 100+ tools." icon={<span>🔗</span>} />
            <BentoCard title="Notifications" description="Smart contextual alerts." icon={<span>🔔</span>} />
            <BentoCard title="Collaboration" description="Work together seamlessly." icon={<span>🤝</span>} />
          </BentoGrid>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">BentoGrid Props</h2>
        <PropsTable props={bentoGridProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">BentoCard Props</h2>
        <PropsTable props={bentoCardProps} />
      </section>
    </div>
  );
}
