function limpar(){ //Função "limpar"

    let limp = document.getElementById('resultado') //Variavel "limp" acessa o elemento "resultado" (caixa branca) 
    limp.innerHTML = '' //Limp vai imprimir nada, pois limpará o conteúdo dentro dele
}

function apagar(){ //Função "apagar"

    let res = document.getElementById('resultado').innerHTML //Variavel "res" acessa o elemento "resultado" (caixa branca) o inerHtml
    document.getElementById ('resultado').innerHTML = res.substring(0,res.length -1) //Modifica o conteúdo de "res" - substring extrai os conteudos de string, começando da posição incial (0) até a ultima posição referente ao tamanho de "res" -1 (menos o ultimo caractere) 
}

function inserir(num){ //Função "inserir" com o parâmetro "num" para especificar o que é clicado nos botões 
    
    let result = document.getElementById('resultado') //Variavel "result" acessa o elemento "resultado" (caixa branca) 
    result.innerHTML += num //Result vai receber cada "num" digitado e imprimir (acrescentando um por um)
}

function calcular(){ //Função "calcular"

    let resultado = document.getElementById('resultado').innerHTML //Variavel "resultado" acessa o elemento "resultado" (caixa branca) o inerHtml

    if(resultado){ //Se existir algo em resultado

        document.getElementById('resultado').innerHTML = eval(resultado) //Modifica o conteúdo de "resultado" - eval vai computar todas as operações digitados em resultado automaticamente 

    }else{ //Se não...
        
        alert('[ERRO]Nada para calcular!')
    }
}