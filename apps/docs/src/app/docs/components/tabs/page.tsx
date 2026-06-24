"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";


const BASIC_CODE = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@stealshadow/ui";

export default function Example() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content here.</TabsContent>
      <TabsContent value="analytics">Analytics content here.</TabsContent>
      <TabsContent value="settings">Settings content here.</TabsContent>
    </Tabs>
  );
}`;

const CONTROLLED_CODE = `const [tab, setTab] = useState("overview");

<Tabs value={tab} onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="analytics">...</TabsContent>
</Tabs>`;

const PROPS = [
  { name: "defaultValue", type: "string", default: "—", description: "The tab open by default (uncontrolled)." },
  { name: "value", type: "string", default: "—", description: "Controlled active tab value." },
  { name: "onValueChange", type: "(value: string) => void", default: "—", description: "Called when the active tab changes." },
  { name: "children", type: "React.ReactNode", default: "—", description: "TabsList and TabsContent elements." },
];


export default function TabsDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Tabs</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Tabs</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animated tab panels for switching between related views. Supports controlled and uncontrolled modes, keyboard navigation, and custom styling.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Tabs, TabsList, TabsTrigger, TabsContent }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <Tabs defaultValue="overview" className="w-full max-w-lg">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">Summary of your account activity, recent events, and key metrics.</TabsContent>
            <TabsContent value="analytics">Detailed charts showing usage trends, conversion rates, and retention.</TabsContent>
            <TabsContent value="settings">Configure your preferences, notifications, and integrations.</TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Controlled</h2>
        <p className="text-neutral-500 mb-4">Use <code className="font-mono text-xs bg-neutral-100 px-1 rounded">value</code> + <code className="font-mono text-xs bg-neutral-100 px-1 rounded">onValueChange</code> for full control.</p>
        <ComponentPreview code={CONTROLLED_CODE}>
          <Tabs defaultValue="overview" className="w-full max-w-lg">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">Overview content here.</TabsContent>
            <TabsContent value="analytics">Analytics content here.</TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Follows the ARIA Tabs pattern with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="tablist"</code>, <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="tab"</code>, <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="tabpanel"</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Arrow keys navigate between tabs; <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Home</code> / <code className="font-mono text-xs bg-neutral-100 px-1 rounded">End</code> jump to first/last.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Each tab has <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-selected</code> and is linked to its panel via <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-controls</code>.</li>
        </ul>
      </section>
    </div>
  );
}
