//https://www.codewars.com/kata/5946a0a64a2c5b596500019a

//Inspired by the Fold an Array kata. This one is sort of similar but a little different.

//Task
//You will receive an array as parameter that contains 1 or more integers and a number n.

//Here is a little visualization of the process:

//Step 1: Split the array in two:

//[1, 2, 5, 7, 2, 3, 5, 7, 8]
//      /            \
//[1, 2, 5, 7]    [2, 3, 5, 7, 8]
//Step 2: Put the arrays on top of each other:

//   [1, 2, 5, 7]
//[2, 3, 5, 7, 8]
//Step 3: Add them together:

//[2, 4, 7, 12, 15]
//Repeat the above steps n times or until there is only one number left, and then return the array.

//Example
//Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


//Round 1
//-------
//step 1: [4, 2, 5]  [3, 2, 5, 7]

//step 2:    [4, 2, 5]
//        [3, 2, 5, 7]

//step 3: [3, 6, 7, 12]


//Round 2
//-------
//step 1: [3, 6]  [7, 12]

//step 2:  [3,  6]
//         [7, 12]

//step 3: [10, 18]


//Result: [10, 18]

function splitAndAdd(arr, n) {

  while(n > 0){
    let firstHalfLength = Math.floor(arr.length / 2);
    let secondHalfLength = arr.length - firstHalfLength;
    let temp1 = arr.splice(0,firstHalfLength);
    let temp2 = arr.splice(0,secondHalfLength);
    let temp3 = [];
    
    if(temp1.length < temp2.length){
      temp1 = [0,...temp1];
    };
    
    for(let i = 0; i <= secondHalfLength - 1;i++){
      temp3.push(temp1[i] + temp2[i]);
    };
    
    arr = temp3;
    n--;
  };

  return arr;
};
