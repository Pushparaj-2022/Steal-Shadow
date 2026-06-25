"use client";

import { Skeleton } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Skeleton } from "@animui/ui";

export default function Example() {
  return <Skeleton className="h-4 w-48" />;
}`;

const CARD_CODE = `import { Skeleton } from "@animui/ui";

export default function CardSkeleton() {
  return (
    <div className="rounded-xl border border-neutral-100 p-4 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-4/5" />
      <Skeleton className="h-3 w-3/5" />
    </div>
  );
}`;

const TABLE_CODE = `import { Skeleton } from "@animui/ui";

export default function TableSkeleton() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
      ))}
    </div>
  );
}`;

const CONDITIONAL_CODE = `import { Skeleton } from "@animui/ui";

export default function UserCard({ user, loading }) {
  if (loading) {
    return (
      <div className="p-4 space-y-2">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>
    );
  }
  return (
    <div className="p-4">
      <img src={user.avatar} className="h-10 w-10 rounded-full" />
      <p className="font-semibold">{user.name}</p>
    </div>
  );
}`;

const PROPS = [
  { name: "variant", type: '"rect" | "line" | "circle" | "card"', default: '"rect"', description: "Preset shape variant. rect is a plain block; line renders multiple text lines; circle is round; card renders a full card skeleton." },
  { name: "width", type: "string | number", default: "—", description: "Width of the skeleton element (used with rect and circle variants)." },
  { name: "height", type: "string | number", default: "—", description: "Height of the skeleton element (used with rect and circle variants)." },
  { name: "lines", type: "number", default: "3", description: "Number of text lines rendered when using the line variant." },
  { name: "className", type: "string", default: "—", description: "Additional classes for custom sizing and shaping." },
];

export default function SkeletonDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Feedback</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Skeleton</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Skeleton</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animated placeholder loaders that match the shape of your content. Show while data is fetching to prevent layout shift and reduce perceived load time.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Skeleton }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <Skeleton className="h-4 w-48" />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Card skeleton</h2>
        <p className="text-neutral-500 mb-4 text-sm">Compose Skeleton elements to match your content&apos;s layout exactly.</p>
        <ComponentPreview code={CARD_CODE}>
          <div className="rounded-xl border border-neutral-100 p-4 space-y-4 w-full max-w-sm">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full shrink-0" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-3 w-3/5" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Table rows</h2>
        <ComponentPreview code={TABLE_CODE}>
          <div className="space-y-2 w-full max-w-sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-3 items-center">
                <Skeleton className="h-8 flex-1" />
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-16" />
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Conditional loading</h2>
        <p className="text-neutral-500 mb-4 text-sm">Swap between the skeleton and real content based on your loading state.</p>
        <ComponentPreview code={CONDITIONAL_CODE}>
          <div className="flex gap-8 items-start">
            <div>
              <p className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">Loading</p>
              <div className="p-4 space-y-2 rounded-xl border border-neutral-100">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wide">Loaded</p>
              <div className="p-4 space-y-2 rounded-xl border border-neutral-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white text-sm font-bold">JD</div>
                <p className="text-sm font-semibold text-neutral-900">Jane Doe</p>
              </div>
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
