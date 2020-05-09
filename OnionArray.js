//https://www.codewars.com/kata/59b2883c5e2308b54d000013

//An onion array is an array that satisfies the following condition for all values of j and k:

//If all of the following are true:

//j >= 0
//k >= 0
//j + k = array.length - 1
//j != k
//then:

//a[j] + a[k] <= 10
//Examples:
//[1, 2, 19, 4, 5]   =>  true  (as 1+5 <= 10 and 2+4 <= 10)
//[1, 2, 19, 4, 10]  =>  false (as 1+10 > 10)
//Write a function named isOnionArray/IsOnionArray/is_onion_array() that returns true if its argument is an 
//onion array and returns false if it is not.

function isOnionArray(arr){
  let result;
  
  if(arr.length < 2){
    return true;
  };
  
  while(arr.length > 1){
    let j = arr.splice(0,1)[0];
    let k = arr.splice(arr.length - 1, 1)[0];
    
    if(j + k <= 10){
      result = true;
    } else {
      result = false;
      break;
    };
  };
  
  return result;
}
