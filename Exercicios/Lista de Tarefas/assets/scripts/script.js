//Selecionando os elementos
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//Função para criar listas
function criarLista(){
    const li = document.createElement('li');
    return li;
}

//Pegando evento de teclar (Enter)
inputTarefa.addEventListener('keypress', (e) =>{
    if(e.keyCode === 13){ //Código do enter
        //Criando a tarefa usando o mesmo código do final
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

//Limpando o input
function limpaInput(){
    inputTarefa.value === ' ';
    inputTarefa.focus();
}

//Criando o botão de apagar
function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}

//Função para criar as tarefas
function criaTarefa(textoInput){

    const li = criarLista(); //Isso não é redeclarar a variavel, ambas estão em escopos diferentes 

    li.innerText = textoInput;  
    tarefas.appendChild(li)
    //chamando a função de limpar o input
    limpaInput();
    criaBotaoApagar(li);

    //salvando a tarefa
    salvarTarefas();
}

//Capturando o evento de clique no botão
btnTarefa.addEventListener('click', () => {
    //Condição para não deixar o input vir vazio
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', (e)=>{
    //Verificando se o botão clicado é o de apagar
    const el = e.target;
    if(el.classList.contains('apagar')){
        //removendo o elemento pai do item
        el.parentElement.remove()
        salvarTarefas()
    }
});

//Salvando as tarefas 
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for(let tarefa of listaDeTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //Mini Banco de dados no navegador
    localStorage.setItem('tarefas', tarefasJSON)
}

//Recuperando as tarefas salvas no navegador
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas()
