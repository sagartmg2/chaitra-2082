// model associations

const User = require("./User");
const Cart = require("./Cart");
const Product = require("./Product");

Cart.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});

Product.hasMany(Cart, {
  foreignKey: "productId",
  as: "Carts",
});

User.hasMany(Product, {
  foreignKey: "userId",
  as: "products",
});

// User.hasMany(Product)
// Product.belongsTo(User)
