const { DataTypes } = require("sequelize");
const Sequelize = require("../config/db").sequelize;

const UserOtp = Sequelize.define(
  "UserOtp",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp_expiry: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "user_otps",
    underscored: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Sequelize.sync({ force: true })
  .then(() => console.log("✅ UserOtp model synced"))
  .catch((error) => console.log("❌ UserOtp model sync error:", error));

module.exports = UserOtp;
