// create a simple singup api
// login api

const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const port = 4000;
const saltRounds = 10;

app.use(express.json()); // middleware : to read data from req.body

app.get("/api", (req, res) => {
  res.send("welcome to chaitra ecommerce apiiii !");
});

// lets assume this is our database
let users = [];

// let users = [{
//     "name":"ram",
//     "eamil":"ram@gamil.com",
//     "password": "Q$#ASDFASDFAQ$%@SDFADF"
// }];

app.post("/api/signup-1", (req, res) => {
  // validations
  // receive data from req.body
  // using bcrypt has the password
  // store in database

  // bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // User.create({name:"Ram"},(data,err) =>{
  // callback hell
  // })
  // });

  bcrypt.hash(req.body.password, 10).then((hash) => {
    users.push({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    res.send(users);
  });
});

app.post("/api/signup", async (req, res) => {
  // validations using zod
  // receive data from req.body
  // using bcrypt has the password
  // store in database

  if (!req.body.password) {
    res.status(400).send({
      msg: "Validation Error",
      errors: [
        {
          field: "password",
          msg: "required",
        },
      ],
    });
  }

  if (req.body.password && req.body.password.length < 8) {
    res.status(400).send({
      msg: "Validation Error",
      errors: [
        {
          field: "password",
          msg: "min 8 charcs reuired ",
        },
      ],
    });
  }

  let hash = await bcrypt.hash(req.body.password, 10);

  users.push({
    name: req.body.name,
    email: req.body.email,
    password: hash,
  });

  // core sql: insert into users (name,email,passwrd) values (req.body.name, .. ...... )
  // core mongodb sytanx: users.insertOne({name:"Ram","email":"ram@gmail.com","pasword":"2#$%@$#%34234"})

  // mongoose ORM: User.insertOne({.....})
  // sequalzie ORM : await User.create({name:"Ram","email":"ram@gmail.com","pasword":"2#$%@$#%34234"})

  res.send(users);
});

app.post("/api/login", (req, res) => {
  // check if the users exits
  // check if password match
  //
  
  // let token = jwt.sign(userInfo,SECRETEKET)


  // res.status(200)
  // res.status(401).

  res.status(200).send({
    msg:"login success"
  })
  
  // res.status(401).json({
  //   status: false,
  //   msg: "invalid credentials",
  // });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
