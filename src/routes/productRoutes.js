const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/authMiddleware");
const productController = require("../controllers/productController");

// Route to get all products
router
  .route("/getAll")
  .get(authenticate("user", "admin"), productController.getAllProducts); // Allow users and admins to view all products

// Route to create a new product
router
  .route("/create")
  .post(authenticate("admin"), productController.createProduct); // Only admin can create a product

// Routes for a single product, with the product ID as a parameter
router
  .route("/:id")
  .get(authenticate("user", "admin"), productController.getProduct) // Allow users and admins to view a specific product
  .put(authenticate("admin"), productController.updateProduct) // Only admin can update a product
  .delete(authenticate("admin"), productController.deleteProduct); // Only admin can delete a product

module.exports = router;
