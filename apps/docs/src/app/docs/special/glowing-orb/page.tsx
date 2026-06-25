"use client";

import { GlowingOrb } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { GlowingOrb } from "@animui/ui";

// Page-level ambient background (the default use case)
export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <GlowingOrb color="#8b5cf6" size={600} opacity={0.15} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}`;

const CONTAINED_CODE = `import { GlowingOrb } from "@animui/ui";

// Contained inside a card / section
export default function HeroCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-neutral-950 h-64">
      <GlowingOrb contained color="#7c3aed" size={320} opacity={0.35} blur={80} />
      <div className="relative z-10 p-8 text-white">
        <h2>Move your cursor here</h2>
      </div>
    </div>
  );
}`;

const MULTI_CODE = `{/* Layer multiple orbs for richer ambient lighting */}
<GlowingOrb color="#8b5cf6" size={600} opacity={0.12} stiffness={40} damping={15} />
<GlowingOrb color="#3b82f6" size={400} opacity={0.08} stiffness={80} damping={25} />`;

const PROPS = [
  { name: "color", type: "string", default: '"#8b5cf6"', description: "CSS hex color of the orb." },
  { name: "size", type: "number", default: "500", description: "Diameter in pixels before blur." },
  { name: "blur", type: "number", default: "100", description: "CSS blur radius in pixels." },
  { name: "opacity", type: "number", default: "0.12", description: "Overall opacity (0–1)." },
  { name: "stiffness", type: "number", default: "60", description: "Spring stiffness — higher = snappier follow." },
  { name: "damping", type: "number", default: "20", description: "Spring damping — higher = less overshoot." },
  { name: "followMouse", type: "boolean", default: "true", description: "When false, orb stays at its initial centre position." },
  { name: "contained", type: "boolean", default: "false", description: "false = position:fixed (whole page). true = position:absolute inside nearest positioned parent." },
  { name: "className", type: "string", default: "—", description: "Applied to the wrapper overlay div." },
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
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">GlowingOrb</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A large blurred radial gradient that follows the cursor with spring physics — perfect for ambient page lighting or interactive card highlights. Use{" "}
          <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">contained</code> to keep it inside a specific element.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ GlowingOrb }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      {/* Contained demo — real component, mouse-tracking works */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Contained mode</h2>
        <p className="text-sm text-neutral-500 mb-4">
          Move your cursor inside the box — the orb follows within its bounds.
        </p>
        <ComponentPreview code={CONTAINED_CODE}>
          <div className="relative overflow-hidden rounded-2xl bg-neutral-950 h-64 w-full flex items-center justify-center cursor-crosshair">
            <GlowingOrb contained color="#7c3aed" size={320} opacity={0.45} blur={80} />
            <div className="relative z-10 text-center">
              <p className="text-white font-semibold text-lg">Move cursor here</p>
              <p className="text-white/40 text-sm mt-1">Spring-physics tracking</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Layered orbs demo */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Layered orbs</h2>
        <ComponentPreview code={MULTI_CODE}>
          <div className="relative overflow-hidden rounded-2xl bg-neutral-950 h-64 w-full flex items-center justify-center cursor-crosshair">
            <GlowingOrb contained color="#8b5cf6" size={380} opacity={0.4} blur={90} stiffness={40} damping={15} />
            <GlowingOrb contained color="#3b82f6" size={260} opacity={0.3} blur={60} stiffness={90} damping={28} />
            <div className="relative z-10 text-center">
              <p className="text-white font-semibold text-lg">Two orbs, different speeds</p>
              <p className="text-white/40 text-sm mt-1">Violet slow · Blue fast</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Global page use */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Page-level usage</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="rounded-xl bg-neutral-950 px-6 py-5 text-sm text-neutral-300 leading-relaxed">
            <p className="text-white font-semibold mb-2">Default mode: <code className="text-violet-400">position: fixed</code></p>
            <p className="text-neutral-400">
              Drop <code className="text-white">{"<GlowingOrb />"}</code> at the root of a dark layout.
              It renders as a fixed overlay with <code className="text-white">z-0</code> so all content
              with <code className="text-white">z-10</code> sits above it. Pointer-events-none — never
              blocks clicks. The orb follows the global cursor across the entire page.
            </p>
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
