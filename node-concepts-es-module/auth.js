// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";

const signup = (email, password) => {
  bcrypt.hash(password, 10, function (err, hash) {
    console.log("signup function");
    console.log(hash);
  });
};

export const login = (email, password) => {
  console.log("login");
};

// module.exports = signup; // default export

export const ADMIN = "admin";

export default signup;

// named export
// module.exports.signup = signup;
// module.exports.login = login;

// module.exports = {
//   signup: signup,
//   login,
// };
