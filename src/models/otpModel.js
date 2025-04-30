const { DataTypes } = require("sequelize");
const Sequelize = require("../config/db").sequelize;

const UserOtp = Sequelize.define(
  "UserOtp",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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

// First run a query to drop the conflicting sequences if they exist
async function syncModel() {
  try {
    // Try to drop conflicting sequences first
    await Sequelize.query(
      `
      DROP SEQUENCE IF EXISTS "users_id_seq" CASCADE;
    `
    ).catch((err) =>
      console.log(
        "Sequence drop error (can be ignored if doesn't exist):",
        err.message
      )
    );

    // Then sync the model
    await UserOtp.sync({ alter: true });
    console.log("✅ UserOtp model synced");
  } catch (error) {
    console.log("❌ UserOtp model sync error:", error);
  }
}

syncModel();

module.exports = UserOtp;
