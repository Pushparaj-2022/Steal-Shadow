"use client";

import { SplitText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { SplitText } from "@stealshadow/ui";

export default function Example() {
  return (
    <SplitText as="h2" className="text-3xl font-black text-neutral-900">
      Words reveal one by one.
    </SplitText>
  );
}`;

const CHARS_CODE = `<SplitText
  splitBy="chars"
  from="fade"
  stagger={0.03}
  className="text-5xl font-black text-neutral-900"
>
  Hello World
</SplitText>`;

const FROM_CODE = `<SplitText from="bottom" className="text-2xl font-bold">Slide from bottom</SplitText>
<SplitText from="top"    className="text-2xl font-bold">Slide from top</SplitText>
<SplitText from="left"   className="text-2xl font-bold">Slide from left</SplitText>
<SplitText from="fade"   className="text-2xl font-bold">Fade in</SplitText>`;

const PROPS = [
  { name: "children", type: "string", default: "—", description: "The text to split and animate. Must be a plain string." },
  { name: "splitBy", type: '"words" | "chars"', default: '"words"', description: "Whether to animate per word or per character." },
  { name: "from", type: '"bottom" | "top" | "left" | "right" | "fade"', default: '"bottom"', description: "Direction of the enter animation." },
  { name: "stagger", type: "number", default: "0.05", description: "Delay between each word/char in seconds." },
  { name: "delay", type: "number", default: "0", description: "Initial delay before animation starts." },
  { name: "duration", type: "number", default: "0.5", description: "Duration of each word/char animation." },
  { name: "once", type: "boolean", default: "true", description: "Only animate once when scrolled into view." },
  { name: "as", type: '"p" | "h1" | "h2" | "h3" | "h4" | "span" | "div"', default: '"p"', description: "HTML element to render." },
];

export default function SplitTextDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">SplitText</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">SplitText</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Split text into words or characters and reveal them with staggered animation on scroll-into-view. Perfect for hero headings and section titles.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ SplitText }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Word split</h2>
        <ComponentPreview code={BASIC_CODE}>
          <SplitText as="h2" className="text-3xl font-black text-neutral-900">
            Words reveal one by one.
          </SplitText>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Character split</h2>
        <ComponentPreview code={CHARS_CODE}>
          <SplitText splitBy="chars" from="fade" stagger={0.03} className="text-4xl font-black text-neutral-900">
            Hello World
          </SplitText>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Direction variants</h2>
        <ComponentPreview code={FROM_CODE}>
          <div className="space-y-4">
            <SplitText from="bottom" className="text-lg font-bold text-neutral-900">Slide from bottom</SplitText>
            <SplitText from="top" className="text-lg font-bold text-neutral-900">Slide from top</SplitText>
            <SplitText from="left" className="text-lg font-bold text-neutral-900">Slide from left</SplitText>
            <SplitText from="fade" className="text-lg font-bold text-neutral-900">Fade in</SplitText>
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
