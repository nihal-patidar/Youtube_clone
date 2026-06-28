import axios from "axios";

import {
  getAccessToken,
  setAccessToken,
  clearAccessToken,
} from "../utils/tokenStorage";

import api from "../services/api";

const authApi = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const skipUrls = [
  "/auth/login",
  "/auth/register",
  "/auth/logout",
  "/auth/refresh-token",
];

let refreshPromise = null;

/* ----------------------------- Request ----------------------------- */

api.interceptors.request.use(
  (request) => {
    const token = getAccessToken();

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Request , token ", token, request);

    return request;
  },
  (error) => Promise.reject(error),
);

/* ----------------------------- Response ---------------------------- */

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (!error.response || !originalRequest) {
      return Promise.reject(error);
    }

    if (
      originalRequest._retry ||
      skipUrls.some((url) => originalRequest.url?.includes(url))
    ) {
      return Promise.reject(error);
    }

    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      // Prevent multiple refresh requests
      if (!refreshPromise) {
        refreshPromise = authApi.post("/auth/refresh-token");
      }

      const response = await refreshPromise;

      refreshPromise = null;

      const { accessToken } = response.data;

      setAccessToken(accessToken);

      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      refreshPromise = null;

      clearAccessToken();

      window.location.replace("/login");

      return Promise.reject(refreshError);
    }
  },
);

export default api;
