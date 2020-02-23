//https://www.codewars.com/kata/526dbd6c8c0eb53254000110

//In this example you have to validate if a user input string is alphanumeric. 
//The given string is not nil/null/NULL/None, so you don't have to check that.

//The string has the following conditions to be alphanumeric:

//At least one character ("" is not valid)
//Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
//No whitespaces / underscore


function alphanumeric(string){
  let newStr = string.split("");
  let isValid = true;
  
  if(!string){
    isValid = false
  }
  
  for(let i = 0; i <= newStr.length - 1; i++){
    if(!((newStr[i].charCodeAt(0) >= 65 && newStr[i].charCodeAt(0) <= 90) ||
          (newStr[i].charCodeAt(0) >= 97 && newStr[i].charCodeAt(0) <= 122) ||
              (newStr[i].charCodeAt(0) >= 48 && newStr[i].charCodeAt(0) <= 57) ) ){
      isValid = false;
      break;
    }
  }
  
  return isValid;
}
