const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(resto); // [3,4,5,6,7,8,9] 