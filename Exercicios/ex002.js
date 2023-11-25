const nome = 'Felipe'
const sobrenome = 'Coutinho Castilho'
const idade = 21
const peso = 65
const alturaMetros = 1.80
const dataNasc = 27
const mesNasc = 'Dezembro'
const anoNasc = 2001

//Indice de massa corporal

let imc; // peso / (altura * altura) [Inicializando posteriormente]

imc = peso / (alturaMetros * alturaMetros)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${65} KG, tem ${alturaMetros} de altura e sua data de nascimento é ${dataNasc}/${mesNasc}/${anoNasc}`)

console.log(`Seu ICM: ${imc}`)