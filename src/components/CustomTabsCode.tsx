import {
  Tabs as RATabs,
  TabsList as RATabsList,
  TabsTab as RATabsTab,
  TabsPanels as RATabsPanels,
  TabsPanel as RATabsPanel,
} from "react-activity-tabs";

export const CodeTabs = (props: React.ComponentProps<typeof RATabs>) => (
  <RATabs className="" {...props} />
);
export const CodeTabsList = (
  props: React.ComponentProps<typeof RATabsList>,
) => (
  <RATabsList className="bg-slate-700 border-b border-slate-600" {...props} />
);

export const CodeTabsTab = (props: React.ComponentProps<typeof RATabsTab>) => (
  <RATabsTab
    className="bg-slate-700 text-slate-100 text-xs px-4 py-2"
    activeClassName="bg-slate-800 text-slate-100 text-xs px-4 py-2 shadow-[0_1px_0_0] shadow-orange-500"
    {...props}
  />
);
export const CodeTabsPanels = (
  props: React.ComponentProps<typeof RATabsPanels>,
) => <RATabsPanels className="" {...props} />;

export const CodeTabsPanel = (
  props: React.ComponentProps<typeof RATabsPanel>,
) => <RATabsPanel className="" {...props} />;
