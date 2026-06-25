"use client";

import { Popover } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Popover } from "@animui/ui";

export default function Example() {
  return (
    <Popover
      trigger={<button>Open popover</button>}
    >
      <div className="p-4">
        <p className="font-semibold">Popover title</p>
        <p className="text-sm text-neutral-500 mt-1">Any content goes here.</p>
      </div>
    </Popover>
  );
}`;

const PLACEMENT_CODE = `<Popover placement="top" trigger={<button>Top</button>}>...</Popover>
<Popover placement="bottom" trigger={<button>Bottom</button>}>...</Popover>
<Popover placement="left" trigger={<button>Left</button>}>...</Popover>
<Popover placement="right" trigger={<button>Right</button>}>...</Popover>`;

const PROPS = [
  { name: "trigger", type: "React.ReactNode", default: "—", description: "The element that opens the popover on click." },
  { name: "children", type: "React.ReactNode", default: "—", description: "Content rendered inside the floating panel." },
  { name: "placement", type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', description: "Which side of the trigger the popover appears on." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the popover panel." },
];

export default function PopoverDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overlays</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Popover</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Popover</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A floating panel that appears on click, positioned relative to a trigger element. Dismisses on outside click or Escape key.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Popover }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex justify-center py-8">
            <Popover
              trigger={
                <button className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 shadow-sm">
                  Open popover
                </button>
              }
            >
              <div className="p-4">
                <p className="text-sm font-semibold text-neutral-900">Popover title</p>
                <p className="text-xs text-neutral-500 mt-1">Any content can go inside the floating panel.</p>
              </div>
            </Popover>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Placement</h2>
        <ComponentPreview code={PLACEMENT_CODE}>
          <div className="grid grid-cols-2 gap-4 py-4">
            {(["top", "bottom", "left", "right"] as const).map((placement) => (
              <div key={placement} className="flex justify-center">
                <Popover
                  placement={placement}
                  trigger={
                    <button className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-600 shadow-sm capitalize">
                      {placement}
                    </button>
                  }
                >
                  <div className="p-3 text-sm text-neutral-600 capitalize">{placement} panel</div>
                </Popover>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Rich content</h2>
        <ComponentPreview code={`<Popover trigger={<button>User info</button>}>\n  <div className="p-4 w-64">\n    <div className="flex items-center gap-3 mb-3">\n      <Avatar src="/alice.png" />\n      <div>\n        <p className="font-semibold">Alice Martin</p>\n        <p className="text-xs text-neutral-500">alice@example.com</p>\n      </div>\n    </div>\n    <Button variant="outline" size="sm" className="w-full">View profile</Button>\n  </div>\n</Popover>`}>
          <div className="flex justify-center py-4">
            <Popover
              trigger={
                <button className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm">
                  User info
                </button>
              }
            >
              <div className="p-4 w-56">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-xs font-bold text-white">A</div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Alice Martin</p>
                    <p className="text-xs text-neutral-500">alice@example.com</p>
                  </div>
                </div>
                <button className="w-full rounded-lg border border-neutral-200 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50">View profile</button>
              </div>
            </Popover>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
