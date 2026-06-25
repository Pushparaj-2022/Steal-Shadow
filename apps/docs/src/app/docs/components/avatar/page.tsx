"use client";

import { Avatar, AvatarGroup } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Avatar, AvatarGroup } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-6">
      {/* Sizes */}
      <div className="flex items-center gap-3">
        <Avatar size="sm" fallback="SM" />
        <Avatar size="md" fallback="MD" />
        <Avatar size="lg" fallback="LG" />
        <Avatar size="xl" fallback="XL" />
      </div>

      {/* With status */}
      <div className="flex items-center gap-3">
        <Avatar fallback="ON" status="online" />
        <Avatar fallback="AW" status="away" />
        <Avatar fallback="BS" status="busy" />
        <Avatar fallback="OF" status="offline" />
      </div>

      {/* Group */}
      <AvatarGroup
        avatars={["A", "B", "C", "D", "E", "F"].map((l) => ({ fallback: l }))}
        max={4}
      />
    </div>
  );
}`;

const PROPS = [
  { name: "src", type: "string", default: "—", description: "Image URL. If omitted or fails to load, falls back to the fallback text." },
  { name: "fallback", type: "string", default: "—", description: "1–2 character text rendered when no image is available." },
  { name: "alt", type: "string", default: "—", description: "Alt text for the avatar image (used for screen readers)." },
  { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Diameter of the avatar." },
  { name: "status", type: '"online" | "away" | "busy" | "offline"', default: "—", description: "Shows a colored dot indicator in the bottom-right corner." },
  { name: "className", type: "string", default: "—", description: "Additional Tailwind classes on the avatar element." },
];


export default function AvatarDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Avatar</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Avatar</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          User avatar with image, initials fallback, multiple sizes, presence indicators,
          and AvatarGroup for stacking with overflow count.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Avatar, AvatarGroup }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sizes, presence & groups</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Avatar size="sm" fallback="SM" />
              <Avatar size="md" fallback="MD" />
              <Avatar size="lg" fallback="LG" />
              <Avatar size="xl" fallback="XL" />
            </div>
            <div className="flex items-center gap-3">
              <Avatar fallback="ON" status="online" />
              <Avatar fallback="AW" status="away" />
              <Avatar fallback="BS" status="busy" />
              <Avatar fallback="OF" status="offline" />
            </div>
            <AvatarGroup
              avatars={["A", "B", "C", "D", "E", "F"].map((l) => ({ fallback: l }))}
              max={4}
            />
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
