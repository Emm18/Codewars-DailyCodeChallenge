//https://www.codewars.com/kata/51f1342c76b586046800002a

//Round any given number to the closest 0.5 step

//I.E.

//solution(4.2) = 4
//solution(4.3) = 4.5
//solution(4.6) = 4.5
//solution(4.8) = 5
//Round up if number is as close to previous and next 0.5 steps.

//solution(4.75) == 5

function solution(n){
  let temp = Math.floor((n - Math.floor(n)) * 100);
  
  if(temp < 10){
    temp *= 10;
  };
  
  if(temp >= 25 && temp <= 74){
    return Math.floor(n) + 0.5;
  };
  
  if(temp >= 75 && temp <= 99){
    return Math.floor(n) + 1;
  };
  
  return Math.floor(n);
};
