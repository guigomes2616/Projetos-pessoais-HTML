function gerar(){

    var txtp = document.querySelector('input#pais')
    var pa = (txtp.value)
    var res = document.querySelector('div#res')

    res.innerHTML = `<p>Vivendo em <strong>${pa}</strong>!</p>`

    if(pa!='Brasil'){
        res.innerHTML += `<p>Você é estrangeiro(a)</p>`

    }else{
        res.innerHTML += `<p>Você é brasileiro</p>`
    }}