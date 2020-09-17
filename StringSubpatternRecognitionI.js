//https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b

//In this kata you need to build a function to return either true/True or false/False if a string can be seen as 
//the repetition of a simpler/shorter subpattern or not.

//For example:

//hasSubpattern("a") === false; //no repeated pattern
//hasSubpattern("aaaa") === true; //created repeating "a"
//hasSubpattern("abcd") === false; //no repeated pattern
//hasSubpattern("abababab") === true; //created repeating "ab"
//hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
//Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) 
//and can be pretty long (keep an eye on performances!).

function hasSubpattern(string){
  let newString = string.split('');
  let result = false;
  let startLength;
  
  for(let i = newString.length - 1; i > 0; i--){
    if(newString.length % i == 0){
      startLength = i;
      break;
    };
  };
  
  for(let i = startLength; i > 0; i--){
    let possiblePattern;
    let good = true;
    if(newString.length % i == 0){
      for(let j = 0; j < newString.length; j += i){
        if(!possiblePattern){
          possiblePattern = newString.slice(j,j + i).join('');  
        } else {
          if(possiblePattern !== newString.slice(j,j + i).join('')){
            good = false;
            break;
          };
        };
      };
      if(good){
        result = true;
        break;
      };
    };
  };
  
  return result;
};
