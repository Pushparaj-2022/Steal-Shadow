"use client";

import { WaveText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { WaveText } from "@animui/ui";

export default function Example() {
  return (
    <WaveText className="text-4xl font-black text-neutral-900">
      Wave Text
    </WaveText>
  );
}`;

const RAINBOW_CODE = `<WaveText
  colors={["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#8b5cf6"]}
  amplitude={12}
  stagger={0.06}
  className="text-5xl font-black"
>
  Rainbow
</WaveText>`;

const HOVER_CODE = `<WaveText trigger="hover" className="text-2xl font-bold text-blue-600 cursor-pointer">
  Hover each letter
</WaveText>`;

const PROPS = [
  { name: "children", type: "string", default: "—", description: "The text to animate. Must be a plain string." },
  { name: "amplitude", type: "number", default: "10", description: "Pixel height of the wave (how far up each character moves)." },
  { name: "duration", type: "number", default: "1.2", description: "Duration of one wave cycle in seconds." },
  { name: "stagger", type: "number", default: "0.08", description: "Delay between each character's wave start in seconds." },
  { name: "colors", type: "string[]", default: "—", description: "Array of CSS colors cycled per character. Omit for single color." },
  { name: "trigger", type: '"always" | "hover"', default: '"always"', description: '"always" animates continuously; "hover" only on character hover.' },
  { name: "as", type: '"span" | "p" | "h1" | "h2" | "h3" | "div"', default: '"span"', description: "HTML element to render." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

export default function WaveTextDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">WaveText</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">WaveText</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Each character animates independently with a staggered sine-wave offset, creating a flowing wave effect. Supports per-character color cycling for rainbow variants, and a hover mode that triggers on each individual letter.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ WaveText }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic wave</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center justify-center p-12 bg-neutral-50 rounded-2xl">
            <WaveText className="text-4xl font-black text-neutral-900">Wave Text</WaveText>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Rainbow</h2>
        <ComponentPreview code={RAINBOW_CODE}>
          <div className="flex items-center justify-center p-12 bg-neutral-950 rounded-2xl">
            <WaveText colors={["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#8b5cf6"]} amplitude={12} stagger={0.06} className="text-5xl font-black">Rainbow</WaveText>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Hover trigger</h2>
        <ComponentPreview code={HOVER_CODE}>
          <div className="flex items-center justify-center p-12 bg-neutral-50 rounded-2xl">
            <WaveText trigger="hover" className="text-2xl font-bold text-blue-600 cursor-pointer">Hover each letter</WaveText>
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
