/* 
    module:
        1. common js
            require: 
            module.exports

        2. ES modoule  // react
            import ... from ...
            exprot default ...


*/

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let products = [
  { id: 1, title: "mouse" },
  { id: 2, title: "keyboard" },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.post("/api/products", (req, res) => {
  // store in database
  products.push({ id: 2, title: req.body.title });
  console.log(req.body.title);
  res.send("product created");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
