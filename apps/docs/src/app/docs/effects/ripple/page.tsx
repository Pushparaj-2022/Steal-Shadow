"use client";

import { Ripple } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { Ripple } from "@animui/ui";

export default function Example() {
  return (
    <div className="relative h-[300px] flex items-center justify-center overflow-hidden rounded-lg bg-zinc-950">
      <Ripple />
      <button className="relative z-10 px-6 py-2 rounded-full bg-violet-600 text-white font-medium">
        Activate
      </button>
    </div>
  );
}`;

const fewRingsCode = `<Ripple numCircles={4} mainCircleSize={120} color="236,72,153" />`;

const propsData = [
  { name: "mainCircleSize", type: "number", default: "180", description: "Diameter of the innermost circle in pixels." },
  { name: "mainCircleOpacity", type: "number", default: "0.3", description: "Opacity of the innermost circle." },
  { name: "numCircles", type: "number", default: "7", description: "Total number of concentric rings." },
  { name: "color", type: "string", default: '"139,92,246"', description: 'RGB values as a comma-separated string, e.g. "139,92,246" for violet.' },
  { name: "className", type: "string", default: "—", description: "Additional classes for the container." },
];

export default function RipplePage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Effects</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">Ripple</span>
      </nav>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Ripple</h1>
        <p className="text-lg text-neutral-500">
          Concentric pulsing circles radiating outward — ideal as a radial attention-grabber,
          ping indicator, or ambient background effect.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ Ripple }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic</h2>
        <ComponentPreview code={basicCode}>
          <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg bg-zinc-950">
            <Ripple />
            <button className="relative z-10 px-6 py-2 rounded-full bg-violet-600 text-white font-medium">
              Activate
            </button>
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Fewer rings, custom color</h2>
        <p className="text-neutral-500 text-sm">
          Reduce <code className="font-mono text-xs bg-neutral-100 px-1 rounded">numCircles</code> for a cleaner look and change{" "}
          <code className="font-mono text-xs bg-neutral-100 px-1 rounded">color</code> to match your accent.
        </p>
        <ComponentPreview code={fewRingsCode}>
          <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg bg-zinc-950">
            <Ripple numCircles={4} mainCircleSize={120} color="236,72,153" />
            <span className="relative z-10 text-white font-semibold">ping</span>
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
