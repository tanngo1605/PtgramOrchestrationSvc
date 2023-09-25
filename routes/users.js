var express = require('express');
var router = express.Router();
const mockUsers = require("../mockdata/mockUsers")
const jwt = require("jsonwebtoken")
const MY_JWT_SECRET = "MY_JWT_SECRET";

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  const {username, userpassword, email} = req.body;
  const token = jwt.sign({username}, MY_JWT_SECRET, {
    expiresIn: "23h"
  })
  mockUsers[username] = userpassword;
  res.status(200).json({
    msg: "user created",
    username,
    email,
    token
  })
});

router.post('/login', function(req, res, next) {
  const {username, userpassword} = req.body;
  if(!mockUsers[username] || userpassword !== mockUsers[username]){
    console.log("Wrong")
    return res.status(400).json({
      msg: "Wrong username or password"
    })
  }
  const token = jwt.sign({username}, MY_JWT_SECRET, {
    expiresIn: "23h"
  })

  console.log({token})
  return res.status(200).json({
    msg: "user login",
    username,
    token
  })
});



module.exports = router;
