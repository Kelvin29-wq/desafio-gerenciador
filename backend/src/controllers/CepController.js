const cepService = require("../services/CepService");

class CepController {

  async buscarCep(req, res) {

    try {

      const { cep } = req.params;

      const endereco = await cepService.buscarCep(cep);

      return res.status(200).json(endereco);

    } catch (error) {

      return res.status(404).json({
        mensagem: error.message
      });

    }

  }

}

module.exports = new CepController();