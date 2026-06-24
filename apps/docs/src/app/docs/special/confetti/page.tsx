"use client";

import { Confetti } from "@animui/ui";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { useState } from "react";

export default function ConfettiPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Special</span>
        <span>/</span>
        <span className="text-foreground font-medium">Confetti</span>
      </nav>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Confetti</h1>
        <p className="text-muted-foreground text-lg">
          Canvas-based physics confetti. Can be click-triggered by wrapping
          children or fired programmatically via the <code>trigger</code> prop.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Import</h2>
        <ComponentPreview
          code={`import { Confetti } from "@animui/ui";`}
          hidePreview
        />
      </div>

      {/* Click to fire */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Click to fire</h2>
        <p className="text-muted-foreground text-sm">
          Wrap any element with <code>Confetti</code>. Clicking the child fires
          the confetti burst.
        </p>
        <ComponentPreview
          code={`import { Confetti } from "@animui/ui";

export function ClickConfetti() {
  return (
    <Confetti particleCount={80} spread={70} duration={3000}>
      <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
        Click me 🎉
      </button>
    </Confetti>
  );
}`}
        >
          <Confetti particleCount={80} spread={70} duration={3000}>
            <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Click me 🎉
            </button>
          </Confetti>
        </ComponentPreview>
      </div>

      {/* Programmatic trigger */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Programmatic trigger</h2>
        <p className="text-muted-foreground text-sm">
          Use the <code>trigger</code> prop to fire confetti from external
          state. The component reacts to <code>false&nbsp;→&nbsp;true</code>{" "}
          transitions; reset the value after firing so subsequent clicks work.
        </p>
        <ComponentPreview
          code={`import { Confetti } from "@animui/ui";
import { useState } from "react";

export function ProgrammaticConfetti() {
  const [trigger, setTrigger] = useState(false);

  function fire() {
    setTrigger(true);
    setTimeout(() => setTrigger(false), 100);
  }

  return (
    <>
      <Confetti
        trigger={trigger}
        particleCount={120}
        spread={90}
        duration={4000}
        colors={["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"]}
      />
      <button
        onClick={fire}
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        Fire confetti
      </button>
    </>
  );
}`}
        >
          <ProgrammaticDemo />
        </ComponentPreview>
      </div>

      {/* Props table */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "trigger",
              type: "boolean",
              default: "false",
              description:
                "Set to true to fire confetti programmatically. Reacts to false→true transitions.",
            },
            {
              name: "children",
              type: "ReactNode",
              default: "—",
              description: "Clicking these children fires the confetti.",
            },
            {
              name: "particleCount",
              type: "number",
              default: "80",
              description: "Number of particles launched.",
            },
            {
              name: "spread",
              type: "number",
              default: "70",
              description: "Launch angle spread in degrees.",
            },
            {
              name: "colors",
              type: "string[]",
              default: "—",
              description: "Array of hex color strings for particles.",
            },
            {
              name: "duration",
              type: "number",
              default: "3000",
              description: "Milliseconds before the canvas is cleared.",
            },
            {
              name: "className",
              type: "string",
              default: "—",
              description: "Additional classes for the canvas wrapper.",
            },
          ]}
        />
      </div>
    </div>
  );
}

function ProgrammaticDemo() {
  const [trigger, setTrigger] = useState(false);

  function fire() {
    setTrigger(true);
    setTimeout(() => setTrigger(false), 100);
  }

  return (
    <>
      <Confetti
        trigger={trigger}
        particleCount={120}
        spread={90}
        duration={4000}
        colors={["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"]}
      />
      <button
        onClick={fire}
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        Fire confetti
      </button>
    </>
  );
}
