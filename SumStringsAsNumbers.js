// https://www.codewars.com/kata/5324945e2ece5e1f32000370

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// NOTE: CONSIDER BIG NUMBERS


function sumStrings(a,b) {
  let x;
  let y;
  
  if(a.length > b.length){
    x = a;
    y = b;
  } else {
    x = b;
    y = a;
  }
  
  let remainder = 0;
  let result="";
  let lengthOfY = y.length - 1;
  
  for(let i = x.length -1; i >= 0; i--){
  
    let firstNum = x[i];
    let secondNum = y[lengthOfY] || 0;
    let total = (parseInt(firstNum) + parseInt(secondNum));
    
    if(remainder > 0){
      total += 1;
      remainder = 0;
    }
    
    if(total > 9 && i != 0){
      remainder += 1;
      total = total - 10;
    }
    
    result = (total).toString() + result;
    lengthOfY -= 1;
  }
  
  let temp = [];  
  
  while(result[0] == 0){
    temp = result.split("");
    temp[0] = "";
    result = temp.join("");
  }
  
  return result;
}
