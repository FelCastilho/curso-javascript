//Capturar evento de submit do formulário

const form = document.querySelector('#formulario');

//Parando o envio do formulário:
form.addEventListener('submit', function(event){
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
  

    if(!peso){
        setResultado('Peso inválido', false)
        return;
        //Se o peso for NaN ele para no return e volta o setResultado

        //setResultado (msg, isValid) respectivamente
    }

    if(!altura){
        setResultado('Altura inválida', false)
        return;
    }

    //Calculando IMC
    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;
    setResultado(msg, true);
});

//Adicionando as condições para IMC

function getNivelIMC(imc){

    //Usando array de 5 indices para adicionar as condições
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
    
};

//Função calcular IMC
function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

//Função que cria paragrafos

function criaP(){
    //Criando um paragrafo dentro da var result
    const p = document.createElement('p');
    return p; 
};

//Função para jogar o resultado na tela

function setResultado(msg, isValid){
    const result = document.querySelector('.resultado');
    
    //Zerando o HTML
    result.innerHTML = ' ';

    //Fazendo aparecer na tela:
    const p = criaP();

    //Adicionando as cores JS para CSS
    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    result.appendChild(p);
};


