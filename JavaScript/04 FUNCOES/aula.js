/* Declarando função */

function teste(){
    console.log('Teste');
}

teste();

function incrementarJuros(valor, percentualJuros){
    const valorAcrecimo = (percentualJuros/100)*valor;
    return valor + valorAcrecimo;
}

console.log(incrementarJuros(100, 20));

function main(){
    console.log('Pragama Principal');
}
main();