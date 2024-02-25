import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let api = axios.create({
  baseURL: process.env.REACT_APP_SERVICE_URL
});

export const getTasksList = createAsyncThunk(
  "tasks/getList",
  async() => {
    let response = await api.get(`/tasks`);
    return response.data;
  }
);

export const getTask = createAsyncThunk(
  "tasks/get",
  async(bookletId: any) => {
    let response = await api.get(`/tasks/${bookletId}`);
    return response.data;
  }
);

export const createNewTask = createAsyncThunk(
  "tasks/createNewt",
  async (newTask: any, thunkAPI) => {
    try {
      const response = await api.post(
        `/tasks`, newTask);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue({ error: 'Network error' });
      }
    }
  }
);

export const editTask = createAsyncThunk(
  "tasks/edit",
  async(modifiedBooklet: any) => {
    let response = await api({ 
      url: `/tasks`,
      data: modifiedBooklet,
      method: "PUT"});
    return response.data;
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async(bookletId: any) => {
    let response = await api({ 
      url: `/tasks/${bookletId}`,
      method: "DELETE"});
    return response.data;
  }
);
