 <div align="center">

### Build beautiful interfaces faster with modern React components.
<p align="center">
<img src="https://steal-shadow.vercel.app/_next/image?url=%2Flogo.png&w=1920&q=75"/ width=150px;>
</p>

<p>
A collection of beautifully designed, animated, accessible and production-ready React components built for modern web applications.
</p>

<p>

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Open_Source-MIT-success?style=for-the-badge"/>
 
</p>

<p>

<a href="https://steal-shadow.vercel.app">
<img src="https://img.shields.io/badge/🌐_Website-Live-blue?style=for-the-badge"/>
</a>

</p>

</div>

---

 



---

# 📖 About

Steal Shadow UI is a modern open-source React component library designed to help developers build beautiful interfaces without reinventing the wheel.

Whether you're creating dashboards, landing pages, SaaS products, AI tools, portfolios, or enterprise applications, the library provides reusable components that are easy to customize and production-ready.

Designed with simplicity, accessibility, animation, and performance in mind.

# 🚀 Installation

Install Steal Shadow and its required peer dependency:

```bash
npm install @stealshadow/ui  
```

### Requirements

- React 18+
- Tailwind CSS 3+
- lucide-react 1+

---

# ⚡ Quick Start

## 1. Import the Styles

Import the default stylesheet once in your application.

```tsx
// app/layout.tsx or pages/_app.tsx
import "@stealshadow/ui/styles";
```

---

## 2. Wrap Your Application

Wrap your application with the `ThemeProvider`.

```tsx
import { ThemeProvider } from "@stealshadow/ui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```

---

## 3. Start Using Components

```tsx
import { Badge, Button, Card } from "@stealshadow/ui";

export default function Example() {
  return (
    <Card>
      <Badge color="green">New</Badge>

      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  );
}
```

---

# 📦 Components

## 🧩 Primitives

- Button
- Card
- Input
- Badge
- Avatar
- Chip
- Combobox
- Breadcrumb
- OTPInput
- Rating

---

## 📝 Forms

- Checkbox
- Switch
- RadioGroup
- Select
- Textarea
- RangeSlider
- SmartForm

---

## 🎭 Overlays

- Modal
- Drawer
- Tooltip
- Popover
- ToastProvider

---

## 💬 Feedback

- Spinner
- Skeleton
- Progress
- CircularProgress
- Alert

---

## 📐 Layout

- Accordion
- Tabs
- Stepper
- EmptyState
- CommandPalette
- PageTransition

---

## 📊 Data Display

- DataTable
- KanbanBoard
- Calendar
- FileUploader
- RichEditor
- Timeline
- Pagination

---

## ✨ Animated Components

- BlurText
- GlitchText
- MorphText
- TypewriterText
- SplitText
- RevealText
- CountUp
- MagneticButton
- FloatingElements
- ScrollReveal
- ParticleField
- AnimatedIcon

---

## 🌈 Visual Effects

- GlassCard
- LiquidGlass
- ShimmerButton
- SpotlightCard
- AuroraBackground
- NeonGlow
- GradientBorder
- BorderBeam
- Meteors

---

## 🎨 Advanced Components

- Dock
- TiltCard
- FlipCard
- InfiniteMarquee
- SwipeCards
- NumberFlow
- WaveText
- TextScramble
- MultiSelect
- ContextMenu
- GlowingOrb
- PricingTable

---

## 🤖 AI Components

- Chat
- CodeBlock
- StreamingText
- PromptEditor
- AgentStatus
- ToolCallViewer

---

# 🎨 Tailwind CSS Configuration

Add the compiled package to your Tailwind content paths so Tailwind can detect all utility classes.

```js
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@stealshadow/ui/dist/**/*.js",
  ],
};
```

---

# 💙 You're Ready

```tsx
import { Button } from "@stealshadow/ui";

export default function App() {
  return (
    <Button>
      Hello, Steal Shadow!
    </Button>
  );
}
```

Build beautiful, animated interfaces with production-ready React components.

# 🤝 Contributing

We welcome contributions from everyone.

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Added amazing feature"
```

4. Push your branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

# 🐞 Found a Bug?

Please create an issue with:

- Description
- Screenshots
- Steps to reproduce
- Expected behavior

---

# ⭐ Show Your Support

If this project helped you, please consider giving it a ⭐ on GitHub.

It helps the project grow and motivates future development.



---

# ❤️ Community

- Report Issues
- Feature Requests
- Discussions
- Pull Requests

Everyone is welcome.

---

# 📜 License

Distributed under the **MIT License**.

See `LICENSE` for more information.

---

<div align="center">

## ⭐ Build Faster. Design Better.

Made with ❤️

**Happy Coding! 🚀**

</div>
