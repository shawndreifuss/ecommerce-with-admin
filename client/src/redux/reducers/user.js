import { createReducer } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadUserSuccess", (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase("LoadUserFail", (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase("ClearErrors", (state) => {
      state.error = null;
    });
});
