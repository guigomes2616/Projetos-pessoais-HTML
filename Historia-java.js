function mostrarOcultarTexto() { // Define uma função chamada mostrarOcultarTexto

    var conteudoElemento = document.getElementById("conteudo"); // Obtém uma referência para o elemento HTML com o ID "conteudo"

    if (conteudoElemento) { // Verifica se o elemento existe
      
      if (conteudoElemento.style.display === "block") {  // Alterna entre ocultar e exibir

        conteudoElemento.style.display = "none"; // Se o elemento está atualmente visível, oculta-o
      } else {

        conteudoElemento.style.display = "block";// Se o elemento está atualmente oculto, exibe-o
      }
    }
  }
