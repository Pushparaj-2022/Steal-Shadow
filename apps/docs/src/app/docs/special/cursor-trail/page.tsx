"use client";

import { CursorTrail } from "@animui/ui";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

export default function CursorTrailPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Special</span>
        <span>/</span>
        <span className="text-foreground font-medium">CursorTrail</span>
      </nav>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">CursorTrail</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A canvas-based cursor trail that renders a smooth, fading sequence of
          dots following the mouse pointer. Move the mouse over the area to see
          the effect. Fully customizable color, size, and trail length.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg border bg-muted px-5 py-4 text-sm overflow-x-auto">
          <code>{`import { CursorTrail } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-muted-foreground text-sm">
          Wrap any content with <code className="font-mono">CursorTrail</code>.
          Move your mouse over the preview area to see the fading dot trail.
        </p>
        <ComponentPreview
          code={`import { CursorTrail } from "@animui/ui";

export default function Example() {
  return (
    <CursorTrail>
      <div
        className="flex h-[300px] w-full items-center justify-center rounded-xl border border-dashed bg-muted/40"
      >
        <div className="text-center space-y-2 pointer-events-none select-none">
          <p className="text-lg font-semibold">Move your cursor here</p>
          <p className="text-sm text-muted-foreground">
            Watch the purple trail follow your mouse
          </p>
        </div>
      </div>
    </CursorTrail>
  );
}`}
        >
          <CursorTrail>
            <div className="flex h-[300px] w-full items-center justify-center rounded-xl border border-dashed bg-muted/40">
              <div className="text-center space-y-2 pointer-events-none select-none">
                <p className="text-lg font-semibold">Move your cursor here</p>
                <p className="text-sm text-muted-foreground">
                  Watch the purple trail follow your mouse
                </p>
              </div>
            </div>
          </CursorTrail>
        </ComponentPreview>
      </div>

      {/* Custom color */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Custom Color</h2>
        <p className="text-muted-foreground text-sm">
          Pass RGB values as a comma-separated string to the{" "}
          <code className="font-mono">color</code> prop.
        </p>
        <ComponentPreview
          code={`import { CursorTrail } from "@animui/ui";

export default function PinkTrail() {
  return (
    <CursorTrail color="236,72,153">
      <div
        className="flex h-[300px] w-full items-center justify-center rounded-xl border border-dashed bg-muted/40"
      >
        <div className="text-center space-y-2 pointer-events-none select-none">
          <p className="text-lg font-semibold">Pink trail</p>
          <p className="text-sm text-muted-foreground">
            color="236,72,153"
          </p>
        </div>
      </div>
    </CursorTrail>
  );
}`}
        >
          <CursorTrail color="236,72,153">
            <div className="flex h-[300px] w-full items-center justify-center rounded-xl border border-dashed bg-muted/40">
              <div className="text-center space-y-2 pointer-events-none select-none">
                <p className="text-lg font-semibold">Pink trail</p>
                <p className="text-sm text-muted-foreground">
                  color="236,72,153"
                </p>
              </div>
            </div>
          </CursorTrail>
        </ComponentPreview>
      </div>

      {/* Props */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "color",
              type: "string",
              default: '"139,92,246"',
              description:
                'RGB values as a comma-separated string, e.g. "139,92,246" for purple.',
            },
            {
              name: "size",
              type: "number",
              default: "14",
              description:
                "Maximum radius of the largest trail dot in pixels.",
            },
            {
              name: "length",
              type: "number",
              default: "22",
              description:
                "Number of positions tracked in the trail history.",
            },
            {
              name: "className",
              type: "string",
              default: "—",
              description: "Additional classes for the canvas container.",
            },
            {
              name: "children",
              type: "ReactNode",
              default: "—",
              description: "Content rendered above the canvas.",
            },
          ]}
        />
      </div>
    </div>
  );
}
