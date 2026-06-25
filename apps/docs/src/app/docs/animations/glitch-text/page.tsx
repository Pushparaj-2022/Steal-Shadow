"use client";

import { GlitchText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { GlitchText } from "@animui/ui";

export default function Example() {
  return <GlitchText>SYSTEM ERROR</GlitchText>;
}`;

const SPEED_CODE = `<GlitchText speed={20}>Fast scramble</GlitchText>
<GlitchText speed={40}>Default speed</GlitchText>
<GlitchText speed={80}>Slow scramble</GlitchText>`;

const TRIGGER_ON_CODE = `<GlitchText triggerOn="hover">Hover to glitch</GlitchText>
<GlitchText triggerOn="mount">Glitches on mount</GlitchText>
<GlitchText triggerOn="both">Glitches on mount and hover</GlitchText>`;

const SCRAMBLE_DURATION_CODE = `<GlitchText scrambleDuration={400}>Short burst</GlitchText>
<GlitchText scrambleDuration={800}>Default duration</GlitchText>
<GlitchText scrambleDuration={1600}>Long scramble</GlitchText>`;

const PROPS = [
  {
    name: "children",
    type: "string",
    default: "—",
    description: "The text to apply the glitch scramble effect to.",
  },
  {
    name: "speed",
    type: "number",
    default: "40",
    description: "Interval speed in ms between each character swap during the scramble animation. Lower values scramble faster.",
  },
  {
    name: "scrambleDuration",
    type: "number",
    default: "800",
    description: "Total duration of the scramble animation in ms. Controls how long the glitch effect runs before resolving.",
  },
  {
    name: "triggerOn",
    type: '"hover" | "mount" | "both"',
    default: '"hover"',
    description: 'When to trigger the scramble animation. "hover" plays on mouse enter, "mount" plays once on mount, "both" plays on mount and on every hover.',
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes applied to the element.",
  },
];

export default function GlitchTextDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Glitch Text</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Glitch Text</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A cyberpunk-inspired text scramble animation. Randomly swaps characters over a configurable duration, then resolves back to the original string — triggered on hover, mount, or both.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ GlitchText }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="rounded-xl bg-zinc-950 px-8 py-10 text-center">
            <GlitchText className="text-4xl font-black tracking-widest">SYSTEM ERROR</GlitchText>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Speed</h2>
        <p className="text-sm text-neutral-500 mb-4">
          The <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">speed</code> prop controls the interval between character swaps in ms. Hover each label to compare.
        </p>
        <ComponentPreview code={SPEED_CODE}>
          <div className="rounded-xl bg-zinc-950 px-8 py-10 space-y-4 text-center">
            <div>
              <GlitchText speed={20} className="text-2xl font-black tracking-wider">Fast scramble</GlitchText>
              <p className="mt-1 text-xs text-zinc-500">speed=20</p>
            </div>
            <div>
              <GlitchText speed={40} className="text-2xl font-black tracking-wider">Default speed</GlitchText>
              <p className="mt-1 text-xs text-zinc-500">speed=40 (default)</p>
            </div>
            <div>
              <GlitchText speed={80} className="text-2xl font-black tracking-wider">Slow scramble</GlitchText>
              <p className="mt-1 text-xs text-zinc-500">speed=80</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Trigger</h2>
        <p className="text-sm text-neutral-500 mb-4">
          The <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">triggerOn</code> prop controls when the scramble animation fires.
        </p>
        <ComponentPreview code={TRIGGER_ON_CODE}>
          <div className="rounded-xl bg-zinc-950 px-8 py-10 space-y-4 text-center">
            <div>
              <GlitchText triggerOn="hover" className="text-2xl font-black tracking-wider">Hover to glitch</GlitchText>
              <p className="mt-1 text-xs text-zinc-500">triggerOn="hover" — plays on mouse enter</p>
            </div>
            <div>
              <GlitchText triggerOn="mount" className="text-2xl font-black tracking-wider">Glitches on mount</GlitchText>
              <p className="mt-1 text-xs text-zinc-500">triggerOn="mount" — plays once when component mounts</p>
            </div>
            <div>
              <GlitchText triggerOn="both" className="text-2xl font-black tracking-wider">Glitches on mount and hover</GlitchText>
              <p className="mt-1 text-xs text-zinc-500">triggerOn="both" — plays on mount, then again on every hover</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Scramble Duration</h2>
        <p className="text-sm text-neutral-500 mb-4">
          The <code className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">scrambleDuration</code> prop sets the total animation length in ms. Hover each label to compare.
        </p>
        <ComponentPreview code={SCRAMBLE_DURATION_CODE}>
          <div className="rounded-xl bg-zinc-950 px-8 py-10 space-y-4 text-center">
            <div>
              <GlitchText scrambleDuration={400} className="text-2xl font-black tracking-wider">Short burst</GlitchText>
              <p className="mt-1 text-xs text-zinc-500">scrambleDuration=400</p>
            </div>
            <div>
              <GlitchText scrambleDuration={800} className="text-2xl font-black tracking-wider">Default duration</GlitchText>
              <p className="mt-1 text-xs text-zinc-500">scrambleDuration=800 (default)</p>
            </div>
            <div>
              <GlitchText scrambleDuration={1600} className="text-2xl font-black tracking-wider">Long scramble</GlitchText>
              <p className="mt-1 text-xs text-zinc-500">scrambleDuration=1600</p>
            </div>
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
