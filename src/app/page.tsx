import { Code } from "bright";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Demo1, demo1code } from "@/components/Demo1";
import { Demo2, demo2code1, demo2code2 } from "@/components/Demo2";
import {
  CodeTabs,
  CodeTabsList,
  CodeTabsPanel,
  CodeTabsPanels,
  CodeTabsTab,
} from "@/components/CustomTabsCode";
import { IconTSX } from "@/components/IconTSX";
import { InstallationCommand } from "@/components/InstallationCommand";

Code.theme = "github-dark";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-8" />
      <p className="text-center text-lg font-semibold">Installation</p>
      <div className="h-8" />
      <InstallationCommand />
      <div className="h-px bg-slate-200" />
      <div className="h-8" />
      <p className="text-center text-lg font-semibold">
        Basic styling with Tailwind classes
      </p>
      <div className="h-8" />
      <div className="mx-auto grid max-w-md grid-cols-1 items-start gap-8 md:max-w-5xl md:grid-cols-[2fr_3fr]">
        <Demo1 />
        <CodeTabs
          initialActiveTab="basic-tailwind-styles"
          className="overflow-hidden rounded-lg bg-slate-800 p-0"
        >
          <CodeTabsList>
            <CodeTabsTab tabId="basic-tailwind-styles">
              <div className="flex items-center gap-2">
                <IconTSX />
                basic-tailwind-styles.tsx
              </div>
            </CodeTabsTab>
          </CodeTabsList>
          <CodeTabsPanels>
            <CodeTabsPanel tabId="basic-tailwind-styles">
              <Code
                lang="jsx"
                className="m-0! rounded-none! text-xs/relaxed *:bg-transparent!"
              >
                {demo1code}
              </Code>
            </CodeTabsPanel>
          </CodeTabsPanels>
        </CodeTabs>
      </div>
      <div className="h-8" />
      <div className="h-px bg-slate-200" />
      <div className="h-8" />
      <p className="text-center text-lg font-semibold">
        Reusable custom styles
      </p>
      <div className="h-8" />
      <div className="mx-auto grid max-w-md grid-cols-1 items-start gap-8 md:max-w-5xl md:grid-cols-[3fr_2fr]">
        <CodeTabs
          initialActiveTab="usage"
          className="overflow-hidden rounded-lg bg-slate-800 p-0 max-sm:order-2"
        >
          <CodeTabsList>
            <CodeTabsTab tabId="usage">
              <div className="flex items-center gap-2">
                <IconTSX />
                usage.tsx
              </div>
            </CodeTabsTab>
            <CodeTabsTab tabId="definition">
              <div className="flex items-center gap-2">
                <IconTSX />
                definition.tsx
              </div>
            </CodeTabsTab>
          </CodeTabsList>
          <CodeTabsPanels>
            <CodeTabsPanel tabId="usage">
              <Code
                lang="jsx"
                className="m-0! rounded-none! text-xs/relaxed *:bg-transparent!"
              >
                {demo2code1}
              </Code>
            </CodeTabsPanel>
            <CodeTabsPanel tabId="definition" className="">
              <Code
                lang="jsx"
                className="m-0! rounded-none! text-xs/relaxed *:bg-transparent!"
              >
                {demo2code2}
              </Code>
            </CodeTabsPanel>
          </CodeTabsPanels>
        </CodeTabs>
        <Demo2 />
      </div>
      <Footer />
    </div>
  );
}
