const bcrypt = require("bcrypt");
const usuarioRepository = require("../repositories/UsuarioRepository");

class AuthService {

  async login(email, senha) {

    const usuario = await usuarioRepository.buscarPorEmail(email);

    if (!usuario) {
      throw new Error("E-mail ou senha inválidos.");
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      throw new Error("E-mail ou senha inválidos.");
    }

    return usuario;

  }

}

module.exports = new AuthService();