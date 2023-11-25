function recursiva(max){
    //Estabelecendo um limite para a função
    if(max >=10) return
    //Aumentando o valor em 1 a cada vez
    max++
    //Exibindo o valor de Max
    console.log(max);
    //Chamando a função dentro dela (Recursiva)
    recursiva(max)
}

recursiva(0)