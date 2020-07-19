//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

//Complete the solution so that it splits the string into pairs of two characters.
//If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//Examples:

//solution('abc') // should return ['ab', 'c_']
//solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
  let newStr = str.split('');
  let res = [];
  
  while(newStr.length > 0){
    if(newStr.length >= 2){
      res.push(newStr.splice(0,2).join(''));
    } else {
      res.push(newStr.splice(0,1)[0] + '_');
    };
  };
  
  return res;
};
