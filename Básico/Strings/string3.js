//Bucando caracteres dentro de uma string

               //012345   
let umaString = 'Felipe Coutinho Castilho'

console.log(umaString.length)

//Pegando os caracteres que estão entre 0 e 6

console.log(umaString.slice(0, 6))

//Testando com valores negativos

console.log(umaString.slice(-8))

console.log(umaString.substring(umaString.length -8)) //Mesma coisa que slice só que pior

console.log(umaString.split(' ', 1))