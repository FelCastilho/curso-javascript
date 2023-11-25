

const container = document.querySelector('.container');

//Criando o elemento
const div = document.createElement('div');


const elementos = [
    {tag: 'p', texto:'Paragrafo'},
    {tag: 'div', texto: 'Div'},
    {tag: 'footer', texto: 'footer'},
    {tag: 'section', texto: 'section'}
]

for(let i = 0; i < elementos.length; i++){
    let { tag, texto} = elementos[i];

    //criando os elementos dentro de cada tag
    let tagCriada = document.createElement(tag);
    //colocando o texto dentro da tag
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);