//gets pega leitura um unput de alguem digitando 
//Print da um console.log como se fosse 

const entradas = [4, 100, 150, 90, 200];
let i = 0; 


function gets(){
    const valor = entradas[i]
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};