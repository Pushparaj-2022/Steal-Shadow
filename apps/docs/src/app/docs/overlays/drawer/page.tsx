"use client";

import { useState } from "react";
import { Drawer, DrawerHeader, DrawerBody, Button } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Drawer, DrawerHeader, DrawerBody } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open drawer</button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerHeader onClose={() => setOpen(false)}>Settings</DrawerHeader>
        <DrawerBody>
          <p>Drawer content here.</p>
        </DrawerBody>
      </Drawer>
    </>
  );
}`;

const PLACEMENT_CODE = `<Drawer open={open} onClose={onClose} side="right">
  <DrawerHeader onClose={onClose}>Notifications</DrawerHeader>
  <DrawerBody>...</DrawerBody>
</Drawer>`;

const PROPS = [
  { name: "open", type: "boolean", default: "false", description: "Controls whether the drawer is visible." },
  { name: "onClose", type: "() => void", default: "—", description: "Called when the overlay or close button is clicked." },
  { name: "side", type: '"left" | "right" | "top" | "bottom"', default: '"right"', description: "Which edge of the screen the drawer slides in from." },
  { name: "size", type: '"sm" | "md" | "lg" | "full"', default: '"md"', description: "Controls the drawer width (for left/right) or height (for top/bottom)." },
  { name: "children", type: "React.ReactNode", default: "—", description: "Content rendered inside the drawer panel." },
];

function DrawerBasicPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center py-6">
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerHeader onClose={() => setOpen(false)}>Settings</DrawerHeader>
        <DrawerBody>
          <p className="text-sm text-neutral-500">Drawer content here. Slides in from the right side by default.</p>
        </DrawerBody>
      </Drawer>
    </div>
  );
}

function DrawerPlacementPreview() {
  const [side, setSide] = useState<"left" | "right" | "top" | "bottom" | null>(null);
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-6">
      {(["left", "right", "top", "bottom"] as const).map((s) => (
        <Button key={s} variant="outline" onClick={() => setSide(s)}>{s.charAt(0).toUpperCase() + s.slice(1)}</Button>
      ))}
      {side && (
        <Drawer open side={side} onClose={() => setSide(null)}>
          <DrawerHeader onClose={() => setSide(null)}>{`Side: ${side}`}</DrawerHeader>
          <DrawerBody>
            <p className="text-sm text-neutral-500">Drawer from the {side}.</p>
          </DrawerBody>
        </Drawer>
      )}
    </div>
  );
}

export default function DrawerDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overlays</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Drawer</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Drawer</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A slide-in panel that overlays the page from any edge. Perfect for settings panels, navigation menus, and detail views.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Drawer, DrawerHeader, DrawerBody }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic usage</h2>
        <p className="text-neutral-500 mb-4">Toggle the drawer with a boolean <code className="font-mono text-xs bg-neutral-100 px-1 rounded">open</code> prop.</p>
        <ComponentPreview code={BASIC_CODE}>
          <DrawerBasicPreview />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Placement</h2>
        <p className="text-neutral-500 mb-4">Use the <code className="font-mono text-xs bg-neutral-100 px-1 rounded">side</code> prop to slide in from any edge.</p>
        <ComponentPreview code={PLACEMENT_CODE}>
          <DrawerPlacementPreview />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Focus is trapped inside the drawer while open.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Pressing <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Escape</code> calls <code className="font-mono text-xs bg-neutral-100 px-1 rounded">onClose</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>The overlay backdrop is a focusable button that closes on click.</li>
        </ul>
      </section>
    </div>
  );
}
