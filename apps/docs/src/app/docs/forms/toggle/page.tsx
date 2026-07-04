"use client";

import { useState } from "react";
import { Toggle } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

function ToggleDemo() {
  const [pressed, setPressed] = useState(false);
  return (
    <Toggle pressed={pressed} onPressedChange={setPressed}>
      Bold
    </Toggle>
  );
}

const BASIC_CODE = `import { Toggle } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [pressed, setPressed] = useState(false);
  return (
    <Toggle pressed={pressed} onPressedChange={setPressed}>
      Bold
    </Toggle>
  );
}`;

const VARIANTS_CODE = `<Toggle variant="default">Default</Toggle>
<Toggle variant="outline">Outline</Toggle>`;

const SIZES_CODE = `<Toggle size="sm">Small</Toggle>
<Toggle size="md">Medium</Toggle>
<Toggle size="lg">Large</Toggle>`;

const PROPS = [
  { name: "pressed", type: "boolean", default: "—", description: "Controlled pressed state." },
  { name: "defaultPressed", type: "boolean", default: "false", description: "Uncontrolled initial pressed state." },
  { name: "onPressedChange", type: "(pressed: boolean) => void", default: "—", description: "Called when the pressed state changes." },
  { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style of the toggle." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Controls padding and font size." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction and applies reduced opacity." },
  { name: "children", type: "React.ReactNode", default: "—", description: "Content rendered inside the toggle button." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the button element." },
];

export default function ToggleDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Toggle</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Toggle</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A two-state pressable button, like a bold or italic toolbar button. Visually inverts when pressed and exposes its state via <code className="font-mono text-sm bg-neutral-100 px-1 rounded">aria-pressed</code>.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Toggle }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <ToggleDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Variants</h2>
        <ComponentPreview code={VARIANTS_CODE}>
          <div className="flex items-center gap-3 flex-wrap">
            <Toggle variant="default">Default</Toggle>
            <Toggle variant="outline">Outline</Toggle>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sizes</h2>
        <ComponentPreview code={SIZES_CODE}>
          <div className="flex items-center gap-3 flex-wrap">
            <Toggle size="sm">Small</Toggle>
            <Toggle size="md">Medium</Toggle>
            <Toggle size="lg">Large</Toggle>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled</h2>
        <ComponentPreview code={`<Toggle disabled>Unavailable</Toggle>`}>
          <Toggle disabled>Unavailable</Toggle>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Renders as a native <code className="font-mono text-xs bg-neutral-100 px-1 rounded">{'<button>'}</code> with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-pressed</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Toggleable with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Space</code> or <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Enter</code> when focused.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Disabled state removes the toggle from the tab order.</li>
        </ul>
      </section>
    </div>
  );
}
