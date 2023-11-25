let res = document.getElementById('numero-titulo')
let text = document.getElementById('texto')
        
let n1 = prompt('Digite um valor: ')

n1 = Number(n1) //Convertendo o prompt de string para número

res.innerHTML = `${n1}`

text.innerHTML = `A raiz quadrada do seu número é ${Math.sqrt(n1)}<br>`

text.innerHTML += `${n1} é inteiro? ${Number.isInteger(n1)} <br>`

text.innerHTML += `É NaN? ${Number.isNaN(n1)} <br>`

text.innerHTML += `Arredondado para <strong>cima</strong>: ${Math.ceil(n1)} <br>`

text.innerHTML += `Arredondado para <strong>baixo</strong>: ${Math.ceil(n1)} <br>`

text.innerHTML += `Com duas casas decimais: ${n1.toFixed(2)}`


