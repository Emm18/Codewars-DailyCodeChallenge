//https://www.codewars.com/kata/5bc048de9b84f478ae000907

//Task
//You are a lonely frog.

//You live on an integer array.

//The meaning of your life is to jump and jump..

//Now, here comes your new task.

//You are given an non negative integer array arr.

//You will jump following the rules below:

//The start position at arr[0], and the frog always jumping to the right.

//The last(right most) position of arr is the exit.

//In each turn, the frog can jump a distance between 0 and arr[i], where i is frog's current position. For example, 
//if frog's current position is 1, and arr[1]=3, the frog can jump to position 2, 3 or 4. Of course, if arr[i] is 0, 
//the frog can not jump to any position from the current position.

//Your task is to complete function jumping. Return the number of minimum steps if the frog can reach the exit. Otherwise, return -1.

//Note
//3 <= arr.length <= 500000, 0 <= arr[i] <= 9

//8 fixed testcases

//100 random testcases, testing for correctness of solution

//100 random testcases, testing for performance of code

//All inputs are valid.

//Pay attention to code performance.

//Example
//For arr = [2,3,1,1,4], the output should be 2.

//The minimum steps should be

//2 3 1 1 4
//|_|_____|
//For arr = [3,2,1,0,4], the output should be -1.

//There is no way can let the frog reach to the exit(arr[4]).

function jumping(arr){
  let jumpCtr = 0;
  let currentPosition = 0;
  let finishLine = arr.length - 1;
  
  if(arr[currentPosition] == 0){
    return -1;
  };
  
  while(currentPosition < finishLine){
    let nextIndex;
    let reducer = 0;
    let posibleJump = arr[currentPosition];
    let options = arr.slice(currentPosition + 1, currentPosition + posibleJump + 1);
    
    for(let i = currentPosition + posibleJump; i >= currentPosition + 1; i--){
      if(nextIndex){
        if(arr[i] - reducer > arr[nextIndex[0]] - nextIndex[1]){
          nextIndex = [i, reducer];
        };
      } else {
        nextIndex = [i, reducer];
      };
      reducer++;
    };
    
    if(nextIndex){
      currentPosition = nextIndex[0];
    } else {
      jumpCtr = -1;
      break;
    };
    
    jumpCtr++;
    
    if(currentPosition + arr[currentPosition] >= finishLine){
      jumpCtr++;
      break;
    };
  };
  
  return jumpCtr;
};
