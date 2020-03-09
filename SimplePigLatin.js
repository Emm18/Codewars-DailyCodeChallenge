//https://www.codewars.com/kata/520b9d2ad5c005041100000f

//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//Examples
//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let result = [];
  str = str.split(' ');

  str.map(val => { 
    let arr = val.split('');
    let firstLetter = arr.splice(0,1);
    
    if((firstLetter[0].charCodeAt(0) >= 65 && firstLetter[0].charCodeAt(0) <= 90) ||
         (firstLetter[0].charCodeAt(0) >= 97 && firstLetter[0].charCodeAt(0) <= 122)){
      firstLetter += "ay";     
    }
    arr.push(firstLetter);
    result.push(arr.join(''))
  });
  
  return result.join(' ')
}
