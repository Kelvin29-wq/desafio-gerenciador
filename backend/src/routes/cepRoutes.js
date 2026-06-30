const express = require("express");

const cepController = require("../controllers/CepController");

const router = express.Router();

router.get("/cep/:cep", cepController.buscarCep);

module.exports = router;