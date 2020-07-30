//https://www.codewars.com/kata/59f38b033640ce9fc700015b

//In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

//The first element of the array is at index 0.

//Good luck!

function total(arr){
  let total = 0;
  for(let i = 2; i <= arr.length - 1; i++){
    if(isPrime(i)){
      total += arr[i];
    };
  };
  return total;
};

function isPrime(num){
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i == 0){
      return false;
    };
  };
  return true;
};
