"use client";

import { LiquidGlass } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { LiquidGlass } from "@animui/ui";

export default function Example() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-violet-900 p-8 rounded-2xl">
      <LiquidGlass color="#8b5cf6" className="p-6 max-w-xs">
        <h3 className="text-white font-bold text-lg">Liquid Glass</h3>
        <p className="text-white/70 text-sm mt-1">Move your mouse over the card.</p>
      </LiquidGlass>
    </div>
  );
}`;

const BUTTON_CODE = `<LiquidGlass as="button" color="#3b82f6" onClick={() => alert("clicked!")}>
  <span className="text-white font-semibold px-6 py-3 block">
    Click me
  </span>
</LiquidGlass>`;

const INTENSITY_CODE = `<LiquidGlass intensity="low"    color="#10b981" className="p-4">...</LiquidGlass>
<LiquidGlass intensity="medium" color="#8b5cf6" className="p-4">...</LiquidGlass>
<LiquidGlass intensity="high"   color="#ef4444" className="p-4">...</LiquidGlass>`;

const PROPS = [
  { name: "color", type: "string", default: '"#8b5cf6"', description: "CSS color of the liquid blob that follows the cursor." },
  { name: "intensity", type: '"low" | "medium" | "high"', default: '"medium"', description: "How much the blob scales up on hover." },
  { name: "as", type: '"div" | "button"', default: '"div"', description: "HTML element tag to render as." },
  { name: "onClick", type: "() => void", default: "—", description: "Click handler (makes cursor a pointer)." },
  { name: "className", type: "string", default: "—", description: "Classes on the outer container." },
];

const GradBg = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full min-h-[220px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900 to-violet-900 p-4 sm:p-8">
    {children}
  </div>
);

export default function LiquidGlassDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Effects</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">LiquidGlass</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">LiquidGlass</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A container with a liquid glass effect — a soft color blob tracks your cursor and glows through the frosted glass surface. Works as a card or a button.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ LiquidGlass }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic (hover me)</h2>
        <ComponentPreview code={BASIC_CODE}>
          <GradBg>
            <LiquidGlass color="#8b5cf6" className="p-6 max-w-xs w-full">
              <h3 className="text-white font-bold text-lg">Liquid Glass</h3>
              <p className="text-white/70 text-sm mt-1">Hover to see the liquid blob follow your cursor.</p>
            </LiquidGlass>
          </GradBg>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">As a button</h2>
        <ComponentPreview code={BUTTON_CODE}>
          <GradBg>
            <LiquidGlass as="button" color="#3b82f6" onClick={() => {}}>
              <span className="text-white font-semibold px-6 py-3 block">Click me</span>
            </LiquidGlass>
          </GradBg>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Intensity levels</h2>
        <ComponentPreview code={INTENSITY_CODE}>
          <GradBg>
            <div className="flex flex-wrap items-stretch justify-center gap-3">
              <LiquidGlass intensity="low" color="#10b981" className="w-28 shrink-0 px-3 py-3 text-center">
                <p className="text-white text-xs font-bold">Subtle</p>
              </LiquidGlass>
              <LiquidGlass intensity="medium" color="#8b5cf6" className="w-28 shrink-0 px-3 py-3 text-center">
                <p className="text-white text-xs font-bold">Standard</p>
              </LiquidGlass>
              <LiquidGlass intensity="high" color="#ef4444" className="w-28 shrink-0 px-3 py-3 text-center">
                <p className="text-white text-xs font-bold">Bold</p>
              </LiquidGlass>
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
