"use client";

import RetroGrid from "@animui/ui";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";

const basicCode = `import RetroGrid from "@animui/ui";

export default function Example() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-white dark:bg-black">
      <RetroGrid />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
        <h2 className="text-3xl font-bold tracking-tight">RetroGrid</h2>
        <p className="text-sm text-muted-foreground">A perspective grid background.</p>
      </div>
    </div>
  );
}`;

const customAngleCode = `import RetroGrid from "@animui/ui";

export default function Example() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-white dark:bg-black">
      <RetroGrid angle={45} />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Custom Angle</h2>
        <p className="text-sm text-muted-foreground">angle={45} gives a flatter perspective.</p>
      </div>
    </div>
  );
}`;

const propsData = [
  {
    name: "angle",
    type: "number",
    default: "65",
    description: "Perspective tilt of the grid in degrees.",
  },
  {
    name: "cellSize",
    type: "number",
    default: "60",
    description: "Width and height of each grid cell in pixels.",
  },
  {
    name: "opacity",
    type: "number",
    default: "0.5",
    description: "Overall opacity of the grid overlay.",
  },
  {
    name: "lightLineColor",
    type: "string",
    default: '"rgba(0,0,0,0.15)"',
    description: "Grid line color in light mode.",
  },
  {
    name: "darkLineColor",
    type: "string",
    default: '"rgba(255,255,255,0.15)"',
    description: "Grid line color in dark mode.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes for the container.",
  },
];

export default function RetroGridPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Effects</span>
        <span>/</span>
        <span className="font-medium text-foreground">RetroGrid</span>
      </nav>

      {/* Heading */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">RetroGrid</h1>
        <p className="text-lg text-muted-foreground">
          A full-coverage perspective grid background that adds a retro,
          synthwave-inspired depth to hero sections and banners. Drop it inside
          any <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">relative</code> container
          and it will tile seamlessly behind your content.
        </p>
      </div>

      {/* Import snippet */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Import
        </h2>
        <div className="rounded-lg bg-zinc-950 px-5 py-4">
          <code className="font-mono text-sm">
            <span className="text-blue-400">import</span>{" "}
            <span className="text-green-400">RetroGrid</span>{" "}
            <span className="text-blue-400">from</span>{" "}
            <span className="text-amber-300">&quot;@animui/ui&quot;</span>
            <span className="text-zinc-400">;</span>
          </code>
        </div>
      </div>

      {/* Basic section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic</h2>
        <p className="text-muted-foreground">
          Place <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">RetroGrid</code> as
          the first child of a relatively-positioned container. Your content sits on
          top via <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">z-10</code>.
        </p>
        <ComponentPreview
          code={basicCode}
          preview={
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-white dark:bg-black">
              <RetroGrid />
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
                <h2 className="text-3xl font-bold tracking-tight">RetroGrid</h2>
                <p className="text-sm text-muted-foreground">
                  A perspective grid background.
                </p>
              </div>
            </div>
          }
        />
      </div>

      {/* Custom angle section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom Angle</h2>
        <p className="text-muted-foreground">
          Adjust the <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm">angle</code> prop
          to control how aggressively the grid recedes into the distance. Lower values
          produce a flatter, more top-down perspective; higher values exaggerate the
          vanishing point.
        </p>
        <ComponentPreview
          code={customAngleCode}
          preview={
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-white dark:bg-black">
              <RetroGrid angle={45} />
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
                <h2 className="text-3xl font-bold tracking-tight">Custom Angle</h2>
                <p className="text-sm text-muted-foreground">
                  angle={45} gives a flatter perspective.
                </p>
              </div>
            </div>
          }
        />
      </div>

      {/* Props table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable props={propsData} />
      </div>
    </div>
  );
}
