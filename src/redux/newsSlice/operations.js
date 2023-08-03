import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://pets-zywq.onrender.com/api";

export const fetchNews = createAsyncThunk(
  "news/getall",
  async (data, thunkAPI) => {
    const { page, search } = data;
    try {
      const response = await axios.get("/news/getall", {
        params: {
          page: page,
          limit: 6,
          word: search,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
