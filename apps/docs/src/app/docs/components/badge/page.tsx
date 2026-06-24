"use client";

import { Badge } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Badge } from "@stealshadow/ui";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success" dot>Live</Badge>
    </div>
  );
}`;

const PROPS = [
  { name: "variant", type: '"default" | "success" | "warning" | "error" | "info"', default: '"default"', description: "Controls the color scheme of the badge." },
  { name: "size", type: '"sm" | "md"', default: '"md"', description: "Controls padding and font size." },
  { name: "dot", type: "boolean", default: "false", description: "Adds an animated dot indicator before the label." },
  { name: "removable", type: "boolean", default: "false", description: "Shows an X button that calls onRemove when clicked." },
  { name: "onRemove", type: "() => void", default: "—", description: "Called when the user clicks the remove X button." },
  { name: "className", type: "string", default: "—", description: "Additional Tailwind classes." },
  { name: "children", type: "React.ReactNode", default: "—", description: "Badge label content." },
];


export default function BadgeDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Badge</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Badge</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Compact status labels for conveying state at a glance. Five semantic variants,
          animated dot indicator, and an optional removable mode.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Badge }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Variants</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success" dot>Live</Badge>
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
