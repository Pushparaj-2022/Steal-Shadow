"use client";

import { FlipCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { FlipCard } from "@stealshadow/ui";

export default function Example() {
  return (
    <FlipCard
      className="h-48 w-36"
      front={
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-xl">
          Front
        </div>
      }
      back={
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex flex-col items-center justify-center text-white shadow-xl p-4">
          <p className="font-bold text-lg">Back</p>
          <p className="text-white/70 text-xs text-center mt-1">Hover flips it back</p>
        </div>
      }
    />
  );
}`;

const CLICK_CODE = `<FlipCard
  trigger="click"
  direction="vertical"
  className="h-48 w-36"
  front={
    <div className="h-full w-full rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
      Click me
    </div>
  }
  back={
    <div className="h-full w-full rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex flex-col items-center justify-center text-white shadow-xl p-4">
      <p className="font-bold text-lg">Flipped!</p>
      <p className="text-white/70 text-xs text-center mt-1">Click to flip back</p>
    </div>
  }
/>`;

const PROPS = [
  { name: "front", type: "ReactNode", default: "—", description: "Content for the front face." },
  { name: "back", type: "ReactNode", default: "—", description: "Content for the back face." },
  { name: "trigger", type: '"hover" | "click"', default: '"hover"', description: "What triggers the flip." },
  { name: "direction", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Axis of the flip rotation." },
  { name: "duration", type: "number", default: "0.5", description: "Flip duration in seconds." },
  { name: "defaultFlipped", type: "boolean", default: "false", description: "Start in the flipped state." },
  { name: "onFlip", type: "(flipped: boolean) => void", default: "—", description: "Callback when flip state changes." },
  { name: "className", type: "string", default: "—", description: "Applied to the outer container — set width and height here." },
];

export default function FlipCardDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">FlipCard</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">FlipCard</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          True CSS 3D flip card with front and back faces. Uses <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">preserve-3d</code> and <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">backface-visibility: hidden</code> for a physically accurate flip — not a fade or crossfade.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ FlipCard }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Hover flip</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center justify-center gap-8 p-12 bg-neutral-50 rounded-2xl">
            <FlipCard
              className="h-48 w-36"
              front={
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-xl">
                  Front
                </div>
              }
              back={
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex flex-col items-center justify-center text-white shadow-xl p-4">
                  <p className="font-bold text-lg">Back</p>
                  <p className="text-white/70 text-xs text-center mt-1">Hover flips it back</p>
                </div>
              }
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Click flip / vertical</h2>
        <ComponentPreview code={CLICK_CODE}>
          <div className="flex items-center justify-center p-12 bg-neutral-50 rounded-2xl">
            <FlipCard
              trigger="click"
              direction="vertical"
              className="h-48 w-36"
              front={
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
                  Click me
                </div>
              }
              back={
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex flex-col items-center justify-center text-white shadow-xl p-4">
                  <p className="font-bold text-lg">Flipped!</p>
                  <p className="text-white/70 text-xs text-center mt-1">Click to flip back</p>
                </div>
              }
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Important: set dimensions</h2>
        <p className="text-neutral-500">
          FlipCard is <strong className="text-neutral-700">dimension-agnostic</strong> — it fills whatever size you give it via <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">className</code>. Always set explicit width and height so both faces know their bounding box.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
