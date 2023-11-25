function meuEscopo(){
    
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');
    

    //Colocando em um array
    const pessoas = [];

    function recebeEventoForm(evento){
        //Parando o envio automático da página (p1)
        evento.preventDefault();
        let nome = document.querySelector('.nome');
        let sobrenome = document.querySelector('.sobrenome');
        let altura = document.querySelector('.altura');
        let peso = document.querySelector('.peso');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value,
            peso: peso.value
        })
    
        console.log(pessoas)
    
        result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>` 
    }
    
    //Parando o envio automático da página (p2)
    form.addEventListener('submit', recebeEventoForm);

};

meuEscopo();


