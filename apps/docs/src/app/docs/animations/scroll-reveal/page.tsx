"use client";

import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { ScrollReveal } from "@animui/ui";

export default function Example() {
  return (
    <div className="space-y-8">
      <ScrollReveal direction="up">
        <div className="p-6 bg-white rounded-xl border">Slides up into view</div>
      </ScrollReveal>

      <ScrollReveal direction="none" delay={0.2}>
        <div className="p-6 bg-white rounded-xl border">Fades in with delay</div>
      </ScrollReveal>

      <ScrollReveal direction="left" distance={48}>
        <div className="p-6 bg-white rounded-xl border">Slides in from left</div>
      </ScrollReveal>
    </div>
  );
}`;

const PROPS = [
  { name: "children", type: "React.ReactNode", default: "—", description: "The content to animate into view." },
  { name: "direction", type: '"up" | "down" | "left" | "right" | "none"', default: '"up"', description: "Direction the element slides in from. Use \"none\" for a pure fade." },
  { name: "distance", type: "number", default: "32", description: "Pixel distance the element travels during the entrance animation." },
  { name: "delay", type: "number", default: "0", description: "Seconds to delay the animation after the element enters the viewport." },
  { name: "duration", type: "number", default: "0.6", description: "Animation duration in seconds." },
  { name: "once", type: "boolean", default: "true", description: "If true, the animation only plays once. If false, it replays when the element re-enters." },
  { name: "className", type: "string", default: "—", description: "Classes applied to the wrapper div." },
  { name: "style", type: "React.CSSProperties", default: "—", description: "Inline styles applied to the wrapper div." },
];

export default function ScrollRevealPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Scroll Reveal</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">ScrollReveal</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Wraps any element and triggers a Motion animation when it enters the viewport.
          Supports fade, slide, and scale effects with configurable thresholds and delays.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ ScrollReveal }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Usage</h2>
        <p className="text-neutral-500 mb-4">
          Wrap any element. Scroll down on a real page to see the entrance animations trigger.
        </p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="flex items-center px-4 py-2 border-b border-neutral-200 bg-neutral-50">
            <span className="text-xs font-mono text-neutral-500">example.tsx</span>
          </div>
          <pre className="bg-neutral-950 p-5 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{BASIC_CODE}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Staggering children</h2>
        <p className="text-sm text-neutral-600 leading-relaxed mb-3">
          To stagger a list of items, map over them and add an incrementing delay:
        </p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <pre className="bg-neutral-950 p-5 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{`{items.map((item, i) => (
  <ScrollReveal key={item.id} direction="up" delay={i * 0.1}>
    <FeatureCard {...item} />
  </ScrollReveal>
))}`}</pre>
        </div>
      </section>
    </div>
  );
}
