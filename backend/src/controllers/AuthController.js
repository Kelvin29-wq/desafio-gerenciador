const authService = require("../services/AuthService");

class AuthController {

  async login(req, res) {

    try {

      const { email, senha } = req.body;

      const usuario = await authService.login(email, senha);

      return res.status(200).json({
        mensagem: "Login realizado com sucesso.",
        id: usuario.id,
        email: usuario.email
      });

    } catch (error) {

      return res.status(401).json({
        mensagem: error.message
      });

    }

  }

}

module.exports = new AuthController();