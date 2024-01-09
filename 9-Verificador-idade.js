function verificar(){

    var data = new Date() //Objeto data puxa a data atual do sistema
    var ano = data.getFullYear() // Objeto ano vai receber o ano atual
    var formano = document.getElementById('txtdate') //Objeto formano acessa o input "txtdate"
    var res = document.querySelector('div#resultado') // Objeto res vai acessar a div com o id "resultado"

    if(formano.value.leigh ==0 || Number(formano.value)>ano){ // Se formano (tipo number) for igual a 0 ou maior que ano
        alert('[ERRO] Verifique os dados e tente novamente') // Caixa de mensagem de erro

    }else{ // Se não...

        var formsex = document.getElementsByName('radiosex') // Objeto formsex vai acessar os input de bolinha(name = radiosex) 
        var idade = ano - Number(formano.value) //Objeto idade vai calcular o ano - o valor digitado em formano
        var genero = '' //Objeto genero começa vazio

        var img = document.createElement('img') // Objeto img vai criar dimanicamente um img
        img.setAttribute('id', 'foto') //vai ser atribuido um id="foto" para o img criado

        if(formsex[0].checked){ //Se formsex [0] (Masculino) for marcado...
            genero = 'Homem' // genero vai valer "Homem"

            if(idade>=0 && idade <10){ //Se idade for maior que 0 e menor que 10...
                //Criança
                img.setAttribute('src', 'https://i.pinimg.com/564x/d0/46/8e/d0468e1c23665bfdd1d97789f2ca4947.jpg')

            }else if (idade <20){ // Se idade for menor que 20...
                //Adolescente
                img.setAttribute('src', 'https://i.pinimg.com/564x/ee/6b/f4/ee6bf4ff0e038cc8d02b6fad8e6ab18c.jpg')

            }else if (idade <50){ //Se idade for menor que 50...
                //Adulto
                img.setAttribute('src', 'https://i.pinimg.com/564x/af/f5/c9/aff5c9c5e4d1ab66a73ac21009138b7f.jpg')

            }else{ //Se não (idade maior que 50)...
                //Idoso
                img.setAttribute('src', 'https://i.pinimg.com/564x/ba/30/a9/ba30a922fca3769853c5a390bae6ad2f.jpg')
            }

        }else if (formsex[1].checked){ // Se não (se) formsex[1](Feminino) for marcado...
            genero = 'Mulher' // genero vai valer "Mulher"

            
            if(idade>=0 && idade <10){ //Se idade for maior que 0 e menor que 10...
                //Criança
                img.setAttribute('src', 'https://i.pinimg.com/564x/10/e0/6d/10e06d535a5d766c11bd44fa1262425a.jpg')


            }else if (idade <20){ // Se idade for menor que 20...
                //Adolescente
                img.setAttribute('src', 'https://i.pinimg.com/564x/35/b1/03/35b103e5022901c64be72e28b252c420.jpg')

            }else if (idade <50){ //Se idade for menor que 50...
                //Adulto
                img.setAttribute('src', 'https://i.pinimg.com/564x/7e/59/8f/7e598f9c4fe023d0a188a87ac5494175.jpg')
 
            }else{ //Se não (idade maior que 50)...
                //Idoso
                img.setAttribute('src', 'https://i.pinimg.com/564x/3f/8e/32/3f8e325cd9548292802149e525dffd35.jpg')
            }
        }

        res.style.textAlign = 'center' //Alinha o texto de "res"
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img) // "appendChild" mostra a imagem em "res"
    }

}