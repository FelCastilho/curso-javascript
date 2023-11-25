function retornaFuncao(){
    const nome = 'felipe';
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao)
