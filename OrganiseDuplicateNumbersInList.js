//https://www.codewars.com/kata/5884b6550785f7c58f000047

//Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. 
//Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

//Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates 
//of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

//group([3, 2, 6, 2, 1, 3])
//>>> [[3, 3], [2, 2], [6], [1]]
//Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.

function group(arr) {
  let newArr = [...arr];
  let collections = [];
  
  while(newArr.length > 0){
    let number = newArr.splice(0,1)[0];
    let tempArr = newArr.filter(x => x != number);
    collections.push(groupIt(number, (newArr.length - tempArr.length) + 1));
    newArr = tempArr;
  };
  
  return collections;
};

function groupIt(number, count){
  let result = [];
  for(let i = 0; i < count; i++){
    result.push(number);
  };
  return result;
};
