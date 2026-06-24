"use client";

import { TextScramble } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { TextScramble } from "@stealshadow/ui";

export default function Example() {
  return (
    <TextScramble
      text="Hello, World"
      className="text-4xl font-black text-neutral-900"
    />
  );
}`;

const HOVER_CODE = `<TextScramble
  text="Hover to scramble"
  trigger="hover"
  className="text-2xl font-bold text-violet-600 cursor-pointer"
/>`;

const CUSTOM_CODE = `<TextScramble
  text="Custom charset"
  charset="01"
  speed={50}
  revealSpeed={0.5}
  className="text-2xl font-mono text-emerald-600"
/>`;

const PROPS = [
  { name: "text", type: "string", default: "—", description: "The final text to reveal." },
  { name: "trigger", type: '"mount" | "hover"', default: '"mount"', description: '"mount" runs on load; "hover" runs each time the cursor enters.' },
  { name: "speed", type: "number", default: "40", description: "Milliseconds between each scramble frame." },
  { name: "delay", type: "number", default: "0", description: "Milliseconds to wait before starting the scramble." },
  { name: "revealSpeed", type: "number", default: "0.3", description: "Characters revealed per frame (higher = faster left-to-right reveal)." },
  { name: "charset", type: "string", default: "ABCDEF…0123456789!@#…", description: "Characters used during the scramble phase." },
  { name: "as", type: '"span" | "p" | "h1" | "h2" | "h3" | "div"', default: '"span"', description: "HTML element to render." },
  { name: "onComplete", type: "() => void", default: "—", description: "Called when the scramble finishes." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

export default function TextScrambleDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">TextScramble</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">TextScramble</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Matrix-style character scramble that resolves character by character to the final string. Trigger on mount or hover. Configurable charset, speed, and reveal rate.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ TextScramble }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Mount trigger</h2>
        <p className="text-neutral-500 mb-4">Scrambles on page load — great for hero headings.</p>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center justify-center p-12 bg-neutral-950 rounded-2xl">
            <TextScramble text="Hello, World" className="text-4xl font-black text-white" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Hover trigger</h2>
        <ComponentPreview code={HOVER_CODE}>
          <div className="flex items-center justify-center p-8 bg-neutral-50 rounded-2xl">
            <TextScramble text="Hover to scramble" trigger="hover" className="text-2xl font-bold text-violet-600 cursor-pointer" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Binary charset</h2>
        <ComponentPreview code={CUSTOM_CODE}>
          <div className="flex items-center justify-center p-8 bg-neutral-950 rounded-2xl">
            <TextScramble text="Custom charset" charset="01" speed={50} revealSpeed={0.5} className="text-2xl font-bold text-emerald-400 font-mono" />
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
