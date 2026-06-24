"use client";

import { AuroraBackground } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { AuroraBackground } from "@stealshadow/ui";

export default function HeroSection() {
  return (
    <AuroraBackground className="min-h-screen bg-neutral-950">
      <div className="text-center py-32">
        <h1 className="text-5xl font-black text-white">Build faster</h1>
        <p className="text-neutral-400 mt-4">Beautiful components.</p>
      </div>
    </AuroraBackground>
  );
}`;

const COLORS_CODE = `<AuroraBackground
  colors={["#f59e0b", "#ef4444", "#ec4899"]}
  speed="slow"
  className="h-48 rounded-2xl bg-neutral-950"
/>`;

const STANDALONE_CODE = `{/* As a pure decorative background, no children */}
<div className="relative h-64 rounded-2xl overflow-hidden bg-neutral-950">
  <AuroraBackground className="absolute inset-0" />
  <p className="relative z-10 text-white font-bold p-6">Content on top</p>
</div>`;

const PROPS = [
  { name: "colors", type: "[string, string, string]", default: '["#8b5cf6","#3b82f6","#10b981"]', description: "Three CSS colors for the three aurora blobs." },
  { name: "speed", type: '"slow" | "normal" | "fast"', default: '"normal"', description: "Animation speed of the blob movement." },
  { name: "blur", type: "number", default: "80", description: "Gaussian blur amount in px applied to the blobs." },
  { name: "children", type: "ReactNode", default: "—", description: "Content rendered on top of the aurora." },
  { name: "className", type: "string", default: "—", description: "Classes on the wrapper — set height and background here." },
];

export default function AuroraBackgroundDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Effects</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">AuroraBackground</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">AuroraBackground</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animated aurora borealis background with three floating gradient blobs. Perfect for hero sections, login pages, and dark-mode landing screens.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ AuroraBackground }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <AuroraBackground className="rounded-xl bg-neutral-950 h-44 flex items-center justify-center">
            <div className="relative text-center">
              <h3 className="text-3xl font-black text-white">Build faster</h3>
              <p className="text-neutral-400 mt-2 text-sm">Beautiful components.</p>
            </div>
          </AuroraBackground>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom colors</h2>
        <ComponentPreview code={COLORS_CODE}>
          <AuroraBackground
            colors={["#f59e0b", "#ef4444", "#ec4899"]}
            speed="slow"
            className="rounded-xl bg-neutral-950 h-36 flex items-center justify-center"
          >
            <p className="text-white/50 text-xs font-mono">colors: amber / red / pink</p>
          </AuroraBackground>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
