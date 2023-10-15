var express = require("express");
var router = express.Router();
const mockUsers = require("../mockdata/mockUsers");
const jwt = require("jsonwebtoken");
const MY_JWT_SECRET = "MY_JWT_SECRET";
const { getUserToken } = require("../supportedRPC");
const { default: axios } = require("axios");
const { APPL_SVC_URL } = process.env;

router.post("/signup", function (req, res, next) {
  res.status(200).json({
    msg: "user created",
    username,
  });
});

router.post("/login", async function (req, res, next) {
  const { username, password } = req.body;
  try {
    const rpcRes = await axios.post(`${APPL_SVC_URL}/${getUserToken}`, {
      username,
      password,
    });

    const { result } = rpcRes.data;

    return res.status(200).json({
      msg: "user login",
      username,
      token: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err,
    });
  }
});

module.exports = router;
