// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript/5e3886b90310c00034704d66

// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// Imagine source = http://www.haan.lu/files/2513/8347/2456/snail.png


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array 
// in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


snail = function(array) {
  let row = array.length - 1;  
  let col = array[0].length - 1;
  let res = [];
  let colForGoingUp=0;
  let colForGoingDown=col;
  
  //by rows
  for(let i = 0; i <= row; i++) {
 
    // going right
    for(let j = 0; j <= col;j++){
      if(array[i][j]){
        res.push(array[i][j]);
        array[i][j] = "";
      }
    }
    
    // going down
    for(let k = i; k <= row; k++){
      if(array[k][colForGoingDown]){
        res.push(array[k][colForGoingDown]);
        array[k][colForGoingDown] = "";
      }
    }
    
    // going left
    for(let l = col;l >= 0; l--){
      if(array[row - i][l]){
        res.push(array[row - i][l]);
        array[row - i][l] = "";
      }
    }
    
    //going up
    for(let m = row; m >= 0; m--){
      if(array[m][colForGoingUp]){
        res.push(array[m][colForGoingUp]);
        array[m][colForGoingUp] = "";
      }
    }
    
    colForGoingUp += 1;
    colForGoingDown -= 1;
  }
  return res
}
