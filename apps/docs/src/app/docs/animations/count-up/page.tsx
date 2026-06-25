"use client";

import { CountUp } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { CountUp } from "@animui/ui";

export default function Example() {
  return <CountUp to={1284} />;
}`;

const PREFIX_CODE = `<CountUp to={49200} prefix="$" />
<CountUp to={98.7} suffix="%" decimals={1} />
<CountUp to={2.4} prefix="x" decimals={1} />`;

const PROPS = [
  { name: "to", type: "number", default: "—", description: "The target number to count up to." },
  { name: "from", type: "number", default: "0", description: "Starting value." },
  { name: "duration", type: "number", default: "2000", description: "Animation duration in milliseconds." },
  { name: "prefix", type: "string", default: "—", description: "String prepended to the number (e.g. '$')." },
  { name: "suffix", type: "string", default: "—", description: "String appended to the number (e.g. '%')." },
  { name: "decimals", type: "number", default: "0", description: "Number of decimal places to display." },
  { name: "separator", type: "string", default: '","', description: "Thousands separator character." },
  { name: "easing", type: '"linear" | "ease-out" | "ease-in-out"', default: '"ease-out"', description: "Easing function for the count animation." },
  { name: "triggerOnce", type: "boolean", default: "true", description: "Whether the animation fires only once when entering the viewport." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the span element." },
];

export default function CountUpDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Count Up</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Count Up</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animate a number counting up from zero (or any value) when it enters the viewport. Perfect for stats sections and dashboards.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ CountUp }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="text-center">
              <p className="text-4xl font-black text-neutral-900"><CountUp to={1284} /></p>
              <p className="text-sm text-neutral-400 mt-1">Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-neutral-900"><CountUp to={98.7} suffix="%" decimals={1} /></p>
              <p className="text-sm text-neutral-400 mt-1">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-neutral-900"><CountUp to={49200} prefix="$" /></p>
              <p className="text-sm text-neutral-400 mt-1">MRR</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Prefix &amp; Suffix</h2>
        <ComponentPreview code={PREFIX_CODE}>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="text-center">
              <p className="text-3xl font-black text-blue-600"><CountUp to={49200} prefix="$" /></p>
              <p className="text-xs text-neutral-400 mt-1">Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-blue-600"><CountUp to={98.7} suffix="%" decimals={1} /></p>
              <p className="text-xs text-neutral-400 mt-1">Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-blue-600"><CountUp to={2.4} prefix="x" decimals={1} /></p>
              <p className="text-xs text-neutral-400 mt-1">Growth</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom duration</h2>
        <ComponentPreview code={`<CountUp to={1000} duration={500} />\n<CountUp to={1000} duration={2000} />\n<CountUp to={1000} duration={5000} />`}>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <div className="rounded-xl border border-neutral-200 px-4 py-3 text-center">
              <p className="text-2xl font-black text-neutral-900"><CountUp to={1000} duration={500} /></p>
              <p className="text-xs text-neutral-400 mt-1">500ms — fast</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-center">
              <p className="text-2xl font-black text-blue-600"><CountUp to={1000} duration={2000} /></p>
              <p className="text-xs text-neutral-400 mt-1">2000ms — default</p>
            </div>
            <div className="rounded-xl border border-neutral-200 px-4 py-3 text-center">
              <p className="text-2xl font-black text-neutral-900"><CountUp to={1000} duration={5000} /></p>
              <p className="text-xs text-neutral-400 mt-1">5000ms — slow</p>
            </div>
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
