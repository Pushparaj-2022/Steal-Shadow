"use client";

import { AnimatedIcon } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Star, Bell, Zap, Heart, Rocket, RefreshCw, AlertCircle, Sparkles } from "lucide-react";

const BASIC_CODE = `import { AnimatedIcon } from "@stealshadow/ui";
import { Star } from "lucide-react";

export default function Example() {
  return (
    <AnimatedIcon preset="pulse" color="#f59e0b" size={32}>
      <Star />
    </AnimatedIcon>
  );
}`;

const PRESETS_CODE = `<AnimatedIcon preset="spin"   color="#6366f1"><RefreshCw /></AnimatedIcon>
<AnimatedIcon preset="pulse"  color="#f59e0b"><Star /></AnimatedIcon>
<AnimatedIcon preset="bounce" color="#10b981"><Bell /></AnimatedIcon>
<AnimatedIcon preset="shake"  color="#ef4444"><AlertCircle /></AnimatedIcon>
<AnimatedIcon preset="wiggle" color="#8b5cf6"><Sparkles /></AnimatedIcon>
<AnimatedIcon preset="float"  color="#3b82f6"><Rocket /></AnimatedIcon>
<AnimatedIcon preset="ping"   color="#ec4899"><Heart /></AnimatedIcon>`;

const HOVER_CODE = `<AnimatedIcon preset="pop" trigger="hover" color="#f59e0b" size={40}>
  <Star />
</AnimatedIcon>`;

const PROPS = [
  { name: "preset", type: '"spin" | "pulse" | "bounce" | "shake" | "pop" | "wiggle" | "ping" | "float"', default: '"pulse"', description: "Animation preset to apply." },
  { name: "color", type: "string", default: "—", description: "CSS color for the icon." },
  { name: "size", type: "number | string", default: "—", description: "Size of the icon container (px or CSS value)." },
  { name: "trigger", type: '"always" | "hover" | "click"', default: '"always"', description: "When to run the animation." },
  { name: "continuous", type: "boolean", default: "true", description: "Loop the animation continuously." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

const PRESETS = [
  { preset: "spin",   icon: <RefreshCw className="h-6 w-6" />, color: "#6366f1", label: "spin" },
  { preset: "pulse",  icon: <Star className="h-6 w-6" />,      color: "#f59e0b", label: "pulse" },
  { preset: "bounce", icon: <Bell className="h-6 w-6" />,      color: "#10b981", label: "bounce" },
  { preset: "shake",  icon: <AlertCircle className="h-6 w-6" />, color: "#ef4444", label: "shake" },
  { preset: "wiggle", icon: <Sparkles className="h-6 w-6" />,  color: "#8b5cf6", label: "wiggle" },
  { preset: "float",  icon: <Rocket className="h-6 w-6" />,    color: "#3b82f6", label: "float" },
  { preset: "ping",   icon: <Heart className="h-6 w-6" />,     color: "#ec4899", label: "ping" },
  { preset: "pop",    icon: <Zap className="h-6 w-6" />,       color: "#f97316", label: "pop" },
];

export default function AnimatedIconDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">AnimatedIcon</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">AnimatedIcon</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Wrap any Lucide (or other) icon with a Motion-powered animation preset. 8 presets, hover trigger mode, and color control — one wrapper to animate them all.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ AnimatedIcon }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center justify-center py-4">
            <AnimatedIcon preset="pulse" color="#f59e0b" size={32}>
              <Star />
            </AnimatedIcon>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">All presets</h2>
        <ComponentPreview code={PRESETS_CODE}>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {PRESETS.map(({ preset, icon, color, label }) => (
              <div key={preset} className="flex flex-col items-center gap-2">
                <AnimatedIcon preset={preset as any} color={color} size={24}>
                  {icon}
                </AnimatedIcon>
                <span className="text-xs font-mono text-neutral-400">{label}</span>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Hover trigger</h2>
        <p className="text-neutral-500 mb-4 text-sm">Set <code className="font-mono text-xs bg-neutral-100 px-1 rounded">trigger="hover"</code> to only animate on mouse-over.</p>
        <ComponentPreview code={HOVER_CODE}>
          <div className="flex items-center justify-center py-4">
            <AnimatedIcon preset="pop" trigger="hover" color="#f59e0b" size={40}>
              <Star />
            </AnimatedIcon>
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
