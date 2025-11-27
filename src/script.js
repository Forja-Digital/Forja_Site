// Mostrar o botão ao rolar a página
  window.onscroll = function () {
    const btn = document.getElementById("btnTopo");
    if (document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Função que volta ao topo
  function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };