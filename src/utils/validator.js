const Joi = require("joi");

const validateRegisterInput = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const validateLoginInput = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

const validateOTP = (data) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    otp: Joi.string().length(6).required(),
  });

  return schema.validate(data);
};

const validateProductInput = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().max(500).allow(""),
    price: Joi.number().positive().required(),
  });

  return schema.validate(data);
};

module.exports = {
  validateRegisterInput,
  validateLoginInput,
  validateOTP,
  validateProductInput,
};
