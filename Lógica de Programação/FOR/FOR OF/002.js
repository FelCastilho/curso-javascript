const nomes = ['Felipe', 'Miguel', 'Alex'];

for(let indice in nomes){
    console.log(nomes[indice])
}

for(let valor of nomes){
    console.log(valor)
}

nomes.forEach(function(valor, indice){
    console.log(valor, indice)
})