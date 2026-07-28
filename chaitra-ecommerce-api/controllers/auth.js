const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const z = require("zod");

const signup = async (req, res) => {
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
  res.send({ msg: "user created successfully" });
};

const login = async (req, res) => {
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
        // const token = jwt.sign(
        //   { id: user.id, firstName: user.firstName, email: user.email },
        //   "OUR-BACKEND-JWT-SECRET-KEY",
        // );
        const token = jwt.sign(
          {
            id: user.id,
            firstName: user.firstName,
            isSeller: user.isSeller,
            isAdmin: user.isAdmin,
            email: user.email,
          },
          process.env.JWT_SECRET,
        );

        res.status(200).send({
          msg: "login success",
          token,
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
};

// named exports
// module.exports.login = login;
// module.exports.signup = signup;

module.exports = {
  login,
  signup: signup,
};
