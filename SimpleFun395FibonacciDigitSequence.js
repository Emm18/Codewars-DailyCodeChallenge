//https://www.codewars.com/kata/5bc555bb62a4cec849000047

//Task
//You are given three non negative integers a, b and n, and making an infinite sequence just like fibonacci sequence, use the following rules:

//step 1: use ab as the initial sequence.
//step 2: calculate the sum of the last two digits of the sequence, and append it to the end of sequence.
//repeat step 2 until you have enough digits
//Your task is to complete the function which returns the nth digit (0-based) of the sequence.

//Notes:
//0 <= a, b <= 9, 0 <= n <= 10^10
//16 fixed testcases
//100 random testcases, testing for correctness of solution
//100 random testcases, testing for performance of code
//All inputs are valid.
//Pay attention to code performance.
//Examples
//For a = 7, b = 8 and n = 9 the output should be 5, because the sequence is:

//78 -> 7815 -> 78156 -> 7815611 -> 78156112 -> 781561123 -> 7815611235 -> ...
//and the 9th digit of the sequence is 5.

//For a = 0, b = 0 and n = 100000000 the output should be 0, because all the digits in this sequence are 0.

function find(a,b,n){
  let result = `${a}${b}`;
  let pattern = ['1123581347', '1459'];
  let next;
  let stopWhen;
  if(result == '00'){
    return 0;
  };
  
  stopWhen = result == '77' || result == '68' || result == '59' || result == '95' ||
      result == '86' || result == '14' || result == '45' || result == '26' ||
       result == '07' || result == '31' || result == '42' || result == '70' ? 14 : 11;
  
  while(parseInt(result[result.length - 2]) + parseInt(result[result.length - 1]) != stopWhen){
    result += `${parseInt(result[result.length - 2]) + parseInt(result[result.length - 1])}`;
  };
  
  if(n < result.length){
    return parseInt(result[n]);
  } else {
    let p = stopWhen == 11 ? pattern[0] : pattern[1];
    let diff = n - result.length;
    let index = diff % p.length;
    return parseInt(p[index]);
  };
};
