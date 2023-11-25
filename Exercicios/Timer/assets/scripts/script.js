function relogio(){
    //Criando função para rodar os segundos
function criarHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//Iniciando variavel que armazena segundos
let segundos = 0;
let timer;

//Iniciando Relógio
function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000)
}

console.log(criarHoraDosSegundos(10))


iniciar.addEventListener('click', function(event){
    //Zerando o timer
    clearInterval(timer)
    iniciarRelogio()
    relogio.style.color = 'black';
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.style.color = 'red';

    if(segundos === 0){
        relogio.style.color = 'black';
    }
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.style.color = 'black';
    segundos = 0;
});
}

relogio()