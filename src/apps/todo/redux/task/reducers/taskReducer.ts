import { httpRequestStatus } from "../../../../../utils/httpRequest";
import { getTask } from "../api";

let taskReducer = {
  get: (state: any, action: any) => { }
};

export let taskExtraReducer = (builder: any) => {
  builder.addCase(getTask.pending, (state: any, action: any) => {
    state.data = null;
    state.status = httpRequestStatus.Pending;
    state.error = null;
  })
  .addCase(getTask.fulfilled, (state: any, action: any) => {
    state.data = action.payload;
    state.status =  httpRequestStatus.Fullfilled;
    state.error = null;
  }) 
  .addCase(getTask.rejected, (state: any, action: any) => {
    state.data = null;
    state.status =  httpRequestStatus.Rejected;
    state.error = action.error;
  });

};
export default taskReducer;
