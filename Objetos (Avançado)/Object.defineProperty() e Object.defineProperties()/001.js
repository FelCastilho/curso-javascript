function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)