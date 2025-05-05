import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/path";
import { registerUser } from "../../actions/register";

export function Register() {
  // eslint-disable-next-line no-unused-vars
  const [currentTab, setCurrentTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [currentMonth, setCurrentMonth] = useState("Aug 2021");

  // Static credentials for admin access
  const ADMIN_EMAIL = "admin@example.com";
  const ADMIN_PASSWORD = "Admin123!";

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Password validation
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    const res = await registerUser(email, password, confirmPassword);
    if (res?.success) {
      navigate(paths.auth.otp);
    } else {
      setErrorMessage(res?.message ?? "Unable to register");
    }

    setErrorMessage("");
    setCurrentTab("otp");
  };

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(paths.auth.login);
  };

  return (
    <>
      <div className="w-screen h-screen flex">
        {/* Left side - image */}
        <div className="w-1/2 bg-gradient-to-b from-gray-600 to-gray-900 flex items-end">
          <img
            src="/api/placeholder/400/500"
            alt="Mountains silhouette"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - form */}
        <div className="w-1/2 bg-white p-20 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Register to Admin Panel</h2>
          <p className="text-gray-500 text-sm mb-6">
            Enter your credentials and password below
          </p>

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-600 text-sm rounded">
              {errorMessage}
            </div>
          )}

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xs font-semibold mb-1"
              htmlFor="email"
            >
              EMAIL ID
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email id"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xs font-semibold mb-1"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-xs font-semibold mb-1"
              htmlFor="confirm-password"
            >
              CONFIRM PASSWORD
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Enter your confirm password"
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 w-full"
            onClick={handleRegister}
          >
            Register
          </button>

          {/* Link to Login */}
          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={handleRoute}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
