//https://www.codewars.com/kata/52249faee9abb9cefa0001ee

//Implement a function which behaves like the uniq command in UNIX.

//It takes as input a sequence and returns a sequence in which all duplicate elements 
//following each other have been reduced to one instance.

//Example:

//['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']

function uniq(a) {
  let newArr = a.join(' ').split(' ');
  let result = [];
  
  if(a.length == 0){
    return [];
  };
  if(a[0] == '' && newArr.length == 1){
    return [''];
  };
  
  while(newArr.length > 0){
    let temp = newArr.splice(0,1)[0];
    
    while(temp == newArr[0]){
      newArr.splice(0,1);
    };
    
    if(temp == ''){
      temp = undefined;
    };
    result.push(temp);
  };
  
  return result;
};
