//https://www.codewars.com/kata/5b4070144d7d8bbfe7000001

//You are given an input string.

//For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it...

//But will your code be performant enough?

//Examples:
//input   =  "Hello, World!"
//result  =  "1112111121311"

//input   =  "aaaaaaaaaaaa"
//result  =  "123456789101112"
//There might be some non-ascii characters in the string.

function numericals(s){
  let arrList = s.split('');
  let obj = {};
  let result = '';
  
  for(let i = 0; i <= arrList.length - 1; i++){
    let temp = arrList[i];
    if(obj[temp]){
      obj[temp] = obj[temp] + 1;
      result += obj[temp];
    } else {
      obj[temp] = 1;
      result += 1;
    };
  };
  
  return result;
};
