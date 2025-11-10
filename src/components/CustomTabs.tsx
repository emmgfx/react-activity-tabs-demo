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
