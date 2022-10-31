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
function aplicarDesconto(valor, desconto){
    desc = (valor * desconto/100);
    return valor - (valor * desconto/100);
}
function aplicarJuros(valor, juros){
    jrs = (valor * juros/100);
    return valor + (valor * juros/100);
}
const preco = 100; 
let condPg = 4;

if (condPg === 1){
    precoFinal = (aplicarDesconto(preco,10));
    console.log('Valor do desconto é ' + desc)
}else if (condPg === 2){
    precoFinal = (aplicarDesconto(preco,15));
    console.log('Valor do desconto é ' + desc);
}else if (condPg === 3){
    precoFinal = (aplicarDesconto(preco,0));
    console.log('Não Obteve desconto');
}else if(condPg === 4 ){
    precoFinal = (aplicarJuros(preco,10));
    console.log('Valor do juros é ' + jrs);
} 
//console.log('Valor do desconto é ' + desc);
//console.log('Valor do juros é ' + juros);
console.log('Valor a pagar é '+ precoFinal);