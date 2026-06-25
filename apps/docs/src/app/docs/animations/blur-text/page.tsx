"use client";

import { BlurText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { BlurText } from "@animui/ui";

export default function Example() {
  return (
    <BlurText as="h1" className="text-4xl font-black text-neutral-900">
      Building the future of web.
    </BlurText>
  );
}`;

const CHARS_CODE = `<BlurText
  splitBy="chars"
  stagger={0.04}
  blurAmount={12}
  className="text-5xl font-black text-neutral-900"
>
  Blur In
</BlurText>`;

const HERO_CODE = `<div className="text-center">
  <BlurText as="h1" className="text-6xl font-black text-white" delay={0} stagger={0.08}>
    Ship faster.
  </BlurText>
  <BlurText as="p" className="text-xl text-white/60 mt-4" delay={0.5} stagger={0.05}>
    The component library you actually want.
  </BlurText>
</div>`;

const PROPS = [
  { name: "children", type: "string", default: "—", description: "Text string to animate." },
  { name: "splitBy", type: '"words" | "chars"', default: '"words"', description: "Unit to animate — words or individual characters." },
  { name: "blurAmount", type: "number", default: "10", description: "Starting blur amount in px." },
  { name: "stagger", type: "number", default: "0.06", description: "Delay between each unit in seconds." },
  { name: "delay", type: "number", default: "0", description: "Initial delay before animation starts." },
  { name: "duration", type: "number", default: "0.6", description: "Duration per unit in seconds." },
  { name: "once", type: "boolean", default: "true", description: "Trigger only once on scroll-into-view." },
  { name: "as", type: '"p" | "h1" | "h2" | "h3" | "h4" | "span" | "div"', default: '"p"', description: "HTML element." },
];

export default function BlurTextDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">BlurText</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">BlurText</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Text that blurs in from sharp to clear with a staggered word or character reveal. Elegant, cinematic, and perfect for hero headings.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ BlurText }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Word blur</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="py-6 text-center">
            <BlurText as="h2" className="text-3xl font-black text-neutral-900">
              Building the future of web.
            </BlurText>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Character blur</h2>
        <ComponentPreview code={CHARS_CODE}>
          <div className="py-6 text-center">
            <BlurText splitBy="chars" stagger={0.04} blurAmount={12} className="text-5xl font-black text-neutral-900">
              Blur In
            </BlurText>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Hero composition</h2>
        <ComponentPreview code={HERO_CODE}>
          <div className="relative overflow-hidden rounded-xl bg-neutral-950 px-8 py-12 text-center">
            <BlurText as="h2" className="text-4xl font-black text-white" stagger={0.08}>
              Ship faster.
            </BlurText>
            <BlurText as="p" className="text-xl text-white/60 mt-4" delay={0.5} stagger={0.05}>
              The component library you actually want.
            </BlurText>
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
