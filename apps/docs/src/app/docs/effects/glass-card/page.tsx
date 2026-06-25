"use client";

import { GlassCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { GlassCard } from "@animui/ui";

export default function Example() {
  return (
    <div className="bg-gradient-to-br from-violet-500 to-blue-600 p-8 rounded-2xl">
      <GlassCard className="p-6">
        <h3 className="text-white font-bold text-lg">Glass Card</h3>
        <p className="text-white/70 text-sm mt-1">Frosted glass effect with backdrop blur.</p>
      </GlassCard>
    </div>
  );
}`;

const GLOW_CODE = `<GlassCard
  glow
  glowColor="rgba(139,92,246,0.5)"
  className="p-6"
>
  <p className="text-white">Glowing glass card</p>
</GlassCard>`;

const HOVER_CODE = `<GlassCard hover className="p-6">
  <p className="text-white">Hover for lift effect</p>
</GlassCard>`;

const BLUR_CODE = `<GlassCard blur="sm"  className="p-4"><p className="text-white/80 text-xs">blur: sm</p></GlassCard>
<GlassCard blur="md"  className="p-4"><p className="text-white/80 text-xs">blur: md</p></GlassCard>
<GlassCard blur="xl"  className="p-4"><p className="text-white/80 text-xs">blur: xl (default)</p></GlassCard>
<GlassCard blur="2xl" className="p-4"><p className="text-white/80 text-xs">blur: 2xl</p></GlassCard>`;

const PROPS = [
  { name: "blur", type: '"sm" | "md" | "lg" | "xl" | "2xl"', default: '"xl"', description: "Backdrop blur intensity." },
  { name: "border", type: "boolean", default: "true", description: "Show a semi-transparent white border." },
  { name: "glow", type: "boolean", default: "false", description: "Add a glow shadow using glowColor." },
  { name: "glowColor", type: "string", default: '"rgba(139,92,246,0.3)"', description: "CSS color value for the glow." },
  { name: "hover", type: "boolean", default: "false", description: "Enable scale + lift hover animation." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

const GradBg = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full rounded-xl overflow-hidden bg-gradient-to-br from-violet-500 via-blue-600 to-indigo-700 p-8">
    {children}
  </div>
);

export default function GlassCardDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Effects</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">GlassCard</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">GlassCard</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Glassmorphism card with configurable backdrop blur, semi-transparent background, and optional glow. Works best placed over colorful or image backgrounds.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ GlassCard }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <GradBg>
            <GlassCard className="p-6 w-full max-w-sm">
              <h3 className="text-white font-bold text-lg">Glass Card</h3>
              <p className="text-white/70 text-sm mt-1">Frosted glass effect with backdrop blur.</p>
            </GlassCard>
          </GradBg>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Glow variant</h2>
        <ComponentPreview code={GLOW_CODE}>
          <GradBg>
            <GlassCard glow glowColor="rgba(139,92,246,0.5)" className="p-6 w-full max-w-sm">
              <h3 className="text-white font-bold">Glowing glass card</h3>
              <p className="text-white/70 text-sm mt-1">Extra depth with colored shadow.</p>
            </GlassCard>
          </GradBg>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Blur levels</h2>
        <ComponentPreview code={BLUR_CODE}>
          <GradBg>
            <div className="grid grid-cols-2 gap-3">
              <GlassCard blur="sm" className="p-3"><p className="text-white/80 text-xs font-mono">blur: sm</p></GlassCard>
              <GlassCard blur="md" className="p-3"><p className="text-white/80 text-xs font-mono">blur: md</p></GlassCard>
              <GlassCard blur="xl" className="p-3"><p className="text-white/80 text-xs font-mono">blur: xl (default)</p></GlassCard>
              <GlassCard blur="2xl" className="p-3"><p className="text-white/80 text-xs font-mono">blur: 2xl</p></GlassCard>
            </div>
          </GradBg>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
