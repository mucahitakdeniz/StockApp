"use strict";

const User = require("../models/user");
const Token = require("../models/token");
const passEnc = require("../helpers/passwordEncrypt");

module.exports = {
  login: async (req, res) => {
    const { email, username, password } = req.body;
    if ((email || username) && password) {
      const user = await User.findOne({ $or: [{ email }, { username }] });

      if (user && user.password == passEnc(password)) {
        if (user.is_active) {
          let tokenData = await Token.findOne({ _id: user._id });
          if (tokenData) {
            res.send({ token: tokenData, user });
          } else {
            tokenData = await Token.create({
              user_id: user._id,
              token: passEnc(user._id + Date.now()),
            });
            res.send({ token: tokenData, user });
          }
        } else {
          res.errorStatusCode = 401;
          throw new Error("This account is not active");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong username/email or password");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please enter username/email and password");
    }
  },
  logout: async (req, res) => {
    
  },
};
