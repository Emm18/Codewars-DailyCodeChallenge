//https://www.codewars.com/kata/5b165654c8be0d17f40000a3

//In this Kata, you will be given a number and your task will be to rearrange the number so that it is divisible by 25, 
//but without leading zeros. Return the minimum number of digit moves that are needed to make this possible. If impossible, return -1 ( Nothing in Haskell ).

//For example:

//solve(521) = 3 because:
//    a) Move the digit '1' to the front: 521 -> 512 -> 152. The digit '1' is moved two times.
//    b) Move '5' to the end: 152 -> 125. The digit '5' is moved one time, so total movement = 3.
//Of all the ways to accomplish this, the least digit moves = 3.

//solve(100) = 0. Number already divisible by 25.
//solve(1) = -1. Not possible to make number divisible by 25.

//solve(0) is not tested.
//More examples in test cases.

//Good luck!

function solve(n){
  let counts = [];
  
  if(n % 25 == 0){
    return 0;
  };
  
  let wZero = withZero(n);
  if(wZero){
    counts.push(wZero);
  };
  
  let wFive = withFive(n);
  if(wFive){
    counts.push(wFive);
  };
  
  let wTwoSeven = withTwoSeven(n);
  if(wTwoSeven){
    counts.push(wTwoSeven);
  };

  if(counts.length == 0){
    return -1;
  };
  
  counts.sort((a,b) => a - b);
  
  return counts[0];
}


function withZero(str){
  let result;
  
  for(let i = str.toString().split('').length - 1; i >= 0; i--){
    let temp = str.toString().split('');
    let ctr = 0;
    
    if((parseInt(temp[i]) == 0 && temp.includes('5')) || (parseInt(temp[i]) == 0 && temp.filter(x => x == 0).length >= 2)){
      ctr += (temp.length - 1) - i;
      let move = temp.splice(i, 1)[0];
      
      for(let j = temp.length; j >= 0; j--){
        if(parseInt(temp[j]) == 5 || parseInt(temp[j]) == 0){  
          let temp2 = temp.splice(j, 1)[0];
          
          ctr += temp.length - j;
          temp.push(temp2, move);
          result = ctr + addLeadingZeroes(temp.join(''));
          break;
        };
      };
      break;
    };
  };
  return result;
};

function withFive(str){
  let result;

  for(let i = str.toString().length - 1; i >= 0; i--){
    let temp = str.toString().split('');
    let ctr = 0;
    
    if(parseInt(temp[i]) == 5 && (temp.includes('2') || temp.includes('7'))){
      ctr += (str.toString().length - 1) - i;
      let move = temp.splice(i, 1)[0];
      
      for(let k = temp.length; k >= 0; k--){
        if(parseInt(temp[k]) == 2 || parseInt(temp[k]) == 7 || parseInt(temp[k]) == 0){
          let temp2 = temp.splice(k, 1)[0];
          
          ctr += temp.length - k;
          if(parseInt(temp2) == 0){
            ctr++;
          };
          temp.push(move, temp2);
          result = ctr + addLeadingZeroes(temp.join(''));
          break;
        };
      };
      break;
    };
  };
  return result;
};

function withTwoSeven(str){
  let result;
  
  for(let i = str.toString().length - 1; i >= 0; i--){
    let temp = str.toString().split('');
    let ctr = 0;
    
    if((parseInt(temp[i]) == 2 || parseInt(temp[i]) == 7) && temp.includes('5')){
      ctr += (str.toString().length - 1) - i;
      let move = temp.splice(i, 1)[0];
      
      for(let k = temp.length; k >= 0; k--){
        if(parseInt(temp[k]) == 5){
          let temp2 = temp.splice(k, 1)[0];
          
          ctr += (temp.length - k) + 1;
          temp.push(move, temp2);
          result = ctr + addLeadingZeroes(temp.join(''));
          break;
        };
      };
      break;
    };
  };
  return result;
};

function addLeadingZeroes(str){
  let ctr = 0;
  let temp = str.split('');
  
  while(temp[0] == '0'){
    temp.splice(0, 1);
    ctr++;
  };
  
  return ctr;
};
