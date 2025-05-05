import axios, { endpoints } from "../utils/axios";

export const verifyOtp = async (userId, otp) => {
  try {
    const response = await axios.post(endpoints.auth.otpVerify, {
      userId,
      otp,
    });
    const token = response.data.token; // Assuming the token is in response.data.token
    localStorage.setItem("token", token); // Store token
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    return error.response?.data;
  }
};
