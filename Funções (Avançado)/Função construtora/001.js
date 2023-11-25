function Pessoa(nome, sobrenome){
    const ID = 123456;

    const metodoInterno = () =>{

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () =>{
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Felipe', 'Coutinho')
const p2 = new Pessoa('Miguel', 'Coutinho')

console.log(p1.nome, p1.sobrenome)
console.log(p2.nome, p2.sobrenome)

p1.metodo();