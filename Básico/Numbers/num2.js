let n1 = 0.7
let n2 = 0.1

n1 += n2 //n1 = n1 + n2
n1 += n2 //n1 = n1 + n2
n1 += n2 //n1 = n1 + n2

//n1 = n1.toFixed(1) //Essa solução nao resolve o problema de precisao

//console.log(Number.isInteger(n1)) //Retorna false 

//Resolvendo o problema

//n1 = parseFloat(n1.toFixed(1))

n1 = Number(n1.toFixed(1))
console.log(n1)

console.log(Number.isInteger(n1))