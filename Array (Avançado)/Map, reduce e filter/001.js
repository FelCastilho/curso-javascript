//Retorne a soma do dobro de todos os pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]

const numerosPares = numeros.filter(function(value){
    return value % 2 === 0;
}).map(function(value){
    return value * 2;
}).reduce(function(acumulador, valor){
    return acumulador + valor
})

console.log(numerosPares)