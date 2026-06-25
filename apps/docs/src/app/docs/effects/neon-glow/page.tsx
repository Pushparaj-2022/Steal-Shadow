"use client";

import { NeonGlow } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { NeonGlow } from "@animui/ui";

export default function Example() {
  return (
    <div className="bg-neutral-950 p-6 sm:p-8 rounded-xl w-full">
      <NeonGlow as="h2" color="violet" className="text-3xl font-black">
        Neon Glow
      </NeonGlow>
    </div>
  );
}`;

const COLORS_CODE = `<NeonGlow color="violet">Violet</NeonGlow>
<NeonGlow color="blue">Blue</NeonGlow>
<NeonGlow color="cyan">Cyan</NeonGlow>
<NeonGlow color="green">Green</NeonGlow>
<NeonGlow color="pink">Pink</NeonGlow>
<NeonGlow color="orange">Orange</NeonGlow>`;

const BORDER_CODE = `<NeonGlow color="cyan" border>
  Featured release
</NeonGlow>`;

const PULSE_CODE = `<NeonGlow color="violet" pulse>
  Live now
</NeonGlow>`;

const PROPS = [
  { name: "color", type: '"violet" | "blue" | "cyan" | "green" | "pink" | "orange"', default: '"violet"', description: "Neon color — controls text color and glow." },
  { name: "as", type: '"span" | "div" | "h1" | "h2" | "h3" | "p"', default: '"span"', description: "HTML element to render." },
  { name: "pulse", type: "boolean", default: "false", description: "Animate opacity to create a pulsing neon flicker." },
  { name: "border", type: "boolean", default: "false", description: "Show a matching neon border around the element." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

const DarkBg = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full rounded-xl bg-neutral-950 p-6 flex flex-wrap gap-6 items-center justify-center">{children}</div>
);

export default function NeonGlowDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Effects</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">NeonGlow</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">NeonGlow</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Neon-lit text with multi-layer glow shadow. Six color options, border mode, and a pulse animation for live or active states.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ NeonGlow }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <DarkBg>
            <NeonGlow as="h2" color="violet" className="text-3xl font-black">Neon Glow</NeonGlow>
          </DarkBg>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">All colors</h2>
        <ComponentPreview code={COLORS_CODE}>
          <DarkBg>
            <NeonGlow color="violet" className="text-xl font-bold">Violet</NeonGlow>
            <NeonGlow color="blue" className="text-xl font-bold">Blue</NeonGlow>
            <NeonGlow color="cyan" className="text-xl font-bold">Cyan</NeonGlow>
            <NeonGlow color="green" className="text-xl font-bold">Green</NeonGlow>
            <NeonGlow color="pink" className="text-xl font-bold">Pink</NeonGlow>
            <NeonGlow color="orange" className="text-xl font-bold">Orange</NeonGlow>
          </DarkBg>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Border mode</h2>
        <ComponentPreview code={BORDER_CODE}>
          <DarkBg>
            <NeonGlow color="cyan" border className="text-sm font-semibold px-3 py-1.5">Featured release</NeonGlow>
          </DarkBg>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Pulse animation</h2>
        <ComponentPreview code={PULSE_CODE}>
          <DarkBg>
            <NeonGlow color="violet" pulse className="text-xl font-bold">Live now</NeonGlow>
          </DarkBg>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
