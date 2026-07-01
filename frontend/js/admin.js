
document.addEventListener("DOMContentLoaded", () => {

  carregarChamados();

});



async function carregarChamados() {

  try {

    const chamados = await listarChamados();

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

    chamados.forEach(chamado => {

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
    mostrarMensagem(
      "Erro",
      error.message,
      "❌"
    );

  }

}



function excluir(id) {

  document.getElementById("idExcluir").value = id;

  document.getElementById("modalExcluir").classList.remove("hidden");

}

function fecharModalExcluir() {

  document.getElementById("modalExcluir").classList.add("hidden");

}

async function confirmarExclusao() {

  const id = document.getElementById("idExcluir").value;

  try {

    await excluirChamado(id);

    fecharModalExcluir();

    mostrarMensagem(
      "Excluído",
      "Chamado excluído com sucesso!",
      "🗑️"
    );

    carregarChamados();

  } catch (error) {

    mostrarMensagem(
      "Erro",
      error.message,
      "❌"
    );

  }

}



async function editarChamado(id) {

  try {

    const chamado = await buscarChamado(id);

    document.getElementById("editId").value = chamado.id;
    document.getElementById("editStatus").value = chamado.status;
    document.getElementById("editPrioridade").value = chamado.prioridade;
    document.getElementById("editDescricao").value = chamado.descricao;

    document.getElementById("modal").classList.remove("hidden");

  } catch (error) {

    mostrarMensagem(
      "Erro",
      error.message,
      "❌"
    );

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

    mostrarMensagem(
      "Atualizado",
      "Chamado atualizado com sucesso!",
      "✏️"
    );

    fecharModal();

    carregarChamados();

  } catch (error) {

    mostrarMensagem(
      "Erro",
      error.message,
      "❌"
    );

  }

}



document.getElementById("btnSair").addEventListener("click", () => {

  window.location.href = "login.html";

});

