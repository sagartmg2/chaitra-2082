// create a simple singup api
// login api

require("dotenv").config();
const express = require("express");

const z = require("zod");
require("./connections/database");

const Product = require("./models/Product");
const authRoutes = require("./routes/auth");

const app = express();
const port = 4000;

app.use(express.json()); // middleware : to read data from req.body
app.use(authRoutes);
app.get("/api", (req, res) => {
  res.send("welcome to chaitra ecommerce apiiii !");
});

app.get("/api/products", async (req, res) => {
  let products = await Product.findAll(); // select * from products
  res.send(products);
});

app.put("/api/products/:id", async (req, res) => {
  let token = req.headers.authorization?.replace("Bearer ", "");

  try {
    // var decoded = jwt.verify(token, "OUR-BACKEND-JWT-SECRET-KEY");
    var user = jwt.verify(token, process.env.JWT_SECRET);
    console.log({ user });
    res.send("products updated");
  } catch (err) {
    res.status(401).send();
  }

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

app.delete("/api/products/:id", async (req, res) => {
  // zoi validation

  let token = req.headers.authorization?.replace("Bearer ", "");

  try {
    // var decoded = jwt.verify(token, "OUR-BACKEND-JWT-SECRET-KEY");
    var user = jwt.verify(token, process.env.JWT_SECRET);
    console.log({ user });
    res.send("products deleted");
  } catch (err) {
    res.status(401).send();
  }

  return;
  const product = await Product.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.send("product deleted");
});

app.post("/api/products", async (req, res) => {
  // zoi validation

  // let token = req.headers.authorization.split(" ")[1]
  let token = req.headers.authorization?.replace("Bearer ", "");

  try {
    // var decoded = jwt.verify(token, "OUR-BACKEND-JWT-SECRET-KEY");
    var user = jwt.verify(token, process.env.JWT_SECRET);
    console.log({ user });

    if (user.isSeller) {
      let { title, price, stock } = req.body;
      let product = await Product.create({
        title: title,
        price,
        stock,
        userId: user.id,
      });

      res.send(product);
    } else {
      res.status(403).send({
        msg: "forbidden",
      });
    }

    return;
  } catch (err) {
    res.status(401).send({
      msg: "invalid credeinations",
      stack: process.env.APP_ENV === "local" ? err.stack : null,
    });
    return;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
