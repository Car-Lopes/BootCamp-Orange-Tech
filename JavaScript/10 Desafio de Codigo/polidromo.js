//Palidromo é um termo usado para palavra que dao o mesmo resultado 
//de traz para frente exemplo "radar" uma vez invertida temos "radar" que são iguais.
//String "digital" uma vez invertida temos "latigid" que são diferentes. 

let resultado = 'radar';

function Palindromo(entrada){
    return entrada === entrada.split('').reverse().join('') ? "TRUE":'FALSE'
}

console.log(Palindromo(resultado));
