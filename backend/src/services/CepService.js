class CepService {

    async buscarCep(cep) {

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!response.ok) {
            throw new Error("Erro ao consultar o CEP.");
        }

        const endereco = await response.json();

        if (endereco.erro) {
            throw new Error("CEP não encontrado.");
        }

        return endereco;

    }

}

module.exports = new CepService();