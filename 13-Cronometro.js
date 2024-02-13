let segundos = 0 //variavel segundos valendo 0
let minutos = 0 //variavel minutos valendo 0
let hora = 0 //variavel minutos valendo 0

let intervalo //variavel intervalo para manipular a contagem

function doisDigitos(digitos){ //Função doisDigitos com parâmetro (digitos)

    if(digitos<10){ //Se digitos for menor que 10...

        return ('0'+digitos) //retorna 0 + o valor do digito ------ EX: 01, 02, 03

    }else{//se não...
         
        return(digitos) //retorna o próprio digito
    }
}

function iniciar(){ //Funcão iniciar
    
    contador()
    intervalo = setInterval(contador, 1000) //intervalo recebe (setInterval) executa a função (contador) repetidamente em intervalos de tempos, que terá sua velocidade em 1000 milésimos = 1 segundo
}

function pausar(){ //Função pausar
    
    clearInterval(intervalo) //clearInterval interrompe a tarefa do setInterval
}

function parar(){ //Função parar

    clearInterval(intervalo) //Interrmpe a funão (intervalo)

    segundos = 0 //Zera os segundos
    minutos = 0 //Zera os minutos
    hora = 0 //Zera a hora

    document.getElementById('crono').innerText = '00:00:00' //Altera o texto de crono(cronometro)
}

function contador(){ //Função contador

    segundos++ //segundos irá aumentando de 1 em 1

    if(segundos ==60){ //Se segundos chegar a 60...
        minutos++ //Minutos será acionado, aumentando o seu valor de 1 em 1
        segundos = 0 //Zera os segundos

        if(minutos==60){ //Se minutos chegar a 60...
            minutos=0 //Zera minutos
            hora++ //Aciona a hora, aumentando o seu valor de 1 em 1
        }
    }

    document.getElementById('crono').innerText = `${doisDigitos(hora)}:${doisDigitos(minutos)}:${doisDigitos(segundos)}`
}