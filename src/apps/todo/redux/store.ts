import tasksListSlice from "./task/slices/tasksListSlice";
import taskSlice from "./task/slices/taskSlice";
import { configureStore } from "@reduxjs/toolkit";

let allReducers = {
  task: taskSlice.reducer,
  tasksList: tasksListSlice.reducer,
};

let store = configureStore({
  reducer: allReducers
});

export default store;
