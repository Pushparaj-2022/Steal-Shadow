"use client";

import { useState } from "react";
import { SwipeCards } from "@animui/ui";
import type { SwipeCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { SwipeCards } from "@animui/ui";
import { useState } from "react";

const INITIAL_CARDS = [
  { id: 1, content: <div className="h-full w-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white text-3xl font-black rounded-2xl">Card 1</div> },
  { id: 2, content: <div className="h-full w-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-3xl font-black rounded-2xl">Card 2</div> },
  { id: 3, content: <div className="h-full w-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white text-3xl font-black rounded-2xl">Card 3</div> },
];

export default function Example() {
  const [key, setKey] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4">
      <SwipeCards
        key={key}
        cards={INITIAL_CARDS}
        className="relative h-80 w-64"
        onSwipe={(card, dir) => console.log(card.id, dir)}
        emptyContent={
          <div className="h-full w-full flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-zinc-300 text-zinc-400">
            <span className="text-4xl">🎉</span>
            <span className="text-sm font-medium">All swiped!</span>
          </div>
        }
      />
      <button onClick={() => setKey(k => k + 1)} className="text-sm text-violet-600 underline">
        Reset
      </button>
    </div>
  );
}`;

const INITIAL_CARDS: SwipeCard[] = [
  {
    id: 1,
    content: (
      <div className="h-full w-full bg-gradient-to-br from-violet-500 to-blue-600 flex flex-col items-center justify-center gap-2 rounded-2xl p-6">
        <span className="text-5xl">🏄</span>
        <span className="text-white text-2xl font-black">Surf</span>
        <span className="text-blue-100 text-sm">Drag me left or right</span>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-400 to-red-500 flex flex-col items-center justify-center gap-2 rounded-2xl p-6">
        <span className="text-5xl">🚀</span>
        <span className="text-white text-2xl font-black">Launch</span>
        <span className="text-orange-100 text-sm">Swipe past 100px</span>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="h-full w-full bg-gradient-to-br from-emerald-400 to-teal-600 flex flex-col items-center justify-center gap-2 rounded-2xl p-6">
        <span className="text-5xl">🌿</span>
        <span className="text-white text-2xl font-black">Grow</span>
        <span className="text-emerald-100 text-sm">Release to snap back</span>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="h-full w-full bg-gradient-to-br from-pink-400 to-fuchsia-600 flex flex-col items-center justify-center gap-2 rounded-2xl p-6">
        <span className="text-5xl">🎨</span>
        <span className="text-white text-2xl font-black">Create</span>
        <span className="text-pink-100 text-sm">LIKE / NOPE on drag</span>
      </div>
    ),
  },
];

const PROPS = [
  { name: "cards", type: "SwipeCard[]", default: "—", description: "Array of cards to display. Each needs a unique id." },
  { name: "onSwipe", type: "(card: SwipeCard, direction: \"left\" | \"right\") => void", default: "—", description: "Fires immediately when swipe threshold is crossed." },
  { name: "onEmpty", type: "() => void", default: "—", description: "Called after the last card is swiped away." },
  { name: "emptyContent", type: "ReactNode", default: "null", description: "Shown in place of the stack when all cards are swiped." },
  { name: "threshold", type: "number", default: "100", description: "Horizontal pixel offset required to trigger a swipe." },
  { name: "visibleCount", type: "number", default: "3", description: "Number of cards visible in the stacked view." },
  { name: "className", type: "string", default: "—", description: "Set width and height of the card container here (required)." },
  { name: "cardClassName", type: "string", default: "—", description: "Applied to each individual card element." },
];

const CARD_PROPS = [
  { name: "id", type: "string | number", default: "—", description: "Unique identifier used as the React key." },
  { name: "content", type: "ReactNode", default: "—", description: "Card contents. Use h-full w-full to fill the container." },
];

export default function SwipeCardsDocsPage() {
  const [stackKey, setStackKey] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (card: SwipeCard, dir: string) =>
    setLog((prev) => [`Card ${card.id} → ${dir}`, ...prev].slice(0, 4));

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">SwipeCards</span>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">SwipeCards</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Tinder-style draggable card stack. Drag horizontally past the threshold to swipe — LIKE/NOPE labels appear as you drag. Cards below scale and offset to create natural depth. Release before the threshold to spring back.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ SwipeCards }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Demo</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-8 bg-neutral-100 rounded-2xl w-full">
            <SwipeCards
              key={stackKey}
              cards={INITIAL_CARDS}
              className="relative h-80 w-60 shrink-0"
              threshold={100}
              onSwipe={(card, dir) => addLog(card, dir)}
              emptyContent={
                <div className="h-full w-full flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-neutral-300 text-neutral-400">
                  <span className="text-4xl">🎉</span>
                  <p className="text-sm font-medium">All swiped!</p>
                  <button
                    onClick={() => setStackKey((k) => k + 1)}
                    className="mt-1 rounded-lg bg-violet-600 px-4 py-1.5 text-xs font-bold text-white hover:opacity-90"
                  >
                    Reset
                  </button>
                </div>
              }
            />
            <div className="flex flex-col gap-2 min-w-[140px]">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Swipe log</p>
              {log.length === 0 && (
                <p className="text-sm text-neutral-400 italic">drag a card…</p>
              )}
              {log.map((entry, i) => (
                <p key={i} className="text-sm font-mono text-neutral-700">{entry}</p>
              ))}
              <button
                onClick={() => { setStackKey((k) => k + 1); setLog([]); }}
                className="mt-2 self-start rounded-lg border border-neutral-300 px-3 py-1 text-xs font-semibold text-neutral-600 hover:bg-neutral-100"
              >
                Reset stack
              </button>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Swipe behavior</h2>
        <ul className="space-y-2 text-neutral-500 list-disc list-inside">
          <li><strong className="text-neutral-700">Below threshold:</strong> Card springs back to center with a smooth bounce.</li>
          <li><strong className="text-neutral-700">Past threshold:</strong> Card flies off screen, <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">onSwipe</code> fires immediately, card is removed 380ms later.</li>
          <li><strong className="text-neutral-700">Stack empty:</strong> <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">emptyContent</code> is shown; <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">onEmpty</code> fires. Remount via key change to reset.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">SwipeCard props</h2>
        <PropsTable props={CARD_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">SwipeCards props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
