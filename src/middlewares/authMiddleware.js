const { verifyToken } = require("../config/jwt");
const User = require("../models/userModel");
const { UnauthorizedError } = require("../utils/errorHandler");

/**
 * Middleware to authenticate and authorize based on user roles.
 * @param {...string} allowedRoles - Roles that are allowed (e.g., 'admin', 'user').
 */
const authenticate = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      let token;

      // Check for Bearer token in headers
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (!token) {
        throw new UnauthorizedError("Not authorized to access this route");
      }

      // Verify token
      const decoded = verifyToken(token);

      // Fetch user from DB
      const user = await User.findByPk(decoded.id); // Use findByPk for Sequelize
      if (!user) {
        throw new UnauthorizedError("User no longer exists");
      }

      // Check role authorization if roles are specified
      if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user.role.toLowerCase())
      ) {
        throw new UnauthorizedError(
          "You do not have permission to access this resource"
        );
      }

      req.user = user; // Attach user to request
      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = { authenticate };
