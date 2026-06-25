"use client";

import { TiltCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { TiltCard } from "@animui/ui";

export default function Example() {
  return (
    <TiltCard className="rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 p-8 text-white w-full max-w-xs">
      <p className="font-bold text-lg">Hover me</p>
      <p className="text-white/70 text-sm mt-1">Move your cursor around to tilt in 3D. The specular highlight follows your cursor like a real light source.</p>
    </TiltCard>
  );
}`;

const SHINE_CODE = `<TiltCard
  shine={false}
  maxTilt={20}
  className="rounded-2xl border border-neutral-200 bg-white p-6 w-64 shadow-lg"
>
  <h3 className="font-bold text-neutral-900">No shine variant</h3>
  <p className="text-neutral-500 text-sm mt-1">Tilt only, no specular highlight.</p>
</TiltCard>`;

const PROPS = [
  { name: "maxTilt", type: "number", default: "14", description: "Maximum tilt angle in degrees." },
  { name: "scale", type: "number", default: "1.04", description: "Scale multiplier on hover." },
  { name: "perspective", type: "number", default: "900", description: "CSS perspective value in pixels." },
  { name: "shine", type: "boolean", default: "true", description: "Show a specular light highlight that follows the cursor." },
  { name: "shineIntensity", type: "number", default: "0.18", description: "Opacity of the shine overlay (0–1)." },
  { name: "springStiffness", type: "number", default: "340", description: "Spring stiffness for the tilt physics." },
  { name: "springDamping", type: "number", default: "30", description: "Spring damping for the tilt physics." },
  { name: "className", type: "string", default: "—", description: "Applied to the inner motion div." },
];

export default function TiltCardDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">TiltCard</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">TiltCard</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          True CSS 3D perspective tilt with a moving specular light highlight. The shine follows your cursor like a physical light source hitting a glossy surface — spring-physics snap-back on mouse leave.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ TiltCard }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center justify-center py-8 px-6 bg-neutral-50 rounded-xl w-full">
            <TiltCard className="rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 p-8 text-white w-full max-w-xs">
              <p className="font-bold text-lg">Hover me</p>
              <p className="text-white/70 text-sm mt-1">Move your cursor around to tilt in 3D. The specular highlight follows your cursor like a real light source.</p>
            </TiltCard>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">No shine</h2>
        <ComponentPreview code={SHINE_CODE}>
          <div className="flex items-center justify-center py-8 px-6 bg-neutral-50 rounded-xl w-full">
            <TiltCard shine={false} maxTilt={20} className="rounded-2xl border border-neutral-200 bg-white p-6 w-full max-w-xs shadow-lg">
              <h3 className="font-bold text-neutral-900">No shine variant</h3>
              <p className="text-neutral-500 text-sm mt-1">Tilt only, no specular highlight.</p>
            </TiltCard>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">How it works</h2>
        <p className="text-neutral-500">
          <strong className="text-neutral-700">rotateX</strong> and <strong className="text-neutral-700">rotateY</strong> are driven by spring motion values mapped from normalized mouse position (-0.5 to +0.5). The shine uses a <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">radial-gradient</code> with its center at the cursor position, updated via motion value transforms — zero DOM writes outside the animation frame.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
