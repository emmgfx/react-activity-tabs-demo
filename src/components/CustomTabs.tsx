// Import and rename the components to avoid confusion with the default ones

import {
  Tabs as RATabs,
  TabsList as RATabsList,
  TabsTab as RATabsTab,
  TabsPanels as RATabsPanels,
  TabsPanel as RATabsPanel,
} from "react-activity-tabs";

// Export your own components, with your own styles

export const Tabs = (props: React.ComponentProps<typeof RATabs>) => (
  <RATabs className="overflow-hidden rounded-2xl" {...props} />
);
export const TabsList = (props: React.ComponentProps<typeof RATabsList>) => (
  <RATabsList className="bg-slate-500 p-1 pb-0" {...props} />
);

export const TabsTab = (props: React.ComponentProps<typeof RATabsTab>) => (
  <RATabsTab
    className="rounded-t-xl bg-slate-500 px-4 py-2 text-slate-100"
    activeClassName="py-2 px-4 bg-slate-100 text-slate-800 rounded-t-xl"
    {...props}
  />
);

export const TabsPanels = (
  props: React.ComponentProps<typeof RATabsPanels>,
) => <RATabsPanels className="bg-slate-500 p-1 pt-0" {...props} />;

export const TabsPanel = (props: React.ComponentProps<typeof RATabsPanel>) => (
  <RATabsPanel className="rounded-b-xl bg-slate-100 p-4" {...props} />
);
