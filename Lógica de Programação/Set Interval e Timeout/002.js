function mostraHora(){
    let data = new Date();
    
    return data.toLocaleString('pt-br', {
        hour12:false
    });

}

setInterval(function(){
    console.log(mostraHora())
},1000);
