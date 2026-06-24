"use client";

import { FloatingElements } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { FloatingElements } from "@stealshadow/ui";

const items = [
  { content: <div className="h-12 w-12 rounded-full bg-violet-400/30 blur-sm" />, x: "10%", y: "20%", duration: 4 },
  { content: <div className="h-8 w-8 rounded-full bg-blue-400/30 blur-sm" />, x: "80%", y: "15%", duration: 5, delay: 0.5 },
  { content: <div className="h-16 w-16 rounded-full bg-indigo-400/20 blur-md" />, x: "50%", y: "60%", duration: 6, delay: 1 },
];

export default function Example() {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl bg-zinc-950">
      <FloatingElements items={items} className="absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h2 className="text-white font-bold">Your content here</h2>
      </div>
    </div>
  );
}`;

const EMOJI_CODE = `const emojiItems = [
  { content: <span className="text-2xl">⚡</span>, x: "15%", y: "25%", duration: 3 },
  { content: <span className="text-2xl">🎨</span>, x: "75%", y: "20%", duration: 4, delay: 0.5 },
  { content: <span className="text-2xl">✨</span>, x: "40%", y: "65%", duration: 5, delay: 1 },
  { content: <span className="text-2xl">🚀</span>, x: "85%", y: "55%", duration: 3.5, delay: 0.8 },
];

<FloatingElements items={emojiItems} />`;

const PROPS = [
  { name: "items", type: "FloatingItem[]", default: "—", description: "Array of items to float. Each item has content, x, y, delay, duration, and amplitude properties." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the container." },
];

const ITEM_PROPS = [
  { name: "content", type: "ReactNode", default: "—", description: "The element to float (any JSX)." },
  { name: "x", type: "string", default: '"50%"', description: "Horizontal position as a CSS value (e.g. '20%', '150px')." },
  { name: "y", type: "string", default: '"50%"', description: "Vertical position as a CSS value." },
  { name: "duration", type: "number", default: "4", description: "Animation cycle duration in seconds." },
  { name: "delay", type: "number", default: "auto", description: "Animation start delay in seconds. Defaults to index × 0.4." },
  { name: "amplitude", type: "number", default: "16", description: "Pixels the element travels vertically in each cycle." },
];

const ORB_ITEMS = [
  { content: <div className="h-14 w-14 rounded-full bg-violet-400/40 blur-sm" />, x: "10%", y: "15%", duration: 4 },
  { content: <div className="h-10 w-10 rounded-full bg-blue-400/30 blur-sm" />, x: "75%", y: "10%", duration: 5, delay: 0.5 },
  { content: <div className="h-20 w-20 rounded-full bg-indigo-400/20 blur-md" />, x: "45%", y: "55%", duration: 6, delay: 1 },
  { content: <div className="h-8 w-8 rounded-full bg-cyan-400/30 blur-sm" />, x: "85%", y: "65%", duration: 3.5, delay: 1.5 },
  { content: <div className="h-12 w-12 rounded-full bg-purple-400/25 blur-md" />, x: "25%", y: "70%", duration: 4.5, delay: 0.8 },
];

const EMOJI_ITEMS = [
  { content: <span className="text-2xl">⚡</span>, x: "15%", y: "25%", duration: 3 },
  { content: <span className="text-2xl">🎨</span>, x: "75%", y: "20%", duration: 4, delay: 0.5 },
  { content: <span className="text-2xl">✨</span>, x: "40%", y: "65%", duration: 5, delay: 1 },
  { content: <span className="text-2xl">🚀</span>, x: "85%", y: "55%", duration: 3.5, delay: 0.8 },
  { content: <span className="text-2xl">💎</span>, x: "55%", y: "80%", duration: 4, delay: 1.2 },
];

export default function FloatingElementsDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Floating Elements</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Floating Elements</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Ambient floating orbs or custom elements that drift around a container. Use as a background layer behind hero sections or feature cards.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ FloatingElements }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Orbs</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="relative h-48 overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-zinc-900">
            <FloatingElements items={ORB_ITEMS} className="absolute inset-0" />
            <div className="relative z-10 flex h-full items-center justify-center">
              <p className="text-white font-bold text-lg">Your content</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom content</h2>
        <ComponentPreview code={EMOJI_CODE}>
          <div className="relative h-40 overflow-hidden rounded-xl bg-neutral-950">
            <FloatingElements items={EMOJI_ITEMS} className="absolute inset-0" />
            <div className="relative z-10 flex h-full items-center justify-center">
              <p className="text-white/60 text-sm">Custom floating content</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">FloatingItem fields</h2>
        <PropsTable props={ITEM_PROPS} />
      </section>
    </div>
  );
}
