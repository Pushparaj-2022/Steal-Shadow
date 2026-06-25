"use client";

import { BorderBeam } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { BorderBeam } from "@animui/ui";

export default function Example() {
  return (
    <BorderBeam className="p-6">
      <h3 className="font-bold text-neutral-800">BorderBeam</h3>
      <p className="text-sm text-neutral-500 mt-1">
        A spark travels around the border.
      </p>
    </BorderBeam>
  );
}`;

const COLORS_CODE = `<BorderBeam colorFrom="#f59e0b" colorTo="#ef4444" duration={2}>
  <div className="p-5">Amber → Red beam</div>
</BorderBeam>`;

const STAGGER_CODE = `<div className="grid grid-cols-2 gap-4">
  <BorderBeam delay={0}>  <div className="p-4">Card 1</div></BorderBeam>
  <BorderBeam delay={0.75}><div className="p-4">Card 2</div></BorderBeam>
  <BorderBeam delay={1.5}> <div className="p-4">Card 3</div></BorderBeam>
  <BorderBeam delay={2.25}><div className="p-4">Card 4</div></BorderBeam>
</div>`;

const PROPS = [
  { name: "colorFrom", type: "string", default: '"#8b5cf6"', description: "Start color of the beam gradient." },
  { name: "colorTo", type: "string", default: '"#3b82f6"', description: "End color of the beam gradient." },
  { name: "size", type: "number", default: "80", description: "Beam length in degrees." },
  { name: "duration", type: "number", default: "3", description: "Seconds for one full orbit." },
  { name: "delay", type: "number", default: "0", description: "Animation start delay in seconds." },
  { name: "borderWidth", type: "number", default: "1.5", description: "Border width in px." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

export default function BorderBeamDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Effects</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">BorderBeam</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">BorderBeam</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          An animated light beam that orbits a card&apos;s border. Eye-catching and minimal — great for feature cards, pricing tables, or any card you want to draw attention to.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ BorderBeam }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <BorderBeam className="p-6 w-full max-w-sm">
            <h3 className="font-bold text-neutral-800">BorderBeam</h3>
            <p className="text-sm text-neutral-500 mt-1">A spark travels around the border.</p>
          </BorderBeam>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom colors</h2>
        <ComponentPreview code={COLORS_CODE}>
          <BorderBeam colorFrom="#f59e0b" colorTo="#ef4444" duration={2} className="p-5 w-full max-w-sm">
            <p className="text-sm font-medium text-neutral-800">Amber → Red beam</p>
          </BorderBeam>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Staggered grid</h2>
        <ComponentPreview code={STAGGER_CODE}>
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            <BorderBeam delay={0} className="p-4"><p className="text-xs font-semibold text-neutral-600">Card 1</p></BorderBeam>
            <BorderBeam delay={0.75} className="p-4"><p className="text-xs font-semibold text-neutral-600">Card 2</p></BorderBeam>
            <BorderBeam delay={1.5} className="p-4"><p className="text-xs font-semibold text-neutral-600">Card 3</p></BorderBeam>
            <BorderBeam delay={2.25} className="p-4"><p className="text-xs font-semibold text-neutral-600">Card 4</p></BorderBeam>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
