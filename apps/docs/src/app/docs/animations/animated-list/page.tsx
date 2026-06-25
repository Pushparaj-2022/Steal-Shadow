"use client";

import { AnimatedList } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { AnimatedList } from "@animui/ui";

export default function Example() {
  return (
    <AnimatedList delay={0.15}>
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <p className="font-semibold text-card-foreground">Item One</p>
        <p className="text-sm text-neutral-500">A short description for the first item.</p>
      </div>
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <p className="font-semibold text-card-foreground">Item Two</p>
        <p className="text-sm text-neutral-500">A short description for the second item.</p>
      </div>
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <p className="font-semibold text-card-foreground">Item Three</p>
        <p className="text-sm text-neutral-500">A short description for the third item.</p>
      </div>
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <p className="font-semibold text-card-foreground">Item Four</p>
        <p className="text-sm text-neutral-500">A short description for the fourth item.</p>
      </div>
    </AnimatedList>
  );
}`;

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "List items to animate in sequence.",
  },
  {
    name: "delay",
    type: "number",
    default: "0.1",
    description: "Stagger delay between each child in seconds.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes for the container.",
  },
];

export default function AnimatedListPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-neutral-500">
        <span>Animations</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">AnimatedList</span>
      </nav>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">AnimatedList</h1>
        <p className="text-lg text-neutral-500 max-w-2xl">
          Wraps any list of children and animates each one in with a staggered
          fade, slide, and scale entrance as the container enters the viewport.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-md bg-neutral-100 px-4 py-3 text-sm overflow-x-auto">
          <code>{`import { AnimatedList } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic example */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <ComponentPreview code={basicCode}>
          <AnimatedList delay={0.15} className="space-y-3 w-full max-w-md">
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <p className="font-semibold text-card-foreground">Item One</p>
              <p className="text-sm text-neutral-500">
                A short description for the first item.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <p className="font-semibold text-card-foreground">Item Two</p>
              <p className="text-sm text-neutral-500">
                A short description for the second item.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <p className="font-semibold text-card-foreground">Item Three</p>
              <p className="text-sm text-neutral-500">
                A short description for the third item.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <p className="font-semibold text-card-foreground">Item Four</p>
              <p className="text-sm text-neutral-500">
                A short description for the fourth item.
              </p>
            </div>
          </AnimatedList>
        </ComponentPreview>
      </div>

      {/* Props table */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
