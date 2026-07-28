const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkAuthentication = (req, res, next) => {
  console.log("checking authentication....");
  let token = req.headers.authorization?.replace("Bearer ", "");
  try {
    var user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({
      msg: "invalid credentails | intercepted by middleware",
      error: process.env.APP_ENV == "local" ? err.message : null,
      stack: process.env.APP_ENV == "local" ? err.statck : null,
    });
  }
};

module.exports = checkAuthentication;
