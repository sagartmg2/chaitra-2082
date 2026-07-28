require("dotenv").config();
const express = require("express");
const sequelize = require("./connections/database");
require("./models/index");
const app = express();
const port = 4000;
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const categoryRoutes = require("./routes/category");


// http://api.facebook.com/uploads/mouse.png
// cloudinary

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
app.use("/api/carts", cartRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/api", middleware2, middleware1, (req, res) => {
  res.send("welcome to chaitra ecommerce apiiii !");
});

const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true }); // NOTE: this will remove all the datas from database
    await sequelize.sync();
    console.log("DB Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  checkDbConnection();
});
