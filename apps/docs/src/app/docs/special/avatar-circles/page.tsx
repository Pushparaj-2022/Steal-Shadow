"use client";

import { AvatarCircles, AvatarData } from "@animui/ui";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const basicAvatars: AvatarData[] = [
  { name: "Alice Johnson", fallback: "AJ" },
  { name: "Bob Smith", fallback: "BS" },
  { name: "Carol White", fallback: "CW" },
  { name: "David Brown", fallback: "DB" },
  { name: "Eva Martinez", fallback: "EM" },
  { name: "Frank Lee", fallback: "FL" },
];

const basicCode = `import { AvatarCircles } from "@animui/ui";
import type { AvatarData } from "@animui/ui";

const avatars: AvatarData[] = [
  { name: "Alice Johnson", fallback: "AJ" },
  { name: "Bob Smith", fallback: "BS" },
  { name: "Carol White", fallback: "CW" },
  { name: "David Brown", fallback: "DB" },
  { name: "Eva Martinez", fallback: "EM" },
  { name: "Frank Lee", fallback: "FL" },
];

export default function Example() {
  return <AvatarCircles avatars={avatars} />;
}`;

const sizesCode = `import { AvatarCircles } from "@animui/ui";
import type { AvatarData } from "@animui/ui";

const avatars: AvatarData[] = [
  { name: "Alice Johnson", fallback: "AJ" },
  { name: "Bob Smith", fallback: "BS" },
  { name: "Carol White", fallback: "CW" },
];

export default function Example() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-muted-foreground">sm</span>
        <AvatarCircles avatars={avatars} size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-muted-foreground">md</span>
        <AvatarCircles avatars={avatars} size="md" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-muted-foreground">lg</span>
        <AvatarCircles avatars={avatars} size="lg" />
      </div>
    </div>
  );
}`;

const sizeAvatars: AvatarData[] = [
  { name: "Alice Johnson", fallback: "AJ" },
  { name: "Bob Smith", fallback: "BS" },
  { name: "Carol White", fallback: "CW" },
];

const props = [
  {
    name: "avatars",
    type: "AvatarData[]",
    default: "—",
    description: "List of avatar data objects.",
  },
  {
    name: "max",
    type: "number",
    default: "5",
    description: "Maximum number of avatars shown before a +N overflow chip.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Avatar size variant.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes.",
  },
];

export default function AvatarCirclesPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Special</span>
        <span>/</span>
        <span className="text-foreground font-medium">AvatarCircles</span>
      </nav>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">AvatarCircles</h1>
        <p className="text-lg text-muted-foreground">
          Stacked circular avatars with automatic fallback initials and a +N
          overflow badge when the list exceeds the configured maximum.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg border bg-muted px-5 py-4 text-sm overflow-x-auto">
          <code>{`import { AvatarCircles } from "@animui/ui";
import type { AvatarData } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic example */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          Pass an array of <code>AvatarData</code> objects. When no{" "}
          <code>src</code> is provided the component renders the{" "}
          <code>fallback</code> initials instead of an image. Avatars beyond the{" "}
          <code>max</code> limit (default 5) collapse into a +N chip.
        </p>
        <ComponentPreview
          code={basicCode}
          preview={<AvatarCircles avatars={basicAvatars} />}
        />
      </div>

      {/* Sizes */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <p className="text-sm text-muted-foreground">
          Three size variants — <code>sm</code>, <code>md</code>, and{" "}
          <code>lg</code> — scale both the avatar diameter and the overlap
          offset together.
        </p>
        <ComponentPreview
          code={sizesCode}
          preview={
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="w-8 text-sm text-muted-foreground">sm</span>
                <AvatarCircles avatars={sizeAvatars} size="sm" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 text-sm text-muted-foreground">md</span>
                <AvatarCircles avatars={sizeAvatars} size="md" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 text-sm text-muted-foreground">lg</span>
                <AvatarCircles avatars={sizeAvatars} size="lg" />
              </div>
            </div>
          }
        />
      </div>

      {/* Props table */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
