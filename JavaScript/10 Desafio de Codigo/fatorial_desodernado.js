//Fatorial desodernado


let n = 4; 

function clumsy(n, m = n % 4) {
  return n < 3 ? n : n === 3 || n === 4 ? n + 3 : !m ? n + 1 : m === 1 || m === 2 ? n + 2 : n - 1
}

console.log(clumsy(n))