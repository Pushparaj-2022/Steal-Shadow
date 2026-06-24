"use client";

import { Breadcrumb } from "@animui/ui";
import { ChevronRight } from "lucide-react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Breadcrumb } from "@stealshadow/ui";

export default function Example() {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Components", href: "/docs/components" },
        { label: "Breadcrumb" },
      ]}
    />
  );
}`;

const CUSTOM_SEP_CODE = `<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Breadcrumb" },
  ]}
  separator={<ChevronRight className="h-3.5 w-3.5" />}
/>`;

const PROPS = [
  { name: "items", type: "BreadcrumbItem[]", default: "—", description: "Array of { label, href? } items. Last item is current page." },
  { name: "separator", type: "React.ReactNode", default: '"/"', description: "Element or string rendered between each item." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the nav element." },
];

export default function BreadcrumbDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Breadcrumb</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Breadcrumb</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Navigation breadcrumbs showing the current page's location in a hierarchy. Semantic, accessible, and customizable.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Breadcrumb }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/docs/components" },
              { label: "Breadcrumb" },
            ]}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom separator</h2>
        <ComponentPreview code={CUSTOM_SEP_CODE}>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Docs", href: "/docs" },
              { label: "Breadcrumb" },
            ]}
            separator={<ChevronRight className="h-3.5 w-3.5" />}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Truncated (long paths)</h2>
        <ComponentPreview code={`<Breadcrumb items={[home, docs, section, subsection, { label: "Current page" }]} />`}>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Docs", href: "/docs" },
              { label: "Section", href: "/docs/section" },
              { label: "Subsection", href: "/docs/section/sub" },
              { label: "Current page" },
            ]}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Rendered as a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">&lt;nav&gt;</code> with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-label="Breadcrumb"</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Last item receives <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-current="page"</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Separators are hidden from screen readers with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-hidden="true"</code>.</li>
        </ul>
      </section>
    </div>
  );
}
