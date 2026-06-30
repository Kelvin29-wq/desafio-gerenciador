const chamadoRepository = require("../repositories/ChamadoRepository");

class ChamadoService {

  async listar() {
    return await chamadoRepository.listar();
  }

  async criar(dados) {
    return await chamadoRepository.criar(dados);
  }

  async buscarPorId(id) {
    return await chamadoRepository.buscarPorId(id);
  }

  async atualizar(id, dados) {
    return await chamadoRepository.atualizar(id, dados);
  }

  async excluir(id) {
    return await chamadoRepository.excluir(id);
  }

}

module.exports = new ChamadoService();