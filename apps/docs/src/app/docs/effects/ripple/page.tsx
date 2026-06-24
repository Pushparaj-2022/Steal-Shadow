"use client";

import Ripple from "@animui/ui";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";

const basicCode = `import Ripple from "@animui/ui";

export default function Example() {
  return (
    <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
      <Ripple />
      <button className="relative z-10 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium">
        Click me
      </button>
    </div>
  );
}`;

const slowPulseCode = `import Ripple from "@animui/ui";

export default function Example() {
  return (
    <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
      <Ripple duration={6} numCircles={5} />
      <button className="relative z-10 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium">
        Slow pulse
      </button>
    </div>
  );
}`;

const props = [
  {
    name: "mainCircleSize",
    type: "number",
    default: "210",
    description: "Diameter of the innermost circle in pixels.",
  },
  {
    name: "mainCircleOpacity",
    type: "number",
    default: "0.24",
    description: "Opacity of the innermost circle.",
  },
  {
    name: "numCircles",
    type: "number",
    default: "8",
    description: "Total number of concentric rings.",
  },
  {
    name: "duration",
    type: "number",
    default: "3.5",
    description: "Full animation cycle duration in seconds.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes for the container.",
  },
];

export default function RipplePage() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Effects</span>
        <span>/</span>
        <span className="text-foreground font-medium">Ripple</span>
      </nav>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Ripple</h1>
        <p className="text-lg text-muted-foreground">
          Concentric pulsing circles that radiate outward — ideal as a radial
          attention-grabber, ping indicator, or ambient background effect.
        </p>
      </div>

      {/* Import snippet */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg bg-muted px-4 py-3 text-sm overflow-x-auto">
          <code>{`import Ripple from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-muted-foreground">
          Drop <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">{"<Ripple />"}</code> inside a{" "}
          <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">relative</code> container.
          It fills the bounds and renders behind any children via{" "}
          <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">absolute</code> positioning.
        </p>
        <ComponentPreview
          code={basicCode}
          preview={
            <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
              <Ripple />
              <button className="relative z-10 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium">
                Click me
              </button>
            </div>
          }
        />
      </div>

      {/* Slow pulse section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Slow pulse</h2>
        <p className="text-muted-foreground">
          Increase <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">duration</code> for a
          slower, more ambient ripple, and reduce{" "}
          <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">numCircles</code> for a
          cleaner, minimal look.
        </p>
        <ComponentPreview
          code={slowPulseCode}
          preview={
            <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
              <Ripple duration={6} numCircles={5} />
              <button className="relative z-10 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium">
                Slow pulse
              </button>
            </div>
          }
        />
      </div>

      {/* Props table */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
