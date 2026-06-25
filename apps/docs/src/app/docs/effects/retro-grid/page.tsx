"use client";

import { RetroGrid } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { RetroGrid } from "@animui/ui";

export default function Example() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-white dark:bg-black">
      <RetroGrid />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
        <h2 className="text-3xl font-bold tracking-tight">RetroGrid</h2>
        <p className="text-sm text-neutral-500">Perspective grid background.</p>
      </div>
    </div>
  );
}`;

const customAngleCode = `<RetroGrid angle={45} color="rgba(236,72,153,0.25)" />`;

const propsData = [
  { name: "angle", type: "number", default: "65", description: "Perspective tilt of the grid in degrees." },
  { name: "cellSize", type: "number", default: "60", description: "Width and height of each grid cell in pixels." },
  { name: "color", type: "string", default: '"rgba(99,102,241,0.2)"', description: "Grid line color." },
  { name: "fadeColor", type: "string", default: '"white"', description: "CSS color used for the bottom-fade gradient overlay." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the container." },
];

export default function RetroGridPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Effects</span>
        <span>/</span>
        <span className="font-medium text-neutral-900">RetroGrid</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">RetroGrid</h1>
        <p className="text-lg text-neutral-500">
          A full-coverage perspective grid background. Drop it inside any{" "}
          <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-sm">relative</code>{" "}
          container and it tiles seamlessly behind your content.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ RetroGrid }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic</h2>
        <ComponentPreview code={basicCode}>
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-white dark:bg-black">
            <RetroGrid />
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
              <h2 className="text-3xl font-bold tracking-tight">RetroGrid</h2>
              <p className="text-sm text-neutral-500">Perspective grid background.</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom angle &amp; color</h2>
        <p className="text-neutral-500 text-sm">
          Lower <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">angle</code> values flatten the perspective; change{" "}
          <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">color</code> to match your theme.
        </p>
        <ComponentPreview code={customAngleCode}>
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-white dark:bg-black">
            <RetroGrid angle={45} color="rgba(236,72,153,0.25)" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
              <h2 className="text-3xl font-bold tracking-tight">Custom angle</h2>
              <p className="text-sm text-neutral-500">angle=45, pink grid</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable props={propsData} />
      </section>
    </div>
  );
}
