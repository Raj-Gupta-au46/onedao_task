import React, { useState } from "react";

export function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleSendOtp = () => {
    if (!email) return alert("Please enter your email");
    // Call backend API to send OTP here
    console.log("Sending OTP to:", email);
    setStep(2);
  };

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-2">Forgot Password</h2>
            <p className="text-sm text-gray-500 mb-4">
              Enter your email to receive an OTP
            </p>
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
                placeholder="Enter your email"
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold mb-2">Enter OTP</h2>
            <p className="text-sm text-gray-500 mb-4">
              We've sent a 6-digit OTP to <strong>{email}</strong>
            </p>
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
                  className="w-10 h-10 text-center text-lg border rounded focus:outline-none focus:ring focus:ring-gray-300"
                />
              ))}
            </div>
            <button
              className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
              onClick={() => console.log("Entered OTP:", otp.join(""))}
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}
