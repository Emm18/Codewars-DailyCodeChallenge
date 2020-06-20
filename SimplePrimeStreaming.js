//https://www.codewars.com/kata/5a908da30025e995880000e3

//Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:

//"2357111317192329313741434753596167717379..."
//You will be given two numbers: a and b, and your task will be to return b elements starting from index a in this sequence.

//For example:
//solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.
//Tests go up to about index 20000.

//More examples in test cases. Good luck!

function solve(a,b){
  let combinedPrimes = '2';
  let ctr = 3;
  
  while(combinedPrimes.length < a + b){
    let temp = true;
    
    for(let i = 2; i < ctr; i++){
      if(ctr % i == 0){
        temp = false;
        break;
      };
    };
    if(temp){
      combinedPrimes += ctr;
    }
    ctr++;
  };
  
  return combinedPrimes.split('').splice(a, b).join('');
};

