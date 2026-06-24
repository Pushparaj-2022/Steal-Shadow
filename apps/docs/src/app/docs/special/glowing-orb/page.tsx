"use client";

import { GlowingOrb } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { GlowingOrb } from "@stealshadow/ui";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      {/* Place at the root of your layout */}
      <GlowingOrb color="#8b5cf6" size={600} opacity={0.15} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}`;

const MULTI_CODE = `{/* Multiple orbs for richer ambient lighting */}
<GlowingOrb color="#8b5cf6" size={600} opacity={0.12} stiffness={40} damping={15} />
<GlowingOrb color="#3b82f6" size={400} opacity={0.08} stiffness={80} damping={25} />`;

const PROPS = [
  { name: "color", type: "string", default: '"#8b5cf6"', description: "CSS color of the orb. Supports hex, rgb, hsl." },
  { name: "size", type: "number", default: "500", description: "Diameter of the orb in pixels (before blur)." },
  { name: "blur", type: "number", default: "100", description: "CSS blur radius in pixels." },
  { name: "opacity", type: "number", default: "0.12", description: "Overall opacity (0–1)." },
  { name: "stiffness", type: "number", default: "60", description: "Spring stiffness — higher = snappier following." },
  { name: "damping", type: "number", default: "20", description: "Spring damping — higher = less overshoot." },
  { name: "followMouse", type: "boolean", default: "true", description: "When false, orb stays at its initial position." },
  { name: "className", type: "string", default: "—", description: "Applied to the fixed overlay container." },
];

export default function GlowingOrbDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">GlowingOrb</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">GlowingOrb</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A large, blurred ambient light that follows the cursor with spring physics. Renders as a <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">position: fixed</code> overlay — invisible to pointer events. Stack multiple orbs with different colors for layered lighting.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ GlowingOrb }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Demo</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="relative h-56 overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center">
            <div
              className="pointer-events-none absolute rounded-full"
              style={{
                width: 300,
                height: 300,
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                background: "radial-gradient(circle at center, #8b5cf6cc 0%, #8b5cf644 40%, transparent 70%)",
                filter: "blur(60px)",
                opacity: 0.4,
              }}
            />
            <p className="relative z-10 text-white/60 text-sm">Move your cursor in the real component</p>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Layered orbs</h2>
        <ComponentPreview code={MULTI_CODE}>
          <div className="relative h-56 overflow-hidden rounded-2xl bg-neutral-950 flex items-center justify-center">
            <div className="pointer-events-none absolute rounded-full" style={{ width: 350, height: 350, top: "40%", left: "40%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle, #8b5cf6cc 0%, transparent 70%)", filter: "blur(80px)", opacity: 0.3 }} />
            <div className="pointer-events-none absolute rounded-full" style={{ width: 250, height: 250, top: "55%", left: "60%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle, #3b82f6cc 0%, transparent 70%)", filter: "blur(60px)", opacity: 0.25 }} />
            <p className="relative z-10 text-white/60 text-sm">Two orbs, different colors</p>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Usage tip</h2>
        <p className="text-neutral-500">
          Place <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">GlowingOrb</code> at the top level of a dark-background container. It uses <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">position: fixed</code> with <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">z-0</code>, so sibling content with <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">z-10</code> sits above it. The orb is pointer-events-none so it never blocks clicks.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
