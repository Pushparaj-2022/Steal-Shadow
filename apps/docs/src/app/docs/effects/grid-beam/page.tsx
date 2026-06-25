"use client";

import { GridBeam } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { GridBeam } from "@animui/ui";

export default function Example() {
  return (
    <GridBeam className="rounded-lg">
      <div className="flex items-center justify-center h-48">
        <h2 className="text-2xl font-bold text-white">Hello, GridBeam</h2>
      </div>
    </GridBeam>
  );
}`;

const customBeamCode = `<GridBeam beamColor="#ec4899" className="rounded-lg">
  <div className="flex items-center justify-center h-48">
    <h2 className="text-2xl font-bold text-white">Pink Beam</h2>
  </div>
</GridBeam>`;

const props = [
  { name: "children", type: "ReactNode", default: "—", description: "Content rendered above the grid." },
  { name: "cellSize", type: "number", default: "40", description: "Size of each grid cell in pixels." },
  { name: "beamColor", type: "string", default: '"#7c3aed"', description: "Color of the animated beam." },
  { name: "gridColor", type: "string", default: '"rgba(99,102,241,0.12)"', description: "Color of the grid lines." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the container." },
];

export default function GridBeamPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="text-sm text-neutral-500 flex items-center gap-1.5">
        <span>Effects</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">GridBeam</span>
      </nav>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">GridBeam</h1>
        <p className="text-neutral-500 text-lg max-w-2xl">
          A moving beam that travels across a grid background. Perfect for
          feature cards, hero sections, or CTA blocks that need a dynamic,
          tech-forward feel.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ GridBeam }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-neutral-500 text-sm">
          Wrap any content with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">GridBeam</code> to place it on an animated grid.
        </p>
        <ComponentPreview code={basicCode}>
          <GridBeam className="rounded-lg w-full">
            <div className="flex items-center justify-center h-48">
              <h2 className="text-2xl font-bold text-white">Hello, GridBeam</h2>
            </div>
          </GridBeam>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Custom beam color</h2>
        <p className="text-neutral-500 text-sm">
          Use <code className="font-mono text-xs bg-neutral-100 px-1 rounded">beamColor</code> to change the gradient color of the animated beam.
        </p>
        <ComponentPreview code={customBeamCode}>
          <GridBeam beamColor="#ec4899" className="rounded-lg w-full">
            <div className="flex items-center justify-center h-48">
              <h2 className="text-2xl font-bold text-white">Pink Beam</h2>
            </div>
          </GridBeam>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </section>
    </div>
  );
}
