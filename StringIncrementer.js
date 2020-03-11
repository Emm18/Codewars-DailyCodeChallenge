//https://www.codewars.com/kata/54a91a4883a7de5d7800009c

//Your job is to write a function which increments a string, to create a new string.

//If the string already ends with a number, the number should be incremented by 1.
//If the string does not end with a number. the number 1 should be appended to the new string.
//Examples:

//foo -> foo1

//foobar23 -> foobar24

//foo0042 -> foo0043

//foo9 -> foo10

//foo099 -> foo100

//Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  let strArr = strng.split('');
  let num = [];
  let leadingZeroes = [];

  while (!isNaN(strArr[strArr.length - 1])) {
    num.push(strArr.splice(strArr.length - 1, 1)[0]);
  }
  num.reverse();

  while (parseInt(num[0]) == 0) {
    leadingZeroes.push(num.splice(0, 1)[0]);
  }
  
  let baseZero = leadingZeroes.length;
  let baseNum = num.length;
  
  if(num.length > 0){
    num = parseInt(num.join('')) + 1;
  } else {
    num = 1;
  }
  
  num = num.toString().split('');

  if(baseNum < num.length){
    leadingZeroes.splice(0,1);
  }

  return strArr.join('') + leadingZeroes.join('') + num.join('');
}
