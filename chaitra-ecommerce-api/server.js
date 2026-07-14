// create a simple singup api
// login api

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // middleware : to read data from req.body

app.get("/", (req, res) => {
  res.send("welcome to chaitra ecommerce api !");
});

// lets assume this is our database
let users = [];

// let users = [{
//     "name":"ram",
//     "eamil":"ram@gamil.com",
//     "password": "Q$#ASDFASDFAQ$%@SDFADF"
// }];

app.post("/api/signup", (req, res) => {
  // bcrypt
  res.send("user created succesfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
