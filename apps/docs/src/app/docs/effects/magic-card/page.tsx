"use client";

import { MagicCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { MagicCard } from "@animui/ui";

export function BasicMagicCard() {
  return (
    <MagicCard className="p-6 rounded-xl border border-white/10 bg-white/5 w-72">
      <h3 className="text-lg font-semibold text-white mb-2">Magic Card</h3>
      <p className="text-sm text-white/60">
        Move your mouse over this card to see a glowing spotlight follow the cursor.
      </p>
    </MagicCard>
  );
}`;

const customColorCode = `import { MagicCard } from "@animui/ui";

export function BlueMagicCard() {
  return (
    <MagicCard
      gradientColor="#3b82f61a"
      className="p-6 rounded-xl border border-white/10 bg-white/5 w-72"
    >
      <h3 className="text-lg font-semibold text-white mb-2">Blue Spotlight</h3>
      <p className="text-sm text-white/60">
        A custom blue gradient color follows your cursor across this card.
      </p>
    </MagicCard>
  );
}`;

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Content rendered inside the card.",
  },
  {
    name: "gradientSize",
    type: "number",
    default: "200",
    description: "Radius of the spotlight gradient in pixels.",
  },
  {
    name: "gradientColor",
    type: "string",
    default: '"#7c3aed1a"',
    description: "Color of the spotlight (supports rgba / hex-alpha).",
  },
  {
    name: "gradientOpacity",
    type: "number",
    default: "0.8",
    description: "Max opacity of the gradient overlay.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes for the card wrapper.",
  },
];

export default function MagicCardPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-white/40">
        <span>Effects</span>
        <span>/</span>
        <span className="text-white/80">MagicCard</span>
      </nav>

      {/* Heading */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-white">MagicCard</h1>
        <p className="text-white/60 text-lg leading-relaxed">
          A card component with an interactive spotlight gradient that follows the
          user&apos;s cursor. Move your mouse over the card to see a glowing spotlight
          track the cursor in real time.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Import</h2>
        <pre className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-sm text-white/80 overflow-x-auto">
          <code>{`import { MagicCard } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Basic</h2>
        <p className="text-white/50 text-sm">
          Wrap any content in <code className="text-violet-400">MagicCard</code> and the
          spotlight will automatically track the cursor.
        </p>
        <ComponentPreview
          code={basicCode}
          preview={
            <MagicCard className="p-6 rounded-xl border border-white/10 bg-white/5 w-72">
              <h3 className="text-lg font-semibold text-white mb-2">Magic Card</h3>
              <p className="text-sm text-white/60">
                Move your mouse over this card to see a glowing spotlight follow the cursor.
              </p>
            </MagicCard>
          }
        />
      </div>

      {/* Custom color */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Custom color</h2>
        <p className="text-white/50 text-sm">
          Pass a hex-alpha or rgba value to <code className="text-violet-400">gradientColor</code>{" "}
          to change the spotlight hue.
        </p>
        <ComponentPreview
          code={customColorCode}
          preview={
            <MagicCard
              gradientColor="#3b82f61a"
              className="p-6 rounded-xl border border-white/10 bg-white/5 w-72"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Blue Spotlight</h3>
              <p className="text-sm text-white/60">
                A custom blue gradient color follows your cursor across this card.
              </p>
            </MagicCard>
          }
        />
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
