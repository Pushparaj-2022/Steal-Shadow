"use client";

import { TypewriterText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";


const BASIC_CODE = `import { Typewriter } from "@stealshadow/ui";

export default function Example() {
  return (
    <Typewriter
      strings={["Build faster.", "Ship better.", "Look amazing.", "Steal Shadow."]}
      speed={70}
      deleteSpeed={40}
      pauseDuration={1800}
      loop
      cursor
    />
  );
}`;

const PROPS = [
  { name: "strings", type: "string[]", default: "—", description: "Array of strings to cycle through. If only one string is provided, it types once and stops." },
  { name: "speed", type: "number", default: "70", description: "Milliseconds between each character when typing." },
  { name: "deleteSpeed", type: "number", default: "40", description: "Milliseconds between each character when deleting." },
  { name: "pauseDuration", type: "number", default: "1800", description: "Milliseconds to pause after a string is fully typed before deleting." },
  { name: "loop", type: "boolean", default: "true", description: "Whether to loop through strings indefinitely." },
  { name: "cursor", type: "boolean", default: "true", description: "Show a blinking cursor after the typed text." },
  { name: "cursorChar", type: "string", default: '"|"', description: "The character used as the cursor." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the text wrapper." },
  { name: "onComplete", type: "() => void", default: "—", description: "Called when all strings have been typed (only fires when loop is false)." },
];

export default function TypewriterPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Typewriter</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Typewriter</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animates text character by character with configurable typing speed, delete speed,
          pause duration, and optional cycling through multiple strings.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Typewriter }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Live preview</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="text-center py-4">
            <TypewriterText
              words={["Build faster.", "Ship better.", "Look amazing.", "Steal Shadow."]}
              className="text-3xl font-black text-neutral-900"
            />
            <p className="mt-2 text-sm text-neutral-400">Cycles through multiple strings</p>
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
