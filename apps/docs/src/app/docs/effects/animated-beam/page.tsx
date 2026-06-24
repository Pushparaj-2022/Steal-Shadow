"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@animui/ui";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";

function BasicDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-40 flex items-center justify-between px-10"
    >
      <div
        ref={fromRef}
        className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-semibold shadow-lg"
      >
        A
      </div>
      <div
        ref={toRef}
        className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold shadow-lg"
      >
        B
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
      />
    </div>
  );
}

const basicCode = `import { useRef } from "react";
import { AnimatedBeam } from "@animui/ui";

function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-40 flex items-center justify-between px-10"
    >
      <div ref={fromRef} className="w-12 h-12 rounded-full bg-violet-600" />
      <div ref={toRef} className="w-12 h-12 rounded-full bg-blue-500" />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
      />
    </div>
  );
}`;

const importCode = `import { AnimatedBeam } from "@animui/ui";`;

const propsData = [
  {
    prop: "containerRef",
    type: "React.RefObject<HTMLElement | null>",
    default: "—",
    description:
      "Ref attached to the relative-positioned container div that wraps both source and target elements. The SVG is absolutely positioned inside this container.",
  },
  {
    prop: "fromRef",
    type: "React.RefObject<HTMLElement | null>",
    default: "—",
    description: "Ref attached to the source element where the beam originates.",
  },
  {
    prop: "toRef",
    type: "React.RefObject<HTMLElement | null>",
    default: "—",
    description: "Ref attached to the target element where the beam terminates.",
  },
  {
    prop: "curvature",
    type: "number",
    default: "0",
    description:
      "Controls the bend of the bezier curve connecting the two elements. Positive values curve upward, negative values curve downward.",
  },
  {
    prop: "reverse",
    type: "boolean",
    default: "false",
    description:
      "When true, reverses the direction of the animated gradient so it flows from target to source.",
  },
  {
    prop: "duration",
    type: "number",
    default: "3",
    description: "Duration of one full animation cycle in seconds.",
  },
  {
    prop: "delay",
    type: "number",
    default: "0",
    description: "Delay in seconds before the animation starts.",
  },
  {
    prop: "pathColor",
    type: "string",
    default: '"#cbd5e1"',
    description: "Color of the static SVG path drawn between the two elements.",
  },
  {
    prop: "pathWidth",
    type: "number",
    default: "2",
    description: "Stroke width of the SVG path in pixels.",
  },
  {
    prop: "pathOpacity",
    type: "number",
    default: "0.3",
    description: "Opacity of the static SVG path (0–1).",
  },
  {
    prop: "gradientStartColor",
    type: "string",
    default: '"#7c3aed"',
    description: "Start color of the animated gradient that travels along the path.",
  },
  {
    prop: "gradientStopColor",
    type: "string",
    default: '"#3b82f6"',
    description: "End color of the animated gradient that travels along the path.",
  },
  {
    prop: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes applied to the root SVG element.",
  },
];

export default function AnimatedBeamPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground flex items-center gap-2">
        <span>Effects</span>
        <span>/</span>
        <span className="text-foreground font-medium">AnimatedBeam</span>
      </nav>

      {/* Title + description */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">AnimatedBeam</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Draws an animated SVG path between two DOM elements, visualising a
          connection or data-flow with a travelling gradient beam. Attach refs to
          a container and any two child elements — AnimatedBeam handles the SVG
          geometry automatically.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="bg-muted rounded-lg px-5 py-4 text-sm overflow-x-auto">
          <code>{importCode}</code>
        </pre>
      </div>

      {/* Basic example */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Place a <code className="font-mono">relative</code>-positioned
          container around your source and target elements, then pass all three
          refs to <code className="font-mono">AnimatedBeam</code>.
        </p>
        <ComponentPreview code={basicCode}>
          <BasicDemo />
        </ComponentPreview>
      </div>

      {/* Usage notes */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Usage notes</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            The <code className="font-mono">containerRef</code> element must have{" "}
            <code className="font-mono">position: relative</code> (or{" "}
            <code className="font-mono">absolute</code> /{" "}
            <code className="font-mono">fixed</code>) so the SVG can be
            absolutely positioned inside it.
          </li>
          <li>
            Both <code className="font-mono">fromRef</code> and{" "}
            <code className="font-mono">toRef</code> must be descendants of{" "}
            <code className="font-mono">containerRef</code>.
          </li>
          <li>
            Use <code className="font-mono">curvature</code> to add a visual
            arc — handy when multiple beams share the same endpoints.
          </li>
          <li>
            Combine multiple{" "}
            <code className="font-mono">&lt;AnimatedBeam /&gt;</code> instances
            inside one container to build graph or flow-chart layouts.
          </li>
        </ul>
      </div>

      {/* Props table */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={propsData} />
      </div>
    </div>
  );
}
