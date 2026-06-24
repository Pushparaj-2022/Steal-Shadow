"use client";

import { Accordion, AccordionItem } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";


const BASIC_CODE = `import { Accordion, AccordionItem } from "@stealshadow/ui";

export default function Example() {
  return (
    <Accordion type="single">
      <AccordionItem title="What is Steal Shadow?">
        An open-source React component library with 50+ animated components.
      </AccordionItem>
      <AccordionItem title="Is it free?">
        100% free and MIT licensed. No paywalls, no tiers.
      </AccordionItem>
    </Accordion>
  );
}`;

const MULTIPLE_CODE = `<Accordion type="multiple">
  <AccordionItem title="Section 1">Content 1</AccordionItem>
  <AccordionItem title="Section 2">Content 2</AccordionItem>
  <AccordionItem title="Section 3" defaultOpen>Content 3</AccordionItem>
</Accordion>`;

const PROPS = [
  { name: "type", type: '"single" | "multiple"', default: '"single"', description: "Whether one or multiple items can be open simultaneously." },
  { name: "children", type: "React.ReactNode", default: "—", description: "AccordionItem children." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

const ITEM_PROPS = [
  { name: "title", type: "string | React.ReactNode", default: "—", description: "The trigger label shown in the header." },
  { name: "children", type: "React.ReactNode", default: "—", description: "Content revealed when the item is open." },
  { name: "defaultOpen", type: "boolean", default: "false", description: "Whether this item starts open." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents this item from being toggled." },
];


export default function AccordionDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Accordion</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Accordion</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Collapsible content sections with smooth height animations. Supports single and multiple open modes with full keyboard navigation.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Accordion, AccordionItem }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <Accordion type="single" className="w-full max-w-lg">
            <AccordionItem title="What is Steal Shadow?">
              An open-source React component library with 50+ animated, accessible components.
            </AccordionItem>
            <AccordionItem title="Is it free?">
              100% free and MIT licensed. No paywalls, no tiers, no lock-in.
            </AccordionItem>
            <AccordionItem title="Does it work with Next.js?">
              Yes. Add transpilePackages to next.config.ts and you&apos;re ready to go.
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Multiple open</h2>
        <p className="text-neutral-500 mb-4">Set <code className="font-mono text-xs bg-neutral-100 px-1 rounded">type="multiple"</code> to allow more than one item open at once.</p>
        <ComponentPreview code={MULTIPLE_CODE}>
          <Accordion type="multiple" className="w-full max-w-lg">
            <AccordionItem title="What is Steal Shadow?">
              An open-source React component library with 50+ animated, accessible components.
            </AccordionItem>
            <AccordionItem title="Is it free?">
              100% free and MIT licensed. No paywalls, no tiers, no lock-in.
            </AccordionItem>
            <AccordionItem title="Does it work with Next.js?" defaultOpen>
              Yes. Add transpilePackages to next.config.ts and you&apos;re ready to go.
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Accordion Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">AccordionItem Props</h2>
        <PropsTable props={ITEM_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Each trigger is a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">&lt;button&gt;</code> with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-expanded</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Content panels have <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="region"</code> and are linked to their trigger.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span><code className="font-mono text-xs bg-neutral-100 px-1 rounded">Space</code> / <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Enter</code> toggle the focused item.</li>
        </ul>
      </section>
    </div>
  );
}
