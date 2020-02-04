//https://www.codewars.com/kata/52e1476c8147a7547a000811

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.


function validate(password) {  
  let validated = false;
  
  if(isAlphaNumeric(password) &&
      isSixCharLong(password) && 
        containsLowerCase(password) && 
          containsUpperCase(password) && 
            containsNumber(password)){
    validated = true;
  }
  
  return validated;
}

function isAlphaNumeric(pass){
  let alphaNumeric = false;
    for(let i = 0; i <= pass.length - 1; i++){
      if(((pass[i].toLowerCase()).charCodeAt(0) >= 97 && (pass[i].toLowerCase()).charCodeAt(0) <= 122) || parseInt(pass[i])){
        alphaNumeric = true;
      } else {
        alphaNumeric = false;
        break;
      }
    }
  return alphaNumeric;
}

function isSixCharLong(pass){
  if(pass.length >= 6){
    return true;
  }
return false;
}

function containsLowerCase(pass){
  let isValidated = false;
  for(let i = 0; i <= pass.length - 1; i++){
    if(!parseInt(pass[i]) && pass[i] === pass[i].toLowerCase()){
      isValidated = true;
      break;
    }
  } 
return isValidated;
}

function containsUpperCase(pass){
  let isValidated = false;
  for(let i = 0; i <= pass.length - 1; i++){
    if(!parseInt(pass[i]) && pass[i] === pass[i].toUpperCase()){
      isValidated = true;
      break;
    }
  } 
return isValidated;
}

function containsNumber(pass){
  let isValidated = false;
  for(let i = 0; i <= pass.length - 1; i++){
    if(parseInt(pass[i])){
      isValidated = true;
      break;
    }
  } 
return isValidated;
}
