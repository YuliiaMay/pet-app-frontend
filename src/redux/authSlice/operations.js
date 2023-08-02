import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://pets-zywq.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /api/users/register
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  "/users/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/register", credentials);
      
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error.response.request.status);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ api/users/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  "/users/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      // console.log("login", response);

      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk("/users/logout", async (_, thunkAPI) => {
  try {
    // await axios.post("/users/logout");
    // clearAuthHeader();
    const response = await axios.post("/users/logout");
    clearAuthHeader();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "/users/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    // setAuthHeader(persistedToken);
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      // console.log("refresh", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /users/update
 */
export const updateUser = createAsyncThunk(
  "/users/update",
  async (user, thunkAPI) => {
    try {
      const response = await axios.patch("/users/update", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * DELETE @ /notices/delpet/${id}
 */
export const deletePet = createAsyncThunk(
  "/pet/delete",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/delpet/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * DELETE @ /notices/delnotice/${id}
 */
export const deleteNotices = createAsyncThunk(
  "/notices/delete",
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/notices/delnotice/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /notices/favorite/${id}
 */
export const addNoticeToFavorite = createAsyncThunk(
  "/notices/addFavorite",
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/notices/favorite/${id}`);
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
