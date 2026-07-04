# AnimUI

A React component library built around one idea: animation shouldn't be an afterthought you bolt on later. Every component in here — buttons, cards, modals, data tables, whatever — comes with motion baked in from the start, using [Motion](https://motion.dev) under the hood.

It started as a personal collection of components I kept rebuilding across projects, and turned into a full library with 80+ pieces covering pretty much everything you'd need for a modern UI: form controls, overlays, layout primitives, data-heavy components, and a set of standalone animation/effect components for the flashier stuff.

**Live demo:** https://steal-shadow.vercel.app/

## What's in the repo

It's a small monorepo, managed with Turborepo + npm workspaces:

```
Steal-Shadow/
├── apps/docs/       Next.js site — the live demo and component playground
├── packages/ui/     @animui/ui, the actual component library
└── public/          logos, favicons, shared images
```

`packages/ui` is the part that gets published/consumed; `apps/docs` just exists to showcase it and give people something to copy-paste from.

## Why you might want this

- **80+ components**, from basic primitives up through data tables, kanban boards, calendars, and a rich text editor
- **Animations are part of the component**, not a wrapper you add afterward — powered by Motion
- **Tailwind-based styling**, so it's easy to theme or override instead of fighting a CSS-in-JS system
- **Written in TypeScript** end to end, with proper `.d.ts` output
- **Accessible markup** — keyboard nav and focus handling are treated as requirements, not nice-to-haves
- Ships as ESM and CJS via `tsup`, so it works in most setups without config gymnastics

## Component catalog

| Category | What's in it |
|---|---|
| Primitives | Button, Card, Input, Badge, Avatar, Chip, Combobox, Breadcrumb, OTPInput, Rating |
| Forms | Checkbox, Switch, RadioGroup, Select, Textarea, RangeSlider, SmartForm |
| Overlays | Modal, Drawer, Tooltip, Popover, ToastProvider |
| Feedback | Spinner, Skeleton, Progress, CircularProgress, Alert |
| Layout | Accordion, Tabs, Stepper, EmptyState, CommandPalette, PageTransition |
| Data | DataTable, KanbanBoard, Calendar, FileUploader, RichEditor, Timeline, Pagination |
| Animations | BlurText, GlitchText, MorphText, TypewriterText, SplitText, RevealText, CountUp, MagneticButton, FloatingElements, ScrollReveal, ParticleField, AnimatedIcon |
| Effects | GlassCard, LiquidGlass, ShimmerButton, SpotlightCard, AuroraBackground, NeonGlow, GradientBorder, BorderBeam, Meteors |
| Special | Dock, TiltCard, FlipCard, InfiniteMarquee, SwipeCards, NumberFlow, WaveText, TextScramble, MultiSelect, ContextMenu, GlowingOrb, PricingTable |
| AI | Chat, CodeBlock, StreamingText, PromptEditor, AgentStatus, ToolCallViewer |

You can see all of these live, with code you can copy, at [steal-shadow.vercel.app](https://steal-shadow.vercel.app/).

## Stack

React 19, TypeScript, Tailwind CSS, Motion for animation, Next.js for the docs site, Turborepo to tie the workspaces together, and tsup for bundling the library.

## Running it locally

You'll need Node 20+ and npm 11+.

```bash
git clone https://github.com/Pushparaj-2022/Steal-Shadow.git
cd Steal-Shadow
npm install
npm run dev
```

That spins up the docs app at `http://localhost:3000`.

Other useful scripts, all run from the root:

| Command | What it does |
|---|---|
| `npm run build` | Builds the library and the docs app (via Turborepo) |
| `npm run lint` | Lints everything |
| `npm run type-check` | Type-checks everything |
| `npm run clean` | Wipes build output |

## Using the library in your own project

```bash
npm install @animui/ui lucide-react
```

You'll need React 18+, Tailwind 3+, and `lucide-react` — that last one is a hard dependency, not optional.

Pull in the base styles somewhere near the top of your app:

```tsx
import "@animui/ui/styles";
```

Wrap your app in the `ThemeProvider`:

```tsx
import { ThemeProvider } from "@animui/ui";

export default function RootLayout({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
```

Then just import what you need:

```tsx
import { Button, Card, Badge } from "@animui/ui";

export default function Example() {
  return (
    <Card>
      <Badge color="green">New</Badge>
      <Button variant="primary">Get started</Button>
    </Card>
  );
}
```

One more thing — add the package to your Tailwind content paths, otherwise the utility classes used inside the components will get purged:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@animui/ui/dist/**/*.js",
  ],
};
```

More detail on individual components lives in [`packages/ui/README.md`](./packages/ui/README.md) and on the [docs site](https://steal-shadow.vercel.app/).

## Contributing

Happy to take PRs. The general flow:

1. Fork it, branch off `main`
2. `npm install` at the root
3. Make your change in `packages/ui` (the library) or `apps/docs` (demos/docs)
4. Make sure `npm run lint` and `npm run type-check` are clean
5. Open a PR with a short description of what and why

For anything bigger than a small fix, open an issue first so we're not working at cross purposes.

## License

MIT — see [LICENSE](./LICENSE).
