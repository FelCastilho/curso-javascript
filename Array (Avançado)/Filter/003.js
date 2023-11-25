const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
] 

//const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//console.log(pessoasComNomeGrande);

//const pessoasComMaisDe50anos = pessoas.filter(obj => obj.idade > 50)
//console.log(pessoasComMaisDe50anos)

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))

console.log(nomeTerminaComA)
