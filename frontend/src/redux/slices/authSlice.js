import { createSlice } from "@reduxjs/toolkit";

// define initialState
const initialState = {
  user: null,
  token: localStorage.getItem("youtube-user-token") || null,
  isAuthenticated: !!localStorage.getItem("youtube-user-token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      console.log("loginSuccess ", action.payload);
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.isAuthenticated = action.payload.success;
    },

    logout: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
