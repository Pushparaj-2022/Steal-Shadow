"use client";

import { Separator } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Separator } from "@animui/ui";

export default function Example() {
  return (
    <div>
      <p>Section one</p>
      <Separator className="my-4" />
      <p>Section two</p>
    </div>
  );
}`;

const VERTICAL_CODE = `<div className="flex h-8 items-center gap-4">
  <span>Home</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Blog</span>
</div>`;

const PROPS = [
  { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direction of the divider line." },
  { name: "decorative", type: "boolean", default: "false", description: "When true, omits the separator role and aria-orientation for purely visual dividers." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the divider." },
];

export default function SeparatorDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Separator</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Separator</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A simple horizontal or vertical divider line for visually grouping content.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Separator }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Horizontal</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="w-full max-w-sm">
            <p className="text-sm text-neutral-600">Section one</p>
            <Separator className="my-4" />
            <p className="text-sm text-neutral-600">Section two</p>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Vertical</h2>
        <ComponentPreview code={VERTICAL_CODE}>
          <div className="flex h-8 items-center gap-4 text-sm text-neutral-600">
            <span>Home</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>Blog</span>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Renders with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="separator"</code> and <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-orientation</code> unless <code className="font-mono text-xs bg-neutral-100 px-1 rounded">decorative</code> is set.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Use <code className="font-mono text-xs bg-neutral-100 px-1 rounded">decorative</code> when the divider is purely visual and adjacent content already conveys the grouping.</li>
        </ul>
      </section>
    </div>
  );
}
