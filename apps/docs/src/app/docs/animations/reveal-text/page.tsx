"use client";

import { RevealText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { RevealText } from "@animui/ui";

export default function Example() {
  return (
    <RevealText>
      This text fades up into view as it enters the viewport.
    </RevealText>
  );
}`;

const DIRECTION_CODE = `<RevealText direction="up">Slides up</RevealText>
<RevealText direction="down">Slides down</RevealText>
<RevealText direction="left">Slides left</RevealText>
<RevealText direction="right">Slides right</RevealText>`;

const PROPS = [
  { name: "children", type: "string", default: "—", description: "The text to animate on reveal. Must be a plain string." },
  { name: "direction", type: '"up" | "down" | "left" | "right"', default: '"up"', description: "Direction the content slides in from." },
  { name: "splitBy", type: '"word" | "char" | "line"', default: '"word"', description: "How to split the text for staggered reveal." },
  { name: "stagger", type: "number", default: "0.04", description: "Delay between each split unit in seconds." },
  { name: "delay", type: "number", default: "0", description: "Initial delay in seconds before the animation starts." },
  { name: "once", type: "boolean", default: "true", description: "Whether the animation fires only once." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

export default function RevealTextDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Reveal Text</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Reveal Text</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animate text or any content into view as it enters the viewport. Supports four directions, custom delay, and stagger for multiple children.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ RevealText }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-8 text-center">
            <RevealText className="text-lg font-semibold text-neutral-900">
              This text fades up into view as it enters the viewport.
            </RevealText>
            <p className="mt-2 text-sm text-neutral-400">↑ animated on scroll</p>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Directions</h2>
        <ComponentPreview code={DIRECTION_CODE}>
          <div className="grid grid-cols-2 gap-3">
            {([["up","↑"],["down","↓"],["left","←"],["right","→"]] as const).map(([dir, arrow]) => (
              <div key={dir} className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-5 text-center">
                <p className="text-2xl mb-1">{arrow}</p>
                <RevealText direction={dir} className="text-sm font-semibold text-neutral-700">
                  {`Slides ${dir}`}
                </RevealText>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Stagger</h2>
        <ComponentPreview code={`{items.map((item, i) => (\n  <RevealText key={i} delay={i * 0.1}>{item}</RevealText>\n))}`}>
          <div className="space-y-3">
            {["First line appears", "Second line follows", "Third line completes"].map((text, i) => (
              <RevealText key={i} delay={i * 0.1} className="text-sm text-neutral-700">
                {text}
              </RevealText>
            ))}
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
