import api from "./api";

async function register(UserData) {
  const response = await api.post("/auth/register", { ...UserData });

  console.log("response", response);
}

export { register };
