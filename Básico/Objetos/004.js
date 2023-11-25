function criarPersonagem( nome, poder, força){
    return {nome, poder, força}
}

const goku = criarPersonagem('Goku', 8000, 1000)

const vegeta = criarPersonagem('Vegeta', 10000, Number(goku.força * 2) )

console.log('Os atributos do seu personagem:')
console.log(vegeta)

