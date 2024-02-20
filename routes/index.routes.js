const express = require("express");
const router = express.Router();
const indexController = require("../controller/index");

// Ruta para iniciar sesión

router.get("/:id",indexController.detalleProduct);
router.get("/",indexController.detalleProduct)



module.exports = router;