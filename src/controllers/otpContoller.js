const User = require("../models/userModel");
const UserOtp = require("../models/otpModel");
const { Op } = require("sequelize");

// Helper to generate a 6-digit OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// 15 minutes in milliseconds
const OTP_EXPIRY_MINUTES = 15;

const sendOtp = async (req, res) => {
  const { email, type } = req.body;

  if (!email || !type) {
    return res.status(400).json({ message: "Email and type are required." });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found." });

    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

    await UserOtp.create({
      user_id: user.id,
      otp,
      type,
      expires_at: expiresAt,
    });

    // In real life, you'd send the OTP via email or SMS
    console.log(`OTP for ${email}: ${otp}`);

    return res.status(200).json({ message: "OTP sent successfully." });
  } catch (err) {
    console.error("Error sending OTP:", err);
    return res.status(500).json({ message: "Server error." });
  }
};

const verifyOtp = async (req, res) => {
  const { email, otp, type } = req.body;

  if (!email || !otp || !type) {
    return res
      .status(400)
      .json({ message: "Email, OTP, and type are required." });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found." });

    const otpEntry = await UserOtp.findOne({
      where: {
        user_id: user.id,
        otp,
        type,
        is_used: false,
        expires_at: { [Op.gt]: new Date() }, // not expired
      },
      order: [["created_at", "DESC"]],
    });

    if (!otpEntry) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    // Mark as used
    otpEntry.is_used = true;
    await otpEntry.save();

    // You could also perform user-specific logic here, e.g.:
    // if (type === "email_verification") user.is_verified = true;

    return res.status(200).json({ message: "OTP verified successfully." });
  } catch (err) {
    console.error("Error verifying OTP:", err);
    return res.status(500).json({ message: "Server error." });
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
};
