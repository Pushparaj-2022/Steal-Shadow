# @animui/ui

Modern animated UI component library — motion-first, Tailwind-powered, zero-compromise.

80+ production-ready React components with smooth animations powered by Motion (Framer Motion), full TypeScript support, and accessible markup out of the box.

## Installation

```bash
npm install @animui/ui lucide-react
```

> **Requires:** React 18+, Tailwind CSS 3+, lucide-react 1+

## Setup

### 1. Add CSS tokens (optional but recommended)

```tsx
// app/layout.tsx or _app.tsx
import "@animui/ui/styles";
```

### 2. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from "@animui/ui";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```

### 3. Import and use components

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

## Components

### Primitives
`Button` · `Card` · `Input` · `Badge` · `Avatar` · `Chip` · `Combobox` · `Breadcrumb` · `OTPInput` · `Rating`

### Forms
`Checkbox` · `Switch` · `RadioGroup` · `Select` · `Textarea` · `RangeSlider` · `SmartForm`

### Overlays
`Modal` · `Drawer` · `Tooltip` · `Popover` · `ToastProvider`

### Feedback
`Spinner` · `Skeleton` · `Progress` · `CircularProgress` · `Alert`

### Layout
`Accordion` · `Tabs` · `Stepper` · `EmptyState` · `CommandPalette` · `PageTransition`

### Data
`DataTable` · `KanbanBoard` · `Calendar` · `FileUploader` · `RichEditor` · `Timeline` · `Pagination`

### Animations
`BlurText` · `GlitchText` · `MorphText` · `TypewriterText` · `SplitText` · `RevealText` · `CountUp` · `MagneticButton` · `FloatingElements` · `ScrollReveal` · `ParticleField` · `AnimatedIcon`

### Effects
`GlassCard` · `LiquidGlass` · `ShimmerButton` · `SpotlightCard` · `AuroraBackground` · `NeonGlow` · `GradientBorder` · `BorderBeam` · `Meteors`

### Special
`Dock` · `TiltCard` · `FlipCard` · `InfiniteMarquee` · `SwipeCards` · `NumberFlow` · `WaveText` · `TextScramble` · `MultiSelect` · `ContextMenu` · `GlowingOrb` · `PricingTable`

### AI
`Chat` · `CodeBlock` · `StreamingText` · `PromptEditor` · `AgentStatus` · `ToolCallViewer`

## Tailwind CSS

Components use Tailwind utility classes. Add the package to your `tailwind.config.js` content paths:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@animui/ui/dist/**/*.js",  // ← add this
  ],
};
```

## License

MIT
