// create a simple singup api
// login api

require("dotenv").config();
const express = require("express");

const z = require("zod");
require("./connections/database");
const jwt = require("jsonwebtoken");

const Product = require("./models/Product");
const authRoutes = require("./routes/auth");
const app = express();
const port = 4000;

const checkAuthentication = (req, res, next) => {
  console.log("checking authentication....");
  let token = req.headers.authorization?.replace("Bearer ", "");
  try {
    var user = jwt.verify(token, process.env.JWT_SECRET);
    console.log(user);
    req.user = user
    next();
  } catch (err) {
    res.status(401).send({
      msg: "invalid credentails | intercepted by middleware",
      error: process.env.APP_ENV == "local" ? err.message : null,
      stack: process.env.APP_ENV == "local" ? err.statck : null,
    });
  }
};

app.use(express.json()); // global middleware : applicable to all api routes |  to read data from req.body
// app.use(checkAuthentication) // global middelware
app.use(authRoutes);

app.get("/api", (req, res) => {
  res.send("welcome to chaitra ecommerce apiiii !");
});

app.get("/api/products", async (req, res) => {
  let products = await Product.findAll(); // select * from products
  res.send(products);
});

// route level middleware
app.post("/api/products", checkAuthentication, async (req, res) => {
  // zoi validation

  if (req.user.isSeller ) {
    let { title, price, stock } = req.body;
    let product = await Product.create({
      title: title,
      price,
      stock,
      userId: req.user.id,
    });

    res.send(product);
  } else {
    res.status(403).send({
      msg: "forbidden",
    });
  }
});

app.put("/api/products/:id", checkAuthentication, async (req, res) => {
  res.send("products updated");
  return;
  // zoi validation
  console.log(req.params.id);

  const product = await Product.update(
    {
      title: req.body.title,
      price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  );

  res.send("product update");
});

app.delete("/api/products/:id", checkAuthentication, async (req, res) => {
  console.log("porocuts deleting....");
  res.send("products deleted");
  return;
  const product = await Product.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.send("product deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
