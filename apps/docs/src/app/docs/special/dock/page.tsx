"use client";

import { Home, Search, Bell, Star, Layers, Settings } from "lucide-react";
import { Dock } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const DOCK_ITEMS = [
  { id: "home",     icon: <div className="w-full h-full bg-blue-500 rounded-2xl flex items-center justify-center"><Home className="h-6 w-6 text-white" /></div>,     label: "Home" },
  { id: "search",   icon: <div className="w-full h-full bg-orange-500 rounded-2xl flex items-center justify-center"><Search className="h-6 w-6 text-white" /></div>,   label: "Search" },
  { id: "bell",     icon: <div className="w-full h-full bg-red-500 rounded-2xl flex items-center justify-center"><Bell className="h-6 w-6 text-white" /></div>,     label: "Notifications" },
  { id: "star",     icon: <div className="w-full h-full bg-yellow-500 rounded-2xl flex items-center justify-center"><Star className="h-6 w-6 text-white" /></div>,     label: "Favorites" },
  { id: "layers",   icon: <div className="w-full h-full bg-emerald-500 rounded-2xl flex items-center justify-center"><Layers className="h-6 w-6 text-white" /></div>,   label: "Layers" },
  { id: "settings", icon: <div className="w-full h-full bg-neutral-700 rounded-2xl flex items-center justify-center"><Settings className="h-6 w-6 text-white" /></div>, label: "Settings" },
];

const BASIC_CODE = `import { Dock } from "@animui/ui";
import { Home, Search, Bell, Settings, Star, Layers } from "lucide-react";

const items = [
  { id: "home",     icon: <div className="w-full h-full bg-blue-500 rounded-2xl flex items-center justify-center"><Home className="h-6 w-6 text-white" /></div>,     label: "Home" },
  { id: "search",   icon: <div className="w-full h-full bg-orange-500 rounded-2xl flex items-center justify-center"><Search className="h-6 w-6 text-white" /></div>,   label: "Search" },
  { id: "bell",     icon: <div className="w-full h-full bg-red-500 rounded-2xl flex items-center justify-center"><Bell className="h-6 w-6 text-white" /></div>,     label: "Notifications" },
  { id: "star",     icon: <div className="w-full h-full bg-yellow-500 rounded-2xl flex items-center justify-center"><Star className="h-6 w-6 text-white" /></div>,     label: "Favorites" },
  { id: "layers",   icon: <div className="w-full h-full bg-emerald-500 rounded-2xl flex items-center justify-center"><Layers className="h-6 w-6 text-white" /></div>,   label: "Layers" },
  { id: "settings", icon: <div className="w-full h-full bg-neutral-700 rounded-2xl flex items-center justify-center"><Settings className="h-6 w-6 text-white" /></div>, label: "Settings" },
];

export default function Example() {
  return (
    <div className="flex items-end justify-center p-12 bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl min-h-40">
      <Dock items={items} />
    </div>
  );
}`;

const VARIANT_CODE = `<Dock items={items} variant="solid" />
<Dock items={items} variant="minimal" />`;

const PROPS = [
  { name: "items", type: "DockItem[]", default: "—", description: "Array of items to display in the dock." },
  { name: "iconSize", type: "number", default: "52", description: "Base size of each icon in pixels." },
  { name: "magnification", type: "number", default: "1.9", description: "Scale factor at cursor center (1 = no magnification)." },
  { name: "distance", type: "number", default: "110", description: "Pixel radius of the magnification falloff." },
  { name: "variant", type: '"glass" | "solid" | "minimal"', default: '"glass"', description: "Visual style of the dock background." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

const ITEM_PROPS = [
  { name: "id", type: "string", default: "—", description: "Unique identifier." },
  { name: "icon", type: "ReactNode", default: "—", description: "Icon element — typically a div with bg + icon inside." },
  { name: "label", type: "string", default: "—", description: "Tooltip text shown on hover." },
  { name: "onClick", type: "() => void", default: "—", description: "Click handler." },
  { name: "className", type: "string", default: "—", description: "Extra classes for the icon container." },
];

export default function DockDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Dock</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Dock</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          macOS-style icon dock with spring-physics magnification. Nearby icons scale up smoothly as the cursor moves along the dock — powered by real spring animations, not CSS transitions.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Dock }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <p className="text-neutral-500 mb-4">Hover over the dock and move left/right to see spring magnification in action.</p>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-end justify-center p-12 bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl min-h-52 w-full">
            <Dock items={DOCK_ITEMS} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Icon structure</h2>
        <p className="text-neutral-500 mb-4">
          Each icon is a full <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">w-full h-full</code> div inside the icon container. This lets you style app-icon aesthetics independently.
        </p>
        <div className="rounded-xl bg-neutral-950 px-5 py-4 overflow-x-auto">
          <pre className="text-sm font-mono text-green-400 whitespace-pre">{`{
  id: "finder",
  label: "Finder",
  icon: (
    <div className="w-full h-full rounded-2xl bg-blue-500 flex items-center justify-center shadow-inner">
      <FolderOpen className="h-1/2 w-1/2 text-white" />
    </div>
  ),
}`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">DockItem props</h2>
        <PropsTable props={ITEM_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Dock props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
