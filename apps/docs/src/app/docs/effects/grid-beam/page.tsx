"use client";

import { GridBeam } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { GridBeam } from "@animui/ui";

export default function Example() {
  return (
    <GridBeam>
      <div className="flex items-center justify-center h-48">
        <h2 className="text-2xl font-bold text-white">Hello, GridBeam</h2>
      </div>
    </GridBeam>
  );
}`;

const customBeamCode = `import { GridBeam } from "@animui/ui";

export default function Example() {
  return (
    <GridBeam beamColor="#ec4899">
      <div className="flex items-center justify-center h-48">
        <h2 className="text-2xl font-bold text-white">Pink Beam</h2>
      </div>
    </GridBeam>
  );
}`;

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Content rendered above the grid.",
  },
  {
    name: "cellSize",
    type: "number",
    default: "40",
    description: "Size of each grid cell in pixels.",
  },
  {
    name: "beamColor",
    type: "string",
    default: '"#7c3aed"',
    description: "Color of the animated beam.",
  },
  {
    name: "gridColor",
    type: "string",
    default: '"rgba(99,102,241,0.12)"',
    description: "Color of the grid lines.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes for the container.",
  },
];

export default function GridBeamPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground flex items-center gap-1.5">
        <span>Effects</span>
        <span>/</span>
        <span className="text-foreground font-medium">GridBeam</span>
      </nav>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">GridBeam</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A moving beam that travels across a grid background. Perfect for
          feature cards, hero sections, or CTA blocks that need a dynamic,
          tech-forward feel.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm overflow-x-auto">
          <code>{`import { GridBeam } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Basic</h2>
          <p className="text-muted-foreground text-sm">
            Wrap any content with <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">GridBeam</code> to
            place it on an animated grid.
          </p>
        </div>
        <ComponentPreview
          code={basicCode}
          preview={
            <GridBeam>
              <div className="flex items-center justify-center h-48">
                <h2 className="text-2xl font-bold text-white">
                  Hello, GridBeam
                </h2>
              </div>
            </GridBeam>
          }
        />
      </div>

      {/* Custom Beam */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Custom Beam</h2>
          <p className="text-muted-foreground text-sm">
            Use <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">beamColor</code> to change the
            gradient color of the animated beam.
          </p>
        </div>
        <ComponentPreview
          code={customBeamCode}
          preview={
            <GridBeam beamColor="#ec4899">
              <div className="flex items-center justify-center h-48">
                <h2 className="text-2xl font-bold text-white">Pink Beam</h2>
              </div>
            </GridBeam>
          }
        />
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
