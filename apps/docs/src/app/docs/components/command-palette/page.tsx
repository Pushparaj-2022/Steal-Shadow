"use client";

import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Search, Settings, User, FileText, LogOut, Zap } from "lucide-react";
import { CommandPalette, useCommandPalette, type CommandItem } from "@animui/ui";

const BASIC_CODE = `import { CommandPalette, useCommandPalette } from "@animui/ui";
import { Settings, User, FileText } from "lucide-react";

const commands = [
  {
    id: "profile",
    label: "Go to profile",
    icon: <User />,
    group: "Navigation",
    shortcut: ["G", "P"],
    onSelect: () => router.push("/profile"),
  },
  {
    id: "settings",
    label: "Open settings",
    icon: <Settings />,
    group: "Navigation",
    shortcut: ["G", "S"],
    onSelect: () => router.push("/settings"),
  },
];

export default function App() {
  const { open, setOpen, close } = useCommandPalette();
  return (
    <>
      <button onClick={() => setOpen(true)}>
        ⌘K
      </button>
      <CommandPalette
        open={open}
        onClose={close}
        items={commands}
      />
    </>
  );
}`;

const GROUPS_CODE = `const commands = [
  { id: "new-file",   label: "New file",      group: "Create", onSelect: () => {} },
  { id: "new-folder", label: "New folder",    group: "Create", onSelect: () => {} },
  { id: "profile",    label: "Go to profile", group: "Navigate", onSelect: () => {} },
  { id: "settings",  label: "Settings",      group: "Navigate", onSelect: () => {} },
  { id: "logout",    label: "Sign out",      group: "Account", onSelect: () => {} },
];`;

const PROPS = [
  { name: "open", type: "boolean", default: "—", description: "Whether the palette is shown." },
  { name: "onClose", type: "() => void", default: "—", description: "Called when the user dismisses the palette (Escape or backdrop click)." },
  { name: "items", type: "CommandItem[]", default: "—", description: "Array of command items to display and search." },
  { name: "placeholder", type: "string", default: '"Search commands…"', description: "Input placeholder text." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the panel." },
];

const HOOK_PROPS = [
  { name: "open", type: "boolean", default: "false", description: "Whether the palette is currently open." },
  { name: "setOpen", type: "(open: boolean) => void", default: "—", description: "Toggle open state." },
  { name: "close", type: "() => void", default: "—", description: "Close the palette." },
];

const ITEM_PROPS = [
  { name: "id", type: "string", default: "—", description: "Unique identifier." },
  { name: "label", type: "string", default: "—", description: "Primary display text." },
  { name: "description", type: "string", default: "—", description: "Secondary description shown below the label." },
  { name: "icon", type: "ReactNode", default: "—", description: "Icon rendered before the label." },
  { name: "group", type: "string", default: "—", description: "Group heading to organize items." },
  { name: "shortcut", type: "string[]", default: "—", description: "Keyboard shortcut keys shown as badges." },
  { name: "onSelect", type: "() => void", default: "—", description: "Action to run when selected." },
];

const COMMANDS: CommandItem[] = [
  { id: "profile", label: "Go to profile", description: "View your public profile", icon: <User className="h-4 w-4" />, group: "Navigation", shortcut: ["G","P"], onSelect: () => {} },
  { id: "settings", label: "Open settings", description: "Manage account preferences", icon: <Settings className="h-4 w-4" />, group: "Navigation", shortcut: ["G","S"], onSelect: () => {} },
  { id: "docs", label: "Documentation", description: "Read the component docs", icon: <FileText className="h-4 w-4" />, group: "Navigation", onSelect: () => {} },
  { id: "upgrade", label: "Upgrade plan", description: "Unlock premium features", icon: <Zap className="h-4 w-4" />, group: "Account", onSelect: () => {} },
  { id: "logout", label: "Sign out", icon: <LogOut className="h-4 w-4" />, group: "Account", onSelect: () => {} },
];

export default function CommandPaletteDocsPage() {
  const { open, setOpen, close } = useCommandPalette();

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">CommandPalette</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">CommandPalette</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A Cmd+K command palette with fuzzy search, grouped results, keyboard navigation (↑↓↵), and shortcut display. The <code className="font-mono text-xs bg-neutral-100 px-1 rounded">useCommandPalette</code> hook auto-binds Cmd/Ctrl+K.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ CommandPalette, useCommandPalette }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Live demo</h2>
        <p className="text-neutral-500 mb-4 text-sm">Press <kbd className="font-mono text-xs border border-neutral-200 rounded px-1.5 py-0.5">Ctrl+K</kbd> or click the button to open.</p>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 transition-colors shadow-sm"
            >
              <Search className="h-4 w-4" />
              <span>Search commands…</span>
              <kbd className="hidden sm:flex items-center gap-0.5 ml-2 rounded border border-neutral-200 px-1.5 py-0.5 text-[10px] font-mono">⌘K</kbd>
            </button>
          </div>

          <CommandPalette open={open} onClose={close} items={COMMANDS} />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Grouped items</h2>
        <p className="text-neutral-500 mb-4 text-sm">Assign a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">group</code> string to each command item — items with the same group are shown under a shared heading.</p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100"><span className="text-xs font-mono text-neutral-500">command-items.ts</span></div>
          <pre className="bg-neutral-950 px-5 py-4 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{GROUPS_CODE}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">CommandPalette props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">useCommandPalette hook</h2>
        <PropsTable props={HOOK_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">CommandItem shape</h2>
        <PropsTable props={ITEM_PROPS} />
      </section>
    </div>
  );
}
