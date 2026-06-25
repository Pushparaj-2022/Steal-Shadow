"use client";

import { InfiniteMarquee } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { InfiniteMarquee } from "@animui/ui";

const logos = ["Vercel", "Linear", "Notion", "Figma", "GitHub", "Stripe", "Tailwind", "Radix"];

export default function Example() {
  return (
    <InfiniteMarquee gap={32}>
      {logos.map((name) => (
        <div
          key={name}
          className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 shadow-sm"
        >
          <div className="h-5 w-5 rounded bg-neutral-200" />
          <span className="text-sm font-semibold text-neutral-700">{name}</span>
        </div>
      ))}
    </InfiniteMarquee>
  );
}`;

const REVERSE_CODE = `<InfiniteMarquee direction="right" speed="slow" fade={false}>
  {/* items */}
</InfiniteMarquee>`;

const PROPS = [
  { name: "speed", type: '"slow" | "normal" | "fast" | number', default: '"normal"', description: 'Animation duration. "slow" = 60s, "normal" = 30s, "fast" = 12s. Pass a number for custom seconds.' },
  { name: "direction", type: '"left" | "right"', default: '"left"', description: "Scroll direction." },
  { name: "pauseOnHover", type: "boolean", default: "true", description: "Pause the animation while the user hovers." },
  { name: "fade", type: "boolean", default: "true", description: "Show gradient fade masks on the left and right edges." },
  { name: "fadeWidth", type: "number", default: "80", description: "Width of the gradient fade mask in pixels." },
  { name: "gap", type: "number", default: "24", description: "Gap between items in pixels." },
  { name: "repeat", type: "number", default: "4", description: "Number of item-list copies rendered for seamless looping." },
  { name: "className", type: "string", default: "—", description: "Applied to the outer container." },
  { name: "itemClassName", type: "string", default: "—", description: "Applied to each repeated item group." },
];

const LOGOS = ["Vercel","Linear","Notion","Figma","GitHub","Stripe","Tailwind","Radix"];

export default function InfiniteMarqueeDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">InfiniteMarquee</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">InfiniteMarquee</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Perfectly seamless infinite scroll with gradient edge fade masks. Works with any children — logos, cards, avatars. Zero JavaScript animation overhead — powered by a single CSS keyframe.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ InfiniteMarquee }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Logo wall</h2>
        <p className="text-neutral-500 mb-4">Hover to pause. Gradient fades are applied automatically.</p>
        <ComponentPreview code={BASIC_CODE}>
          <div className="overflow-hidden rounded-xl py-6 bg-white">
            <InfiniteMarquee gap={32}>
              {LOGOS.map((name) => (
                <div key={name} className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 shadow-sm">
                  <div className="h-5 w-5 rounded bg-neutral-200" />
                  <span className="text-sm font-semibold text-neutral-700">{name}</span>
                </div>
              ))}
            </InfiniteMarquee>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Reverse direction</h2>
        <ComponentPreview code={REVERSE_CODE}>
          <div className="overflow-hidden rounded-xl py-6 bg-white">
            <InfiniteMarquee direction="right" speed="slow" fade={false}>
              {LOGOS.map((name) => (
                <div key={name} className="rounded-xl bg-gradient-to-r from-violet-100 to-blue-100 border border-violet-200 px-4 py-2">
                  <span className="text-sm font-semibold text-violet-700">{name}</span>
                </div>
              ))}
            </InfiniteMarquee>
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
