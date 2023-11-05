let paragrafo=false;

document.querySelector('.botão').addEventListener('click',()=>{

    let numero=Number(document.querySelector('#numero').value);

    if(paragrafo==true){
        document.querySelector('p').remove();

    }else{
        paragrafo=true;
    }

    let p=document.createElement('p');  
    for(let i=1;i<=10;i++){
        let res=numero*i;
        p.innerHTML+=numero+"x"+i+"="+res+"<br>";
    }

    document.querySelector('#resultado').append(p);
});

document.querySelector('.botão').addEventListener('click',()=>{

    let div=document.querySelector('#bloco');

    div.classList.toggle('classe');
    div.classList.toggle('bloco1');
});