const array = [2,4,5,1,7,9];

function ordenaLista(array) {
    let numerosPares = [];
    let numerosImpares = [];
    let arrayOrdenado = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        numerosPares.push(array[i]);
      } else {
        numerosImpares.push(array[i]);
       // numerosPares.reverse()
      }
    }
    arrayOrdenado = numerosPares.concat(numerosImpares.sort());
  
    return arrayOrdenado;
}

console.log(ordenaLista(array))