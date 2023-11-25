//Formas de criar objetos

//Maneira literal:
const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Coutinho',
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

//Usando forma construtora para criar o objeto:

const pessoa1 = new Object();

pessoa1.nome = 'Miguel';
pessoa1.sobrenome = 'Coutinho';
