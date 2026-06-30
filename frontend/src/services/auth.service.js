import api from "./api";

async function register(UserData) {
  try {
    const response = await api.post("/auth/register", { ...UserData });

    return response;
    // console.log("response", response);
  } catch (err) {
    console.log("Register Error ", err);
  }
}

async function login(UserData) {
  try {
    const response = await api.post("/auth/login", { ...UserData });

    return response;
  } catch (err) {
    console.log("Login Error", err);
  }
}

export { register, login };
