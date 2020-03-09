//https://www.codewars.com/kata/54da5a58ea159efa38000836

//Given an array, find the integer that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let result;
  
  A.map(val => {
    let found = false;
    if(A.filter(x => x == val).length % 2 == 1 && !found){
      result = val;
      found = true;
    }
  });
  
  return result;
}
