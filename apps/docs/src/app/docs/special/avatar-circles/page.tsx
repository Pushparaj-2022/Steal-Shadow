"use client";

import { AvatarCircles } from "@animui/ui";
import type { AvatarData } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_AVATARS: AvatarData[] = [
  { name: "Alice Johnson",  fallback: "AJ" },
  { name: "Bob Smith",      fallback: "BS" },
  { name: "Carol White",    fallback: "CW" },
  { name: "David Brown",    fallback: "DB" },
  { name: "Eva Martinez",   fallback: "EM" },
  { name: "Frank Lee",      fallback: "FL" },
];

const SIZE_AVATARS: AvatarData[] = [
  { name: "Alice Johnson", fallback: "AJ" },
  { name: "Bob Smith",     fallback: "BS" },
  { name: "Carol White",   fallback: "CW" },
  { name: "David Brown",   fallback: "DB" },
];

const IMG_AVATARS: AvatarData[] = [
  { src: "https://i.pravatar.cc/100?img=1",  name: "User 1" },
  { src: "https://i.pravatar.cc/100?img=2",  name: "User 2" },
  { src: "https://i.pravatar.cc/100?img=3",  name: "User 3" },
  { src: "https://i.pravatar.cc/100?img=4",  name: "User 4" },
  { name: "Eve Adams",    fallback: "EA" },
  { name: "Frank Doe",    fallback: "FD" },
  { name: "Grace Hall",   fallback: "GH" },
];

const BASIC_CODE = `import { AvatarCircles } from "@animui/ui";

const avatars = [
  { name: "Alice Johnson", fallback: "AJ" },
  { name: "Bob Smith",     fallback: "BS" },
  { name: "Carol White",   fallback: "CW" },
  { name: "David Brown",   fallback: "DB" },
  { name: "Eva Martinez",  fallback: "EM" },
  { name: "Frank Lee",     fallback: "FL" },
];

export default function Example() {
  return <AvatarCircles avatars={avatars} limit={4} />;
}`;

const SIZES_CODE = `<AvatarCircles avatars={avatars} size="sm" />
<AvatarCircles avatars={avatars} size="md" />
<AvatarCircles avatars={avatars} size="lg" />`;

const RING_CODE = `{/* Custom ring colour to match background */}
<div className="rounded-2xl bg-neutral-900 p-6">
  <AvatarCircles avatars={avatars} ringColor="#18181b" />
</div>`;

const PROPS = [
  { name: "avatars",    type: "AvatarData[]",         default: "—",       description: "Array of avatar objects." },
  { name: "limit",      type: "number",               default: "5",       description: "Max visible avatars; the rest collapse into +N." },
  { name: "size",       type: '"sm" | "md" | "lg"',  default: '"md"',    description: "Controls avatar diameter and overlap offset." },
  { name: "ringColor",  type: "string",               default: '"white"', description: "CSS color of the border ring between avatars." },
  { name: "className",  type: "string",               default: "—",       description: "Applied to the flex container." },
];

const AVATAR_DATA_PROPS = [
  { name: "src",      type: "string", default: "—", description: "Image URL. When provided the image is rendered." },
  { name: "name",     type: "string", default: "—", description: "Used as the tooltip title and fallback initial if no fallback given." },
  { name: "fallback", type: "string", default: "—", description: "1–2 character string shown when no src is provided." },
];

export default function AvatarCirclesDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">AvatarCircles</span>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">AvatarCircles</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Stacked circular avatars with unique per-avatar gradients, image support, fallback initials, and a +N overflow chip. Hover lifts each avatar for subtle depth.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ AvatarCircles }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <p className="text-sm text-neutral-500 mb-4">
          6 avatars with <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">limit=4</code> — the last two collapse into <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">+2</code>.
        </p>
        <ComponentPreview code={BASIC_CODE}>
          <AvatarCircles avatars={BASIC_AVATARS} limit={4} />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sizes</h2>
        <ComponentPreview code={SIZES_CODE}>
          <div className="flex flex-col gap-5 items-start">
            <AvatarCircles avatars={SIZE_AVATARS} size="sm" />
            <AvatarCircles avatars={SIZE_AVATARS} size="md" />
            <AvatarCircles avatars={SIZE_AVATARS} size="lg" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom ring colour</h2>
        <p className="text-sm text-neutral-500 mb-4">
          Match <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">ringColor</code> to your background for seamless stacking on any colour.
        </p>
        <ComponentPreview code={RING_CODE}>
          <div className="rounded-2xl bg-neutral-900 px-8 py-6 flex items-center gap-6 flex-wrap justify-center">
            <AvatarCircles avatars={SIZE_AVATARS} ringColor="#171717" />
            <span className="text-sm text-neutral-300">ringColor="#171717"</span>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">AvatarData props</h2>
        <PropsTable props={AVATAR_DATA_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
