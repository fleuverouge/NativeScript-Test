import { HomePage } from "./pages/home/home";
import { ParentComponent } from "./pages/nested-components/parent.component"
import { ROParentComponent } from "./pages/router-outlet/roParent.component"
import { ROSecondPageComponent } from "./pages/router-outlet/roSecondPage.component"
import { ROFirstChildComponent } from "./pages/router-outlet/roFirstChild.component"
import { ROSecondChildComponent } from "./pages/router-outlet/roSecondChild.component"
import { LVListViewContainer } from "./pages/listview/listview.component"

export const routes = [
  { 
      path: "", 
      component: HomePage,
  },
  {
    path: "nested-components",
    component: ParentComponent
  },
  {
    path: "router-outlet",
    component: ROParentComponent,
    children: [
      {
        path: "",
        component: ROFirstChildComponent      },
      {
        path: "second",
        component: ROSecondChildComponent
      }
    ]
  },
  {
    path: "router-outlet-second",
    component: ROSecondPageComponent
  },
  {
    path: "listview",
    component: LVListViewContainer
  },
];

export const navigatableComponents = [
  HomePage,
  ParentComponent,
  ROParentComponent,
  ROSecondPageComponent,
  ROFirstChildComponent,
  ROSecondChildComponent,
  LVListViewContainer
];