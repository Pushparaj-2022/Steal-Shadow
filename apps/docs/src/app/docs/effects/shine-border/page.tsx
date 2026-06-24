"use client";

import ShineBorder from "@animui/ui";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";

const basicCode = `import ShineBorder from "@animui/ui";

export default function Example() {
  return (
    <ShineBorder>
      <div className="p-8 text-center">
        <p className="text-lg font-semibold">Shine Border Card</p>
        <p className="text-sm text-muted-foreground mt-1">Animated conic-gradient border</p>
      </div>
    </ShineBorder>
  );
}`;

const multiColorCode = `import ShineBorder from "@animui/ui";

export default function Example() {
  return (
    <ShineBorder color={["#7c3aed", "#ec4899", "#f59e0b"]}>
      <div className="p-8 text-center">
        <p className="text-lg font-semibold">Multi-Color Shine</p>
        <p className="text-sm text-muted-foreground mt-1">Multiple gradient color stops</p>
      </div>
    </ShineBorder>
  );
}`;

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Content rendered inside the border.",
  },
  {
    name: "duration",
    type: "number",
    default: "14",
    description: "Full rotation cycle duration in seconds.",
  },
  {
    name: "color",
    type: "string | string[]",
    default: '"#7c3aed"',
    description: "One or more color stops for the shine gradient.",
  },
  {
    name: "borderWidth",
    type: "number",
    default: "1",
    description: "Border thickness in pixels.",
  },
  {
    name: "borderRadius",
    type: "number",
    default: "8",
    description: "Corner radius in pixels.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes for the outer wrapper.",
  },
];

export default function ShineBorderPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Effects</span>
        <span>/</span>
        <span className="text-foreground font-medium">ShineBorder</span>
      </nav>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">ShineBorder</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Wraps any content with an animated conic-gradient rotating border. The
          shine sweeps continuously around the edges, drawing attention without
          distracting from the content inside.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg bg-muted px-5 py-4 text-sm overflow-x-auto">
          <code>{`import ShineBorder from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Default usage with a single violet color stop and standard duration.
        </p>
        <ComponentPreview
          code={basicCode}
          preview={
            <ShineBorder>
              <div className="p-8 text-center">
                <p className="text-lg font-semibold">Shine Border Card</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Animated conic-gradient border
                </p>
              </div>
            </ShineBorder>
          }
        />
      </div>

      {/* Multi-color */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Multi-color</h2>
        <p className="text-sm text-muted-foreground">
          Pass an array of hex values to{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">color</code>{" "}
          for a multi-stop gradient shine that cycles through violet, pink, and
          amber.
        </p>
        <ComponentPreview
          code={multiColorCode}
          preview={
            <ShineBorder color={["#7c3aed", "#ec4899", "#f59e0b"]}>
              <div className="p-8 text-center">
                <p className="text-lg font-semibold">Multi-Color Shine</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Multiple gradient color stops
                </p>
              </div>
            </ShineBorder>
          }
        />
      </div>

      {/* Props Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
