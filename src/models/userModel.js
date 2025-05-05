const { DataTypes } = require("sequelize");
const Sequelize = require("../config/db").sequelize;

const User = Sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(100),
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "user",
      validate: {
        isIn: [["user", "admin"]],
      },
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    otp: {
      type: DataTypes.STRING(6), // 6-digit OTP as string
      allowNull: true,
    },
  },
  {
    tableName: "users",
    underscored: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// Sync the model (only use `alter: true` in dev)
Sequelize.sync({ force: false })
  .then(() => console.log("✅ User model synced"))
  .catch((error) => console.log("❌ User model sync error:", error));

module.exports = User;
