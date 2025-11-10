import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanels,
  TabsPanel,
} from "react-activity-tabs";

import { Counter } from "@/components/Counter";

export const demo1code = `
<Tabs initialActiveTab="counter1" className="rounded-2xl overflow-hidden">
  <TabsList className="bg-slate-300 p-1 pb-0">
    <TabsTab
      tabId="counter1"
      className="py-2 px-4 bg-slate-300 rounded-t-xl"
      activeClassName="py-2 px-4 bg-slate-100 text-slate-800 rounded-t-xl"
    >
      First counter
    </TabsTab>
    <TabsTab
      tabId="counter2"
      className="py-2 px-4 bg-slate-300 rounded-t-xl"
      activeClassName="py-2 px-4 bg-slate-100 text-slate-800 rounded-t-xl"
    >
      Second counter
    </TabsTab>
  </TabsList>
  <TabsPanels className="p-4 bg-slate-100">
    <TabsPanel tabId="counter1">
      <Counter />
    </TabsPanel>
    <TabsPanel tabId="counter2">
      <Counter />
    </TabsPanel>
  </TabsPanels>
</Tabs>
`.trim();

export const Demo1 = () => {
  return (
    <Tabs initialActiveTab="counter1" className="rounded-2xl overflow-hidden">
      <TabsList className="bg-slate-500 p-1 pb-0">
        <TabsTab
          tabId="counter1"
          className="py-2 px-4 bg-slate-500 rounded-t-xl text-slate-100"
          activeClassName="py-2 px-4 bg-slate-100 text-slate-800 rounded-t-xl"
        >
          First counter
        </TabsTab>
        <TabsTab
          tabId="counter2"
          className="py-2 px-4 bg-slate-500 rounded-t-xl text-slate-100"
          activeClassName="py-2 px-4 bg-slate-100 text-slate-800 rounded-t-xl"
        >
          Second counter
        </TabsTab>
      </TabsList>
      <TabsPanels className="p-1 pt-0 bg-slate-500">
        <TabsPanel tabId="counter1" className="p-4 bg-slate-100 rounded-b-xl">
          <Counter />
        </TabsPanel>
        <TabsPanel tabId="counter2" className="p-4 bg-slate-100 rounded-b-xl">
          <Counter />
        </TabsPanel>
      </TabsPanels>
    </Tabs>
  );
};
