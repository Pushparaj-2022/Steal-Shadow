// Utilities
export { cn } from "./lib/utils";

// ─── Theme ───────────────────────────────────────────────────────────────────
export { ThemeProvider, useTheme, ThemeToggle } from "./components/theme/ThemeProvider";

// ─── Animation Components ────────────────────────────────────────────────────
export { MagneticButton } from "./components/animations/MagneticButton";
export { TypewriterText } from "./components/animations/TypewriterText";
export { CountUp } from "./components/animations/CountUp";
export { RevealText } from "./components/animations/RevealText";
export { GlitchText } from "./components/animations/GlitchText";
export { ParticleField } from "./components/animations/ParticleField";
export { FloatingElements } from "./components/animations/FloatingElements";
export { MorphText } from "./components/animations/MorphText";
export { ScrollReveal } from "./components/animations/ScrollReveal";
export { SplitText } from "./components/animations/SplitText";
export { BlurText } from "./components/animations/BlurText";
export { AnimatedIcon } from "./components/animations/AnimatedIcon";

// ─── Primitive Components ────────────────────────────────────────────────────
export { Button, buttonVariants } from "./components/primitives/Button";
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/primitives/Card";
export { Input } from "./components/primitives/Input";
export { Badge, badgeVariants } from "./components/primitives/Badge";
export { Avatar, AvatarGroup } from "./components/primitives/Avatar";
export { Combobox } from "./components/primitives/Combobox";
export type { ComboboxOption } from "./components/primitives/Combobox";
export { Breadcrumb } from "./components/primitives/Breadcrumb";
export type { BreadcrumbItem } from "./components/primitives/Breadcrumb";
export { Chip } from "./components/primitives/Chip";
export { OTPInput } from "./components/primitives/OTPInput";
export { Rating } from "./components/primitives/Rating";

// ─── Form Controls ───────────────────────────────────────────────────────────
export { Checkbox } from "./components/forms/Checkbox";
export { Switch } from "./components/forms/Switch";
export { RadioGroup, RadioItem } from "./components/forms/Radio";
export { Select } from "./components/forms/Select";
export type { SelectOption } from "./components/forms/Select";
export { Textarea } from "./components/forms/Textarea";
export { RangeSlider } from "./components/forms/RangeSlider";
export {
  SmartForm,
  FormField,
  FormSubmit,
  FormError,
} from "./components/forms/SmartForm";

