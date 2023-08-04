import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://pets-zywq.onrender.com/api";

export const fetchNoticesAll = createAsyncThunk(
  "notices/getAll",
  async (data, thunkAPI) => {
    const { owner } = data;
    try {
      const response = await axios.get("/notices/getall", {});
      const data = response.data.filter((item) => item.owner === owner);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNotices = createAsyncThunk(
  "notices/getSearch",
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

export const fetchFavorite = createAsyncThunk(
  "notices/getFavorite",
  async (data, thunkAPI) => {
    // const { page, category, search } = data;

    try {
      const response = await axios.get("/notices/getfavorites", {
        params: {},
      });

      console.log(response.data.favNotices);
      return response.data.favNotices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteAdd = createAsyncThunk(
  "notices/getFavoriteAdd",
  async (id, thunkAPI) => {
    // const { page, category, search } = data;

    try {
      const response = await axios.patch(`/notices/favorite/${id}`, {
        params: {},
      });
      console.log("add", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteDelete = createAsyncThunk(
  "notices/getFavoriteDelete",
  async (id, thunkAPI) => {
    // const { page, category, search } = data;

    try {
      const response = await axios.patch(`/notices/favoritedelete/${id}`, {
        params: {},
      });

      console.log("delete", response.data);
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

// export const addNotice = createAsyncThunk(
//   "notices/addNotices",
//   async (notice, thunkAPI) => {
//     try {
//       const response = await axios.post("/notices/add", notice);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const deleteNotice = createAsyncThunk(
  "notices/deleteNotices",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/delnotice/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
