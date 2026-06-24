"use client";

import { Avatar, AvatarGroup } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Avatar, AvatarGroup } from "@stealshadow/ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-6">
      {/* Sizes */}
      <div className="flex items-center gap-3">
        <Avatar size="sm" initials="SM" />
        <Avatar size="md" initials="MD" />
        <Avatar size="lg" initials="LG" />
        <Avatar size="xl" initials="XL" />
      </div>

      {/* With presence */}
      <div className="flex items-center gap-3">
        <Avatar initials="ON" presence="online" />
        <Avatar initials="AW" presence="away" />
        <Avatar initials="BS" presence="busy" />
        <Avatar initials="OF" presence="offline" />
      </div>

      {/* Group */}
      <AvatarGroup max={4}>
        {["A", "B", "C", "D", "E", "F"].map((l) => (
          <Avatar key={l} initials={l} />
        ))}
      </AvatarGroup>
    </div>
  );
}`;

const PROPS = [
  { name: "src", type: "string", default: "—", description: "Image URL. If omitted or fails to load, falls back to initials." },
  { name: "initials", type: "string", default: "—", description: "1–2 character fallback text rendered when no image is available." },
  { name: "alt", type: "string", default: "—", description: "Alt text for the avatar image (used for screen readers)." },
  { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Diameter of the avatar." },
  { name: "presence", type: '"online" | "away" | "busy" | "offline"', default: "—", description: "Shows a colored dot indicator in the bottom-right corner." },
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
          import {"{ Avatar, AvatarGroup }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sizes, presence & groups</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Avatar size="sm" initials="SM" />
              <Avatar size="md" initials="MD" />
              <Avatar size="lg" initials="LG" />
              <Avatar size="xl" initials="XL" />
            </div>
            <div className="flex items-center gap-3">
              <Avatar initials="ON" presence="online" />
              <Avatar initials="AW" presence="away" />
              <Avatar initials="BS" presence="busy" />
              <Avatar initials="OF" presence="offline" />
            </div>
            <AvatarGroup max={4}>
              {["A", "B", "C", "D", "E", "F"].map((l) => (
                <Avatar key={l} initials={l} />
              ))}
            </AvatarGroup>
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