// ─── Overlay Components ──────────────────────────────────────────────────────
export {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./components/overlays/Modal";
export {
  Drawer,
  DrawerHeader,
  DrawerBody,
} from "./components/overlays/Drawer";
export { ToastProvider, useToast } from "./components/overlays/Toast";
export { Tooltip } from "./components/overlays/Tooltip";
export { Popover } from "./components/overlays/Popover";

// ─── Feedback Components ─────────────────────────────────────────────────────
export { Skeleton } from "./components/feedback/Skeleton";
export { Progress, CircularProgress } from "./components/feedback/Progress";
export { Spinner } from "./components/feedback/Spinner";
export { Alert } from "./components/feedback/Alert";

// ─── Layout Components ───────────────────────────────────────────────────────
export {
  Accordion,
  AccordionItem,
} from "./components/layout/Accordion";
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./components/layout/Tabs";
export { PageTransition } from "./components/layout/PageTransition";
export { Stepper } from "./components/layout/Stepper";
export type { Step } from "./components/layout/Stepper";
export { EmptyState } from "./components/layout/EmptyState";
export { CommandPalette, useCommandPalette } from "./components/layout/CommandPalette";
export type { CommandItem } from "./components/layout/CommandPalette";

// ─── Data Components ─────────────────────────────────────────────────────────
export { DataTable } from "./components/data/DataTable";
export type { ColumnDef } from "./components/data/DataTable";
export { FileUploader } from "./components/data/FileUploader";
export type { UploadedFile } from "./components/data/FileUploader";
export { KanbanBoard } from "./components/data/KanbanBoard";
export type { KanbanColumn, KanbanCard } from "./components/data/KanbanBoard";
export { Calendar } from "./components/data/Calendar";
export { RichEditor } from "./components/data/RichEditor";
export { Timeline } from "./components/data/Timeline";
export type { TimelineItem } from "./components/data/Timeline";
export { Pagination } from "./components/data/Pagination";

// ─── Effects / Visual ────────────────────────────────────────────────────────
export { GlassCard } from "./components/effects/GlassCard";
export { LiquidGlass } from "./components/effects/LiquidGlass";
export { ShimmerButton } from "./components/effects/ShimmerButton";
export { SpotlightCard } from "./components/effects/SpotlightCard";
export { AuroraBackground } from "./components/effects/AuroraBackground";
export { NeonGlow } from "./components/effects/NeonGlow";
export { GradientBorder } from "./components/effects/GradientBorder";
export { BorderBeam } from "./components/effects/BorderBeam";
export { Meteors } from "./components/effects/Meteors";

// ─── Special / Signature Components ─────────────────────────────────────────
export { Dock } from "./components/special/Dock";
export type { DockItem } from "./components/special/Dock";
export { TiltCard } from "./components/special/TiltCard";
export { InfiniteMarquee } from "./components/special/InfiniteMarquee";
export { FlipCard } from "./components/special/FlipCard";
export { TextScramble } from "./components/special/TextScramble";
export { WaveText } from "./components/special/WaveText";
export { NumberFlow } from "./components/special/NumberFlow";
export { SwipeCards } from "./components/special/SwipeCards";
export type { SwipeCard } from "./components/special/SwipeCards";
export { MultiSelect } from "./components/special/MultiSelect";
export type { MultiSelectOption } from "./components/special/MultiSelect";
export { ContextMenu } from "./components/special/ContextMenu";
export type { ContextMenuItem } from "./components/special/ContextMenu";
export { GlowingOrb } from "./components/special/GlowingOrb";
export { PricingTable } from "./components/special/PricingTable";
export type { PricingPlan, PricingFeature } from "./components/special/PricingTable";

// ─── New Effects ─────────────────────────────────────────────────────────────
export { RetroGrid } from "./components/effects/RetroGrid";
export { Ripple } from "./components/effects/Ripple";
export { ShineBorder } from "./components/effects/ShineBorder";
export { MagicCard } from "./components/effects/MagicCard";
export { HeroHighlight, Highlight } from "./components/effects/HeroHighlight";
export { AnimatedBeam } from "./components/effects/AnimatedBeam";
export type { AnimatedBeamProps } from "./components/effects/AnimatedBeam";
export { GridBeam } from "./components/effects/GridBeam";

// ─── New Animations ───────────────────────────────────────────────────────────
export { GradientText } from "./components/animations/GradientText";
export { SparklesText } from "./components/animations/SparklesText";
export { BoxReveal } from "./components/animations/BoxReveal";
export { WordPullUp } from "./components/animations/WordPullUp";
export { AnimatedList } from "./components/animations/AnimatedList";

// ─── New Special ─────────────────────────────────────────────────────────────
export { BentoGrid, BentoCard } from "./components/special/BentoGrid";
export { OrbitingCircles } from "./components/special/OrbitingCircles";
export { Terminal } from "./components/special/Terminal";
export type { TerminalLine } from "./components/special/Terminal";
export { AvatarCircles } from "./components/special/AvatarCircles";
export type { AvatarData } from "./components/special/AvatarCircles";
export { Confetti } from "./components/special/Confetti";
export type { ConfettiProps } from "./components/special/Confetti";
export { CursorTrail } from "./components/special/CursorTrail";

// ─── New Layout ───────────────────────────────────────────────────────────────
export { ScrollProgress } from "./components/layout/ScrollProgress";

// ─── New Data ─────────────────────────────────────────────────────────────────
export { Gauge } from "./components/data/Gauge";

// ─── AI Components ───────────────────────────────────────────────────────────
export { StreamingText } from "./components/ai/StreamingText";
export { Chat } from "./components/ai/Chat";
export type { ChatMessage, MessageRole, ToolCall } from "./components/ai/Chat";
export { CodeBlock } from "./components/ai/CodeBlock";
export { AgentStatus } from "./components/ai/AgentStatus";
export type { AgentState, AgentStep } from "./components/ai/AgentStatus";
export { PromptEditor } from "./components/ai/PromptEditor";
export { ToolCallViewer } from "./components/ai/ToolCallViewer";
