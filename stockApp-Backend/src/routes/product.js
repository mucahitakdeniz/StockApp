"use strict";

const router = require("express").Router();

const product = require("../controllers/product");

const permissions = require("../middlewares/permissions");

router
  .route("/")
  .get(permissions.is_staff, product.list)
  .post(permissions.is_staff, product.create);
router
  .route("/:id")
  .get(permissions.is_staff, product.read)
  .put(permissions.is_staff, product.update)
  .patch(permissions.is_staff, product.update)
  .delete(permissions.is_admin, product.delete);

module.exports = router;