"use client";

import { SpotlightCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { SpotlightCard } from "@stealshadow/ui";

export default function Example() {
  return (
    <SpotlightCard className="p-6">
      <h3 className="font-bold text-neutral-800">Hover over me</h3>
      <p className="text-neutral-500 text-sm mt-1">
        The spotlight follows your cursor.
      </p>
    </SpotlightCard>
  );
}`;

const GRID_CODE = `<div className="grid grid-cols-3 gap-4">
  {features.map((f) => (
    <SpotlightCard key={f.title} spotlightColor="rgba(99,102,241,0.10)" className="p-5">
      <f.Icon className="h-6 w-6 text-indigo-500 mb-3" />
      <h3 className="font-bold text-sm text-neutral-800">{f.title}</h3>
      <p className="text-xs text-neutral-500 mt-1">{f.desc}</p>
    </SpotlightCard>
  ))}
</div>`;

const PROPS = [
  { name: "spotlightColor", type: "string", default: '"rgba(139,92,246,0.12)"', description: "CSS color of the spotlight gradient." },
  { name: "spotlightSize", type: "number", default: "350", description: "Diameter of the spotlight circle in px." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the card." },
];

export default function SpotlightCardDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Effects</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">SpotlightCard</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">SpotlightCard</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A card that tracks your cursor with a radial gradient spotlight, creating a depth and focus effect. Zero JS overhead — pure CSS radial-gradient updated on mousemove.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ SpotlightCard }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <SpotlightCard className="p-5 max-w-xs">
            <div className="h-7 w-7 rounded-lg bg-violet-100 flex items-center justify-center mb-3">
              <div className="h-3.5 w-3.5 rounded bg-violet-500" />
            </div>
            <p className="font-bold text-sm text-neutral-800">Spotlight Card</p>
            <p className="text-xs text-neutral-500 mt-1">Hover to see the effect</p>
          </SpotlightCard>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Feature grid</h2>
        <p className="text-neutral-500 mb-4 text-sm">Use multiple SpotlightCards in a grid for feature sections.</p>
        <ComponentPreview code={GRID_CODE}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            {["Fast", "Accessible", "Animated"].map((t) => (
              <SpotlightCard key={t} spotlightColor="rgba(99,102,241,0.10)" className="p-5">
                <p className="font-bold text-sm text-neutral-800">{t}</p>
                <p className="text-xs text-neutral-500 mt-1">Hover to spotlight</p>
              </SpotlightCard>
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
