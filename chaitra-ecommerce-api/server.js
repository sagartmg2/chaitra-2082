require("dotenv").config();
const express = require("express");
require("./connections/database");
require("./models/index");

const app = express();
const port = 4000;
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

app.use(express.json()); // global middleware : applicable to all api routes |  to read data from req.body
// app.use(checkAuthentication) // global middelware

const middleware1 = (req, res, next) => {
  console.log("middelware1");
  next(); //netx valid middeleware in line
};

const middleware2 = (req, res, next) => {
  console.log("middelware2");
  next();
};

// app.use(middleware1); // global middleware
// app.use(middleware2); // global middleware
app.use(authRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.get("/api", middleware2, middleware1, (req, res) => {
  res.send("welcome to chaitra ecommerce apiiii !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
