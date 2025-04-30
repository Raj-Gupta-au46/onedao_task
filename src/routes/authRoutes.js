const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { checkCountryRestriction } = require("../middlewares/countryMiddleware");

router.post("/register", checkCountryRestriction, authController.register);
router.post("/verify-otp", authController.verifyOTP);
router.post("/login", authController.login);
router.post("/resend-otp", authController.resendOTP);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
