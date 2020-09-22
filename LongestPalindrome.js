//https://www.codewars.com/kata/5a0178f66f793bc5b0001728

//A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

//For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, 
//of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

//For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".

function longestPalindrome(str) {
  let newStr = str.toLowerCase()
    .split('')
    .filter(str => (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) || parseInt(str) >= 0);
  let counter = 0;
  let singleMidleChar = false;
  
  while(newStr.length > 0){
    let char = newStr.slice(0,1)[0];
    let newTempArr = newStr.filter(str => str != char);
    let charCount = newStr.length - newTempArr.length;
    
    if(charCount == 1 && !singleMidleChar){
      counter++;
      singleMidleChar = true;
    } else if(charCount > 1){
      if(charCount % 2 == 0){
        counter += charCount;
      } else {
        counter += charCount - 1;
      };
    };
    newStr = newTempArr;
  };
  
  return counter;
};
