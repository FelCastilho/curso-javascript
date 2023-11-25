function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleString('pt-br', {
        hour: '2-digit',
        minute:'2-digit',
        second: '2-digit',
        hour12: false
    });
};

try{ 
    const hora = retornaHora();
    console.log(hora);
}catch (e){
    //Tratar erro
}finally{
    console.log('Tratando o erro')
}
