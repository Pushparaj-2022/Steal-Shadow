"use client";

import { useState } from "react";
import { Confetti } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const clickCode = `import { Confetti } from "@animui/ui";

export default function Example() {
  return (
    // Confetti's canvas fills its wrapper, so give the wrapper real
    // dimensions — otherwise the burst is clipped to the button's size.
    <Confetti count={100} className="flex h-64 w-full items-center justify-center">
      <button className="px-6 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors">
        Click me 🎉
      </button>
    </Confetti>
  );
}`;

const programmaticCode = `import { useState } from "react";
import { Confetti } from "@animui/ui";

export default function Example() {
  const [trigger, setTrigger] = useState(false);

  function fire() {
    setTrigger(true);
    setTimeout(() => setTrigger(false), 100);
  }

  return (
    // Standalone (childless) Confetti has no intrinsic size, so give it an
    // absolutely-positioned overlay inside a sized, relative parent.
    <div className="relative h-64 w-full flex items-center justify-center">
      <Confetti trigger={trigger} count={120} colors={["#ff6b6b","#ffd93d","#6bcb77","#4d96ff"]} className="absolute inset-0" />
      <button onClick={fire} className="relative px-6 py-2 rounded-lg bg-violet-600 text-white font-medium">
        Fire confetti
      </button>
    </div>
  );
}`;

const propsData = [
  { name: "trigger", type: "boolean", default: "false", description: "Set to true to fire confetti programmatically. Reacts to false→true transitions." },
  { name: "children", type: "ReactNode", default: "—", description: "Clicking these children fires the confetti." },
  { name: "count", type: "number", default: "120", description: "Number of particles launched." },
  { name: "colors", type: "string[]", default: "—", description: "Array of hex color strings for particles." },
  { name: "gravity", type: "number", default: "0.4", description: "Downward gravity applied each frame." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the canvas wrapper." },
];

function ProgrammaticDemo() {
  const [trigger, setTrigger] = useState(false);
  function fire() {
    setTrigger(true);
    setTimeout(() => setTrigger(false), 100);
  }
  return (
    <div className="relative flex h-64 w-full flex-col items-center justify-center gap-4">
      <Confetti trigger={trigger} count={120} colors={["#ff6b6b","#ffd93d","#6bcb77","#4d96ff"]} className="absolute inset-0" />
      <button
        onClick={fire}
        className="relative px-6 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
      >
        Fire confetti
      </button>
    </div>
  );
}

export default function ConfettiPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Special</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">Confetti</span>
      </nav>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Confetti</h1>
        <p className="text-lg text-neutral-500">
          Canvas-based physics confetti. Fire it by wrapping clickable children or
          trigger it programmatically via the <code className="font-mono text-sm bg-neutral-100 px-1 rounded">trigger</code> prop.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ Confetti }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Click to fire</h2>
        <p className="text-neutral-500 text-sm">
          Wrap any element with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Confetti</code>.
          Clicking the child fires the burst.
        </p>
        <ComponentPreview code={clickCode}>
          <Confetti count={100} className="flex h-64 w-full items-center justify-center">
            <button className="px-6 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors">
              Click me 🎉
            </button>
          </Confetti>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Programmatic trigger</h2>
        <p className="text-neutral-500 text-sm">
          Use <code className="font-mono text-xs bg-neutral-100 px-1 rounded">trigger</code> for externally
          controlled bursts. Reset the value after firing so subsequent triggers work.
        </p>
        <ComponentPreview code={programmaticCode}>
          <ProgrammaticDemo />
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable props={propsData} />
      </section>
    </div>
  );
}
