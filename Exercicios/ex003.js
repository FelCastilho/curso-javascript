const nome = 'Alexandre'
const sobrenome = 'Oliveira'
const ultimoNome = 'Moreira'
const idade = 21
const filme = 'Homem aranha 2'
const peso = 54
const alturaM = 1.8
const esporte = 'Natação'

let imc;
//peso / (altura * altura)
imc = peso / (alturaM * alturaM)

console.log(`${nome} ${sobrenome} ${ultimoNome} têm ${idade} anos, pesa ${peso} com ${alturaM} metros.`)
console.log(`Seu filme favorito é ${filme} e seu esporte favorito é ${esporte}`)
console.log(`Indice de massa corporal: ${imc}`)

