import { createSlice } from "@reduxjs/toolkit";
import { fetchFriends } from "./operations";

const initialState = {
  friends: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(fetchFriends.fulfilled, (state, { payload }) => {
      state.friends = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    }),
});

export const { friends } = friendsSlice.actions;
export const friendsReducer = friendsSlice.reducer;
