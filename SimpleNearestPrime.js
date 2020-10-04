//https://www.codewars.com/kata/5a9078e24a6b340b340000b8

//In this Kata, you will be given a number and your task will be to return the nearest prime number.

//solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
//solve(125) = 127
//We'll be testing for numbers up to 1E10. 500 tests.

//More examples in test cases.

//Good luck!

function solve(n){
  let result;
    if(checkPrime(n)){
      result = n;
    } else {
      let up = n + 1;
      let down = n - 1;
      let isDone = false;
      
      while(!isDone){
        if(checkPrime(down)){
          result = down;
          isDone = true;
        }else if(checkPrime(up)){
          result = up;
          isDone = true;
        };
        up++;
        down--;
      };
    };
  return result;
};

function checkPrime(n){
  let result = true;
  for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
    if(n % i == 0){
      result = false;
      break;
    };
  };
  return result;
};
