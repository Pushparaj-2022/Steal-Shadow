"use client";

import { useState } from "react";
import { Collapsible } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Collapsible } from "@animui/ui";

export default function Example() {
  return (
    <Collapsible trigger="What is Animui?">
      <p>Animui is an animated React + Tailwind component library.</p>
    </Collapsible>
  );
}`;

const CONTROLLED_CODE = `const [open, setOpen] = useState(false);

<Collapsible trigger="Controlled section" open={open} onOpenChange={setOpen}>
  <p>This section's open state is controlled by the parent.</p>
</Collapsible>`;

const PROPS = [
  { name: "trigger", type: "React.ReactNode", default: "—", description: "Content rendered in the clickable header, next to the chevron indicator." },
  { name: "children", type: "React.ReactNode", default: "—", description: "Content revealed when expanded." },
  { name: "open", type: "boolean", default: "—", description: "Controlled open state." },
  { name: "defaultOpen", type: "boolean", default: "false", description: "Initial open state when uncontrolled." },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "—", description: "Called whenever the open state changes." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

export default function CollapsibleDocsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Layout</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Collapsible</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Collapsible</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A standalone expand/collapse section with a spring-animated height transition and rotating chevron indicator.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Collapsible }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <Collapsible trigger="What is Animui?" defaultOpen>
            <p>Animui is an animated React + Tailwind component library.</p>
          </Collapsible>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Controlled</h2>
        <ComponentPreview code={CONTROLLED_CODE}>
          <Collapsible trigger="Controlled section" open={open} onOpenChange={setOpen}>
            <p>This section&apos;s open state is controlled by the parent.</p>
          </Collapsible>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Trigger is a real <code className="font-mono text-xs bg-neutral-100 px-1 rounded">button</code> element, focusable and keyboard-activatable.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Exposes <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-expanded</code> reflecting the current open state.</li>
        </ul>
      </section>
    </div>
  );
}
