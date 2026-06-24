"use client";

import { BoxReveal } from "@animui/ui";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const basicCode = `import { BoxReveal } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-2">
      <BoxReveal boxColor="#7c3aed" duration={0.5} delay={0}>
        <h1 className="text-4xl font-bold">Hello World</h1>
      </BoxReveal>

      <BoxReveal boxColor="#7c3aed" duration={0.5} delay={0.2}>
        <p className="text-lg text-muted-foreground">
          Beautiful animations for your next project.
        </p>
      </BoxReveal>

      <BoxReveal boxColor="#7c3aed" duration={0.5} delay={0.4}>
        <button className="mt-2 rounded-md bg-violet-600 px-4 py-2 text-white">
          Get Started
        </button>
      </BoxReveal>
    </div>
  );
}`;

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Content to reveal.",
  },
  {
    name: "boxColor",
    type: "string",
    default: '"#7c3aed"',
    description: "Color of the sweeping reveal box.",
  },
  {
    name: "duration",
    type: "number",
    default: "0.5",
    description: "Duration of the sweep animation in seconds.",
  },
  {
    name: "delay",
    type: "number",
    default: "0",
    description: "Delay before the animation starts in seconds.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes.",
  },
];

export default function BoxRevealPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-muted-foreground">
        <span>Animations</span>
        <span>/</span>
        <span className="text-foreground font-medium">BoxReveal</span>
      </nav>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">BoxReveal</h1>
        <p className="text-lg text-muted-foreground">
          A colored box sweeps across content to reveal it — great for
          staggered hero text entrances and attention-grabbing headings.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg border bg-muted px-4 py-3 text-sm overflow-x-auto">
          <code>{`import { BoxReveal } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic Usage */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-muted-foreground">
          Wrap each piece of content in a <code className="text-sm font-mono bg-muted px-1 py-0.5 rounded">BoxReveal</code> and
          stagger the <code className="text-sm font-mono bg-muted px-1 py-0.5 rounded">delay</code> to create a
          cascading entrance effect.
        </p>
        <ComponentPreview code={basicCode}>
          <div className="flex flex-col gap-2 p-8">
            <BoxReveal boxColor="#7c3aed" duration={0.5} delay={0}>
              <h1 className="text-4xl font-bold">Hello World</h1>
            </BoxReveal>

            <BoxReveal boxColor="#7c3aed" duration={0.5} delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Beautiful animations for your next project.
              </p>
            </BoxReveal>

            <BoxReveal boxColor="#7c3aed" duration={0.5} delay={0.4}>
              <button className="mt-2 rounded-md bg-violet-600 px-4 py-2 text-white">
                Get Started
              </button>
            </BoxReveal>
          </div>
        </ComponentPreview>
      </div>

      {/* Props Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
