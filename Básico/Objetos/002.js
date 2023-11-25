//Usando funções para criar objetos

function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Felipe', 'Coutinho', 21) 

console.log(pessoa1)