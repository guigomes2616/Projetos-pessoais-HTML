function carregar(){ //Chamo a função carregar

var msg = document.querySelector('div#mensagem') //Objeto "msg" vai acessar em css a DIV com o ID MENSAGEM
var img = document.getElementById('imagem') //Objeto "img" vai acessar o elemnto com o ID IMAGEM
var msg2 = document.getElementById('mensagem2') // Objeto "msg2" vai acessar o elemto com o ID MENSAGEM2
var data = new Date() //Objeto "data" vai puxar a data do sistema
var hora = data.getHours() //Objeto "hora" vai acessar "data" que puxa as horas do sistema
var min = new Date() //Objeto "min" vai puxar a data do sistema
var minutos = min.getMinutes() //Objeto "minutos" vai acessar "min" que puxa os minutos do sistema

msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos` // Vai imprimir em "msg" (div1), buscando os objetos "hora,minutos"

if(hora>=0 && hora<12){ // Se "hora" for maior ou igual a 0 E menor que 12 (BOM DIA)
    img.src = 'https://i.pinimg.com/564x/5b/c5/78/5bc5782c60cac4fc5e969c4cf5f75ce0.jpg'
    document.body.style.background = '#94AABB'
    msg2.innerHTML = "Bom dia!"
    

}else if (hora>=12 && hora <18){ // Se não/se "hora" for maior ou igual a 12 E menor que 18 (BOA TARDE)
    img.src = 'https://i.pinimg.com/564x/e2/c0/c8/e2c0c8eb20735be121a105005d4a9335.jpg'
    document.body.style.background = '#F2AE92'
    msg2.innerHTML = "Boa Tarde!"
    

}else{ // Se não, só vai restar a ultima opção de "hora" maior que 18 e menor que 0 (BOA NOITE)
    img.src = 'https://i.pinimg.com/564x/0a/c5/f2/0ac5f2f08742793afab7a4e311215d3f.jpg'
    document.body.style.background = '#1A1B20'
    msg2.innerHTML = "Boa Noite!"


}
}