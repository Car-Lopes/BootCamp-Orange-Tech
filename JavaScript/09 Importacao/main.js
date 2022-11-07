//importando as funções gets e print
const {gets, print} = require('./funcoes_auxiliares');

/* Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 -100.
Faça um programa que receba 5 numeros sorteados para os alunos e mostre o maior
numero sorteado.
Dados de Entrada: 5, 50, 10, 98 e 23

Saida: 98 
*/
/* Pode fazer assim para apresentar os numero 
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
*/ //ou da forma abaixo

/*
const numerosSorteados=[];

 for (let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

print(numerosSorteados);

//Para apresentar o numero maior que é o que o exercicio pede
let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}
 
print('Maior valor é ' + maiorValor);
*/

//Simplificando ainda mais o codigo 

let maiorValorEncontrado = 0;
let menorValorEncontrado = gets();

for (let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    } else {
        menorValorEncontrado;
    }    
}    

print('Maior valor é ' + maiorValorEncontrado);
print('Menor valor é ' + menorValorEncontrado);