import type { RootState } from "@/redux/store";
import type { ITaskItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITaskItem[];
  filter: "All" | "Active" | "Completed";
}

const initialState: InitialState = {
  task: [
    {
      id: "hghujvhjuvj65456",
      title: "initialize frontend",
      description:
        "initialize frontend for showing redux fvn bjkwdrv cvwjhbbnw initialize frontend for showing redux fvn bjkwdrv cvwjhbbnw initialize frontend for showing redux fvn bjkwdrv cvwjhbbnw initialize frontend for showing redux fvn bjkwdrv cvwjhbbnw initialize frontend for showing redux fvn bjkwdrv cvwjhbbnw",
      dueDate: "2025-11",
      isCompleted: false,
      isActive: true,
      priority: "high",
    },
    {
      id: "hghujjuvj65456",
      title: "customized frontend",
      description: "initialize frontend for showing redux",
      dueDate: "2025-11",
      isCompleted: false,
      isActive: true,
      priority: "high",
    },
    {
      id: "hhujj65456",
      title: "Create github repo",
      description: "initialize frontend for showing redux",
      dueDate: "2025-11",
      isCompleted: false,
      isActive: true,
      priority: "high",
    },
  ],
  filter: "All",
};

const taskSlice = createSlice({
  name: "aLlTasks",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.allTasks.task;
};
export const selectFilter = (state: RootState) => {
  return state.allTasks.filter;
};

export default taskSlice.reducer;
