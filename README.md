 <div align="center">

<img src="https://steal-shadow.vercel.app/_next/image?url=%2Flogo.png&w=1920&q=75" width="140" />

Build beautiful interfaces faster with modern React components.

<p>

<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react"/>
<img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js"/>
<img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript"/>
<img src="https://img.shields.io/badge/License-MIT-success?style=flat-square"/>

</p>

<p>

<a href="https://steal-shadow.vercel.app">Documentation</a>
•
<a href="https://steal-shadow.vercel.app">Website</a>

</p>

</div>

## About

Steal Shadow UI is an open-source React component library built for developers who want to create polished user interfaces without spending hours building components from scratch.

It includes reusable UI components, animations, effects, and application-ready building blocks that work well with React, Next.js, Tailwind CSS, and TypeScript.

Whether you're building a dashboard, SaaS platform, portfolio, AI application, admin panel, or landing page, the goal is simple—ship faster while keeping your codebase clean and maintainable.

## Installation

Install the package using npm.

```bash
npm install @stealshadow/ui
```

### Requirements

- React 18+
- Tailwind CSS 3+
- lucide-react

## Getting Started

Import the stylesheet once.

```tsx
import "@stealshadow/ui/styles";
```

Wrap your application with the ThemeProvider.

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

Now you're ready to use components.

```tsx
import { Button, Card, Badge } from "@stealshadow/ui";

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

## Components

### Core

- Button
- Input
- Card
- Badge
- Avatar
- Chip
- Combobox
- Breadcrumb
- OTPInput
- Rating

### Forms

- Checkbox
- Radio Group
- Switch
- Select
- Textarea
- Range Slider
- Smart Form

### Overlays

- Modal
- Drawer
- Popover
- Tooltip
- Toast

### Feedback

- Spinner
- Skeleton
- Progress
- Circular Progress
- Alert

### Layout

- Accordion
- Tabs
- Stepper
- Empty State
- Command Palette
- Page Transition

### Data Display

- Data Table
- Kanban Board
- Calendar
- Timeline
- Pagination
- Rich Editor
- File Uploader

### Animation

- Blur Text
- Glitch Text
- Reveal Text
- Morph Text
- Typewriter Text
- Split Text
- Count Up
- Magnetic Button
- Scroll Reveal
- Floating Elements
- Particle Field

### Effects

- Glass Card
- Aurora Background
- Border Beam
- Gradient Border
- Spotlight Card
- Neon Glow
- Liquid Glass
- Meteors

### Advanced

- Dock
- Flip Card
- Tilt Card
- Infinite Marquee
- Swipe Cards
- Multi Select
- Pricing Table
- Context Menu
- Number Flow
- Wave Text
- Text Scramble

### AI

- Chat
- Prompt Editor
- Streaming Text
- Code Block
- Agent Status
- Tool Call Viewer

## Tailwind Configuration

Add the package to your Tailwind content configuration.

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@stealshadow/ui/dist/**/*.js",
  ],
};
```

## Contributing

Contributions are always welcome.

```bash
git checkout -b feature/my-feature
git commit -m "Add new component"
git push origin feature/my-feature
```

Then open a Pull Request.

Before submitting:

- Follow the existing coding style
- Keep components reusable
- Write clear commit messages
- Test your changes

## Reporting Issues

If you find a bug or have a feature request, please open an issue with:

- A clear description
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

## License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

<div align="center">

Built with React, TypeScript and Tailwind CSS.

</div>
