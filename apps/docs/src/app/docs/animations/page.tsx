import Link from "next/link";
import { ChevronRight, Magnet, Type, Sparkles, ChevronsDown } from "lucide-react";

const ANIMATION_COMPONENTS = [
  {
    title: "Magnetic Button",
    desc: "A button that physically attracts to the cursor on hover — uses spring physics for a satisfying magnetic pull effect. Perfect for CTAs.",
    href: "/docs/animations/magnetic-button",
    Icon: Magnet,
    color: "text-blue-500",
    bg: "bg-blue-50",
    tag: "Interactive",
  },
  {
    title: "Typewriter",
    desc: "Animates text character by character, with configurable speed, delay, cursor blink, and support for cycling through multiple strings.",
    href: "/docs/animations/typewriter",
    Icon: Type,
    color: "text-purple-500",
    bg: "bg-purple-50",
    tag: "Text",
  },
  {
    title: "Particle Field",
    desc: "A canvas-based particle system that responds to mouse movement. Fully configurable particle count, color, speed, and connection lines.",
    href: "/docs/animations/particle-field",
    Icon: Sparkles,
    color: "text-amber-500",
    bg: "bg-amber-50",
    tag: "Background",
  },
  {
    title: "Scroll Reveal",
    desc: "Wraps any element and animates it into view as the user scrolls. Supports fade, slide, and scale effects with configurable thresholds.",
    href: "/docs/animations/scroll-reveal",
    Icon: ChevronsDown,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    tag: "Scroll",
  },
];

export default function AnimationsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Animations</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Motion-first animation components powered by Motion v12 spring physics. These aren't
          cheap CSS keyframe transitions — they're real spring simulations that feel natural and
          respond correctly to interruption.
        </p>
      </div>

      {/* Info block */}
      <div className="rounded-xl bg-amber-50 border border-amber-100 px-5 py-4">
        <p className="text-sm font-semibold text-amber-900 mb-1">Peer dependency required</p>
        <p className="text-sm text-amber-700">
          Animation components depend on <code className="font-mono text-xs bg-amber-100 px-1 rounded">motion</code> v12+.
          Install it alongside the package:{" "}
          <code className="font-mono text-xs bg-amber-100 px-1 rounded">npm install @stealshadow/ui motion</code>
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {ANIMATION_COMPONENTS.map((comp) => (
          <Link
            key={comp.title}
            href={comp.href}
            className="group rounded-xl border border-neutral-200 p-6 hover:border-blue-200 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className={`h-12 w-12 rounded-xl ${comp.bg} flex items-center justify-center shrink-0`}>
                <comp.Icon className={`h-6 w-6 ${comp.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-bold text-neutral-900 group-hover:text-blue-700 transition-colors">
                    {comp.title}
                  </h2>
                  <span className="text-xs font-medium text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                    {comp.tag}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{comp.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-blue-500">
                  View docs <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Principle callout */}
      <div className="rounded-xl border border-neutral-200 p-6">
        <h3 className="font-bold text-neutral-900 mb-3">Why spring physics?</h3>
        <p className="text-sm text-neutral-600 leading-relaxed mb-3">
          CSS <code className="font-mono text-xs bg-neutral-100 px-1 rounded">transition</code> and{" "}
          <code className="font-mono text-xs bg-neutral-100 px-1 rounded">@keyframes</code> animations are duration-based —
          they play for a fixed time regardless of context. Spring physics simulations are
          force-based: the animation feels physically correct, responds naturally to interruption,
          and scales with the distance of movement.
        </p>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Motion v12 (the package formerly known as Framer Motion) provides the spring engine.
          Steal Shadow configures the spring stiffness, damping, and mass for each component to
          feel premium without being slow.
        </p>
      </div>
    </div>
  );
}
