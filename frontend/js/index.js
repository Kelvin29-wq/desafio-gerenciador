
const btnBuscarCep = document.getElementById("btnBuscarCep");

btnBuscarCep.addEventListener("click", async () => {

  const cep = document.getElementById("cep").value;

  if (!cep) {

    mostrarMensagem("Atenção", "Digite um CEP.", "⚠️");

    return;

  }

  try {

    const endereco = await buscarCep(cep);

    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;

  } catch (error) {

    mostrarMensagem("Erro", error.message, "❌");

  }

});



const formulario = document.getElementById("formChamado");

formulario.addEventListener("submit", async (event) => {

  event.preventDefault();

 
  const chamado = {

    nome: document.getElementById("nome").value,

    email: document.getElementById("email").value,

    telefone: document.getElementById("telefone").value,

    setor: document.getElementById("setor").value,

    titulo: document.getElementById("titulo").value,

    descricao: document.getElementById("descricao").value,

    prioridade: document.getElementById("prioridade").value,

    cep: document.getElementById("cep").value,

    rua: document.getElementById("rua").value,

    numero: document.getElementById("numero").value,

    complemento: document.getElementById("complemento").value,

    bairro: document.getElementById("bairro").value,

    cidade: document.getElementById("cidade").value,

    estado: document.getElementById("estado").value

  };

  try {

    await criarChamado(chamado);

    mostrarMensagem(
      "Sucesso",
      "Chamado aberto com sucesso!",
      "✅"
    );

    formulario.reset();

  } catch (error) {

    mostrarMensagem(
      "Erro",
      error.message,
      "❌"
    );

  }

});