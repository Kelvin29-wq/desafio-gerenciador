function mostrarMensagem(titulo, texto, icone = "✅") {

  document.getElementById("tituloModal").textContent = titulo;

  document.getElementById("textoModal").textContent = texto;

  document.getElementById("iconeModal").textContent = icone;

  document.getElementById("modalMensagem").classList.remove("hidden");

}

function fecharMensagem() {

  document.getElementById("modalMensagem").classList.add("hidden");

}