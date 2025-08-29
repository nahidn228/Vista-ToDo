import App from "@/App";

import Tasks from "@/pages/Tasks";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Tasks,
        index: true,
      },
      {
        Component: Tasks,
        path: "/tasks",
      },
    ],
  },
]);
