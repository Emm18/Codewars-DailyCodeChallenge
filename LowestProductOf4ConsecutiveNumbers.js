//https://www.codewars.com/kata/554e52e7232cdd05650000a0

//Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

//This should only work if the number has 4 digits or more. If not, return "Number is too small".

//Example
//lowestProduct("123456789")--> 24 (1x2x3x4)
//lowestProduct("35") --> "Number is too small"

function lowestProduct(input) {
  let newInput = input.split('');
  let products = [];
  
  if(newInput.length < 4){
    return "Number is too small";
  };
  
  for(let i = 0; i <= newInput.length - 4; i++){
    products.push(getProduct(newInput.slice(i, i + 4)));
  };
  
  return products.sort((a,b) => a - b)[0];
};

function getProduct(arr){
  let ctr = 1;
  for(let i = 0; i <= arr.length - 1; i++){
    ctr = ctr * +arr[i];
  };
  return ctr;
};
