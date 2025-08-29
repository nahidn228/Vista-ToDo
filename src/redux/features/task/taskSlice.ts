import type { RootState } from "@/redux/store";
import type { ITaskItem } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

interface InitialState {
  task: ITaskItem[];
  filter: "All" | "Active" | "Completed";
}

const initialState: InitialState = {
  task: [
    {
      title: "fgvbndf",
      dueDate: "2025-09-04T18:00:00.000Z",
      description: "gngnfgngfnm",
      id: "33734dda-f160-4798-a5ac-",
      isCompleted: false,
    },
    {
      title: "fgvbndf",
      dueDate: "2025-09-04T18:00:00.000Z",
      description: "gngnfgngfnm",
      id: "33734dda-f160-4798-a5ac-eff44f0a1506",
      isCompleted: true,
    },
    {
      title: "zzzzzzz",
      dueDate: "2025-09-04T18:00:00.000Z",
      description: "gngnfgngfnm",
      id: "33734dda-f160-a5ac-eff44f0a1506",
      isCompleted: true,
    },
  ],
  filter: "All",
};

const taskSlice = createSlice({
  name: "aLlTasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITaskItem>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.task.push(taskData);
    },

    toggleComplete: (state, action: PayloadAction<string>) => {
      state.task.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },

    updateFilter: (
      state,
      action: PayloadAction<"All" | "Active" | "Completed">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.allTasks.filter;
  if (filter === "Active") {
    return state.allTasks.task.filter((task) => task.isCompleted === false);
  } else if (filter === "Completed") {
    return state.allTasks.task.filter((task) => task.isCompleted === true);
  } else {
    return state.allTasks.task;
  }
};
export const selectFilter = (state: RootState) => {
  return state.allTasks.filter;
};

export const selectActiveTasksCount = (state: RootState) =>
  state.allTasks.task.filter((task) => !task.isCompleted).length;

export const selectCompletedTasksCount = (state: RootState) =>
  state.allTasks.task.filter((task) => task.isCompleted).length;

export const { addTask, toggleComplete, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
