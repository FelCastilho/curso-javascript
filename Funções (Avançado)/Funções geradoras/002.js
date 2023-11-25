function* contador(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}

const g2 = contador();
console.log(g2.next().value)