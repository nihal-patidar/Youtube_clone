import appStore from "../redux/store";
import {
  setAccessToken as setAcceessTokenAction,
  clearAccessToken as clearAccessTokenAction,
} from "../redux/slices/authSlice";

export const setAccessToken = (token) => {
  appStore.dispatch(setAcceessTokenAction(token));
};

export const getAccessToken = () => {
  return appStore.getState().auth.token;
};

export const clearAccessToken = () => {
  appStore.dispatch(setAcceessTokenAction());
};
