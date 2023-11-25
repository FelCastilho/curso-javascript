const pessoa1 = new Object();

pessoa1.nome = 'Felipe';
pessoa1.sobrenome = 'Coutinho';
pessoa1.idade = 21;

pessoa1.falarNome = function(){
    console.log(this.nome)
}

pessoa1.falarNome()