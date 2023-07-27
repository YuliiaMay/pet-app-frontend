import { createAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const setNews = createAction("news/setNews");

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setNews, (state) => {
        state.items = [];
      })
      .addMatcher(isAnyOf(fetchNews.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchNews.fulfilled), (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload.result;
      })
      .addMatcher(isAnyOf(fetchNews.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const newsReducer = newsSlice.reducer;
