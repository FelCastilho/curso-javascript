function* contador(){
    yield 0
    yield 1
    yield 2
}

const g2 = contador();
console.log(g2.next().value)