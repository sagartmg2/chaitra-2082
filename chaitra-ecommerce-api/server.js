// create a simple singup api
// login api

const express = require("express");
const bcrypt = require("bcrypt");
const z = require("zod");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/postgres",
  {
    logging: false,
  },
);

const User = sequelize.define(
  "User",
  {
    // id will be automatically created by sequalize.
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSeller: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "users",
    underscored: "true",
    timestamps: true,
  },
);

// const Product = sequelize.define(
//   "Product",
//   {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     isSeller: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: false,
//     },
//   },
//   {
//     tableName: "products",
//     underscored: "true",
//     timestamps: true,
//   },
// );

const app = express();

const port = 4000;
const saltRounds = 10;

app.use(express.json()); // middleware : to read data from req.body

app.get("/api", (req, res) => {
  res.send("welcome to chaitra ecommerce apiiii !");
});

// lets assume this is our database
// let users = [];

let users = [
  {
    name: "ram",
    email: "ram@gmail.com",
    password: "$2b$10$n8aujwhIgKc4lyouM9O.9e37xxxO/J2Z6qdrKLphlkamaAsgI28yy",
  },
];

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

  let user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash,
  });

  // users.push({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: hash,
  // });

  // core sql: insert into users (name,email,passwrd) values (req.body.name, .. ...... )
  // core mongodb sytanx: users.insertOne({name:"Ram","email":"ram@gmail.com","pasword":"2#$%@$#%34234"})

  // mongoose ORM: User.insertOne({.....})
  // sequalzie ORM : await User.create({name:"Ram","email":"ram@gmail.com","pasword":"2#$%@$#%34234"})

  // res.send(user);
  // res.status(204).send()
  res.send({msg:"user created successfully"})
});

app.post("/api/login", async (req, res) => {
  try {
    // let a = b + c;
    const UserValidationSchema = z.object({
      email: z.email(),
      password: z.string().min(8, { error: "min 8 chars required" }),
      // .regex(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      //   { message: "Password does not meet complexity requirements." },
      // ), // use this regex during signup
    });

    const result = UserValidationSchema.safeParse(req.body);
    console.log(result);

    if (!result.success) {
      const errors = z.flattenError(result.error);
      /* 
      {
        formErrors: [],
        fieldErrors: {
          email: [ 'Invalid input: expected string, received undefined' ],
          password: [ 'Invalid input: expected string, received undefined' ]
        }
      }
      */
      console.log(errors);

      // errors.formErrors = undefined;
      delete errors.formErrors;
      errors.errors = errors.fieldErrors;
      delete errors.fieldErrors;

      let err = {};
      let arr = Object.entries(errors.errors);

      arr.forEach((el) => {
        err[el[0]] = el[1].join(", ");
      });

      errors.errors = err;
      res.status(400).send(errors);
      return;
    }

    /* 
    400.send({
      errors: {
        email: 'Invalid input: expected string, received undefined'
        password:  'Invalid input: expected string, received undefined'
      }
    }

    400.send({
      errors: [
      {
        field:email
        msg: 'Invalid input: expected string, received undefined'
      },
      {
        field: password
        msg:'Invalid input: expected string, received undefined'
      }
      ]
    }
    
    */

    // let user = users.find((el) => el.email == req.body.email);
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // console.log("user",user);
    // console.log("user.password",user.password);

    if (user) {
      let matched = await bcrypt.compare(req.body.password, user.password);
      if (matched) {
        res.status(200).send({
          msg: "login success",
        });
        return;
      }
    }

    res.status(401).json({
      msg: "invalid credentials",
    });
  } catch (err) {
    console.log(err);
    console.log(err.name);
    console.log("message", err.message);
    console.log(err.errors);
    console.log(err.error);

    res.status(500).send({
      msg: "SERVER error",
      stack: err.stack,
    });
  }
});

const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    await sequelize.sync();
    console.log("DB Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDbConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
