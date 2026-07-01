
const API_URL = "http://localhost:3000";


async function criarChamado(dados) {

  const resposta = await fetch(`${API_URL}/chamados`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  });

  if (!resposta.ok) {
    throw new Error("Erro ao abrir chamado.");
  }

  return await resposta.json();

}


async function listarChamados() {

  const resposta = await fetch(`${API_URL}/chamados`);

  if (!resposta.ok) {
    throw new Error("Erro ao listar chamados.");
  }

  return await resposta.json();

}


async function buscarChamado(id) {

  const resposta = await fetch(`${API_URL}/chamados/${id}`);

  if (!resposta.ok) {
    throw new Error("Chamado não encontrado.");
  }

  return await resposta.json();

}


async function atualizarChamado(id, dados) {

  const resposta = await fetch(`${API_URL}/chamados/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  });

  if (!resposta.ok) {
    throw new Error("Erro ao atualizar chamado.");
  }

  return await resposta.json();

}


async function excluirChamado(id) {

  const resposta = await fetch(`${API_URL}/chamados/${id}`, {
    method: "DELETE"
  });

  if (!resposta.ok) {
    throw new Error("Erro ao excluir chamado.");
  }

  return await resposta.json();

}




async function login(email, senha) {

  const resposta = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      senha
    })
  });

  if (!resposta.ok) {
    throw new Error("Email ou senha inválidos.");
  }

  return await resposta.json();

}


async function buscarCep(cep) {

  const resposta = await fetch(`${API_URL}/cep/${cep}`);

  if (!resposta.ok) {
    throw new Error("CEP não encontrado.");
  }

  return await resposta.json();

}

function mostrarMensagem(titulo, texto, icone = "✅") {

  document.getElementById("tituloModal").textContent = titulo;

  document.getElementById("textoModal").textContent = texto;

  document.getElementById("iconeModal").textContent = icone;

  document.getElementById("modalMensagem").classList.remove("hidden");

}

function fecharMensagem() {

  document.getElementById("modalMensagem").classList.add("hidden");

}