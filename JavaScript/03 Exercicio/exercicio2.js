/*
O IMC - Indice de massa corporal é um criterio de organização mundial de saude 
para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição
de acordo com a tabela abaixo

- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso Normal;
- Entre 25 e 30 Acima do peso; 
- Entre 30 e 40 Obeso; 
- Acima de 40 Obsesidade Morbita;
*/ 

const peso = 108.9;
const altura = 1.65;

//const imc = peso / (altura * altura);
const imc = peso / Math.pow(altura,2);
console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do Peso')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal')
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do Peso')
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade Morbita')
}

