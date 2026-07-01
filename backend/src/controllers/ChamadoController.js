const chamadoService = require("../services/ChamadoService");

class ChamadoController {

  async listar(req, res) {

    try {

      const chamados = await chamadoService.listar();

      return res.status(200).json(chamados);

    } catch (error) {

      return res.status(500).json({
        mensagem: "Erro ao listar os chamados.",
        erro: error.message
      });

    }

  }

  async criar(req, res) {

    try {
      
      const chamado = await chamadoService.criar(req.body);

      return res.status(201).json(chamado);

    } catch (error) {

      return res.status(500).json({
        mensagem: "Erro ao criar o chamado.",
        erro: error.message
      });

    }

  }

  async buscarPorId(req, res) {
    try {
      const chamado = await chamadoService.buscarPorId(req.params.id);
      if (!chamado) {
        return res.status(404).json({ mensagem: "Chamado não encontrado." });
      }
      return res.status(200).json(chamado);
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro ao buscar o chamado.",
        erro: error.message
      });
    }
  }

  async atualizar(req, res) {
    try {
      const chamado = await chamadoService.atualizar(req.params.id, req.body);
      return res.status(200).json(chamado);
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro ao atualizar o chamado.",
        erro: error.message
      });
    }
  }

  async excluir(req, res) {
    try {
      await chamadoService.excluir(req.params.id);
      return res.status(200).json({ mensagem: "Chamado excluído com sucesso." });
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro ao excluir o chamado.",
        erro: error.message
      });
    }
  }
}

module.exports = new ChamadoController();