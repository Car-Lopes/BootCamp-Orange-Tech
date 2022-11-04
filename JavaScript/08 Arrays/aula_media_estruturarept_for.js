
const notas = [];

notas.push(8);
notas.push(7);
notas.push(5);
notas.push(10);
notas.push(6);

//Para saber o tamanho da lista 
console.log(notas.length);

/*media das notas 
soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]

console.log(soma/notas.length);
*/
//Estrutura de Repetição FOR deixa mais interativo
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma = soma + nota;
}  

const media = soma / notas.length;
console.log ('Total de Notas '+ soma + ' Dividido pela qtd de notas '+ notas.length);
console.log (media.toFixed(2));    
