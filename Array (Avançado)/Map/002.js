const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
] 

//Mostrando apenas os nomes
/*
const nomes =  pessoas.map(obj => obj.nome)
console.log(nomes)
*/

//Removendo a chave nome do objeto

/*
const idades = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades)
*/

//Criando ids
const comIds = pessoas.map(function(obj, indice){
    obj.id = indice;
    obj.id = (indice + 1)
    return obj;
})

console.log(comIds);
