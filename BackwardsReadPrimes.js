//https://www.codewars.com/kata/5539fecef69c483c5a000015

//Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

//Examples:
//13 17 31 37 71 73 are Backwards Read Primes
//13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

//Task
//Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

//Example
//backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

//Note for Forth
//Return only the first backwards-read prime between start and end or 0 if you don't find any

//backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
//backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]

function backwardsPrime(start, stop){
  let result = [];
  
  for(let i = start; i <= stop; i++){
    if(primeChecker(i)){
      result.push(i);
    };
  };
  
  return result;
};

function primeChecker(n){
  let reversed = parseInt(n.toString().split('').reverse().join(''));
  let min, max;
  
  if(n == reversed){
    return false;
  }
  
  if(n > reversed){
    max = n;
    min = reversed;
  } else {
    max = reversed;
    min = n;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(max)); i++){
    if(i <= min && min % i == 0){
      return false;
    }
  
    if(max % i == 0){
      return false;
    };
  };
  return true;
};
