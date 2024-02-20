const express = require("express");
const router = express.Router();
const indexController = require("../controller/index");

router.get("/", indexController.home);
router.get("/:id",indexController.detalleProduct)


module.exports = router;