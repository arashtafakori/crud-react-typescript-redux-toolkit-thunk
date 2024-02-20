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
  "tasks/createNew",
  async(newBooklet: any) => {
    let response = await api.post(
      `/tasks`, newBooklet);
    return response.data;
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
