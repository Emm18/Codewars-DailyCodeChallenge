//https://www.codewars.com/kata/5302f383be2a91e4d70002c6

//Queen of the Forest needs a function that will add a specified quantity of leading zeros to any given number.

//For example, if a 5-digit number is needed, and we pass in 11, the returned value would be 00011. There are many ways to achieve this. 
//Additionally, if the size passed is less than the length of number, just return the number as a string. Let's have one that would be both useful and good performance-wise.

//NOTES:

//1) Numbers passed only - no strings, objects, functions, etc.
//2) Whole positives only - negatives converted, decimals dropped (provided in solution setup)

function zeroFill(number, size) {
  number = number < 0 ? Math.floor(number * -1) : Math.floor(number);
  
  return generateZeroes(size - number.toString().length) + number;
};

function generateZeroes(ctr){
  let result = "";
  for(let i = 0; i < ctr; i++){
    result += "0";
  };
  return result;
};
