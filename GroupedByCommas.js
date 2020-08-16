//https://www.codewars.com/kata/5274e122fc75c0943d000148

//Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

//Assume: 0 <= n < 2147483647

//Examples
//       1  ->           "1"
//      10  ->          "10"
//     100  ->         "100"
//    1000  ->       "1,000"
//   10000  ->      "10,000"
//  100000  ->     "100,000"
// 1000000  ->   "1,000,000"
//35235235  ->  "35,235,235"

function groupByCommas(n) {
  let newNumber = n.toString().split('');
  let result = [];
  
  if(newNumber.length <= 3){
    return newNumber.join('');
  };
  
  while(newNumber.length >= 3){
    result.unshift(newNumber.splice(newNumber.length - 3, 3).join(''));
  };
  
  return newNumber.length > 0 ? newNumber.join('') + ',' + result.join(',') : result.join(',');
};
