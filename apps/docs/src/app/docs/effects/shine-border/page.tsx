"use client";

import { ShineBorder } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { ShineBorder } from "@animui/ui";

export default function Example() {
  return (
    <ShineBorder className="rounded-xl p-6 bg-zinc-950 text-center w-full max-w-sm">
      <p className="text-lg font-semibold text-white">Shine Border Card</p>
      <p className="text-sm text-zinc-400 mt-1">Animated conic-gradient border</p>
    </ShineBorder>
  );
}`;

const multiColorCode = `<ShineBorder color={["#7c3aed", "#ec4899", "#f59e0b"]} duration={6} className="rounded-xl p-6 bg-zinc-950">
  <p className="text-white font-semibold">Multi-color shine</p>
</ShineBorder>`;

const propsData = [
  { name: "children", type: "ReactNode", default: "—", description: "Content rendered inside the border." },
  { name: "color", type: "string | string[]", default: '["#7c3aed","#3b82f6","#06b6d4"]', description: "One or more color stops for the shine gradient." },
  { name: "duration", type: "number", default: "4", description: "Full rotation cycle duration in seconds." },
  { name: "borderWidth", type: "number", default: "2", description: "Border thickness in pixels." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the outer wrapper." },
];

export default function ShineBorderPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Effects</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">ShineBorder</span>
      </nav>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">ShineBorder</h1>
        <p className="text-lg text-neutral-500">
          Wraps any card or container with an animated conic-gradient border that
          rotates continuously. Supports single or multi-stop color palettes.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ ShineBorder }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic</h2>
        <ComponentPreview code={basicCode}>
          <ShineBorder className="rounded-xl p-8 bg-zinc-950 text-center w-full max-w-sm">
            <p className="text-lg font-semibold text-white">Shine Border Card</p>
            <p className="text-sm text-zinc-400 mt-1">Animated conic-gradient border</p>
          </ShineBorder>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Multi-color</h2>
        <p className="text-neutral-500 text-sm">
          Pass an array to <code className="font-mono text-xs bg-neutral-100 px-1 rounded">color</code> for a multi-stop gradient shine.
        </p>
        <ComponentPreview code={multiColorCode}>
          <ShineBorder color={["#7c3aed", "#ec4899", "#f59e0b"]} duration={6} className="rounded-xl p-8 bg-zinc-950 text-center w-full max-w-sm">
            <p className="text-white font-semibold">Multi-color shine</p>
            <p className="text-zinc-400 text-sm mt-1">Three-stop gradient</p>
          </ShineBorder>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable props={propsData} />
      </section>
    </div>
  );
}
