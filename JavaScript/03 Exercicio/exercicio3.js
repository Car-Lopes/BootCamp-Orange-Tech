/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando 
o preço normal de etiqueta e a escolha da condição de PG.
Utilize os codigos da tabela a seguir para ler a condição de Pg 
escolhida e efetuar o calculo adequado. 

- A vista Débito, recebe 10% de desconto;
- A vista no Dinheiro ou Pix, Recebe 15% de desconto; 
- Em duas vezes, preço normal de etiqueta sem juros; 
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
- 1- Debito, 2-Dinheiro ou pix, 3-Em 2 vezes, 4-Em mais de 2 vezes
*/ 

const preco = 100; 
let condPg = 4;

if (condPg === 1){
    precoFinal = (preco * -0.1) + preco
}else if (condPg === 2){
    precoFinal = (preco * -0.15) + preco
}else if (condPg === 3){
    precoFinal = preco 
}else if(condPg === 4 ){
    precoFinal = (preco * 0.1) + preco
} 
console.log(precoFinal)