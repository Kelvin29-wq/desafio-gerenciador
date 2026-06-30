const service = require("../services/UsuarioService");

class UsuarioController {

  async criar(req, res) {
    const { email, senha } = req.body;

    const usuario = await service.criar({ email, senha });


    return res.status(201).json(usuario);

  }

  

}

module.exports = new UsuarioController();