import { createSlice } from "@reduxjs/toolkit";

// define initialState
const initialState = {
  user: null,
  token: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      console.log("loginSuccess ", action.payload);
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
    },

    logout: (state, action) => {
      state.user = null;
      state.token = null;
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

    setLoading: (state, action) => {
      state.loading = action.payload;
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
  setLoading,
} = authSlice.actions;
export default authSlice.reducer;
