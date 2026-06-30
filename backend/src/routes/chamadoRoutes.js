const express = require("express");

const chamadoController = require("../controllers/ChamadoController");

const router = express.Router();

// GET /chamados
router.get("/chamados", chamadoController.listar);

// POST /chamados
router.post("/chamados", chamadoController.criar);

// GET /chamados/:id
router.get("/chamados/:id", chamadoController.buscarPorId);

// PUT /chamados/:id
router.put("/chamados/:id", chamadoController.atualizar);

// DELETE /chamados/:id
router.delete("/chamados/:id", chamadoController.excluir);

module.exports = router;