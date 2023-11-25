//Função que recebe dois valores e retorna o maior entre eles


function calcularMax(min, max){
    if(min > max){
        return `n1 é o maior número`;
    }else{
        return `n2 é o maior número`;
    }
};

console.log(calcularMax(3, 5));