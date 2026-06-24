"use client";

import { MagneticButton } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";


const MAGNETIC_CODE = `"use client";

import { MagneticButton } from "@stealshadow/ui";

export default function Example() {
  return (
    <MagneticButton
      strength={0.35}
      className="px-8 py-4 rounded-2xl bg-blue-500 text-white font-bold"
    >
      Hover me ✦
    </MagneticButton>
  );
}`;

const CUSTOM_STRENGTH_CODE = `import { MagneticButton } from "@stealshadow/ui";

// Stronger pull
<MagneticButton strength={0.6}>Strong pull</MagneticButton>

// Subtle pull (good for nav links)
<MagneticButton strength={0.15}>Subtle</MagneticButton>

// Disabled magnetic (plain button)
<MagneticButton strength={0}>No magnetism</MagneticButton>`;

const PROPS = [
  { name: "strength", type: "number", default: "0.35", description: "How strongly the button is pulled toward the cursor. 0 = no pull, 1 = full pull. Values between 0.2–0.5 feel natural." },
  { name: "children", type: "React.ReactNode", default: "—", description: "The content rendered inside the button." },
  { name: "className", type: "string", default: "—", description: "Tailwind classes applied to the button element." },
  { name: "onClick", type: "(e: React.MouseEvent) => void", default: "—", description: "Click handler." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables magnetic effect and interaction." },
  { name: "springConfig", type: "{ stiffness: number; damping: number; mass: number }", default: "{ stiffness: 150, damping: 15, mass: 0.1 }", description: "Override the Motion spring configuration for the return animation." },
  { name: "as", type: "\"button\" | \"a\" | \"div\"", default: "\"button\"", description: "Render the magnetic element as a different HTML tag. Use \"a\" with href for link buttons." },
];

export default function MagneticButtonPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Magnetic Button</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">MagneticButton</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          An interactive button that physically attracts toward the cursor on hover, snapping back
          to its origin with spring physics when the cursor leaves. Ideal for CTAs and hero sections.
        </p>
      </div>

      {/* Import */}
      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ MagneticButton }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      {/* Basic usage */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic usage</h2>
        <p className="text-neutral-500 mb-4">
          Wrap any content. Move your cursor over the button below to feel the effect.
        </p>
        <ComponentPreview code={MAGNETIC_CODE}>
          <MagneticButton strength={0.35} className="px-8 py-4 rounded-2xl bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-500/30">
            Hover me ✦
          </MagneticButton>
        </ComponentPreview>
      </section>

      {/* Strength */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Controlling strength</h2>
        <p className="text-neutral-500 mb-4">
          The <code className="font-mono text-xs bg-neutral-100 px-1 rounded">strength</code> prop
          scales how far the element shifts toward the cursor. Lower values (0.1–0.2) work
          well for navigation links; higher values (0.4–0.6) create dramatic hero CTAs.
        </p>
        <ComponentPreview code={CUSTOM_STRENGTH_CODE}>
          <div className="flex items-center gap-6 flex-wrap">
            <MagneticButton strength={0.6} className="px-5 py-2.5 rounded-xl bg-violet-500 text-white font-bold text-sm shadow-md shadow-violet-500/30">Strong pull</MagneticButton>
            <MagneticButton strength={0.15} className="px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-700 font-bold text-sm">Subtle</MagneticButton>
            <MagneticButton strength={0} className="px-5 py-2.5 rounded-xl bg-neutral-200 text-neutral-500 font-bold text-sm cursor-not-allowed">No magnetism</MagneticButton>
          </div>
        </ComponentPreview>
      </section>

      {/* Props table */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      {/* When to use */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">When to use</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold shrink-0">→</span>
            Hero section CTAs where you want the button to feel alive and draw attention.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold shrink-0">→</span>
            Navigation links with a subtle pull (strength 0.15) to add personality without distraction.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold shrink-0">→</span>
            Social icons in footers and sidebars to reward exploration.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-neutral-400 font-bold shrink-0">✗</span>
            Avoid on form submit buttons where the target should be predictable and stable.
          </li>
        </ul>
      </section>
    </div>
  );
}
