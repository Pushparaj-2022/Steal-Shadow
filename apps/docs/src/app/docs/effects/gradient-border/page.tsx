"use client";

import { GradientBorder } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { GradientBorder } from "@animui/ui";

export default function Example() {
  return (
    <GradientBorder className="inline-block">
      <div className="px-6 py-4">
        <p className="font-semibold text-neutral-800">Gradient Border</p>
        <p className="text-sm text-neutral-500">Animated rotating gradient.</p>
      </div>
    </GradientBorder>
  );
}`;

const STATIC_CODE = `<GradientBorder animated={false} gradient="linear-gradient(135deg,#f59e0b,#ef4444,#ec4899)">
  <div className="px-5 py-3">
    <p className="font-semibold text-neutral-800">Static gradient</p>
  </div>
</GradientBorder>`;

const CARD_CODE = `<GradientBorder borderWidth={2} className="w-64">
  <div className="p-5">
    <h3 className="font-bold text-neutral-800">Premium Card</h3>
    <p className="text-sm text-neutral-500 mt-1">Highlight important content.</p>
    <button className="mt-4 w-full rounded-lg bg-neutral-900 py-2 text-xs font-bold text-white">
      Upgrade
    </button>
  </div>
</GradientBorder>`;

const PROPS = [
  { name: "gradient", type: "string", default: '"linear-gradient(135deg,#8b5cf6,#3b82f6,#10b981,#8b5cf6)"', description: "CSS gradient for the border." },
  { name: "borderWidth", type: "number", default: "2", description: "Border thickness in px." },
  { name: "borderRadius", type: "string", default: '"16px"', description: "Border radius of the outer container." },
  { name: "animated", type: "boolean", default: "true", description: "Whether the gradient rotates continuously." },
  { name: "duration", type: "number", default: "4", description: "Rotation duration in seconds." },
  { name: "innerClassName", type: "string", default: "—", description: "Classes on the inner white content box." },
  { name: "className", type: "string", default: "—", description: "Classes on the outer wrapper." },
];

export default function GradientBorderDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Effects</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">GradientBorder</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">GradientBorder</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A wrapper that gives any element an animated rotating gradient border. Great for premium cards, featured sections, and call-to-action buttons.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ GradientBorder }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Animated (default)</h2>
        <ComponentPreview code={BASIC_CODE}>
          <GradientBorder className="inline-block">
            <div className="px-6 py-4">
              <p className="font-semibold text-neutral-800">Gradient Border</p>
              <p className="text-sm text-neutral-500">Animated rotating gradient.</p>
            </div>
          </GradientBorder>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Static gradient</h2>
        <ComponentPreview code={STATIC_CODE}>
          <GradientBorder animated={false} gradient="linear-gradient(135deg,#f59e0b,#ef4444,#ec4899)" className="inline-block">
            <div className="px-5 py-3">
              <p className="font-semibold text-neutral-800">Static gradient</p>
            </div>
          </GradientBorder>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Premium card</h2>
        <ComponentPreview code={CARD_CODE}>
          <GradientBorder borderWidth={2} className="w-full max-w-xs">
            <div className="p-5">
              <h3 className="font-bold text-neutral-800">Premium Card</h3>
              <p className="text-sm text-neutral-500 mt-1">Highlight important content.</p>
              <button className="mt-4 w-full rounded-lg bg-neutral-900 py-2 text-xs font-bold text-white">Upgrade</button>
            </div>
          </GradientBorder>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
