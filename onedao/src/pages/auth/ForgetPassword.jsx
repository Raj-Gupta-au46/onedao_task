import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../../actions/otpVerify";
import { paths } from "../../routes/path";

export function OtpVerification({ userId = "1", email = "user@example.com" }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) document.getElementById(`otp-${index + 1}`).focus();
    else if (!value && index > 0)
      document.getElementById(`otp-${index - 1}`).focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" && index === 5 && otp[5] !== "") handleOtp();
  };

  const handleOtp = async () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setErrorMessage("Please enter a complete 6-digit OTP");
      return;
    }

    try {
      setErrorMessage("");
      setSuccessMessage("");
      setIsVerifying(true);

      const res = await verifyOtp(userId, otpValue);

      if (res?.success) {
        setSuccessMessage("OTP verified! Redirecting...");
        setTimeout(() => {
          navigate(paths.auth.login, {
            state: { message: "OTP verified. Please log in." },
          });
        }, 1500);
      } else {
        setErrorMessage(res?.message || "Invalid OTP");
      }
    } catch (err) {
      setErrorMessage("Verification failed. Try again.", err);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">Enter OTP</h2>
        <p className="text-sm text-gray-500 mb-4">
          We've sent a 6-digit OTP to <strong>{email}</strong>
        </p>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 text-sm rounded">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-600 text-sm rounded">
            {successMessage}
          </div>
        )}

        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-10 text-center text-lg border rounded focus:outline-none focus:ring focus:ring-gray-300"
              autoFocus={index === 0}
              disabled={isVerifying}
            />
          ))}
        </div>

        <button
          className={`w-full py-2 rounded ${
            isVerifying ? "bg-gray-400" : "bg-black hover:bg-gray-800"
          } text-white`}
          onClick={handleOtp}
          disabled={isVerifying}
        >
          {isVerifying ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
}
