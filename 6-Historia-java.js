function mostrarOcultarTexto() { // Chama a função mostrarOcultarTexto

    var conteudoElemento = document.getElementById("conteudo"); // Objeto conteudoElemento vai acessar a div com o id "conteudo"
    if (conteudoElemento) { // Verifica se o elemento existe
      
      if (conteudoElemento.style.display === "block") {  // Se conteudoElemento estiver com o display "block (oculto)

        conteudoElemento.style.display = "none"; // Se o elemento está atualmente visível, oculta-o
        
      } else { //Se não

        conteudoElemento.style.display = "block";// Se o elemento está atualmente oculto, exibe-o
      }
    }
  }
