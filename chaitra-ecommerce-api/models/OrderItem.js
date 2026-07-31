const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const User = require("./User");
const Order = require("./Order");
const SubOrder = require("./SubOrder");
const Product = require("./Product");

const OrderItem = sequelize.define(
  "OrderItem",
  {
    subOrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SubOrder,
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "order_items",
    underscored: "true",
    timestamps: true,
  },
);

module.exports = OrderItem;
