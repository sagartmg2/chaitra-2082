// model associations

const User = require("./User");
const Cart = require("./Cart");
const Product = require("./Product");
const Category = require("./Category");
const SubOrder = require("./SubOrder");
const OrderItem = require("./OrderItem");
const ProductImage = require("./ProductImage");

Cart.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});

Product.hasMany(Cart, {
  foreignKey: "productId",
  as: "Carts",
});

Product.hasMany(ProductImage, {
  foreignKey: "productId",
  as: "images",
});

User.hasMany(Product, {
  foreignKey: "userId",
  as: "products",
});

Product.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Category.hasMany(Product, {
  foreignKey: "categoryId",
  as: "products",
});

console.log("binded");

// User.hasMany(Product)
// Product.belongsTo(User)
