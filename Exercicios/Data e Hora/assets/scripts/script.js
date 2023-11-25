function carregar(){
    let resultHour = document.getElementById('horario-atual');
    let resultdayMonth = document.getElementById('dia-mes');
    let resultWeek = document.getElementById('dia-semana');

    
    const data = new Date();
    let year = data.getFullYear();
    let month = data.getMonth();
    let day = data.getDate();
    

    let hour = data.getHours();
    let minutes = data.getMinutes();

    let dayWeek = data.getDay();

    //Chamada para Hora
    resultHour.innerHTML = `${hour}:${minutes}`;
    resultdayMonth.innerHTML = `${day}/${month}/${year}`;
    
    //Formatando a data
    switch(dayWeek){
        case 0:
            dayWeek = 'Domingo';
            break;
        case 1:
            dayWeek = 'Segunda-feira';
            break;
        case 2:
            dayWeek = 'Terça-feira';
            break
        case 3:
            dayWeek = 'Quarta-feira';
            break;
        case 4:
            dayWeek = 'Quinta-feira';
            break;
        case 5:
            dayWeek = 'Sexta-feira';
            break;
        case 6:
            dayWeek = 'Sabado';
            break;  
        default:
            dayWeek = 'Valor inválido';   
            break; 
      
    }

    resultWeek.innerHTML = `<strong>${dayWeek}</strong>`;
 
    if(hour <= 12){
        document.body.style.background = '#ffdbae';
    }else if(hour > 12 && hour <= 18){
        document.body.style.background = '#f2c09d';
    }else{
        document.body.style.background = '#0043b4';
    }
    
}