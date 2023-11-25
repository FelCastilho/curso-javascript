//EXERCICIO FIZZBUZZ
/*
function fizzBuzz(n1){

    for(let i = 0; i <= 100; i++){
        if(n1 % 3 === 0){
            return 'Fizz'
        }else if(n1 % 5 === 0){
            return 'Buzz'
        }else if(n1 % 3 === 0 && n1 % 5 === 0){
            return 'FizzBuzz' //Essa condição deveria ser checada primeiro
        }
    }
}
*/

//Solução do Curso

function fizzBuzz(n){
    if(typeof n !== 'number') return NaN;
    if (n % 3 === 0 && n % 5 === 0) return ('FizzBuzz');
    if (n % 3 === 0) return ('Fizz');
    if (n % 5 === 0) return ('Buzz');
    
    return n;
}
console.log('a', fizzBuzz('a'))

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}

