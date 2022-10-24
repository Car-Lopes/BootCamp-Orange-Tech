/*
Faça um  programa para calcular o valor a ser gasto em uma viagem

5 Variaveis. Sendo:
 - Preço do Etanol;
 - Preço da Gasolina;
 - O tipo de combustivel que esta no carro;
 - Gasto Medio de combustivel do carro por KM; 
 - Distancia em KM;

 imprima no console o valor que sera gasto na viagem 
 */

 const precoEtanol = 3.39;
 const precoGasolina = 4.65;
 let tipoCombustivel = 'Gasolina';
 const gastoMedioKmPorLitro = 35;
 const distanciaASerPercorrida = 250;

 const litrosConsumidos = distanciaASerPercorrida / gastoMedioKmPorLitro;
 console.log(tipoCombustivel='Etanol');
 
 if (tipoCombustivel==='Gasolina') {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
 } else { 
    const valorGasto = litrosConsumidos * precoEtanol; 
    console.log(valorGasto.toFixed(2));
 }

