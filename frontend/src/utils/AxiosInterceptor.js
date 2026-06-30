import axios from "axios";

import {
  getAccessToken,
  setAccessToken,
  clearAccessToken,
} from "../utils/tokenStorage";

import api from "../services/api";
import appStore from "../redux/store";
import { setLoading } from "../redux/slices/authSlice";

const authApi = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

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

// Shared promise used to prevent multiple refresh requests
let refreshPromise = null;

api.interceptors.response.use(
  // If response is successful (2xx), simply return it.
  (response) => response,

  // This callback runs whenever the response status is outside 2xx.
  async (error) => {
    // The original Axios request configuration.
    const originalRequest = error.config;
    console.log("response Interceptor is working 1");

    // Network error or request configuration missing.
    if (!error.response || !originalRequest) {
      return Promise.reject(error);
    }
    console.log("response Interceptor is working 2");

    // Prevent infinite refresh loop.
    if (originalRequest._retry) {
      return Promise.reject(error);
    }
    console.log("response Interceptor is working 3");

    // Only refresh when access token has expired.
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    console.log("response Interceptor is working 4");

    // Mark this request as already retried.
    originalRequest._retry = true;

    try {
      // If another request is already refreshing the token,
      // wait for that refresh instead of sending another request.
      if (!refreshPromise) {
        refreshPromise = authApi
          .post("/auth/refresh-token")
          .then((response) => {
            // Extract new access token.
            const { accessToken } = response.data;

            console.log("response Interceptor is working 5", accessToken);

            // Save token (Redux / Context / Memory).
            setAccessToken(accessToken);

            // Return token for waiting requests.
            return accessToken;
          })
          .finally(() => {
            // Allow future refresh requests.
            refreshPromise = null;
          });
      }

      // Wait until refresh finishes.
      const accessToken = await refreshPromise;

      // Attach new token to the failed request.
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      // Retry the original request.
      return api(originalRequest);
    } catch (refreshError) {
      // Refresh token is invalid or expired.

      // Remove access token.
      clearAccessToken();

      // Redirect user to login page.
      // window.location.replace("/");
      appStore.dispatch(setLoading(false));

      // Pass error to the component.
      return Promise.reject(refreshError);
    }
  },
);

export default api;
