import api from "./api";

async function register(UserData) {
  try {
    const response = await api.post("/auth/register", { ...UserData });

    console.log("response", response);
  } catch (err) {
    console.log("Register Error ", err);
  }
}

export { register };
