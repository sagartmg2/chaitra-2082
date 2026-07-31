const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const User = require("./User");
const Order = require("./Order");

const SubOrder = sequelize.define(
  "SubOrder",
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: "id",
      },
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    shippingCharge: {
      // snapshot
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "sub_orders",
    underscored: "true",
    timestamps: true,
  },
);

module.exports = SubOrder;
