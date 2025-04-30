const { DataTypes } = require("sequelize");
const Sequelize = require("../config/db").sequelize;

const User = Sequelize.define(
  "User",
  {
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
  },
  {
    tableName: "users",
    underscored: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// Sync the model (only once or controlled externally)
Sequelize.sync({ force: true })
  .then(() => console.log("✅ User model synced"))
  .catch((error) => console.log("❌ User model sync error:", error));

module.exports = User;
