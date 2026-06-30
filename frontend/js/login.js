const form = document.getElementById("formLogin");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const email = document.getElementById("email").value;

  const senha = document.getElementById("senha").value;

  try {

    await login(email, senha);

    window.location.href = "admin.html";

  } catch (error) {

    alert(error.message);

  }

});