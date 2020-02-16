//https://www.codewars.com/kata/57c6c2e1f8392d982a0000f2

// Background
// A 6-sided die is rolled a number of times and the results are plotted as a 
// character-based histogram.

// Example:

//     10
//     #
//     #
// 7   #
// #   #
// #   #     5
// #   #     #
// # 3 #     #
// # # #     #
// # # # 1   #
// # # # #   #
// -----------
// 1 2 3 4 5 6
// Task
// You will be passed all the dice roll results, and your task is to write the code to return 
// a string representing a histogram, so that when it is printed it has the same format as the example.

// Notes
// There are no trailing spaces on the lines
// All lines (including the last) end with a newline \n
// A count is displayed above each bar (unless the count is 0)
// The number of rolls may vary but is always less than 100

var histogram = function(results) {
  let diceCtr = [
   [1, results[0], results[0]],
   [2, results[1], results[1]],
   [3, results[2], results[2]],
   [4, results[3], results[3]],
   [5, results[4], results[4]],
   [6, results[5], results[5]]];
  let dash = "-----------\n";
  let dieNum = "1 2 3 4 5 6\n";
  let drawBoard = [];
  let numOfRow = diceCtr.sort((a,b)=> b[1]-a[1])[0][1];
  diceCtr = diceCtr.sort((a,b) => a[0] - b[0]);
  let numOfCol = diceCtr.length;
  let result = "";

   for(let i = 0; i<= numOfRow; i++){
     let col = [];
     for(let j = 0; j<= numOfCol-1;j++){
       col.push(" ");
     }
     drawBoard.push(col);
   }
   
   for(let i = 0; i <= diceCtr.length - 1; i++){
     for(let j = drawBoard.length - 1; j >= 0; j--){
       if(diceCtr[i][1] > 0 ){
         drawBoard[j][i] = "#";
         diceCtr[i][1] -= 1;
       } else {
         if( diceCtr[i][2] == 0){
           drawBoard[j][i] = " ";
         } else {
           drawBoard[j][i] = diceCtr[i][2];
         }
         diceCtr[i][2] = " ";
       }
     }
   }
   for(let i = 0; i <= drawBoard.length - 1; i++){
     for(let j = drawBoard[i].length - 1; j >= 0; j--){
       if(drawBoard[i][j] == " "){
         drawBoard[i].splice(j,1);
       } else {
         break;
       }
     }
   }
   for(let i = 0; i<=drawBoard.length - 1; i++){
     for(let j = 0; j<= drawBoard[i].length - 1; j++){
       if(j == 0){
        result += drawBoard[i][j];
       } else {
        result += " " + drawBoard[i][j];
       }
     }
     if(result != ""){
       result += "\n";
     }
   }
   return result+dash+dieNum;
}
