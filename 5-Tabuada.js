function gerar(){ //Chama a função gerar

    let num = document.getElementById('txtnum') //let num acessa o input "txtnum"
    let tabu = document.getElementById('seltab') //let tabu acessa o select "seltab"

    let n = Number(num.value) //let n vai receber o valor inserido em num
    let c = 1 // let c será o contador, valendo 1

    if(num.value.length == 0){ // Se num for um valor igual a 0...

        alert("[ERRO] Tente novamente!")

    }else{ //Se não...

        tabu.innerHTML = '' // Serve para limpar a lista em cada operação antes de cada loop do for

        for(c=1; c<=10; c++){ //Enquanto c começar com 1 e for menor ou igual a 10, será incrementado 1+ (contador).

            let lista = document.createElement('option') //let lista vai criar uma nova option
            lista.text = `${n} x ${c} = ${n*c}` //lista vai receber o novo texto (operação de cada loop)
            tabu.appendChild(lista) //Tabu vai inserir o que estiver em lista

            lista.value = `tabu${c}` // Lista vai receber o valor de cada contagem de tabu
        }
    }
}