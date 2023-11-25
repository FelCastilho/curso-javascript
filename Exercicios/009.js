//Verificando se o item está no modo paisagem

/*function ePaisagem(largura, altura){
    if(largura > altura){
        return `Está no modo paisagem`
    }else{
        return `Não está no modo paisagem`;-=--
    }
}*/

//Outra maneira

/*function ePaisagem(largura, altura){
    return largura > altura ? 'Modo paisagem' : 'Modo retrato';
    
    //return largura > altura; Já retorna True || false
};
*/

//Com arrow function
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1500, 900))