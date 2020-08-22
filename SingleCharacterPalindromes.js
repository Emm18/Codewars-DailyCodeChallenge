//https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3

//You will be given a string and you task is to check if it is possible to convert that string into a palindrome 
//by removing a single character. If the string is already a palindrome, return "OK". If it is not, and we can 
//convert it to a palindrome by removing one character, then return "remove one", otherwise return "not possible". The order of the characters should not be changed.

//For example:

//solve("abba") = "OK". -- This is a palindrome
//solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
//solve("abbaab") = "not possible". 
//More examples in the test cases.

//Good luck!

function solve(s){
  let newStr = s.split('');
  let removeOne = false;
  
  if(s == newStr.reverse().join('')){
    return 'OK';
  };
  
  for(let i = 0; i <= newStr.length - 1; i++){
    let temp = newStr[i];
    newStr[i] = '';
    let word = newStr.join('');
    let toReverse = [...newStr].reverse().join('');
    if(word == toReverse){
      removeOne = true;
      break;
    };
    newStr[i] = temp;
  };
  
  return removeOne ? 'remove one' : 'not possible';
};
