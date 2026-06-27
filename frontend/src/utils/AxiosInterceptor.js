import axios from "axios";
// export default authApi;
import {
  getAccessToken,
  setAccessToken,
  clearAccessToken,
} from "../utils/tokenStorage";

import api from "../services/api";

api.interceptors.request.use(
  (request) => {
    const token = getAccessToken();

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (error) => {
    Promise.reject(error);
  },
);

const authApi = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // Don't retry more than once
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401) {
      originalRequest._retry = true;

      try {
        // Refresh Token Request
        const response = await authApi.post("/auth/refresh-token");

        const newAccessToken = response.data.accessToken;

        // Save New Token
        setAccessToken(newAccessToken);

        // Update Header
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry Failed Request
        return api(originalRequest);
      } catch (refreshError) {
        clearAccessToken();

        // Redirect Login
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
