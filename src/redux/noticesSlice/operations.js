import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://pets-zywq.onrender.com/api";

export const fetchNotices = createAsyncThunk(
  "notices/getAll",
  async (data, thunkAPI) => {
    const { page, category, search } = data;

    try {
      const response = await axios.get("/notices/search", {
        params: {
          category: category,
          page: page,
          limit: 10,
          word: search,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticeById = createAsyncThunk(
  "notices/getById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  "notices/addNotices",
  async (notice, thunkAPI) => {
    try {
      const response = await axios.post("/notices", notice);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  "notices/deleteNotices",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
