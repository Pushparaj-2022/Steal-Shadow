"use client";

import { useState } from "react";
import { Switch } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

function SwitchDemo() {
  const [on, setOn] = useState(false);
  return <Switch checked={on} onChange={setOn} label="Enable notifications" />;
}

const BASIC_CODE = `import { Switch } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      label="Enable notifications"
    />
  );
}`;

const SIZES_CODE = `<Switch size="sm" checked={on} onChange={setOn} />
<Switch size="md" checked={on} onChange={setOn} />
<Switch size="lg" checked={on} onChange={setOn} />`;

const PROPS = [
  { name: "checked", type: "boolean", default: "false", description: "Whether the switch is on." },
  { name: "onChange", type: "(checked: boolean) => void", default: "—", description: "Called when the switch is toggled." },
  { name: "label", type: "string", default: "—", description: "Visible label rendered next to the switch." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Controls the size of the toggle track and thumb." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction and applies reduced opacity." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper element." },
];

export default function SwitchDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Switch</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Switch</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A toggle switch for boolean settings. Animated thumb with spring physics, fully accessible with keyboard and screen reader support.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Switch }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <SwitchDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sizes</h2>
        <ComponentPreview code={SIZES_CODE}>
          <div className="flex items-center gap-6">
            <Switch size="sm" checked onChange={() => {}} />
            <Switch size="md" checked onChange={() => {}} />
            <Switch size="lg" checked onChange={() => {}} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled</h2>
        <ComponentPreview code={`<Switch checked={false} onChange={() => {}} disabled label="Unavailable option" />`}>
          <Switch checked={false} onChange={() => {}} disabled label="Unavailable option" />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Renders with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="switch"</code> and <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-checked</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Toggleable with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Space</code> key when focused.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>The <code className="font-mono text-xs bg-neutral-100 px-1 rounded">label</code> prop is associated via <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-label</code>.</li>
        </ul>
      </section>
    </div>
  );
}
