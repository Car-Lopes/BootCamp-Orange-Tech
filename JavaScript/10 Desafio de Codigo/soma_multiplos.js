//var a = parseInt(gets());
//var n = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
const a=5;
const n=20;
var total = 0;

function multiplos(a,n) {
    
    for(i = 1; i<=(n/a);i++){
      total = total + (i*a);
    }
    console.log(total);
  }
  multiplos(a,n,total);
  console.log(a,n,total);