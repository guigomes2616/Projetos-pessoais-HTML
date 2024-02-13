function contar(){ //Chamo a função contar

    var ini = document.getElementById('txtinicio') //"var ini" vai acessar o input com id "txtinicio"
    var fi = document.getElementById('txtfim') //"var fi" vai acessar o input com o id "txtfim"
    var pas = document.getElementById('txtpasso') // "var pas" va acessar o input com o id "txtpular"
    var res = document.querySelector('div#resultado') //"var res" vai acessar a div com o id "resultado"

    let n1 = Number(ini.value) //let n1 vai receber o valor inserido em ini
    let n2 = Number(fi.value) //let n2 vai receber o valor inserido em fi
    let p = Number(pas.value) //let p vai receber o valor inserido em pas

    if(p<=0){ //Se p for menor ou igual a 0...
        alert('Passo inválido! Reajustando Passo para 1')
        p = 1 // p receberá 1
    }

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){ //Se o valor de ini for igual a 0 OU valor de fi for igual a 0 OU valor de pas for igual a 0...

        alert('[ERRO] Dados insuficientes, tente novamente!')
        res.innerHTML = 'Impossível contar!'

    }else{ //Se não...

        res.innerHTML = 'Contando: <br>'

        if(n1<n2){ //Se n1 for menor que n2 -- Ordem crescente

            for(let c = n1; c <=n2; c+=p){ //let c será o "contador de psosição"

                res.innerHTML += `${c} \u{1F449}` // Acrescenta um paragráfo, onde mostra as posições inseridas (valores de n1 e n2 pulando de p) com os emojis
            }
        }else{ //Se não...

            for(c=n1; c>=n2; c-=p){ //Ordem decrescente

                res.innerHTML += `${c} \u{1F449}`// Acrescenta um paragráfo, onde mostra as posições inseridas (valores de n1 e n2 pulando de p) com os emojis
            }
        }

        res.innerHTML += `\u{1F3C1}`// Acrescenta um paragráfo, onde insere um ultimo emoji no fim da frase

    }
}