"use strict";

const router = require("express").Router();

const user = require("../controllers/user");

router.route("/").get(user.list).post(user.create);
router
  .route("/:id")
  .get(user.read)
  .put(user.update)
  .patch(user.create)
  .delete(user.delete);

  module.export=router