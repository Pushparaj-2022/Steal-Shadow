"use client";

import { OrbitingCircles } from "@animui/ui";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const basicCode = `import { OrbitingCircles } from "@animui/ui";

export default function Demo() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
      <OrbitingCircles radius={80} duration={20} iconSize={30}>
        <span>🌟</span>
        <span>🔥</span>
        <span>💎</span>
        <span>🚀</span>
        <span>⚡</span>
      </OrbitingCircles>
    </div>
  );
}`;

const reverseCode = `import { OrbitingCircles } from "@animui/ui";

export default function Demo() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
      <OrbitingCircles radius={80} duration={20} reverse iconSize={30}>
        <span>🌟</span>
        <span>🔥</span>
        <span>💎</span>
        <span>🚀</span>
        <span>⚡</span>
      </OrbitingCircles>
    </div>
  );
}`;

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Elements to place along the orbit path, distributed evenly.",
  },
  {
    name: "radius",
    type: "number",
    default: "80",
    description: "Orbit radius in pixels from center.",
  },
  {
    name: "duration",
    type: "number",
    default: "20",
    description: "Time in seconds for a full orbit revolution.",
  },
  {
    name: "reverse",
    type: "boolean",
    default: "false",
    description: "Reverse the orbit direction.",
  },
  {
    name: "startAngle",
    type: "number",
    default: "0",
    description: "Starting angle offset in degrees.",
  },
  {
    name: "iconSize",
    type: "number",
    default: "30",
    description: "Width and height of each orbiting item in pixels.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes for the container.",
  },
];

export default function OrbitingCirclesPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Special</span>
        <span>/</span>
        <span className="text-foreground font-medium">OrbitingCircles</span>
      </nav>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">OrbitingCircles</h1>
        <p className="text-lg text-muted-foreground">
          Arrange child elements evenly along a circular orbit path and animate
          them in a continuous revolution. Works great with icons, images, or
          any inline content.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm overflow-x-auto">
          <code>{`import { OrbitingCircles } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic example */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Provide child elements — icons, emoji, or images — and they will be
          distributed evenly around the orbit at the given{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">radius</code>.
        </p>
        <ComponentPreview code={basicCode}>
          <div
            className="relative flex items-center justify-center"
            style={{ width: 200, height: 200 }}
          >
            <OrbitingCircles radius={80} duration={20} iconSize={30}>
              <span>🌟</span>
              <span>🔥</span>
              <span>💎</span>
              <span>🚀</span>
              <span>⚡</span>
            </OrbitingCircles>
          </div>
        </ComponentPreview>
      </div>

      {/* Reverse orbit */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Reverse orbit</h2>
        <p className="text-sm text-muted-foreground">
          Set{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            reverse
          </code>{" "}
          to <code className="rounded bg-muted px-1 py-0.5 text-xs">true</code>{" "}
          to spin the orbit counter-clockwise. Useful when composing multiple
          concentric rings.
        </p>
        <ComponentPreview code={reverseCode}>
          <div
            className="relative flex items-center justify-center"
            style={{ width: 200, height: 200 }}
          >
            <OrbitingCircles radius={80} duration={20} reverse iconSize={30}>
              <span>🌟</span>
              <span>🔥</span>
              <span>💎</span>
              <span>🚀</span>
              <span>⚡</span>
            </OrbitingCircles>
          </div>
        </ComponentPreview>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
