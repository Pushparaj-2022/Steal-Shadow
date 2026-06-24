"use client";

import { Card, CardHeader, CardContent, CardFooter, Button, Badge } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const PREVIEW_CODE = `import { Card, CardHeader, CardContent, CardFooter } from "@stealshadow/ui";
import { Button, Badge } from "@stealshadow/ui";

export default function Example() {
  return (
    <Card className="w-72">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Card title</h3>
          <Badge variant="success">Active</Badge>
        </div>
        <p className="text-sm text-neutral-500">Optional subtitle or description text.</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600">
          Card body content goes here. Cards compose freely with any content.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  );
}`;

const PROPS = [
  { name: "className", type: "string", default: "—", description: "Additional Tailwind classes applied to the card container." },
  { name: "children", type: "React.ReactNode", default: "—", description: "Card content — use CardHeader, CardContent, and CardFooter sub-components." },
  { name: "shadow", type: '"none" | "sm" | "md" | "lg"', default: '"sm"', description: "Box shadow level." },
  { name: "padding", type: '"none" | "sm" | "md" | "lg"', default: '"md"', description: "Inner padding applied to Card when not using sub-components." },
  { name: "bordered", type: "boolean", default: "true", description: "Renders a 1px border around the card." },
  { name: "hover", type: "boolean", default: "false", description: "Adds a subtle lift animation on hover." },
];


export default function CardDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Card</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Card</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A composable container with optional header, body, and footer slots.
          Use it as a generic layout wrapper for any content.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Card, CardHeader, CardContent, CardFooter }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic usage</h2>
        <p className="text-neutral-500 mb-4">Compose Card with its slot sub-components.</p>
        <ComponentPreview code={PREVIEW_CODE}>
          <Card className="w-72">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm">Card title</h3>
                <Badge variant="success">Active</Badge>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">Optional subtitle or description text.</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 leading-relaxed">Card body content goes here. Cards compose freely with any content.</p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button size="sm">Confirm</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
