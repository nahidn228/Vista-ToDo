import type { RootState } from "@/redux/store";
import type { ITaskItem } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface InitialState {
  task: ITaskItem[];
  filter: "All" | "Active" | "Completed";
}

const initialState: InitialState = {
  task: [],
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
  },
});

export const selectTasks = (state: RootState) => {
  return state.allTasks.task;
};
export const selectFilter = (state: RootState) => {
  return state.allTasks.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
