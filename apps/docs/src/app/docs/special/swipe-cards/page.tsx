"use client";

import { SwipeCards } from "@animui/ui";
import type { SwipeCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { SwipeCards } from "@stealshadow/ui";

const cards = [
  {
    id: 1,
    content: (
      <div className="h-full w-full rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white text-2xl font-black">
        Card 1
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="h-full w-full rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-2xl font-black">
        Card 2
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="h-full w-full rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white text-2xl font-black">
        Card 3
      </div>
    ),
  },
];

export default function Example() {
  return (
    <SwipeCards
      cards={cards}
      className="relative h-80 w-64"
      onSwipe={(card, dir) => console.log(card.id, dir)}
    />
  );
}`;

const PROPS = [
  { name: "cards", type: "SwipeCard[]", default: "—", description: "Array of cards to display." },
  { name: "onSwipe", type: "(card: SwipeCard, direction: \"left\" | \"right\") => void", default: "—", description: "Called immediately when a swipe threshold is crossed." },
  { name: "onEmpty", type: "() => void", default: "—", description: "Called after the last card leaves the stack." },
  { name: "threshold", type: "number", default: "100", description: "Pixel offset required to trigger a swipe." },
  { name: "visibleCount", type: "number", default: "3", description: "How many cards are visible in the stacked view." },
  { name: "className", type: "string", default: "—", description: "Set width and height of the card container here." },
  { name: "cardClassName", type: "string", default: "—", description: "Applied to each individual card element." },
];

const CARD_PROPS = [
  { name: "id", type: "string | number", default: "—", description: "Unique identifier for the card." },
  { name: "content", type: "ReactNode", default: "—", description: "The card's visual content. Should fill 100% width and height." },
];

const SWIPE_CARDS: SwipeCard[] = [
  {
    id: 1,
    content: (
      <div className="h-full w-full rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white text-2xl font-black">
        Card 1
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="h-full w-full rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-2xl font-black">
        Card 2
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="h-full w-full rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white text-2xl font-black">
        Card 3
      </div>
    ),
  },
];

export default function SwipeCardsDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">SwipeCards</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">SwipeCards</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Tinder-style draggable card stack. Drag past the threshold to swipe away — LIKE/NOPE indicators fade in as you drag. Cards underneath scale and offset to create a natural stack depth. Spring snap-back if threshold isn't reached.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ SwipeCards }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Stack</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center justify-center p-12 bg-neutral-100 rounded-2xl">
            <SwipeCards
              cards={SWIPE_CARDS}
              className="relative h-80 w-64"
              onSwipe={(card, dir) => console.log(card.id, dir)}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Swipe behavior</h2>
        <ul className="space-y-2 text-neutral-500">
          <li><strong className="text-neutral-700">Threshold not reached:</strong> Card springs back to center.</li>
          <li><strong className="text-neutral-700">Threshold reached:</strong> Card flies off-screen, <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">onSwipe</code> fires, card is removed from the stack 350ms later.</li>
          <li><strong className="text-neutral-700">Stack empty:</strong> Component returns null. Use <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">onEmpty</code> to show an empty state.</li>
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
