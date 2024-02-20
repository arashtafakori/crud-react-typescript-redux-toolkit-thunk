export enum httpRequestStatus {
  Pending,
  Fullfilled,
  Rejected
}

export interface httpState {
  data: null;
  status: httpRequestStatus,
  error: null
}