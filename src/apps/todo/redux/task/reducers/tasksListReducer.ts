import { getTasksList, createNewTask, editTask, deleteTask, getTask} from "../api";
import { httpRequestStatus } from "../../../../../utils/httpRequest";

let tasksListReducer = {
  add: (state: any, action: any) => {
    state.push(action.payload);
  }
};

export let tasksListExtraReducer = (builder: any) => {
  builder.addCase(getTasksList.pending, (state: any, action: any) => {
    state.status = httpRequestStatus.Pending;
  })
  .addCase(getTasksList.fulfilled, (state: any, action: any) => {
    state.data = action.payload;
    state.status =  httpRequestStatus.Fullfilled;
  }) 
  .addCase(getTasksList.rejected, (state: any, action: any) => {
    state.status =  httpRequestStatus.Rejected;
    state.error = action.error;
  });

  builder.addCase(createNewTask.pending, (state: any, action: any) => {
    state.status = httpRequestStatus.Pending;
  })
  .addCase(createNewTask.fulfilled, (state: any, action: any) => {
    state.status =  httpRequestStatus.Fullfilled;
    state.data.items.unshift(action.payload);
  }) 
  .addCase(createNewTask.rejected, (state: any, action: any) => {
    state.status =  httpRequestStatus.Rejected;
    state.error = action.error;
  });
};

export default tasksListReducer;