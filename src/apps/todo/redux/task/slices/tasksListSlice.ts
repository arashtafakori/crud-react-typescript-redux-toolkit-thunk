import { createSlice } from "@reduxjs/toolkit";
import { initialTaskList } from '../../../models/task';
import tasksListReducer, { tasksListExtraReducer } from "../reducers/tasksListReducer";

var tasksListSlice = createSlice({
  name: "tasks-list",
  initialState: initialTaskList,
  reducers: tasksListReducer,
  extraReducers: tasksListExtraReducer
});

export const { add } = tasksListSlice.actions;
export default tasksListSlice;
 
 