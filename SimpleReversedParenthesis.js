//https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040

//Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

//For example:

//solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
//solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
//solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.
//Parenthesis will be either "(" or ")".

//More examples in the test cases.

//Good luck.

function solve(s){
  let newStr = s.split('');  
  let isValid = true;
  let ctr = 0;

  if(newStr.length === 0 || newStr.length % 2 !== 0){
    return -1;
  };
  
  while(isValid){
    isValid = false;
    for(let i = 0; i <= newStr.length - 1; i++){
      let opening = newStr.indexOf('(', i);
      let closing = newStr.indexOf(')',opening);
      if(opening + 1 == closing){
        newStr[opening] = '';
        newStr[closing] = '';
        isValid = true;
      };
    };
    newStr = newStr.join('').split('');
  };
  
  for(let i = 0; i <= newStr.length - 1; i += 2){
    ctr += newStr[i] === ')' ? 1 : 0;
    ctr += newStr[i + 1] === '(' ? 1 : 0;
  };
  
  return ctr;
};
