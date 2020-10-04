//https://www.codewars.com/kata/59aa6567485a4d03ff0000ca

//Consider the prime number 23. If we sum the square of its digits we get: 2^2 + 3^2 = 13, then for 13: 1^2 + 3^2 = 10, and finally for 10: 1^2 + 0^2 = 1.

//Similarly, if we start with prime number 7, the sequence is: 7->49->97->130->10->1.

//Given a range, how many primes within that range will eventually end up being 1?

//The upperbound for the range is 50,000. A range of (2,25) means that: 2 <= n < 25.

//Good luck!

function solve(a, b) {
  let ctr = 0;
  for(let i = a == 1 ? 2 : a; i < b; i++){
    if(isPrime(i)){
      let temp = i;
      while(parseInt(temp) != 1 && parseInt(temp) != 20){
        let newValue = 0;
        temp.toString().split('').map(x => {
          newValue += parseInt(x) * parseInt(x);
        });
        temp = newValue;
      };
      if(parseInt(temp) == 1){
        ctr++;
      };
    };
  };
  
  return ctr;
};

function isPrime(n){
  for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
    if(n % i == 0){
      return false;
    };
  };
  return true;
};
