/*
Faça um  programa para calcular o valor a ser gasto em uma viagem

3 Variaveis. Sendo:
 - Preço do combustivel;
 - Gasto Medio de combustivel do carro por KM; 
 - Distancia em KM;

 imprima no console o valor que sera gasto na viagem 
 */

 const precoCombustivel = 4.70;
 const gastoMedioKmPorLitro = 35;
 const distanciaASerPercorrida = 250;

 const litrosConsumidos = distanciaASerPercorrida / gastoMedioKmPorLitro;
 const valorGasto = litrosConsumidos * precoCombustivel;
 console.log(valorGasto.toFixed(2));


