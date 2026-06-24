"use client";

import { Tooltip } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const TOOLTIP_PROPS = [
  { name: "content", type: "string | ReactNode", default: "—", description: "The text or element shown inside the tooltip bubble." },
  { name: "placement", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "Which side of the trigger the tooltip appears on." },
  { name: "delay", type: "number", default: "0", description: "Milliseconds to wait before the tooltip becomes visible after hover." },
  { name: "children", type: "ReactNode", default: "—", description: "The element that triggers the tooltip on hover / focus." },
  { name: "className", type: "string", default: "—", description: "Extra Tailwind classes applied to the tooltip bubble container." },
];

const BASIC_CODE = `import { Tooltip } from "@stealshadow/ui";

export default function Example() {
  return (
    <Tooltip content="This is a tooltip">
      <button>Hover me</button>
    </Tooltip>
  );
}`;

const PLACEMENT_CODE = `import { Tooltip } from "@stealshadow/ui";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Top" placement="top">
        <button>Top</button>
      </Tooltip>
      <Tooltip content="Bottom" placement="bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip content="Left" placement="left">
        <button>Left</button>
      </Tooltip>
      <Tooltip content="Right" placement="right">
        <button>Right</button>
      </Tooltip>
    </div>
  );
}`;

const DELAY_CODE = `import { Tooltip } from "@stealshadow/ui";

export default function Example() {
  return (
    <Tooltip content="Appeared after delay" delay={600} placement="top">
      <button>Delayed tooltip (600 ms)</button>
    </Tooltip>
  );
}`;

export default function TooltipDocsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Tooltip</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Tooltip</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A lightweight floating label that appears on hover or focus, giving users contextual
          information without cluttering the interface. Supports four placements and an optional
          open delay.
        </p>
      </div>

      {/* Import callout */}
      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Tooltip }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      {/* Basic usage */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic usage</h2>
        <p className="text-neutral-500 mb-4">
          Wrap any element with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Tooltip</code> and
          supply a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">content</code> prop.
        </p>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center justify-center py-8">
            <Tooltip content="This is a tooltip">
              <button className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 transition-colors">
                Hover me
              </button>
            </Tooltip>
          </div>
        </ComponentPreview>
      </section>

      {/* Placement */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Placement</h2>
        <p className="text-neutral-500 mb-4">
          Use <code className="font-mono text-xs bg-neutral-100 px-1 rounded">placement</code> to control
          which side the tooltip appears on.
        </p>
        <ComponentPreview code={PLACEMENT_CODE}>
          <div className="flex flex-wrap items-center justify-center gap-6 py-10">
            <Tooltip content="Top tooltip" placement="top">
              <button className="px-4 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-colors">Top</button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" placement="bottom">
              <button className="px-4 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-colors">Bottom</button>
            </Tooltip>
            <Tooltip content="Left tooltip" placement="left">
              <button className="px-4 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-colors">Left</button>
            </Tooltip>
            <Tooltip content="Right tooltip" placement="right">
              <button className="px-4 py-2 rounded-xl border border-neutral-300 bg-white text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-colors">Right</button>
            </Tooltip>
          </div>
        </ComponentPreview>
      </section>

      {/* Delay */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Delay</h2>
        <p className="text-neutral-500 mb-4">
          Pass a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">delay</code> (ms) to prevent
          tooltips from flashing when the cursor briefly passes over.
        </p>
        <ComponentPreview code={DELAY_CODE}>
          <div className="flex items-center justify-center py-8">
            <Tooltip content="Appeared after delay" delay={600} placement="top">
              <button className="px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors">
                Delayed tooltip (600 ms)
              </button>
            </Tooltip>
          </div>
        </ComponentPreview>
      </section>

      {/* Props */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={TOOLTIP_PROPS} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            The tooltip bubble has <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="tooltip"</code> and the
            trigger gets <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-describedby</code> pointing to it.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Opens on both <code className="font-mono text-xs bg-neutral-100 px-1 rounded">mouseenter</code> and{" "}
            <code className="font-mono text-xs bg-neutral-100 px-1 rounded">focus</code> so keyboard users see it too.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Pressing <kbd className="font-mono text-xs bg-neutral-100 px-1 rounded">Escape</kbd> closes the tooltip.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Tooltip content is never the sole means of conveying critical information (WCAG 1.4.13).
          </li>
        </ul>
      </section>
    </div>
  );
}
