"use client";

import { DropdownMenu } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Pencil, Copy, Trash2, Share2 } from "lucide-react";

const BASIC_CODE = `import { DropdownMenu } from "@animui/ui";
import { Pencil, Copy, Trash2 } from "lucide-react";

export default function Example() {
  return (
    <DropdownMenu
      trigger={<button>Options</button>}
      items={[
        { id: "edit", label: "Edit", icon: <Pencil />, shortcut: "⌘E", onSelect: () => {} },
        { id: "duplicate", label: "Duplicate", icon: <Copy />, shortcut: "⌘D", onSelect: () => {} },
        { id: "sep", separator: true },
        { id: "delete", label: "Delete", icon: <Trash2 />, danger: true, onSelect: () => {} },
      ]}
    />
  );
}`;

const ALIGN_CODE = `<DropdownMenu align="start" trigger={<button>Start</button>} items={items} />
<DropdownMenu align="end" trigger={<button>End</button>} items={items} />`;

const PROPS = [
  { name: "trigger", type: "React.ReactNode", default: "—", description: "The element that opens the menu on click." },
  { name: "items", type: "DropdownMenuItem[]", default: "—", description: "The list of menu items to render." },
  { name: "align", type: '"start" | "end"', default: '"start"', description: "Aligns the menu panel to the left or right edge of the trigger." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the menu panel." },
];

export default function DropdownMenuDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overlays</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Dropdown Menu</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Dropdown Menu</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A click-triggered menu of actions, positioned relative to a trigger element. Dismisses on outside click or Escape key.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ DropdownMenu }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <DropdownMenu
            trigger={
              <button className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 shadow-sm">
                Options
              </button>
            }
            items={[
              { id: "edit", label: "Edit", icon: <Pencil />, shortcut: "⌘E", onSelect: () => {} },
              { id: "duplicate", label: "Duplicate", icon: <Copy />, shortcut: "⌘D", onSelect: () => {} },
              { id: "share", label: "Share", icon: <Share2 />, onSelect: () => {} },
              { id: "sep", separator: true },
              { id: "delete", label: "Delete", icon: <Trash2 />, danger: true, onSelect: () => {} },
            ]}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Alignment</h2>
        <ComponentPreview code={ALIGN_CODE}>
          <div className="flex items-center gap-6 py-8">
            <DropdownMenu
              align="start"
              trigger={
                <button className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-600 shadow-sm">
                  Start
                </button>
              }
              items={[
                { id: "one", label: "First action", onSelect: () => {} },
                { id: "two", label: "Second action", onSelect: () => {} },
              ]}
            />
            <DropdownMenu
              align="end"
              trigger={
                <button className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-600 shadow-sm">
                  End
                </button>
              }
              items={[
                { id: "one", label: "First action", onSelect: () => {} },
                { id: "two", label: "Second action", onSelect: () => {} },
              ]}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled items</h2>
        <ComponentPreview code={`<DropdownMenu trigger={<button>Actions</button>} items={[
  { id: "one", label: "Available action", onSelect: () => {} },
  { id: "two", label: "Unavailable action", disabled: true },
]} />`}>
          <DropdownMenu
            trigger={
              <button className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm">
                Actions
              </button>
            }
            items={[
              { id: "one", label: "Available action", onSelect: () => {} },
              { id: "two", label: "Unavailable action", disabled: true },
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
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Trigger exposes <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-haspopup</code> and <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-expanded</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Menu items are rendered with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="menuitem"</code> inside a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="menu"</code> container.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Closes on outside click or the <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Escape</code> key.</li>
        </ul>
      </section>
    </div>
  );
}
