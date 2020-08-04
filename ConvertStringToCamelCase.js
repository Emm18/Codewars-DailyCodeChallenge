//https://www.codewars.com/kata/517abf86da9663f1d2000003

//Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
//The first word within the output should be capitalized only if the original word was capitalized 
//(known as Upper Camel Case, also often referred to as Pascal case).

//Examples
//toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

//toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
  let newStr = str.split('');
  let result = '';
  let temp = '';
  
  while(newStr.length > 0){
    let x = newStr.splice(0,1)[0];
    
    if(x.toLowerCase().charCodeAt(0) >= 97 && x.toLowerCase().charCodeAt(0) <= 122){
      if(result == "" && temp == ""){
        temp += x;
      }else if(temp == ""){
        temp += x.toUpperCase();
      } else {
        temp += x;
      };
    } else {
      result += temp;
      temp = '';
    };
  };
  
  result += temp;
  return result;
};
