//https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

//Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

//the array can't be empty
//only non-negative, single digit integers are allowed
//Return nil (or your language's equivalent) for invalid inputs.

//Examples
//For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

//[4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr){
  let result = [];
  
  if(arr.filter(x => x < 0 || x > 9).length > 0 || arr.length == 0){
    return null;
  } else {
    arr = arr.reverse();
    let remainder = 0;
    let temp = arr.splice(0,1)[0] + 1;
    
    while(arr.length > 0){      
    
      if(remainder == 1){
        temp += 1;
        remainder = 0;
      };
    
      if(temp > 9){
        remainder = 1;
        temp = 0;
      };
      
      result.push(temp);
      temp = arr.splice(0,1)[0];
    };
    
    temp += remainder;
      
    if(temp > 9){
      result.push(0, 1);
    } else {
      result.push(temp);
    };
  };
  
  return result.reverse();
};
