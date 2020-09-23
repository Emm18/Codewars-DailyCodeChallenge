//https://www.codewars.com/kata/5a622f5f85bef7a9e90009e2

//FizzBuzz is often one of the first programming puzzle people learn. Now undo it with reverse FizzBuzz!

//Write a function that accepts a string, which will always be a valid section of FizzBuzz. 
//Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

//Notes:

//If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
//All numbers in the sequence will be greater than zero.
//You will never receive an empty sequence.
//Examples
//reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
//reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
//reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]

function reverseFizzBuzz(s) {
  let newS = s.split(' ');
  let firstNumberFound = [];
  let result = [];
  
  for(let i = 0; i < newS.length; i++){
    if(parseInt(newS[i]) > 0){
      firstNumberFound.push(i, newS[i]);
      break;
    };
  };
  
  if(firstNumberFound.length > 0){
    let start = parseInt(firstNumberFound[1]) - firstNumberFound[0];
    for(let i = start; i <= (start + newS.length) - 1; i++){
      result.push(i);
    };
  } else {
    if(s == 'FizzBuzz'){
      result = [15];
    } else if(s == 'Fizz Buzz'){
      result = [9, 10];
    } else if(s == 'Buzz Fizz'){
      result = [5,6];
    } else if(s == 'Fizz'){
      result = [3];
    } else if(s == 'Buzz'){
      result = [5];
    };
  };
  
  return result;
};
