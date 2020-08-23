//https://www.codewars.com/kata/5b162ed4c8c47ea2f5000023

//In this Kata, you will be given an integer n and your task will be to return the largest integer that is <= n and has the highest digit sum.

//For example:

//solve(100) = 99. Digit Sum for 99 = 9 + 9 = 18. No other number <= 100 has a higher digit sum.
//solve(10) = 9
//solve(48) = 48. Note that 39 is also an option, but 48 is larger.
//Input range is 0 < n < 1e11

//More examples in the test cases.

//Good luck!

function solve(n){
  let toSub;
  let numToStr = n.toString().split('');
  let x;
  
  for(let i = 1; i <= numToStr.length - 1; i++){
    if(numToStr[i] != '9'){
      x = i;
      break;
    };
  };
  
  toSub = (n - parseInt(numToStr.slice(0, x).join('') + createZeroes(numToStr.length - x))) + 1;
  
  return parseInt((n-toSub).toString().split('').reduce((a,b) => parseInt(a) + parseInt(b), 0)) > 
    parseInt(n.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b), 0)) 
    ? n - toSub 
    : n;
};

function createZeroes(l){
  let result = '';
  for(let i = 0; i < l; i++){
    result += '0';
  };
  return result;
};
