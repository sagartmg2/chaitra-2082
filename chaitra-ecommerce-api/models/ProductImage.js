const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const Product = require("./Product");

const ProductImage = sequelize.define(
  "ProductImage",
  {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "product_images",
    underscored: "true",
    timestamps: true,
  },
);

module.exports = ProductImage;
