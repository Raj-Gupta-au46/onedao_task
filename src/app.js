const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { errorHandler } = require("./utils/errorHandler");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const otpRoutes = require("./routes/otpRoutes");

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(morgan("dev")); // HTTP request logging
app.use(express.json()); // JSON request body parsing
app.use(express.urlencoded({ extended: true })); // URL-encoded request body parsing

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/otp", otpRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Global error handler (catch all errors)
app.use(errorHandler);

module.exports = app;
