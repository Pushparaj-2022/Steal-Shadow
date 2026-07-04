"use client";

import { AspectRatio } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { AspectRatio } from "@animui/ui";

export default function Example() {
  return (
    <AspectRatio ratio={16 / 9} className="rounded-xl">
      <img
        src="/landscape.jpg"
        alt="A scenic landscape"
        className="h-full w-full object-cover"
      />
    </AspectRatio>
  );
}`;

const SQUARE_CODE = `<AspectRatio ratio={1} className="rounded-xl">
  <img src="/avatar.jpg" alt="Avatar" className="h-full w-full object-cover" />
</AspectRatio>`;

const EMBED_CODE = `<AspectRatio ratio={16 / 9} className="rounded-xl bg-neutral-900">
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    className="h-full w-full"
    allowFullScreen
  />
</AspectRatio>`;

const PROPS = [
  { name: "ratio", type: "number", default: "16 / 9", description: "Width-to-height ratio to maintain, e.g. 16 / 9, 4 / 3, or 1 for a square." },
  { name: "children", type: "ReactNode", default: "—", description: "Content to fill the ratio-constrained box, e.g. an image, video, or embed." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the outer container." },
];

export default function AspectRatioDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Layout</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Aspect Ratio</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Aspect Ratio</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Constrains its content to a fixed width-to-height ratio, staying responsive at any container width. Useful for images, video embeds, and cards.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ AspectRatio }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic (16 / 9)</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="w-full max-w-md">
            <AspectRatio ratio={16 / 9} className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
              <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white">
                16 / 9
              </div>
            </AspectRatio>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Square (1 / 1)</h2>
        <ComponentPreview code={SQUARE_CODE}>
          <div className="w-full max-w-xs">
            <AspectRatio ratio={1} className="rounded-xl bg-neutral-900">
              <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white">
                1 / 1
              </div>
            </AspectRatio>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Video embed</h2>
        <ComponentPreview code={EMBED_CODE}>
          <div className="w-full max-w-md">
            <AspectRatio ratio={16 / 9} className="rounded-xl bg-neutral-900">
              <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
                iframe / video content
              </div>
            </AspectRatio>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Purely a layout primitive; accessibility depends on the content passed as children (e.g. provide <code className="font-mono text-xs bg-neutral-100 px-1 rounded">alt</code> text on images).</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Uses the native CSS <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aspect-ratio</code> property, so it resizes fluidly with its container without JavaScript.</li>
        </ul>
      </section>
    </div>
  );
}
