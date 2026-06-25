"use client";

import { Meteors } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Meteors } from "@animui/ui";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:p-10 w-full">
      <Meteors count={20} />
      <h2 className="relative text-3xl font-black text-white">Meteors</h2>
    </div>
  );
}`;

const COLORED_CODE = `<div className="relative overflow-hidden rounded-2xl bg-indigo-950 p-8">
  <Meteors count={12} color="rgba(167,139,250,0.8)" />
  <p className="relative text-white/80">Violet meteors</p>
</div>`;

const PROPS = [
  { name: "count", type: "number", default: "15", description: "Number of meteor elements rendered." },
  { name: "color", type: "string", default: '"rgba(255,255,255,0.7)"', description: "CSS color of the meteor streak and glow." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the container." },
];

export default function MeteorsDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Effects</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Meteors</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Meteors</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animated meteor shower effect — streaks of light fall diagonally across a container. Pure CSS + Motion, zero canvas, no performance cost.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Meteors }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <p className="text-neutral-500 mb-4 text-sm">Meteors is an overlay — it must be inside a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">position:relative overflow:hidden</code> parent.</p>
        <ComponentPreview code={BASIC_CODE}>
          <div className="relative overflow-hidden rounded-xl bg-neutral-950 h-44 flex items-center justify-center">
            <Meteors count={20} />
            <h2 className="relative text-3xl font-black text-white">Meteors</h2>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Colored meteors</h2>
        <ComponentPreview code={COLORED_CODE}>
          <div className="relative overflow-hidden rounded-xl bg-indigo-950 h-32 flex items-center justify-center">
            <Meteors count={12} color="rgba(167,139,250,0.8)" />
            <p className="relative text-white/80 font-semibold">Violet meteors</p>
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
