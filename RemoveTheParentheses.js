//https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

//In this kata you are given a string for example:

//"example(unwanted thing)example"
//Your task is to remove everything inside the parentheses as well as the parentheses themselves.

//The example above would return:

//"exampleexample"
//Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.

function removeParentheses(s){
  let newStr = s.split('');
  
  while(newStr.includes('(')){
    let opening = newStr.lastIndexOf('(');
    let closing = newStr.indexOf(')', opening);
    newStr.splice(opening, (closing - opening) + 1);
  };
  
  return newStr.join('');
};
