//importando as funções gets e print
const {gets, print} = require('./funcoes_auxiliares');

/* Encontra o maior e o menor valor 
*/

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