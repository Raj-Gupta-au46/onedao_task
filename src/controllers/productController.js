const Product = require("../models/productModel");
const { validateProductInput } = require("../utils/validator");
const { BadRequestError, NotFoundError } = require("../utils/errorHandler");

const getAllProducts = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = "created_at",
      sortOrder = "DESC",
    } = req?.query;

    // Get products with pagination
    const products = await Product.findAll(req.user.id, {
      page,
      limit,
      sortBy,
      sortOrder,
    });

    // Get total count for pagination info
    const total = await Product.count(req.user.id);

    res.status(200).json({
      success: true,
      data: products,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    next(err);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id, req.user.id);
    if (!product) throw new NotFoundError("Product not found");

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  console.log("hiiiiiiiiiiii");
  try {
    const { name, description, price } = req.body;

    // Validate input
    const { error } = validateProductInput({ name, description, price });
    if (error) throw new BadRequestError(error.details[0].message);

    const product = await Product.create({
      name,
      description,
      price,
      userId: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const { id } = req.params;

    // Validate input
    const { error } = validateProductInput({ name, description, price });
    if (error) throw new BadRequestError(error.details[0].message);

    const product = await Product.update(id, req.user.id, {
      name,
      description,
      price,
    });
    if (!product) throw new NotFoundError("Product not found");

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Product.delete(id, req.user.id);

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
