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

---

# ⚡ Why Steal Shadow UI?

✅ Beautiful Components

✅ Smooth Animations

✅ Accessible by Default

✅ Fully Responsive

✅ TypeScript Support

✅ Dark Mode Ready

✅ Open Source

✅ Lightweight

✅ Production Ready

---

# 🎯 Features

| Feature | Description |
|----------|-------------|
| 🎨 Modern Design | Clean, minimal and elegant UI components |
| ⚡ High Performance | Optimized for speed |
| 📱 Responsive | Works perfectly on all devices |
| 🌙 Dark Mode | Supports dark & light themes |
| ♿ Accessibility | Keyboard navigation & ARIA support |
| 🧩 Reusable | Drop-in components |
| 🎬 Animations | Beautiful motion effects |
| 🔥 Easy Installation | Install only what you need |


Installation
npm install @stealshadow/ui lucide-react
Requires: React 18+, Tailwind CSS 3+, lucide-react 1+

Setup
1. Add CSS tokens (optional but recommended)
// app/layout.tsx or _app.tsx
import "@stealshadow/ui/styles";
2. Wrap your app with ThemeProvider
import { ThemeProvider } from "@stealshadow/ui";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
3. Import and use components
import { Button, Card, Badge } from "@stealshadow/ui";

export default function Example() {
  return (
    <Card>
      <Badge color="green">New</Badge>
      <Button variant="primary">Get started</Button>
    </Card>
  );
}
Components
Primitives
Button · Card · Input · Badge · Avatar · Chip · Combobox · Breadcrumb · OTPInput · Rating

Forms
Checkbox · Switch · RadioGroup · Select · Textarea · RangeSlider · SmartForm

Overlays
Modal · Drawer · Tooltip · Popover · ToastProvider

Feedback
Spinner · Skeleton · Progress · CircularProgress · Alert

Layout
Accordion · Tabs · Stepper · EmptyState · CommandPalette · PageTransition

Data
DataTable · KanbanBoard · Calendar · FileUploader · RichEditor · Timeline · Pagination

Animations
BlurText · GlitchText · MorphText · TypewriterText · SplitText · RevealText · CountUp · MagneticButton · FloatingElements · ScrollReveal · ParticleField · AnimatedIcon

Effects
GlassCard · LiquidGlass · ShimmerButton · SpotlightCard · AuroraBackground · NeonGlow · GradientBorder · BorderBeam · Meteors

Special
Dock · TiltCard · FlipCard · InfiniteMarquee · SwipeCards · NumberFlow · WaveText · TextScramble · MultiSelect · ContextMenu · GlowingOrb · PricingTable

AI
Chat · CodeBlock · StreamingText · PromptEditor · AgentStatus · ToolCallViewer

Tailwind CSS
Components use Tailwind utility classes. Add the package to your tailwind.config.js content paths:

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@stealshadow/ui/dist/**/*.js",  // ← add this
  ],


---

# 🧩 Components

Current library includes components like:

- Buttons
- Cards
- Dialogs
- Forms
- Inputs
- Badges
- Tooltips
- Tabs
- Popovers
- Accordions
- Navigation
- Hero Sections
- Dashboard Widgets
- Loading Animations
- Skeletons
- AI Components
- Pricing Sections
- Feature Cards
- Authentication UI
- Data Tables
- And many more...


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
