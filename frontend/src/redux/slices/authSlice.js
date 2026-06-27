import { createSlice } from "@reduxjs/toolkit";

// define initialState
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
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
  },
});

export const { loginSuccess, logout, setAccessToken, clearAccessToken } =
  authSlice.actions;
export default authSlice.reducer;
