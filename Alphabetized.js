//https://www.codewars.com/kata/5970df092ef474680a0000c9

//The alphabetized kata
//Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. 
//Whitespace and punctuation shall simply be removed!

//The input is restricted to contain no numerals and only words containing the english alphabet letters.

//Example:

//alphabetized("The Holy Bible") // "BbeehHilloTy"

function alphabetized(s) {
  let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let newS = s.split('');
  let result = '';
  
  for(let i = 0; i <= letters.length - 1; i++){
    let big = letters[i];
    let small = letters[i].toLowerCase();
    result += newS.filter(x => x == big || x == small).join('');
  };
  
  return result;
};
