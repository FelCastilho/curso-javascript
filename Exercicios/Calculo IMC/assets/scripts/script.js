function calcularIMC(){

    let peso = document.getElementById('input-peso');
    let altura = document.getElementById('input-altura');
    let res = document.getElementById('result');

    //Calculando IMC 

    let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value)) ; //Também é possivel fazer por função
  

    //Usando .length para fazer as validações das caixas vazias;

    if(peso.value.length === 0 && peso.value.length === 0){
        res.innerHTML = 'As caixas não podem ficar vazias!'
    }else if(peso.value.length === 0){
        res.innerHTML = 'A caixa de Peso não pode ficar vazia'
    }else if(altura.value.length === 0){
        res.innerHTML = 'A caixa de Altura não pode ficar vazia'
    }else if(imc <= 18.5){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Abaixo do peso.`;
        res.style.background = 'orange';
    }else if(imc > 18.5 && imc <= 24.9 ){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Peso normal`;
        res.style.background = '#629546';
        
    }else if(imc > 25 && imc <= 29.9){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Sobrepeso`;
        res.style.background = '#e87a0d';
    }else if (imc >= 30 && imc <= 34.9){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Obesidade grau 1`;
        res.style.background = '#af0000';

    }else if(imc >= 35 && imc <= 39.9){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Obesidade grau 2`;
        res.style.background = '#960101';
        res.style.color = 'white';
    }else{
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Obesidade grau 3`;

        res.style.background = '#680303';
        res.style.color = 'white';
    }


    /*
    if(imc <= 18.5){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Abaixo do peso.`;
        res.style.background = 'orange';

    }else if(imc > 18.5 && imc <= 24.9 ){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Peso normal`;
        res.style.background = '#629546';
        
    }else if(imc > 25 && imc <= 29.9){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Sobrepeso`;
        res.style.background = 'e87a0d';
    }else if (imc >= 30 && imc <= 34.9){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Obesidade grau 1`;
        res.style.background = '#af0000';

    }else if(imc >= 35 && imc <= 39.9){
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Obesidade grau 2`;
        res.style.background = '#960101';
        res.style.color = 'white';
    }else{
        res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} | Obesidade grau 3`;

        res.style.background = '#680303';
        res.style.color = 'white';
    }
    */
};
    
