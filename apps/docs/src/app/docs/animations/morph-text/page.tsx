"use client";

import { MorphText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { MorphText } from "@stealshadow/ui";

export default function Example() {
  return (
    <MorphText
      words={["Fast", "Beautiful", "Accessible", "Open source"]}
    />
  );
}`;

const INTERVAL_CODE = `<MorphText
  words={["Ship", "Build", "Deploy", "Scale"]}
  interval={800}
/>`;

const PROPS = [
  { name: "words", type: "string[]", default: "—", description: "Array of words to cycle through." },
  { name: "interval", type: "number", default: "2000", description: "Milliseconds between word transitions." },
  { name: "className", type: "string", default: "—", description: "Additional classes applied to the animated span." },
];

export default function MorphTextDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Morph Text</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Morph Text</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Cycles through an array of words with a smooth blur-morph transition. Great for hero headlines that cycle through key product values.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ MorphText }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="py-8 text-center">
            <p className="text-4xl font-black text-neutral-900">
              Components that are{" "}
              <MorphText
                words={["Fast", "Beautiful", "Accessible", "Open source"]}
                className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent"
              />
            </p>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Fast interval</h2>
        <ComponentPreview code={INTERVAL_CODE}>
          <div className="py-6 text-center">
            <p className="text-3xl font-black text-neutral-900">
              Ready to{" "}
              <MorphText words={["Ship", "Build", "Deploy", "Scale"]} interval={800} className="text-blue-600" />
            </p>
            <p className="mt-2 text-sm text-neutral-400">800ms interval — faster cycling</p>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Inline use</h2>
        <ComponentPreview code={`<h1>We help you <MorphText words={["ship faster", "scale bigger", "build better"]} /></h1>`}>
          <div className="py-6">
            <p className="text-2xl font-black text-neutral-900">
              We help you{" "}
              <MorphText words={["ship faster", "scale bigger", "build better"]} className="text-blue-600" />
            </p>
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
