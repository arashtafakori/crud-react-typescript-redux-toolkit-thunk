import { createSlice } from "@reduxjs/toolkit";
import taskReducer, { taskExtraReducer } from "../reducers/taskReducer";
import { initialTask } from '../../../models/task';

var taskSlice = createSlice({
  name: "task",
  initialState: initialTask,
  reducers: taskReducer,
  extraReducers: taskExtraReducer
});

export const { get } = taskSlice.actions;
export default taskSlice;
 
