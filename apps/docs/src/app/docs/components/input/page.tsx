"use client";

import { Input } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Mail, Eye } from "lucide-react";

const BASIC_CODE = `import { Input } from "@stealshadow/ui";

export default function Example() {
  return (
    <div className="space-y-4 w-72">
      <Input label="Email address" placeholder="you@example.com" type="email" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="With error" placeholder="Enter value" error="This field is required." />
      <Input label="Disabled" placeholder="Not editable" disabled />
    </div>
  );
}`;

const PROPS = [
  { name: "label", type: "string", default: "—", description: "Label rendered above the input." },
  { name: "placeholder", type: "string", default: "—", description: "Placeholder text shown when the input is empty." },
  { name: "type", type: "string", default: '"text"', description: "HTML input type (text, email, password, number, etc.)." },
  { name: "value", type: "string", default: "—", description: "Controlled value." },
  { name: "onChange", type: "(e: React.ChangeEvent<HTMLInputElement>) => void", default: "—", description: "Change handler." },
  { name: "error", type: "string", default: "—", description: "Error message shown below the input with red styling." },
  { name: "helperText", type: "string", default: "—", description: "Helper text shown below the input in neutral styling." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the input." },
  { name: "leftIcon", type: "React.ReactNode", default: "—", description: "Icon rendered inside the input on the left." },
  { name: "rightIcon", type: "React.ReactNode", default: "—", description: "Icon rendered inside the input on the right." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the outer wrapper." },
];


export default function InputDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Input</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Input</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A fully controlled text input with label, helper text, error state, icon support,
          and full keyboard accessibility. Use with SmartForm for automatic Zod validation.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Input }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">States</h2>
        <p className="text-neutral-500 mb-4">Default, with icons, error, and disabled states.</p>
        <ComponentPreview code={BASIC_CODE}>
          <div className="space-y-4 w-72">
            <Input label="Email address" placeholder="you@example.com" type="email" leftIcon={<Mail className="h-4 w-4" />} />
            <Input label="Password" type="password" placeholder="••••••••" rightIcon={<Eye className="h-4 w-4" />} />
            <Input label="With error" placeholder="Enter value" error="This field is required." />
            <Input label="Disabled" placeholder="Not editable" disabled />
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
