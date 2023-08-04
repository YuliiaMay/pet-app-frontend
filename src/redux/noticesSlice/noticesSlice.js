import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchNotices,
  fetchNoticeById,
  deleteNotice,
  fetchNoticesAll,
  fetchFavorite,
  fetchFavoriteDelete,
  fetchFavoriteAdd,
} from "./operations";
import { addPetOrNotice as addNotice } from "../petsSlice/operations";

const extraOperations = [
  fetchNotices,
  fetchNoticeById,
  deleteNotice,
  addNotice,
];
const getOperations = (type) =>
  isAnyOf(...extraOperations.map((action) => action[type]));

const pandingReduser = (state) => {
  state.isLoading = true;
};

const rejectedReduser = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const fulfilledReduser = (state) => {
  state.isLoading = false;
  state.error = null;
};

const fetchNoticesSuccessReduser = (state, { payload }) => {
  state.items = payload;
};

const fetchNoticesAllReduser = (state, { payload }) => {
  state.own = payload;
};

const addNoticesSuccessReduser = (state, { payload }) => {
  if (payload.addedNotice) {
    state.own.push(payload.addedNotice);
  }
};

const deleteNoticesSuccessReduser = (state, { payload }) => {
  const index = state.own.filter((notice) => notice._id === payload);

  state.own.splice(index, 1);
};

const fetchNoticesFavoriteAll = (state, { payload }) => {
  state.favorite = payload;
};

const FavoriteAddReduser = (state, { payload }) => {
  state.favorite.push(payload);
};

const deleteFavoriteReduser = (state, { payload }) => {
  if (state.favorite.length > 0) {
    const updatedFavorite = state.favorite.filter(({ _id }) => _id !== payload);
    return {
      ...state,
      favorite: updatedFavorite,
    };
  }
};

const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    items: [],
    own: [],
    favorite: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchFavoriteAdd.fulfilled, FavoriteAddReduser)
      .addCase(fetchFavoriteDelete.fulfilled, deleteFavoriteReduser)
      .addCase(fetchFavorite.fulfilled, fetchNoticesFavoriteAll)
      .addCase(fetchNoticesAll.fulfilled, fetchNoticesAllReduser)
      .addCase(fetchNotices.fulfilled, fetchNoticesSuccessReduser)
      .addCase(addNotice.fulfilled, addNoticesSuccessReduser)
      .addCase(deleteNotice.fulfilled, deleteNoticesSuccessReduser)
      .addMatcher(getOperations("pending"), pandingReduser)
      .addMatcher(getOperations("rejected"), rejectedReduser)
      .addMatcher(getOperations("fulfilled"), fulfilledReduser),
});

export const noticesReducer = noticesSlice.reducer;
