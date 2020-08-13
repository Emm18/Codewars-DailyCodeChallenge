//https://www.codewars.com/kata/58d76854024c72c3e20000de

//Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, 
//while ensuring there is exactly one space between each word. Punctuation marks should be treated as 
//if they are a part of the word in this kata.

function reverse(str){
  let reverseIt = false;
  let newStr = str.split(' ');
  let result = [];
  
  while(newStr.length > 0){
    let temp = newStr.splice(0,1)[0];
    if(temp != ''){
      if(result.length == 0 || !reverseIt){
        result.push(temp);
        reverseIt = true;
      } else {
        result.push(temp.split('').reverse().join(''));
        reverseIt = false;
      };
    };
  };
  
  return result.join(' ');
};
