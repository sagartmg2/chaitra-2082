const { DataTypes } = require("sequelize");
const sequelize = require("../connections/database");
const Product = require("./Product");
const User = require("./User");

const Cart = sequelize.define(
  "Cart",
  {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
  },
  {
    tableName: "carts",
    underscored: "true",
    timestamps: true,
  },
);



module.exports = Cart;
// export default Cart
