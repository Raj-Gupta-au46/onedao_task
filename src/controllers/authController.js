const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { getCountryFromIP } = require("../services/geoLocationService");
const {
  validateRegisterInput,
  validateLoginInput,
  validateOTP,
} = require("../utils/validator");
const { BadRequestError, UnauthorizedError } = require("../utils/errorHandler");
const { sendOTP } = require("../services/emailService");
const { Op } = require("sequelize");
const { generateToken } = require("../config/jwt");

const register = async (req, res, next) => {
  try {
    const { email, password, confirmPassword } = req.body;

    let role = "admin";
    // Validate input
    const { error } = validateRegisterInput({
      email,
      password,
      confirmPassword,
    });
    if (error) throw new BadRequestError(error.details[0].message);

    // Get country from IP
    const ip = req.ip || req.connection.remoteAddress;
    const country = await getCountryFromIP(ip);

    const restrictedCountries = [
      "Syria",
      "Afghanistan",
      "Iran",
      "North Korea",
      "Cuba",
    ];
    if (restrictedCountries.includes(country)) {
      throw new UnauthorizedError(
        "Registration is not allowed from your country"
      );
    }

    // Check if user exists
    // const existingUser = await User.findOne({ where: { email } });
    // if (existingUser) throw new BadRequestError("Email already in use");

    // Create user

    const user = await User.create({
      email,
      password,
      country,
      role,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: user.id,
    });
  } catch (err) {
    next(err);
  }
};
const verifyOTP = async (req, res, next) => {
  try {
    const { userId, otp } = req.body;

    // Validate input
    const { error } = validateOTP({ userId, otp });
    if (error) throw new BadRequestError(error.details[0].message);

    // Verify OTP
    const user = await User.verifyOTP(userId, otp);
    if (!user) throw new BadRequestError("Invalid or expired OTP");

    // Generate token
    const token = await User.generateAuthToken(user);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isVerified: user.is_verified,
      },
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    const { error } = validateLoginInput({ email, password });
    if (error) throw new BadRequestError(error.details[0].message);

    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) throw new BadRequestError("Invalid credentials");

    // Check password (in a real app, you would use bcrypt.compare)
    if (user.password !== password)
      throw new BadRequestError("Invalid credentials");

    // Generate token
    const token = await generateToken(user);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isVerified: user.is_verified,
      },
    });
  } catch (err) {
    next(err);
  }
};

const resendOTP = async (req, res, next) => {
  try {
    const { userId } = req.body;

    if (!userId) throw new BadRequestError("User ID is required");

    const user = await User.findById(userId);
    if (!user) throw new BadRequestError("User not found");

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await User.updateOTP(user.id, otp);
    await sendOTP(user.email, otp);

    res.status(200).json({
      success: true,
      message: "New OTP sent to your email",
    });
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) throw new BadRequestError("Email is required");

    const user = await User.findOne({ where: { email } });
    if (!user) throw new BadRequestError("User not found");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    await user.update({ otp, otp_expiry: expiry });

    await sendOTP(email, otp); // You must implement this in emailService

    res.status(200).json({ success: true, message: "OTP sent to email" });
  } catch (err) {
    next(err);
  }
};

// Reset password using OTP
const resetPassword = async (req, res, next) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword)
      throw new BadRequestError("Email, OTP, and new password are required");

    const user = await User.findOne({
      where: {
        email,
        otp,
        otp_expiry: { [Op.gt]: new Date() }, // OTP is not expired
      },
    });

    if (!user) throw new BadRequestError("Invalid or expired OTP");

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await user.update({
      password: hashedPassword,
      otp: null,
      otp_expiry: null,
    });

    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  verifyOTP,
  login,
  resendOTP,
  forgotPassword,
  resetPassword,
};
