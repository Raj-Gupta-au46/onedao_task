import axios, { endpoints } from "../utils/axios";

export const registerUser = async (email, password, confirmPassword) => {
  try {
    const response = await axios.post(endpoints.auth.register, {
      email,
      password,
      confirmPassword,
    });

    console.log("response", response);

    return response.data;
  } catch (error) {
    console.error(
      "Registration failed:",
      error.response?.data || error.message
    );
    return error.response?.data;
  }
};
