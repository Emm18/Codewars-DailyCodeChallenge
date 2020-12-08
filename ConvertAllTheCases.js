//https://www.codewars.com/kata/59be8c08bf10a49a240000b1

//In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

//You must write a function that changes to a given case. It must be able to handle all three case types:

//js> changeCase("snakeCase", "snake")
//"snake_case"
//js> changeCase("some-lisp-name", "camel")
//"someLispName"
//js> changeCase("map_to_all", "kebab")
//"map-to-all"
//js> changeCase("doHTMLRequest", "kebab")
//"do-h-t-m-l-request"
//js> changeCase("invalid-inPut_bad", "kebab")
//undefined
//js> changeCase("valid-input", "huh???")
//undefined
//js> changeCase("", "camel")
//""
//Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be 
//lowercase except when necessary, in other words on word boundaries in camelCase.

let validCase = ['camel', 'snake', 'kebab'];
let letters = 'abcdefghijklmnopqrstuvwxyz';

function changeCase(identifier, targetCase){
  if(identifier == ''){
    return '';
  };
  
  if(!validCase.includes(targetCase) || !isValid(identifier)){
    return undefined;
  };
  
  if(targetCase == 'camel'){
    return toCamelCase(identifier);
  };
  
  if(targetCase == 'snake' || targetCase == 'kebab'){
    return toSnakeOrKebabCase(identifier, targetCase);
  };
};

function toCamelCase(str){
  let newStr = str.split('');
  let result = newStr.splice(0,1)[0].toLowerCase();
  
  let temp = '';
  while(newStr.length > 0){
    let char = newStr.splice(0,1)[0];
    
    if(!letters.includes(char) && !letters.toUpperCase().includes(char)){
      result += temp;
      temp = newStr.length > 0 ? newStr.splice(0,1)[0].toUpperCase() : '';
    } else {
      temp += char;
    };
  };
  
  return result + temp;
};

function toSnakeOrKebabCase(str, type){
  let newStr = str.split('');
  let result = [];
  
  let temp = newStr.splice(0,1)[0].toLowerCase();
  while(newStr.length > 0){
    let char = newStr.splice(0,1)[0];
    
    if(!letters.includes(char)){
      result.push(temp);
      temp = letters.includes(char.toLowerCase()) && char == char.toUpperCase() ? char.toLowerCase() : '';
    } else {
      temp += char;
    };
  };
  
  return type == 'snake' ? [...result, temp].join('_') : [...result, temp].join('-');
};

function isValid(str){
  let newStr = str.split('');
  let spec = [];
  let hasCapital = false;
  let hasSpecialCharacter = false;
  
  for(let i = 0; i <= newStr.length - 1; i++){
    if(!letters.includes(newStr[i]) && !letters.toUpperCase().includes(newStr[i])){
      
      if(spec.length == 0){
        spec.push(newStr[i]);
      } else if(!spec.includes(newStr[i])){
        return false;
      };
      
      hasSpecialCharacter = true;
    };
    
    if(letters.includes(newStr[i].toLowerCase()) && newStr[i] == newStr[i].toUpperCase()){
      hasCapital = true;
    };
    
    if(hasSpecialCharacter && hasCapital){
      return false;
    };
  };

  return true;
};
