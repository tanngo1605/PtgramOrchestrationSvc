const jwt = require("jsonwebtoken");
const MY_JWT_SECRET = "MY_JWT_SECRET";

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next();
  }

  jwt.verify(token, MY_JWT_SECRET, (err, decodedValue) => {
    if (err) {
      return next();
    }
    req.userInfo = decodedValue;
    next();
  });
};

exports.isLoggedIn = (req) => {
  return req.username !== null;
};
