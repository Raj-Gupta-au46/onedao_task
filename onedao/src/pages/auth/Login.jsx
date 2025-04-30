import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/path";
import { loginUser } from "../../actions/login";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRoute = () => {
    navigate(paths.auth.register);
  };

  const handleOtpRoute = () => {
    navigate(paths.auth.otp);
  };

  const handleLogin = async () => {
    const ADMIN_EMAIL = "admin@example.com";
    const ADMIN_PASSWORD = "Admin123!";
    const res = await loginUser(email, password);
    if (res?.success) {
      navigate(paths.auth.dashboard);
    } else {
      setErrorMessage(res?.message ?? "Invalid email or password");
    }
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Left side - image */}
      <div className="w-1/2 bg-gradient-to-b from-gray-600 to-gray-900 flex items-end">
        <img
          src="/api/placeholder/400/500"
          alt="Mountains silhouette"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Login Form */}
      <div className="w-1/2 bg-white p-20 flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-1">Log In to Admin Panel</h2>
        <p className="text-gray-500 text-sm mb-4">
          Enter your email id and password below
        </p>

        {errorMessage && (
          <div className="mb-4 p-2 bg-red-100 text-red-600 text-sm rounded">
            {errorMessage}
          </div>
        )}

        <div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xs font-bold mb-1"
              htmlFor="login-email"
            >
              EMAIL ID
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="login-email"
              type="email"
              placeholder="Enter your email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-xs font-bold mb-1"
              htmlFor="login-password"
            >
              PASSWORD
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 w-full"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>

        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Don't have an account?</span>{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={handleRoute}
          >
            Register
          </button>
        </div>

        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Forget Password?</span>{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={handleOtpRoute}
          >
            OTP Login
          </button>
        </div>
      </div>
    </div>
  );
}
