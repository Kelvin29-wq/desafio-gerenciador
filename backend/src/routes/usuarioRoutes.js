const express = require("express");

const controller = require("../controllers/UsuarioController");

const router = express.Router();

router.post("/usuarios", controller.criar);

module.exports = router;