const numeros = [1,2,3,4,5,6,7,8,10,9,11];
const total = numeros.reduce(function(acumulador){
    if (valor % 2 === 0){
        acumulador += valor;
        console.log(valor)
    }
})

console.log(total)
