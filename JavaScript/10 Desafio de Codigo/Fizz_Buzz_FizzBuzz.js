//Caso seja multiplo de 3 Fizz
//Caso seja multiplo de 5 Buzz
//Caso seja multiplo de 3 e 5 FizzBuzz
//Caso não seja multiplo de nenhum imprima no numero 
const resultado = [15];

function FizzBuzz(resultado){
    if (resultado % 3 === 0 && resultado % 5 === 0){
        return 'FizzBuzz';
    } else if (resultado % 3 === 0){
        return 'Fizz';
    }else if (resultado % 5 === 0){
        return 'Buzz';
    }else{
        return resultado;
    }
}
console.log(FizzBuzz(resultado));