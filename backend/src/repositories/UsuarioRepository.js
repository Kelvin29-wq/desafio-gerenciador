const prisma = require("../config/prisma");

class UsuarioRepository {

  async criar(usuario) {

    return prisma.login.create({
      data: usuario
    });

  }

  async buscarPorEmail(email) {

    return prisma.login.findUnique({
      where: {
        email: email
      }
    });

  }

}

module.exports = new UsuarioRepository();