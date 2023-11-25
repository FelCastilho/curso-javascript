//Parando o envio automático da página
const form = document.querySelector('.formulario');
const mydiv = document.querySelector('.section')

//Parando envio do formulário
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Envio cancelado');

});

function setResult(){
    const numerotxt = document.querySelector('input-text');
    const inputNumber = Number(numerotxt.value);
    
    for(let i = 0; i < inputNumber; i++){
        return inputNumber % 2 === 0 ? 'Par' : 'Impar'; 
    }
}

//Criando o paragrafo com o resultado (p2)
function criarParagrafo(){
    const p = document.createElement('p');
    return p;
}

//Criando o Paragrafo com o resultado (p2)
const p = criarParagrafo();
mydiv.appendChild(p)
p.innerHTML = setResult();