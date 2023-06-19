function paginaPrincipal() {
    window.location.href = "../../index.html";
  }
  
  const novaBuscaButton = document.querySelector("#btnNovaBusca");
  novaBuscaButton.addEventListener("click", paginaPrincipal);
  