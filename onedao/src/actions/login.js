import axios, { endpoints } from "../utils/axios";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(endpoints.auth.login, {
      email,
      password,
    });
    const token = response.data.token; // Assuming the token is in response.data.token
    localStorage.setItem("token", token); // Store token
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    return error.response?.data;
  }
};
