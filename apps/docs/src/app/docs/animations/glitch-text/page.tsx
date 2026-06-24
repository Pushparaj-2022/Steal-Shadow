"use client";

import { GlitchText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { GlitchText } from "@stealshadow/ui";

export default function Example() {
  return <GlitchText>SYSTEM ERROR</GlitchText>;
}`;

const INTENSITY_CODE = `<GlitchText intensity="low">Low glitch</GlitchText>
<GlitchText intensity="medium">Medium glitch</GlitchText>
<GlitchText intensity="high">MAXIMUM CHAOS</GlitchText>`;

const PROPS = [
  { name: "children", type: "string", default: "—", description: "The text to apply the glitch effect to." },
  { name: "intensity", type: '"low" | "medium" | "high"', default: '"medium"', description: "Controls the frequency and displacement of the glitch animation." },
  { name: "trigger", type: '"always" | "hover"', default: '"always"', description: "Whether to glitch continuously or only on hover." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the element." },
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
          A cyberpunk-inspired glitch animation applied to text. Creates chromatic aberration and scanline effects using CSS pseudo-elements.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ GlitchText }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
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
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Intensity</h2>
        <ComponentPreview code={INTENSITY_CODE}>
          <div className="rounded-xl bg-zinc-950 px-8 py-10 space-y-4 text-center">
            <GlitchText intensity="low" className="text-2xl font-black tracking-wider">Low glitch</GlitchText>
            <GlitchText intensity="medium" className="text-2xl font-black tracking-wider">Medium glitch</GlitchText>
            <GlitchText intensity="high" className="text-2xl font-black tracking-wider">MAXIMUM CHAOS</GlitchText>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Hover trigger</h2>
        <ComponentPreview code={`<GlitchText trigger="hover">Hover over me</GlitchText>`}>
          <div className="rounded-xl bg-zinc-950 px-8 py-10 text-center">
            <GlitchText trigger="hover" className="text-2xl font-black tracking-wider">Hover to glitch</GlitchText>
            <p className="mt-2 text-xs text-zinc-500">Effect only plays on hover</p>
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
