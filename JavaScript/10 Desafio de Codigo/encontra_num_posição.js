//Encontra o numero e a posição 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 81;
let posicao = 0;
let bool = false;

for (let i in elementos){
    if (elementos[i] === valor){
        posicao = i;
        bool = true;
    }
}

    if(bool){
        console.log("Achei "+ valor + " na posicao " + elementos.indexOf(valor));
    }else{
        console.log("Numero "+ valor + " nao encontrado!" );
    }
