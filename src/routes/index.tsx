import App from "@/App";
import AllTasks from "@/pages/AllTasks";
import Tasks from "@/pages/Tasks";
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
      {
        Component: Tasks,
        path: "/tasks",
      },
    ],
  },
]);
