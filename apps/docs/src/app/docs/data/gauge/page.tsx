"use client";

import { useState } from "react";
import { Gauge } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { Gauge } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex items-center gap-8 flex-wrap justify-center">
      <Gauge value={25} label="Low" />
      <Gauge value={68} label="Medium" />
      <Gauge value={90} label="High" />
    </div>
  );
}`;

const sizesCode = `import { Gauge } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex items-center gap-8 flex-wrap justify-center">
      <Gauge value={60} size="sm" label="Small" />
      <Gauge value={60} size="md" label="Medium" />
      <Gauge value={60} size="lg" label="Large" />
    </div>
  );
}`;

const interactiveCode = `import { useState } from "react";
import { Gauge } from "@animui/ui";

export default function Example() {
  const [value, setValue] = useState(50);

  return (
    <div className="flex flex-col items-center gap-6">
      <Gauge value={value} label="Progress" />
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-48"
      />
      <span className="text-sm text-neutral-500">{value}%</span>
    </div>
  );
}`;

const props = [
  {
    name: "value",
    type: "number",
    default: "—",
    description: "Current value to display.",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "Maximum value for the gauge.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Gauge size variant.",
  },
  {
    name: "showValue",
    type: "boolean",
    default: "true",
    description: "Show the numeric value in the center.",
  },
  {
    name: "label",
    type: "string",
    default: "—",
    description: "Caption shown below the gauge.",
  },
  {
    name: "color",
    type: "string",
    default: '"#7c3aed"',
    description: "Color of the progress arc.",
  },
  {
    name: "trackColor",
    type: "string",
    default: '"#e5e7eb"',
    description: "Color of the background track ring.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes.",
  },
];

export default function GaugePage() {
  const [interactiveValue, setInteractiveValue] = useState(50);

  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-neutral-500">
        <span>Data</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">Gauge</span>
      </nav>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Gauge</h1>
        <p className="text-lg text-neutral-500">
          A circular progress gauge built with SVG. Animates from zero on mount
          using a spring easing curve and supports flexible sizing, custom
          colors, and an optional center label.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-xl bg-neutral-950 px-5 py-4 text-sm text-green-400 overflow-x-auto font-mono">
          <code>{`import { Gauge } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-sm text-neutral-500">
          Render multiple gauges side by side at different fill levels.
        </p>
        <ComponentPreview code={basicCode}>
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <Gauge value={25} label="Low" />
            <Gauge value={68} label="Medium" />
            <Gauge value={90} label="High" />
          </div>
        </ComponentPreview>
      </div>

      {/* Sizes */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <p className="text-sm text-neutral-500">
          Three size presets — <code>sm</code>, <code>md</code>, and{" "}
          <code>lg</code> — scale the SVG canvas and stroke width together.
        </p>
        <ComponentPreview code={sizesCode}>
          <div className="flex items-end gap-8 flex-wrap justify-center">
            <Gauge value={60} size="sm" label="Small" />
            <Gauge value={60} size="md" label="Medium" />
            <Gauge value={60} size="lg" label="Large" />
          </div>
        </ComponentPreview>
      </div>

      {/* Interactive */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Interactive</h2>
        <p className="text-sm text-neutral-500">
          Drag the slider to update the gauge value live.
        </p>
        <ComponentPreview code={interactiveCode}>
          <div className="flex flex-col items-center gap-6">
            <Gauge value={interactiveValue} label="Progress" />
            <input
              type="range"
              min={0}
              max={100}
              value={interactiveValue}
              onChange={(e) => setInteractiveValue(Number(e.target.value))}
              className="w-48"
            />
            <span className="text-sm text-neutral-500">
              {interactiveValue}%
            </span>
          </div>
        </ComponentPreview>
      </div>

      {/* Props */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
