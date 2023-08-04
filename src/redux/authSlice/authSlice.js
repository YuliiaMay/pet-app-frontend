import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  updateUser,
  deletePet,
} from "./operations";
import { addPetOrNotice } from "../petsSlice/operations";

const initialStateAuth = {
  user: {
    avatar: "",
    favorites: [],
    _id: null,
    name: "",
    email: "",
    password: "",
    pets: [],
    token: null,
    phone: "",
    city: "",
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(logout.pending, (state) => state)
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state) => state)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(addPetOrNotice.fulfilled, (state, { payload }) => {
        if (payload.category === "your pet") {
          state.user.pets.push(payload);
        }
        return;
      })
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        // const index = state.user.pets.findIndex(pet => pet._id === payload._id);
        // state.user.pets.splice(index, 1);
        // return state.user.pets;

        const updatedPets = state.user.pets.filter(
          (pet) => pet._id !== payload._id
        );
        return {
          ...state,
          user: {
            ...state.user,
            pets: updatedPets,
          },
        };
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          user: payload,
        };
      }),
});

export const authReducer = authSlice.reducer;
