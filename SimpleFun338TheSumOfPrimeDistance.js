//https://www.codewars.com/kata/5959df61cc30ac2f03000046

//Task
//We define the Prime Distance between two even numbers as: The number of primes between two even numbers. 
//ie. The Prime Distance between 16 and 20 is 2, because there are two primes between 16 and 20 --> (17,19).

//Given an integer array arr. All elements in the array are unique even numbers and they are arranged in 
//ascending order. Your task is to calculate the sum of the Prime Distance of each pair of elements in the array.

//Example
//For arr = [4,6,12], the output should be 6.

//prime distance of (4,6) --> 1
//prime distance of (6,12) --> 2
//prime distance of (4,12) --> 3

//1 + 2 + 3 = 6
//For arr = [4,6,12,14,16,20], the output should be 40.

//pd(4,6) --> 1
//pd(6,12) --> 2
//pd(12,14) --> 1
//pd(14,16) --> 0
//pd(16,20) --> 2

//pd(4,12) --> 3
//pd(6,14) --> 3
//pd(12,16) --> 1
//pd(14,20) --> 2

//pd(4,14) --> 4
//pd(6,16) --> 3
//pd(12,20) --> 3

//pd(4,16) --> 4
//pd(6,20) --> 5

//pd(4,20) --> 6

//1+2+1+0+2+3+3+1+2+4+3+3+4+5+6=40

function sumOfPrimeDistance(arr){
  let firstCounts = [];
  let mainCtr = 0;
  
  for(let i = 0; i <= arr.length - 2; i++){
    let tempCtr = 0;
    for(let j = arr[i] + 1; j < arr[i + 1]; j++){
      if(primeCheck(j)){
        tempCtr++;
      };
    };
    firstCounts.push(tempCtr);
  };
  
  for(let i = 0; i <= firstCounts.length - 1; i++){
    let subCtr = 0;
    for(let j = i; j <= firstCounts.length - 1; j++){    
      subCtr += firstCounts[j];
      mainCtr += subCtr;
    };
  };
  
  return mainCtr;
};

function primeCheck(max){
  for(let j = 2; j <= Math.sqrt(max); j++){
      if(max % j == 0){
        return false;
      };
  };
  return true;
};
