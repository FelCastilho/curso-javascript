try{
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e gerou um erro');
    console.log('Fechei o arquivo');
}catch(err){
    console.log('Tratei o erro');
}finally{
    console.log('FINALLY: Eu sempre sou executado');
}