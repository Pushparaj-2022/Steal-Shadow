"use client";

import { Label } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Label } from "@animui/ui";

export default function Example() {
  return (
    <div>
      <Label htmlFor="email">Email address</Label>
      <input
        id="email"
        type="email"
        className="mt-1.5 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm"
      />
    </div>
  );
}`;

const REQUIRED_CODE = `<Label htmlFor="username" required>Username</Label>`;

const DISABLED_CODE = `<Label htmlFor="plan" disabled>Plan (locked)</Label>`;

const PROPS = [
  { name: "children", type: "ReactNode", default: "—", description: "Label text or content." },
  { name: "htmlFor", type: "string", default: "—", description: "ID of the form control this label is associated with." },
  { name: "required", type: "boolean", default: "false", description: "Renders a red asterisk to mark the field as required." },
  { name: "disabled", type: "boolean", default: "false", description: "Dims the label and shows a not-allowed cursor." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the label element." },
];

export default function LabelDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Label</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Label</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          An accessible form label that wraps a native <code className="font-mono text-sm bg-neutral-100 px-1 rounded">{"<label>"}</code> element, with optional required and disabled states.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Label }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="w-full max-w-sm">
            <Label htmlFor="email-demo">Email address</Label>
            <input
              id="email-demo"
              type="email"
              placeholder="you@example.com"
              className="mt-1.5 block w-full min-w-0 rounded-lg border border-neutral-300 px-3 py-2 text-sm"
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Required</h2>
        <ComponentPreview code={REQUIRED_CODE}>
          <Label htmlFor="username-demo" required>Username</Label>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled</h2>
        <ComponentPreview code={DISABLED_CODE}>
          <Label htmlFor="plan-demo" disabled>Plan (locked)</Label>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Renders a native <code className="font-mono text-xs bg-neutral-100 px-1 rounded">{"<label>"}</code> so clicking it focuses the associated control.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Always pass <code className="font-mono text-xs bg-neutral-100 px-1 rounded">htmlFor</code> matching the input's <code className="font-mono text-xs bg-neutral-100 px-1 rounded">id</code> to keep the association explicit for screen readers.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>The required asterisk is visual only; pair it with the input's <code className="font-mono text-xs bg-neutral-100 px-1 rounded">required</code> attribute for assistive tech.</li>
        </ul>
      </section>
    </div>
  );
}
