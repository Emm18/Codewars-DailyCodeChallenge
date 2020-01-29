// https://www.codewars.com/kata/51b6249c4612257ac0000005

// Create a function that takes a Roman numeral as its argument 
//and returns its value as a numeric decimal integer. 
//You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the 
//number to be encoded separately, starting with the leftmost digit 
//and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
//and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", 
//uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


function solution(roman){
  let newRoman = roman.split("");
  let result=0;
  
  for(let i = 0; i <= newRoman.length - 1; i++){
  
      let temp = newRoman[i] + newRoman[i+1];
      if(temp.toUpperCase() === 'CM'){
            result += getValue(temp);
            i+=1;
      } else if (temp.toUpperCase() === 'CD') {
            result += getValue(temp);
            i+=1;
      } else if (temp.toUpperCase() === 'XC') {
            result += getValue(temp);
            i+=1;
      } else if (temp.toUpperCase() === 'XL') {
            result += getValue(temp);
            i+=1;
      } else if (temp.toUpperCase() === 'IX') {
            result += getValue(temp);
            i+=1;
      } else if (temp.toUpperCase() === 'IV') {
            result += getValue(temp);
            i+=1;
      } else {
            result += getValue(newRoman[i]);
      }
    }
  
  return result;
}

function getValue(str){
  if(str.toUpperCase() === 'M'){
    return 1000;
  } else  if(str.toUpperCase() === 'CM'){
    return 900;
  } else  if(str.toUpperCase() === 'D'){
    return 500;
  } else  if(str.toUpperCase() === 'CD'){
    return 400;
  } else  if(str.toUpperCase() === 'C'){
    return 100;
  }  else  if(str.toUpperCase() === 'XC'){
    return 90;
  } else  if(str.toUpperCase() === 'L'){
    return 50;
  } else  if(str.toUpperCase() === 'XL'){
    return 40;
  } else  if(str.toUpperCase() === 'X'){
    return 10;
  } else  if(str.toUpperCase() === 'IX'){
    return 9;
  } else  if(str.toUpperCase() === 'V'){
    return 5;
  } else  if(str.toUpperCase() === 'IV'){
    return 4;
  } else  if(str.toUpperCase() === 'I'){
    return 1;
  }
}
