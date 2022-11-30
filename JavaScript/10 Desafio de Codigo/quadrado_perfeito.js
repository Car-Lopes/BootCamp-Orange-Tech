let n = 21; 

const numSquares = n => {
  if (n < 4) return n;
  
  let best = Infinity;
  
  for (let x = 2; x <= Math.floor(Math.sqrt(n)); ++x) {
      let k = Math.floor(n / (x * x));
      best = Math.min(best, k + numSquares(n - k * x * x));
  }
  return best;
};
console.log(numSquares(n))