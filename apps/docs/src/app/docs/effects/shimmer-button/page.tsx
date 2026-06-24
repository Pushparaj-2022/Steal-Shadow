"use client";

import { ShimmerButton } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { ShimmerButton } from "@stealshadow/ui";

export default function Example() {
  return <ShimmerButton>Get started</ShimmerButton>;
}`;

const CUSTOM_CODE = `<ShimmerButton
  background="linear-gradient(135deg, #1e3a5f 0%, #0f2540 100%)"
  shimmerColor="#60a5fa"
  shimmerDuration={2}
>
  Deploy to cloud
</ShimmerButton>`;

const COLORS_CODE = `<ShimmerButton background="linear-gradient(135deg,#8b5cf6,#6366f1)">
  Violet
</ShimmerButton>
<ShimmerButton background="linear-gradient(135deg,#10b981,#059669)">
  Emerald
</ShimmerButton>
<ShimmerButton background="linear-gradient(135deg,#f59e0b,#d97706)">
  Amber
</ShimmerButton>`;

const PROPS = [
  { name: "background", type: "string", default: '"linear-gradient(135deg,#6366f1,#8b5cf6,#6366f1)"', description: "CSS gradient or color for the button background." },
  { name: "shimmerColor", type: "string", default: '"#ffffff"', description: "Color of the shimmer sweep." },
  { name: "shimmerSize", type: "string", default: '"0.05em"', description: "Width of the shimmer highlight." },
  { name: "shimmerDuration", type: "number", default: "1.5", description: "Seconds for one shimmer sweep cycle." },
  { name: "borderRadius", type: "string", default: '"12px"', description: "Border radius of the button." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the button." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

export default function ShimmerButtonDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Effects</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">ShimmerButton</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">ShimmerButton</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A CTA button with a continuous animated shimmer sweep. Great for hero sections and landing pages where you need maximum visual impact.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ ShimmerButton }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <ShimmerButton>Get started</ShimmerButton>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Color variants</h2>
        <ComponentPreview code={COLORS_CODE}>
          <div className="flex flex-wrap gap-3 items-center">
            <ShimmerButton background="linear-gradient(135deg,#8b5cf6,#6366f1)">Violet</ShimmerButton>
            <ShimmerButton background="linear-gradient(135deg,#10b981,#059669)">Emerald</ShimmerButton>
            <ShimmerButton background="linear-gradient(135deg,#f59e0b,#d97706)">Amber</ShimmerButton>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom shimmer color</h2>
        <ComponentPreview code={CUSTOM_CODE}>
          <ShimmerButton
            background="linear-gradient(135deg,#1e3a5f,#0f2540)"
            shimmerColor="#60a5fa"
            shimmerDuration={2}
          >
            Deploy to cloud
          </ShimmerButton>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
