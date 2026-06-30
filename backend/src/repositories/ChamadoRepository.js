const prisma = require("../config/prisma");

class ChamadoRepository {

  async listar() {
    return await prisma.chamado.findMany();
  }

  async criar(dados) {
    return await prisma.chamado.create({
      data: dados
    });
  }

  async buscarPorId(id) {
    return await prisma.chamado.findUnique({
      where: { id: parseInt(id) }
    });
  }

  async atualizar(id, dados) {
    return await prisma.chamado.update({
      where: { id: parseInt(id) },
      data: dados
    });
  }

  async excluir(id) {
    return await prisma.chamado.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = new ChamadoRepository();