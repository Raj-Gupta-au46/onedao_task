const { DataTypes } = require("sequelize");
const Sequelize = require("../config/db").sequelize;

const Product = Sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
        min: 0,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: "products",
    underscored: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// Sync the model (recommended to control force externally)
Sequelize.sync({ force: true })
  .then(() => console.log("✅ Product model synced"))
  .catch((error) => console.error("❌ Product model sync error:", error));

module.exports = Product;
