"use client";

import { HoverCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { HoverCard } from "@animui/ui";

export default function Example() {
  return (
    <HoverCard
      trigger={<a href="#" className="underline">@alice</a>}
    >
      <div className="flex items-center gap-3 w-56">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500" />
        <div>
          <p className="font-semibold">Alice Martin</p>
          <p className="text-sm text-neutral-500">Product designer</p>
        </div>
      </div>
    </HoverCard>
  );
}`;

const PLACEMENT_CODE = `<HoverCard placement="top" trigger={<button>Top</button>}>...</HoverCard>
<HoverCard placement="bottom" trigger={<button>Bottom</button>}>...</HoverCard>
<HoverCard placement="left" trigger={<button>Left</button>}>...</HoverCard>
<HoverCard placement="right" trigger={<button>Right</button>}>...</HoverCard>`;

const DELAY_CODE = `<HoverCard openDelay={0} closeDelay={400} trigger={<button>Hover me</button>}>
  <p>Opens instantly, lingers before closing.</p>
</HoverCard>`;

const PROPS = [
  { name: "trigger", type: "React.ReactNode", default: "—", description: "The element that opens the card on hover or focus." },
  { name: "children", type: "React.ReactNode", default: "—", description: "Content rendered inside the floating card." },
  { name: "openDelay", type: "number", default: "150", description: "Milliseconds to wait before opening after hover starts." },
  { name: "closeDelay", type: "number", default: "200", description: "Milliseconds to wait before closing after hover ends." },
  { name: "placement", type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', description: "Which side of the trigger the card appears on." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the card panel." },
];

export default function HoverCardDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overlays</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Hover Card</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Hover Card</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A floating panel that appears when hovering or focusing a trigger element, after a short delay. Ideal for previews of users, links, or other rich content.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ HoverCard }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex justify-center py-8">
            <HoverCard
              trigger={
                <a href="#" onClick={(e) => e.preventDefault()} className="text-sm font-semibold text-blue-600 underline underline-offset-4">
                  @alice
                </a>
              }
            >
              <div className="flex items-center gap-3 w-56">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-sm font-bold text-white">A</div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-neutral-900 truncate">Alice Martin</p>
                  <p className="text-xs text-neutral-500 truncate">Product designer</p>
                </div>
              </div>
            </HoverCard>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Placement</h2>
        <ComponentPreview code={PLACEMENT_CODE}>
          <div className="grid grid-cols-2 gap-6 py-4">
            {(["top", "bottom", "left", "right"] as const).map((placement) => (
              <div key={placement} className="flex justify-center">
                <HoverCard
                  placement={placement}
                  trigger={
                    <button className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-600 shadow-sm capitalize">
                      {placement}
                    </button>
                  }
                >
                  <div className="p-1 text-sm text-neutral-600 capitalize">{placement} card</div>
                </HoverCard>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom delays</h2>
        <ComponentPreview code={DELAY_CODE}>
          <div className="flex justify-center py-8">
            <HoverCard
              openDelay={0}
              closeDelay={400}
              trigger={
                <button className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm">
                  Hover me
                </button>
              }
            >
              <p className="text-sm text-neutral-600">Opens instantly, lingers before closing.</p>
            </HoverCard>
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
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Opens on keyboard focus and closes on blur, not just mouse hover.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Dismissible with the <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Escape</code> key.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Moving the pointer from the trigger onto the card keeps it open.</li>
        </ul>
      </section>
    </div>
  );
}
