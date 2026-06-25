"use client";

import { GradientText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

export default function GradientTextPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-neutral-500">
        <span>Animations</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">GradientText</span>
      </nav>

      {/* Heading + description */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">GradientText</h1>
        <p className="text-lg text-neutral-500">
          Animated gradient text that smoothly cycles through a set of color
          stops using the background-clip text technique and a keyframed
          background-position animation.
        </p>
      </div>

      {/* Import snippet */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg border bg-neutral-100 px-4 py-3 text-sm overflow-x-auto">
          <code>{`import { GradientText } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <ComponentPreview
          code={`import { GradientText } from "@animui/ui";

export default function Example() {
  return (
    <GradientText>
      <h2 className="text-4xl font-bold">Hello, Gradient World</h2>
    </GradientText>
  );
}`}
        >
          <GradientText>
            <h2 className="text-4xl font-bold">Hello, Gradient World</h2>
          </GradientText>
        </ComponentPreview>
      </div>

      {/* Custom colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Custom colors</h2>
        <ComponentPreview
          code={`import { GradientText } from "@animui/ui";

export default function Example() {
  return (
    <GradientText colors={["#f59e0b", "#ef4444", "#8b5cf6"]}>
      <h2 className="text-4xl font-bold">Amber · Red · Violet</h2>
    </GradientText>
  );
}`}
        >
          <GradientText colors={["#f59e0b", "#ef4444", "#8b5cf6"]}>
            <h2 className="text-4xl font-bold">Amber · Red · Violet</h2>
          </GradientText>
        </ComponentPreview>
      </div>

      {/* Props table */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "children",
              type: "ReactNode",
              default: "—",
              description: "Text content to apply gradient to.",
            },
            {
              name: "colors",
              type: "string[]",
              default: '["#7c3aed","#3b82f6","#ec4899"]',
              description: "Gradient color stops, evenly distributed.",
            },
            {
              name: "animationSpeed",
              type: "number",
              default: "4",
              description: "Full animation cycle in seconds.",
            },
            {
              name: "className",
              type: "string",
              default: "—",
              description: "Additional classes.",
            },
          ]}
        />
      </div>
    </div>
  );
}
