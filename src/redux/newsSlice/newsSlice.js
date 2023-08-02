import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const extraOperations = [fetchNews];
const getOperations = (type) =>
  isAnyOf(...extraOperations.map((action) => action[type]));

const pendingReducer = (state) => {
  state.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const fulfilledReducer = (state) => {
  state.isLoading = false;
  state.error = null;
};

const fetchNewsReducer = (state, { payload }) => {
  state.items = payload.news;
};
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchNews.fulfilled, fetchNewsReducer)

      .addMatcher(getOperations("pending"), pendingReducer)
      .addMatcher(getOperations("rejected"), rejectedReducer)
      .addMatcher(getOperations("fulfilled"), fulfilledReducer),
});

export const newsReducer = newsSlice.reducer;
