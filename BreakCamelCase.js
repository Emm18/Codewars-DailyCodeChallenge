//https://www.codewars.com/kata/5208f99aee097e6552000148

//Complete the solution so that the function will break up camel casing, using a space between words.

//Example
//solution("camelCasing")  ==  "camel Casing"

function solution(string) {
  let newStr = string.split('');
  let words = [];
  let temp = '';
  
  for(let i = 0; i <= newStr.length - 2; i++){
    if(newStr[i + 1].charCodeAt(0) >= 65 && newStr[i + 1].charCodeAt(0) <= 90){
      temp += newStr[i];
      words.push(temp);
      temp = '';
    } else {
      temp += newStr[i];
    }
  }
  
  temp += newStr[newStr.length - 1];
  words.push(temp);
  
  return words.join(' ');
}
