import App from "@/App";
import AllTasks from "@/pages/AllTasks";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: AllTasks,
        index: true,
      },
    ],
  },
]);
