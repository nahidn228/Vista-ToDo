import type { ITaskItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITaskItem[];
}

const initialState: InitialState = {
  task: [
    {
      id: "hghujvhjuvj65456",
      title: "initialize frontend",
      description: "initialize frontend for showing redux",
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
};

const taskSlice = createSlice({
  name: "aLlTasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
