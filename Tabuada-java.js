let paragrafo=false; //cria uma variável chamada paragrafo e a inicializa como false//

document.querySelector('.btn_tab').addEventListener('click',()=>{ //"document.querySelector" seleciona um elemento HTML com a classe ".btn_tab" e o ".addEventListener" adiciona um evento de "clique" a ele//
    
    let numero=Number(document.querySelector('#numero').value); //obtém o valor de um elemento HTML com o ID numero, converte o valor em um número e armazena-o na variável numero.//
    
    if (paragrafo==true){ 
        document.querySelector('p').remove();

    }else{
        paragrafo=true;
    } //verifica se a variável paragrafo é true (verdadeiro) e, dependendo do resultado, remove um parágrafo existente; ou atualiza a variável paragrafo para true (caso paragrafo seja falso)//

    let p=document.createElement('p'); //cria um novo elemento HTML <p> e o armazena na variável p//
    for(let i=1;1<=10;i++){ //inicia um loop "for" de 1 a 10, onde a variável i representa o número da iteração//
        let res=numero*i; //calcula o resultado da multiplicação entre o valor em numero e i e armazena o resultado na variável res//
        p.innerHTML+=numero+"x"+i+"="+res+"<br>"; //atualiza o conteúdo do elemento <p> com uma string que mostra a tabuada, ou seja, a multiplicação de numero por i, e adiciona uma quebra de linha <br> para separar as linhas//
    }
    document.querySelector('#resultado').append(p); //seleciona um elemento HTML com o ID resultado e anexa o elemento <p> a ele, exibindo a tabuada//
});

document.querySelector('.btn').addEventListener('click', ()=>{ //seleciona um elemento HTML com a classe .btn2 e adiciona evento de clique a ele //
    let div=document.querySelector('#div2'); //seleciona um elemento HTML com o ID div2 e o armazena na variável div//
    div.classList.toggle('class2'); //alterna a classe do elemento div, adicionando-a se não estiver presente ou removendo-a se já estiver presente//
    div.classList.toggle('bloco2'); //Isso faz a mesma coisa que o passo anterior, mas para a classe bloco2//
});