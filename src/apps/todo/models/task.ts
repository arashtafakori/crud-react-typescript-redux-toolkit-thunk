
import {httpRequestStatus} from '../../../utils/httpRequest';

export interface Task {
  id: string;
  title: string;
  description: string;
}

export const initialTask = {
  data: {
    id: '',
    title: '',
    description: ''
  },
  status: httpRequestStatus.Pending,
  error: null
};

export const initialTaskList = {
  data: [],
  status: httpRequestStatus.Pending,
  error: null
};