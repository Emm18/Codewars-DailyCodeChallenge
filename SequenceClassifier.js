//https://www.codewars.com/kata/5921c0bc6b8f072e840000c0

//A series or sequence of numbers is usually the product of a function and can either be infinite or finite.

//In this kata we will only consider finite series and you are required to return a code according to the type of sequence:

//Code	  Type	                Example
//0	      unordered	            [3,5,8,1,14,3]
//1	      strictly increasing	  [3,5,8,9,14,23]
//2	      not decreasing	      [3,5,8,8,14,14]
//3	      strictly decreasing	  [14,9,8,5,3,1]
//4	      not increasing	      [14,14,8,8,5,3]
//5	      constant	            [8,8,8,8,8,8]
//You can expect all the inputs to be non-empty and completely numerical arrays/lists - no need to validate the data; do not go for 
//sloppy code, as rather large inputs might be tested.

//Try to achieve a good solution that runs in linear time; also, do it functionally, meaning you need to build a pure function or, in 
//even poorer words, do NOT modify the initial input!

function sequenceClassifier(arr){
  if(isStrictlyIncreasing(arr)){
    return 1;
  };
  
  if(isNotDecreasing(arr)){
    return 2;
  };
  
  if(isStrictlyDecreasing(arr)){
    return 3;
  };
  
  if(isNotIncreasing(arr)){
    return 4;
  };
  
  if(isConstant(arr)){
    return 5;
  };
  
  return 0;
};

function isStrictlyIncreasing(arr){
  let result = true;
  for(let i = 0; i <= arr.length - 1; i++){
    if(i > 0){
      if(i == arr.length - 1){
        if(!(arr[i] > arr[i - 1])){
          result = false;
          break;
        };
      } else {
        if(!(arr[i] > arr[i-1] && arr[i] < arr[i + 1])){
          result = false;
          break;
        };
      };
    } else {
      if(!(arr[i] < arr[i + 1])){
        result = false;
        break;
      };
    };
  };
  return result;
};

function isNotDecreasing(arr){
  let result = true;
  for(let i = 0; i <= arr.length - 1; i++){
    if(i > 0){
      if(i == arr.length - 1){
        if(!(arr[i] >= arr[i - 1])){
          result = false;
          break;
        };
      } else {
        if(!(arr[i] >= arr[i-1] && arr[i] <= arr[i + 1])){
          result = false;
          break;
        };
      };
    } else {
      if(!(arr[i] <= arr[i + 1])){
        result = false;
        break;
      };
    };
  };
  return isConstant(arr) ? false : result;
};

function isStrictlyDecreasing(arr){
  let result = true;
  for(let i = 0; i <= arr.length - 1; i++){
    if(i > 0){
      if(i == arr.length - 1){
        if(!(arr[i] < arr[i - 1])){
          result = false;
          break;
        };
      } else {
        if(!(arr[i] < arr[i-1] && arr[i] > arr[i + 1])){
          result = false;
          break;
        };
      };
    } else {
      if(!(arr[i] > arr[i + 1])){
        result = false;
        break;
      };
    };
  };
  return result;
};

function isNotIncreasing(arr){
 let result = true;
  for(let i = 0; i <= arr.length - 1; i++){
    if(i > 0){
      if(i == arr.length - 1){
        if(!(arr[i] <= arr[i - 1])){
          result = false;
          break;
        };
      } else {
        if(!(arr[i] <= arr[i-1] && arr[i] >= arr[i + 1])){
          result = false;
          break;
        };
      };
    } else {
      if(!(arr[i] >= arr[i + 1])){
        result = false;
        break;
      };
    };
  };
  return isConstant(arr) ? false : result;
};

function isConstant(arr){ 
  return arr.filter(x => x == arr[0]).length == arr.length ? true : false;
};
