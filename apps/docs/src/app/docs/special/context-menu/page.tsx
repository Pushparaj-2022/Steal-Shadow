"use client";

import { Copy, Trash, Edit, Star, Share2 } from "lucide-react";
import { ContextMenu } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { ContextMenu } from "@stealshadow/ui";
import { Copy, Trash, Edit, Star, Share2 } from "lucide-react";

const items = [
  { id: "edit",  icon: <Edit />,   label: "Edit",        shortcut: "⌘E",  onSelect: () => {} },
  { id: "copy",  icon: <Copy />,   label: "Copy",        shortcut: "⌘C",  onSelect: () => {} },
  { id: "star",  icon: <Star />,   label: "Favorite",                       onSelect: () => {} },
  { id: "sep",   separator: true },
  { id: "share", icon: <Share2 />, label: "Share",       items: [
    { id: "link",  label: "Copy link",   onSelect: () => {} },
    { id: "email", label: "Send email",  onSelect: () => {} },
  ]},
  { id: "sep2",  separator: true },
  { id: "del",   icon: <Trash />,  label: "Delete",      shortcut: "Del", danger: true, onSelect: () => {} },
];

export default function Example() {
  return (
    <ContextMenu items={items}>
      <div className="flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-200 bg-neutral-50 text-sm text-neutral-400">
        Right-click anywhere in this area
      </div>
    </ContextMenu>
  );
}`;

const PROPS = [
  { name: "children", type: "ReactNode", default: "—", description: "The element(s) that the context menu is attached to." },
  { name: "items", type: "ContextMenuItem[]", default: "—", description: "Menu items to display." },
  { name: "className", type: "string", default: "—", description: "Applied to the children wrapper div." },
];

const ITEM_PROPS = [
  { name: "id", type: "string", default: "—", description: "Unique identifier." },
  { name: "label", type: "string", default: "—", description: "Display text." },
  { name: "icon", type: "ReactNode", default: "—", description: "Icon shown at the left." },
  { name: "shortcut", type: "string", default: "—", description: "Keyboard shortcut shown at the right." },
  { name: "disabled", type: "boolean", default: "false", description: "Grays out the item and prevents selection." },
  { name: "danger", type: "boolean", default: "false", description: "Renders the item in red." },
  { name: "separator", type: "boolean", default: "false", description: "Renders a horizontal divider instead of an item." },
  { name: "items", type: "ContextMenuItem[]", default: "—", description: "Nested items — renders a submenu on hover." },
  { name: "onSelect", type: "() => void", default: "—", description: "Called when the item is clicked." },
];

const MENU_ITEMS = [
  { id: "edit",  icon: <Edit size={14} />,   label: "Edit",        shortcut: "⌘E",  onSelect: () => {} },
  { id: "copy",  icon: <Copy size={14} />,   label: "Copy",        shortcut: "⌘C",  onSelect: () => {} },
  { id: "star",  icon: <Star size={14} />,   label: "Favorite",                       onSelect: () => {} },
  { id: "sep",   separator: true },
  { id: "share", icon: <Share2 size={14} />, label: "Share",       items: [
    { id: "link",  label: "Copy link",   onSelect: () => {} },
    { id: "email", label: "Send email",  onSelect: () => {} },
  ]},
  { id: "sep2",  separator: true },
  { id: "del",   icon: <Trash size={14} />,  label: "Delete",      shortcut: "Del", danger: true, onSelect: () => {} },
];

export default function ContextMenuDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">ContextMenu</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">ContextMenu</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Right-click context menu with submenus, keyboard shortcuts display, danger styles, separators, and viewport clamping. Closes on Escape, outside click, or item selection.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ ContextMenu }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <p className="text-neutral-500 mb-4">Right-click in the demo area — the menu appears at cursor position, clamped to the viewport.</p>
        <ComponentPreview code={BASIC_CODE}>
          <ContextMenu items={MENU_ITEMS}>
            <div className="flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-200 bg-neutral-50 text-sm text-neutral-400">
              Right-click anywhere in this area
            </div>
          </ContextMenu>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Submenus</h2>
        <p className="text-neutral-500">
          Pass an <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">items</code> array on any item to create a submenu. The submenu opens on hover with a 150ms delay before closing — smooth enough to reach diagonal positions without it disappearing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">ContextMenuItem props</h2>
        <PropsTable props={ITEM_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">ContextMenu props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
