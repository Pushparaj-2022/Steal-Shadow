"use client";

import { NavigationMenu, type NavigationMenuItem } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const ITEMS: NavigationMenuItem[] = [
  { id: "home", label: "Home", href: "#" },
  {
    id: "products",
    label: "Products",
    children: [
      { id: "analytics", label: "Analytics", href: "#", description: "Track usage and performance." },
      { id: "billing", label: "Billing", href: "#", description: "Manage plans and invoices." },
      { id: "automation", label: "Automation", href: "#", description: "Automate repetitive workflows." },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    children: [
      { id: "docs", label: "Documentation", href: "#" },
      { id: "blog", label: "Blog", href: "#" },
      { id: "support", label: "Support", href: "#" },
    ],
  },
  { id: "pricing", label: "Pricing", href: "#" },
];

const BASIC_CODE = `import { NavigationMenu } from "@animui/ui";

const items = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "products",
    label: "Products",
    children: [
      { id: "analytics", label: "Analytics", href: "/analytics", description: "Track usage and performance." },
      { id: "billing", label: "Billing", href: "/billing", description: "Manage plans and invoices." },
    ],
  },
  { id: "pricing", label: "Pricing", href: "/pricing" },
];

export default function Example() {
  return <NavigationMenu items={items} />;
}`;

const PROPS = [
  { name: "items", type: "NavigationMenuItem[]", default: "—", description: "Top-level menu items. Items with children render a dropdown on click." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the nav container." },
];

export default function NavigationMenuDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Layout</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Navigation Menu</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Navigation Menu</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A horizontal top-nav menu where items can reveal a dropdown panel of sub-links. Wraps responsively on narrow viewports.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ NavigationMenu }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <NavigationMenu items={ITEMS} />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Dropdown triggers expose <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-expanded</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Dropdown panels close on <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Escape</code> or on an outside click.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Wraps onto multiple lines instead of overflowing on small screens.</li>
        </ul>
      </section>
    </div>
  );
}
