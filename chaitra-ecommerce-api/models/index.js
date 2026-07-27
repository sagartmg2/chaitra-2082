// model associations

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



// User.hasMany(Product)
// Product.belongsTo(User)
