"use client";

import { Menubar, MenubarMenu } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { FilePlus, FolderOpen, Save, Copy, Scissors, Clipboard, Eye, EyeOff } from "lucide-react";

const BASIC_CODE = `import { Menubar, MenubarMenu } from "@animui/ui";
import { FilePlus, FolderOpen, Save } from "lucide-react";

export default function Example() {
  return (
    <Menubar>
      <MenubarMenu
        label="File"
        items={[
          { id: "new", label: "New file", icon: <FilePlus />, shortcut: "⌘N", onSelect: () => {} },
          { id: "open", label: "Open...", icon: <FolderOpen />, shortcut: "⌘O", onSelect: () => {} },
          { id: "sep", separator: true },
          { id: "save", label: "Save", icon: <Save />, shortcut: "⌘S", onSelect: () => {} },
        ]}
      />
      <MenubarMenu
        label="Edit"
        items={[
          { id: "copy", label: "Copy", icon: <Copy />, shortcut: "⌘C", onSelect: () => {} },
          { id: "cut", label: "Cut", icon: <Scissors />, shortcut: "⌘X", onSelect: () => {} },
          { id: "paste", label: "Paste", icon: <Clipboard />, shortcut: "⌘V", onSelect: () => {} },
        ]}
      />
      <MenubarMenu
        label="View"
        items={[
          { id: "show", label: "Show sidebar", icon: <Eye />, onSelect: () => {} },
          { id: "hide", label: "Hide sidebar", icon: <EyeOff />, onSelect: () => {} },
        ]}
      />
    </Menubar>
  );
}`;

const PROPS_MENUBAR = [
  { name: "children", type: "React.ReactNode", default: "—", description: "One or more MenubarMenu elements." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the menubar container." },
];

const PROPS_MENU = [
  { name: "label", type: "string", default: "—", description: "The text shown on the menu's trigger button." },
  { name: "items", type: "DropdownMenuItem[]", default: "—", description: "The list of menu items to render when open." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the trigger button." },
];

export default function MenubarDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overlays</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Menubar</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Menubar</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A horizontal bar of menu buttons, each opening its own dropdown of actions, like a desktop application's File/Edit/View menu bar. Hovering another menu button while one is open switches directly to it.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Menubar, MenubarMenu }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <Menubar>
            <MenubarMenu
              label="File"
              items={[
                { id: "new", label: "New file", icon: <FilePlus />, shortcut: "⌘N", onSelect: () => {} },
                { id: "open", label: "Open...", icon: <FolderOpen />, shortcut: "⌘O", onSelect: () => {} },
                { id: "sep", separator: true },
                { id: "save", label: "Save", icon: <Save />, shortcut: "⌘S", onSelect: () => {} },
              ]}
            />
            <MenubarMenu
              label="Edit"
              items={[
                { id: "copy", label: "Copy", icon: <Copy />, shortcut: "⌘C", onSelect: () => {} },
                { id: "cut", label: "Cut", icon: <Scissors />, shortcut: "⌘X", onSelect: () => {} },
                { id: "paste", label: "Paste", icon: <Clipboard />, shortcut: "⌘V", onSelect: () => {} },
              ]}
            />
            <MenubarMenu
              label="View"
              items={[
                { id: "show", label: "Show sidebar", icon: <Eye />, onSelect: () => {} },
                { id: "hide", label: "Hide sidebar", icon: <EyeOff />, onSelect: () => {} },
              ]}
            />
          </Menubar>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled items</h2>
        <ComponentPreview code={`<Menubar>
  <MenubarMenu label="File" items={[
    { id: "new", label: "New file", onSelect: () => {} },
    { id: "open", label: "Open recent", disabled: true },
  ]} />
</Menubar>`}>
          <Menubar>
            <MenubarMenu
              label="File"
              items={[
                { id: "new", label: "New file", onSelect: () => {} },
                { id: "open", label: "Open recent", disabled: true },
              ]}
            />
          </Menubar>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <h3 className="text-base font-semibold text-neutral-800 mb-2">Menubar</h3>
        <PropsTable props={PROPS_MENUBAR} />
      </section>

      <section>
        <h3 className="text-base font-semibold text-neutral-800 mb-2">MenubarMenu</h3>
        <PropsTable props={PROPS_MENU} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Each menu trigger exposes <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-haspopup</code> and <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-expanded</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Menu items are rendered with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="menuitem"</code> inside a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="menu"</code> container.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Closes on outside click or the <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Escape</code> key.</li>
        </ul>
      </section>
    </div>
  );
}
