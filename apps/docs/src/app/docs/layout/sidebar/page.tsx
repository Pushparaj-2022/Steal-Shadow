"use client";

import { useState } from "react";
import { Sidebar, SidebarItem } from "@animui/ui";
import { Home, Settings, Users, BarChart3, Menu } from "lucide-react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const NAV_ITEMS = [
  { label: "Dashboard", icon: <Home className="h-4 w-4" /> },
  { label: "Analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { label: "Team", icon: <Users className="h-4 w-4" /> },
  { label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-96 w-full overflow-hidden rounded-2xl border border-neutral-200">
      <Sidebar open={open} onOpenChange={setOpen}>
        <div className="p-4 text-sm font-bold text-neutral-900">Acme Inc</div>
        <nav className="flex flex-col gap-1 px-3">
          {NAV_ITEMS.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              active={active === item.label}
              onClick={() => {
                setActive(item.label);
                setOpen(false);
              }}
            >
              {item.label}
            </SidebarItem>
          ))}
        </nav>
      </Sidebar>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-3 border-b border-neutral-200 p-4 md:hidden">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open sidebar"
            className="rounded-lg p-1.5 hover:bg-neutral-100 text-neutral-600"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-sm font-semibold text-neutral-900">{active}</span>
        </div>
        <div className="flex-1 p-6 text-sm text-neutral-500">
          Content for <span className="font-semibold text-neutral-700">{active}</span> goes here.
        </div>
      </div>
    </div>
  );
}

const BASIC_CODE = `import { Sidebar, SidebarItem } from "@animui/ui";
import { Home, Settings, Users, BarChart3, Menu } from "lucide-react";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar open={open} onOpenChange={setOpen}>
        <div className="p-4 text-sm font-bold">Acme Inc</div>
        <nav className="flex flex-col gap-1 px-3">
          <SidebarItem icon={<Home className="h-4 w-4" />} active={active === "Dashboard"} onClick={() => setActive("Dashboard")}>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />} active={active === "Analytics"} onClick={() => setActive("Analytics")}>
            Analytics
          </SidebarItem>
        </nav>
      </Sidebar>
      <div className="flex-1">
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
        </button>
        {/* page content */}
      </div>
    </div>
  );
}`;

const SIDEBAR_PROPS = [
  { name: "children", type: "React.ReactNode", default: "—", description: "Sidebar content, typically a header and SidebarItem rows." },
  { name: "open", type: "boolean", default: "false", description: "Controls the off-canvas panel visibility on mobile (below md:)." },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "—", description: "Called when the mobile panel should open or close (backdrop click, Escape, item click)." },
  { name: "className", type: "string", default: "—", description: "Additional classes applied to the sidebar panel." },
];

const ITEM_PROPS = [
  { name: "icon", type: "React.ReactNode", default: "—", description: "Icon rendered before the label." },
  { name: "children", type: "React.ReactNode", default: "—", description: "The item label. Truncated if it overflows." },
  { name: "active", type: "boolean", default: "false", description: "Highlights the item as the current page." },
  { name: "onClick", type: "() => void", default: "—", description: "Called when the item is clicked." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the item button." },
];

export default function SidebarDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Layout</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Sidebar</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Sidebar</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A vertical navigation sidebar. Renders as a static column on desktop and collapses into an off-canvas overlay panel below the <code className="font-mono text-sm bg-neutral-100 px-1 rounded">md:</code> breakpoint.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Sidebar, SidebarItem }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <p className="text-neutral-500 mb-4">
          Resize below the <code className="font-mono text-xs bg-neutral-100 px-1 rounded">md:</code> breakpoint (or view on a small screen) to see it collapse into an overlay opened by the hamburger button.
        </p>
        <ComponentPreview code={BASIC_CODE}>
          <SidebarDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Sidebar props</h2>
        <PropsTable props={SIDEBAR_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">SidebarItem props</h2>
        <PropsTable props={ITEM_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Active items expose <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-current="page"</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Pressing <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Escape</code> closes the mobile overlay.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Background scrolling is locked while the mobile overlay is open.</li>
        </ul>
      </section>
    </div>
  );
}
