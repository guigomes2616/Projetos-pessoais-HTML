let num = document.getElementById('txtnum') //Num acessa o input txtnum
let sel = document.getElementById('select') //Sel acessa o select
let res = document.querySelector('div#resultado') //Res acessa a div com o id resultado

let valores = [] //Declara um vetor chamado valores

function seNum (n){ //Cria uma função SeNUm com o parâmetro n (Verifica se o os valores inseridos são entre 1 e 100)

    if(Number(n)>=1 && Number(n)<=100){ //Se o numero de n for maior ou igual a 1 E menor ou igual a 100
        return true //retorna como verdadeiro (está entre 1 e 100)

    }else{ //Se não
        return false //retorna como falso (não está entre 1 e 100)

}}

function naLista(n,list){ //Cria uma função NaLista com os parâmetros n, list (Verifica se os valores já foram inseridos)

    if(list.indexOf(Number(n)) != -1){ //Verifica se n não está na list (se já foi inserido)
        return true //Retorna como verdadeiro (não esta na lista)

    }else{ //se não

        return false //Retorna como falso (está na lista)
}}

function adicionar(){ //Cria uma função adicionar

    if(seNum(num.value) && !naLista(num.value, valores)){ //Se a funções seNum e naLista for verdade
        valores.push(Number(num.value)) //vetor vai receber os valores inseridos em num

        let item = document.createElement('option') //Variavel item é criada e recebe a criação de um option
        item.text = `Valor ${num.value} adicionado ` //Vai receber o texto em lista
        sel.appendChild(item) //Vai imprimir o texto em item
        
        res.innerHTML = '' //Limpa o res caso seja adicionado um outro valor em num

    }else{ //Se não
        alert('[ERRO]Valor inválido ou já encontrado na lista')
    }

    num.value = '' //Limpa o input
    num.focus() //O cursor continua piscando após a limpeza
}

function finalizar(){ //Cria a função finalizar

    if(valores.length == 0){ //Se o vetor valores estiver vazio
        alert('[ERRO] Adicione valores antes de finalizar!')

    }else{ //Se não

        let tot = valores.length //Variavel tot acessa o numeros do vetor

        let maior = valores[0] //Variavel maior acessa a posição 0 do vetor
        let menor = valores[0] //Variavel menor acessa a posição 0 do vetor

        let soma = 0 //Variavel soma inicializa valendo 0
        let media = 0  //Variavel menor inicializa valendo 0

        for(let p in valores){ //Enquando p for até valores

            soma += valores[p] //Soma vai somar cada valor do vetor em cada loop

            if(valores[p] > maior) //Se o valor da posição atual do vetor for maior que o valor da posição 0
            maior = valores[p] //Maior recebe esse valor

            if(valores[p] < menor) //Se o valor da posição atual do vetor for menor que o valor da posição 0
            menor = valores[p] //menor recebe esse valor
        }

        res.innerHTML = '' //Limpa o res após os loops
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados </p>`

        res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`

        res.innerHTML += `<p>A soma dos valores é: ${soma}`

        media = soma/tot //Operação de média
        res.innerHTML += `<p>A média entre os valores informados é: ${media}</p>`
    }

}