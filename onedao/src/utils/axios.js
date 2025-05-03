import axios from "axios";
import { config } from "../../config";

const axiosInstance = axios.create({
  baseURL: config.serverUlr,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
});

export default axiosInstance;

export const endpoints = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
};
