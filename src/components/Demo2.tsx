import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanels,
  TabsPanel,
} from "@/components/CustomTabs";

import { Counter } from "@/components/Counter";

export const demo2code1 = `
<Tabs initialActiveTab="counter1">
  <TabsList>
    <TabsTab tabId="counter1">First counter</TabsTab>
    <TabsTab tabId="counter2">Second counter</TabsTab>
  </TabsList>
  <TabsPanels>
    <TabsPanel tabId="counter1">
      <Counter />
    </TabsPanel>
    <TabsPanel tabId="counter2">
      <Counter />
    </TabsPanel>
  </TabsPanels>
</Tabs>
`.trim();

export const demo2code2 = `
import {
  Tabs as RATabs,
  TabsList as RATabsList,
  TabsTab as RATabsTab,
  TabsPanels as RATabsPanels,
  TabsPanel as RATabsPanel,
} from "react-activity-tabs";

export const Tabs = (props) => (
  <RATabs className="rounded-2xl overflow-hidden" {...props} />
);
export const TabsList = (props) => (
  <RATabsList className="bg-slate-500 p-1 pb-0" {...props} />
);
export const TabsTab = (props) => (
  <RATabsTab
    className="py-2 px-4 bg-slate-500 rounded-t-xl text-slate-100"
    activeClassName="py-2 px-4 bg-slate-100 text-slate-800 rounded-t-xl"
    {...props}
  />
);
export const TabsPanels = (props) => (
  <RATabsPanels className="p-1 pt-0 bg-slate-500" {...props} />
);

export const TabsPanel = (props) => (
  <RATabsPanel className="p-4 bg-slate-100 rounded-b-xl" {...props} />
);
`;

export const Demo2 = () => {
  return (
    <Tabs initialActiveTab="counter1">
      <TabsList>
        <TabsTab tabId="counter1">First counter</TabsTab>
        <TabsTab tabId="counter2">Second counter</TabsTab>
      </TabsList>
      <TabsPanels>
        <TabsPanel tabId="counter1">
          <Counter />
        </TabsPanel>
        <TabsPanel tabId="counter2">
          <Counter />
        </TabsPanel>
      </TabsPanels>
    </Tabs>
  );
};
