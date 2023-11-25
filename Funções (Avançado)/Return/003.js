function criarMultiplicador(multiplicador){
    return (n) =>{
        return n * multiplicador
    }
}

const duplicar = criarMultiplicador(2)
const triplicar = criarMultiplicador(3)
const quadriplicar = criarMultiplicador(4)

console.log(duplicar(2))
console.log(triplicar(2))
console.log(quadriplicar(2))