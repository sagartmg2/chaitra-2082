const bcrypt = require("bcrypt");

const signup = (email, password) => {
  bcrypt.hash(password, 10, function (err, hash) {
    console.log(hash);
  });
};

const login = (email, password) => {
  console.log("login");
};

module.exports = signup; // default export


// named export
// module.exports.signup = signup;
// module.exports.login = login;

// module.exports = {
//   signup: signup,
//   login,
// };
