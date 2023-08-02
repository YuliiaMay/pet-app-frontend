import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteId: [],
};
export const savedFavoriteIdSlice = createSlice({
  name: "favoriteId",
  initialState,
  reducers: {
    setFavoriteId(state, action) {
      const itemFavorite = state.favoriteId.find(
        (item) => item === action.payload
      );
      console.log(itemFavorite);
      if (!itemFavorite) {
        state.favoriteId.push(action.payload);
      } else {
        const index = state.favoriteId.findIndex(
          (stat) => stat === action.payload
        );
        state.favoriteId.splice(index, 1);
      }
    },
  },
});

export const FavoriteIdReducer = savedFavoriteIdSlice.reducer;

export const { setFavoriteId } = savedFavoriteIdSlice.actions;

export const selectFavoriteIdValue = (state) =>
  state.savedFavoriteId.favoriteId;
