// Carrega os chamados quando a página abrir
document.addEventListener("DOMContentLoaded", () => {

  carregarChamados();

});

// ===============================
// Carregar Chamados
// ===============================

async function carregarChamados() {

  try {

    const chamados = await listarChamados();

    const pesquisa = document.getElementById("pesquisa");

    const texto = pesquisa ? pesquisa.value.toLowerCase() : "";

    const filtrados = chamados.filter(chamado =>

      chamado.nome.toLowerCase().includes(texto) ||

      chamado.titulo.toLowerCase().includes(texto)

    );

    const total = chamados.length;

    const abertos = chamados.filter(c => c.status === "Aberto").length;

    const atendimento = chamados.filter(c => c.status === "Em_Atendimento").length;

    const finalizados = chamados.filter(c => c.status === "Finalizado").length;

    document.getElementById("totalChamados").textContent = total;

    document.getElementById("totalAbertos").textContent = abertos;

    document.getElementById("totalAtendimento").textContent = atendimento;

    document.getElementById("totalFinalizados").textContent = finalizados;

    const tbody = document.getElementById("listaChamados");

    tbody.innerHTML = "";

    filtrados.forEach(chamado => {

      tbody.innerHTML += `

                <tr>

                    <td>${chamado.id}</td>

                    <td>${chamado.nome}</td>

                    <td>${chamado.setor}</td>

                    <td>${chamado.titulo}</td>

                    <td>
                      <span class="prioridade ${chamado.prioridade}">
                        ${chamado.prioridade}
                      </span>
                    </td>

                   <td>
                      <span class="status ${chamado.status}">
                         ${chamado.status.replace("_", " ")}
                      </span>
                    </td>

                    <td>

                        <button onclick="editarChamado(${chamado.id})">

                            ✏️ Editar

                        </button>

                        <button onclick="excluir(${chamado.id})">

                            🗑️ Excluir

                        </button>

                    </td>

                </tr>

            `;

    });

  } catch (error) {

    alert(error.message);

  }

}

function mostrarToast(texto) {

  const toast = document.getElementById("toast");

  toast.textContent = texto;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2500);

}
// ===============================
// Excluir
// ===============================

async function excluir(id) {

  const confirmar = confirm("Deseja realmente excluir este chamado?");

  if (!confirmar) return;

  try {

    await excluirChamado(id);

    mostrarToast("Chamado excluído com sucesso!");

    carregarChamados();

  } catch (error) {

    alert(error.message);

  }

}

// ===============================
// Editar (vamos implementar depois)
// ===============================

async function editarChamado(id) {

  try {

    const chamado = await buscarChamado(id);

    document.getElementById("editId").value = chamado.id;
    document.getElementById("editStatus").value = chamado.status;
    document.getElementById("editPrioridade").value = chamado.prioridade;
    document.getElementById("editDescricao").value = chamado.descricao;

    document.getElementById("modal").classList.remove("hidden");

  } catch (error) {

    alert(error.message);

  }

}
function fecharModal() {

  document.getElementById("modal").classList.add("hidden");

}

async function salvarEdicao() {

  const id = document.getElementById("editId").value;

  const dados = {

    status: document.getElementById("editStatus").value,
    prioridade: document.getElementById("editPrioridade").value,
    descricao: document.getElementById("editDescricao").value

  };

  try {

    await atualizarChamado(id, dados);

    alert("Chamado atualizado com sucesso!");

    fecharModal();

    carregarChamados();

  } catch (error) {

    alert(error.message);

  }

}

// ===============================
// Sair
// ===============================

document.getElementById("btnSair").addEventListener("click", () => {

  window.location.href = "login.html";

});

document.getElementById("pesquisa").addEventListener("keyup", carregarChamados);
