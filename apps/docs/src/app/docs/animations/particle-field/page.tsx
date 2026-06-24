import { PropsTable } from "@/components/docs/PropsTable";

const PROPS = [
  { name: "count", type: "number", default: "80", description: "Number of particles to render." },
  { name: "color", type: "string", default: '"#3B82F6"', description: "Particle and connection line color." },
  { name: "speed", type: "number", default: "0.5", description: "Base movement speed of particles. Higher values are more energetic." },
  { name: "connectionDistance", type: "number", default: "120", description: "Maximum pixel distance between particles before a connection line is drawn." },
  { name: "mouseRadius", type: "number", default: "150", description: "Radius around the cursor within which particles are repelled." },
  { name: "interactive", type: "boolean", default: "true", description: "Whether particles react to mouse movement." },
  { name: "className", type: "string", default: "—", description: "Classes on the canvas wrapper — use to set width and height." },
];

const BASIC_CODE = `import { ParticleField } from "@stealshadow/ui";

export default function Example() {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-neutral-950">
      <ParticleField
        count={80}
        color="#3B82F6"
        speed={0.5}
        connectionDistance={120}
        mouseRadius={150}
        interactive
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h2 className="text-4xl font-black text-white">Your headline here</h2>
      </div>
    </div>
  );
}`;

export default function ParticleFieldPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Animations</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Particle Field</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">ParticleField</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A canvas-based particle system that draws connection lines between nearby particles
          and responds to mouse movement. Perfect for hero section backgrounds.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ ParticleField }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Usage</h2>
        <p className="text-neutral-500 mb-4">
          Place ParticleField absolutely inside a relative container. Stack your content above it
          with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">relative z-10</code>.
        </p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="flex items-center px-4 py-2 border-b border-neutral-200 bg-neutral-50">
            <span className="text-xs font-mono text-neutral-500">example.tsx</span>
          </div>
          <pre className="bg-neutral-950 p-5 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{BASIC_CODE}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Preview (static)</h2>
        <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center">
          {/* Static dots to represent the particle field */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-blue-500 opacity-70"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
          <p className="relative z-10 text-white/60 text-sm">Live canvas renders in the browser</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Performance</h2>
        <p className="text-sm text-neutral-600 leading-relaxed">
          ParticleField uses a single <code className="font-mono text-xs bg-neutral-100 px-1 rounded">&lt;canvas&gt;</code>{" "}
          element with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">requestAnimationFrame</code> for
          smooth 60fps rendering. Particle count above 150 may impact performance on low-end devices —
          the default of 80 is a good balance. The component automatically pauses when the tab is hidden.
        </p>
      </section>
    </div>
  );
}
