const repository = require("../repositories/UsuarioRepository");
const bcrypt = require("bcrypt");

class UsuarioService {

  async criar(usuario) {

    if (!usuario.email) {
      throw new Error("Email obrigatório");
    }

    if (!usuario.senha) {
      throw new Error("Senha obrigatória");
    }

    usuario.senha = await bcrypt.hash(usuario.senha, 10);

    return repository.criar(usuario);

  }

}

module.exports = new UsuarioService();