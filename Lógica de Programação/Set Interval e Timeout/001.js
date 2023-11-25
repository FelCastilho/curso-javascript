function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-br',{
        hour12:false,
    })
}

function functionDoInterval(){
    console.log(mostraHora());
}


//Iniciando um timer 
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);

//parando o timer
setTimeout(function (){
    clearInterval(timer);
    console.log('Olá, Mundo!')
}, 10000)