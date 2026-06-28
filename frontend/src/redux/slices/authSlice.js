import { createSlice } from "@reduxjs/toolkit";

// define initialState
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isRefreshToken: true, //
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

    setAccessToken: (state, action) => {
      state.token = action.payload;
    },

    clearAccessToken: (state) => {
      state.token = null;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    clearUser: (state, action) => {
      state.user = null;
    },

    setIsRefreshToken: (state, action) => {
      state.isRefreshToken = false;
    },
  },
});

export const {
  loginSuccess,
  logout,
  setAccessToken,
  clearAccessToken,
  setUser,
  clearUser,
  setIsRefreshToken,
} = authSlice.actions;
export default authSlice.reducer;
