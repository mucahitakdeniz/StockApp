"use strict";

const router = require("express").Router();

const auth = require("../controllers/auth");

router.route("/").post(auth.login);

module.exports=router
