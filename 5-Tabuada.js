let paragrafo=false; 
/* "Let" cria uma variavel "paragrafo", que inicialmente vale "falso" */

document.querySelector('.botão').addEventListener('click',()=>{  
    /* "document.querySelector" vai buscar o elemento dentro do HTML com a classe "botão"
    "addEventeListener" vai adicionar um evento de "clique", que será executado pelo usuario */ 

    let numero=Number(document.querySelector('#numero').value); 
    /* "document.querySelector" para encontrar um elemento HTML com o atributo "id numero"
    Após isso, o "value" é usada para obter o valor atual inserido pelo o usuario
    A função "Number" é usada para converter o valor obtido (que é uma string) em um número, para que seja possivel a realização de calculos matematicos
    O número convertido é então, atribuído à variável numero usando a palavra-chave let */

    if(paragrafo==true){
        document.querySelector('p').remove();
        /* Isso verifica se a variável paragrafo é igual a true (verdade). Se for verdade, um "parágrafo (p)" existente é removido...*/

    }else{
        paragrafo=true;
        /* ... caso contrário, a "variável paragrafo" é definida como true, e assim irá gerar os paragrafos (p) dos resultados */
    }

    let p=document.createElement('p');
    /* Um novo elemento HTML "p" (parágrafo) é criado e armazenado na variável "p" */

    for(let i=1;i<=10;i++){
            /* Um loop for é usado para gerar uma tabela de multiplicação do número inserido.
            "let i =1" é o contador incial (ex: 1*1).
            "i<10" é a condição de qunatas vezes o loop irá se repetir.
            "i++" é a parte de atualização do loop. É executada após cada iteração do loop */

        let res=numero*i;
        /* "let res" cria a variavel que será o produto da operação.
        "numero" é o valor que o usuario digitar * a posição i do loop */

        p.innerHTML+=numero+"x"+i+"="+res+"<br>";
        /* "p.innerHTML" constrói uma linha na tabela de multiplicação, que será adicionada ao elemento HTML "p"
        "numero" é o número que o usuário digitou
        "x" é apenas a letra "x" e é usado para indicar a multiplicação
        "i"é o contador do loop, representando o multiplicador atual
        "=" é o sinal de igual
        "res" é o resultado da multiplicação
        "+" é usado para juntar as frases, servindo como "espaço" */
    }

    document.querySelector('#resultado').append(p);
    /* "document.querySelector('#resultado')" busca o elemento HTML com o ID "resultado". Isso será exibido no paragrafo "p" criado (append(p)) */  
});