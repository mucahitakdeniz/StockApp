"use strict";

const router = require("express").Router();

const user = require("../controllers/user");
const {is_login}=require('../middlewares/permissions')
router.use(is_login)
router.route("/").get(user.list).post(user.create);
router
  .route("/:id")
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.delete);

  module.exports=router