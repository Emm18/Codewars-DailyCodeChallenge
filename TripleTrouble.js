//https://www.codewars.com/kata/55d5434f269c0c3f1b000058

//Write a function

//tripledouble(num1,num2)
//which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number 
//at any place in num1 and also a straight double of the same number in num2.

//If this isn't the case, return 0

//Examples
//tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

//tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

//tripledouble(12345, 12345) == 0

//tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
  let newNum1 = num1.toString().split('');
  let newNum2 = num2.toString().split('');
  let triples = [];
  let isTripleDouble = false;
    
  for(let i = 0; i <= newNum1.length - 3; i++){
    if(newNum1[i] == newNum1[i] && newNum1[i+1] == newNum1[i] && newNum1[i+2] == newNum1[i]){
      triples.push(newNum1[i]);
    }
  }
  
  for(let i = 0; i <= newNum2.length - 2; i++){
    for(let j = 0; j <= triples.length - 1; j++){
      if(newNum2[i] == newNum2[i] && newNum2[i+1] == newNum2[i] && newNum2[i] == triples[j]){
        isTripleDouble = true;
        break;
      }
    }
  }
  
  return isTripleDouble ? 1 : 0;
}
