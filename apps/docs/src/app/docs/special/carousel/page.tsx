"use client";

import { Carousel } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const SLIDE_STYLES = [
  "bg-gradient-to-br from-violet-500 to-blue-600",
  "bg-gradient-to-br from-orange-400 to-red-500",
  "bg-gradient-to-br from-emerald-400 to-teal-600",
  "bg-gradient-to-br from-pink-400 to-fuchsia-600",
];

function CarouselDemo() {
  return (
    <Carousel className="h-64">
      {SLIDE_STYLES.map((style, i) => (
        <div
          key={i}
          className={`flex h-64 w-full items-center justify-center text-3xl font-black text-white ${style}`}
        >
          Slide {i + 1}
        </div>
      ))}
    </Carousel>
  );
}

function AutoPlayDemo() {
  return (
    <Carousel className="h-56" autoPlay autoPlayInterval={2500} showDots={false}>
      {SLIDE_STYLES.map((style, i) => (
        <div
          key={i}
          className={`flex h-56 w-full items-center justify-center text-2xl font-black text-white ${style}`}
        >
          Auto {i + 1}
        </div>
      ))}
    </Carousel>
  );
}

const BASIC_CODE = `import { Carousel } from "@animui/ui";

export default function Example() {
  return (
    <Carousel className="h-64">
      <div className="h-64 w-full bg-violet-500">Slide 1</div>
      <div className="h-64 w-full bg-orange-500">Slide 2</div>
      <div className="h-64 w-full bg-emerald-500">Slide 3</div>
    </Carousel>
  );
}`;

const AUTOPLAY_CODE = `<Carousel autoPlay autoPlayInterval={2500} showDots={false}>
  <div className="h-56 w-full bg-violet-500">Slide 1</div>
  <div className="h-56 w-full bg-orange-500">Slide 2</div>
</Carousel>`;

const PROPS = [
  { name: "children", type: "React.ReactNode[]", default: "—", description: "Array of slide contents." },
  { name: "autoPlay", type: "boolean", default: "false", description: "Automatically advances to the next slide." },
  { name: "autoPlayInterval", type: "number", default: "5000", description: "Milliseconds between automatic slide transitions." },
  { name: "showArrows", type: "boolean", default: "true", description: "Shows the previous/next arrow buttons." },
  { name: "showDots", type: "boolean", default: "true", description: "Shows the dot indicators for direct slide navigation." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the outer container (set height here)." },
];

export default function CarouselDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Carousel</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Carousel</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A responsive slide carousel with arrow navigation and dot indicators. Slides transition on a sliding track, with no fixed pixel widths so it adapts to any container.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Carousel }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <CarouselDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Autoplay, no dots</h2>
        <ComponentPreview code={AUTOPLAY_CODE}>
          <AutoPlayDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Arrow buttons have descriptive <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-label</code>s.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Dot indicators expose <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-current</code> for the active slide.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Arrows and dots are positioned with viewport-safe offsets so they never overflow on narrow screens.</li>
        </ul>
      </section>
    </div>
  );
}
