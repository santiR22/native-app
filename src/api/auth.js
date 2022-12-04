import axios from "axios";
import { login, loginUser } from "../env/env";
import setAuthToken from "../utils/setAuthToken";

export const loginRequest = async (user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await axios.post("http://localhost:5000/api/login", user, config);
};

export const loadUser = async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return await axios.get("http://localhost:5000/api/loginUser");
};
