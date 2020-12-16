//https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5

//Consider the following expansion:

//solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
//solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
//Given a string, return the expansion of that string.

//Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

//More examples in test cases.

//Good luck!

function solve(str){
  let newStr = str.split('');
  let numbers = newStr.filter(x => x > 0).map(num => +num).reverse();
  let validLetters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  
  numbers.map(num => {
    let index = newStr.lastIndexOf(num.toString());
    let tempStr = newStr.splice(index, newStr.length - index).filter(s => validLetters.includes(s)).join('');
    result = tempStr + result;
    result = generateStr(result, num);
  });
  
  return newStr.filter(s => validLetters.includes(s)).join('') + result;
};

function generateStr(str, count){
  let result = '';
  for(let i = 0; i < count; i++){
    result += str;
  };
  return result;
};
