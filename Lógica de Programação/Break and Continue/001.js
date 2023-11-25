const numeros = [1,2,3,4,5,6,7,8,9]

for(let n of numeros){
    if(n === 2 || n === 5){
        continue; //Pula os valores determinados nas condições
    }
    console.log(n)

    if(n === 7){
        console.log('7 encontrado, Fim do código.');
        break; //Encerra no valor mostrado na condição
    }
};