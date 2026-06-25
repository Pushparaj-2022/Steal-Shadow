"use client";

import { Checkbox } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Checkbox } from "@animui/ui";

export default function Example() {
  return (
    <div className="space-y-3">
      <Checkbox label="Accept terms and conditions" />
      <Checkbox label="Subscribe to newsletter" defaultChecked />
      <Checkbox label="Indeterminate state" indeterminate />
      <Checkbox label="Disabled checkbox" disabled />
    </div>
  );
}`;

const PROPS = [
  { name: "label", type: "string | React.ReactNode", default: "—", description: "Label rendered next to the checkbox." },
  { name: "checked", type: "boolean", default: "—", description: "Controlled checked state." },
  { name: "defaultChecked", type: "boolean", default: "false", description: "Initial checked state for uncontrolled usage." },
  { name: "indeterminate", type: "boolean", default: "false", description: "Shows an indeterminate (dash) state — useful for 'select all' checkboxes." },
  { name: "onChange", type: "(checked: boolean) => void", default: "—", description: "Called when the checkbox is toggled." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the checkbox." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Controls the size of the checkbox element." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the wrapper." },
];


export default function CheckboxPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Checkbox</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Checkbox</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animated checkbox with indeterminate state, group management, and full keyboard
          accessibility. Works as a controlled or uncontrolled input.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Checkbox }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">States</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="space-y-3">
            <Checkbox label="Accept terms and conditions" />
            <Checkbox label="Subscribe to newsletter" defaultChecked />
            <Checkbox label="Indeterminate state" indeterminate />
            <Checkbox label="Disabled checkbox" disabled />
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
