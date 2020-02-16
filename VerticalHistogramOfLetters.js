//https://www.codewars.com/kata/59cf0ba5d751dffef300001f

// Task
// You are given a string s. Your task is to count the number of each letter 
// (A-Z), and make a vertical histogram as result. Look at the following examples to understand the rules.

// Example
// For s = "XXY YY ZZZ123ZZZ AAA BB C", the output should be:

//           *
//           *
//           *
// *       * *
// * *   * * *
// * * * * * *
// A B C X Y Z
// Rules
// You just need to count the uppercase letters. Any other character will be ignored.

// Using * to represent the number of characters.

// The order of output is form A to Z. Characters that do not appear in the string are ignored.

// To beautify the histogram, there is a space between every pair of columns.

// There are no extra spaces at the end of each row. Also, use "\n" to separate rows.

// Happy Coding ^_^



function verticalHistogramOf(s){
  let letterCtr = [
    ["A", 0],["B", 0],["C", 0],["D", 0],["E", 0],
    ["F", 0],["G", 0],["H", 0],["I", 0],["J", 0],
    ["K", 0],["L", 0],["M", 0],["N", 0],["O", 0],
    ["P", 0],["Q", 0],["R", 0],["S", 0],["T", 0],
    ["U", 0],["V", 0],["W", 0],["X", 0],["Y", 0],
    ["Z", 0]];
  
  //split the string into array for tallying
  let str = s.split("");
  //will hold the converted string
  let convertToString ="";
  
  //filter and count each letter
  for(let i=0;i<=letterCtr.length - 1;i++){
    letterCtr[i][1] = str.filter(x => x == letterCtr[i][0]).length;
  }
  //filter and remove zeroes
  letterCtr = letterCtr.filter(x=> x[1] != 0);
  
  //array value of board where * will drop
  let drawBoard = [];
  if(letterCtr.length > 0){
    //sort then get the highest row for which we are going to base
    let numOfRow = letterCtr.sort((a,b)=> b[1]-a[1])[0][1];
    //sort it back
    letterCtr = letterCtr.sort((a,b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
    //column is dynamic so it will depends on the letters
    let numOfCol = letterCtr.length;
    
    //draw board with " " each column
    for(let i = 0; i<= numOfRow-1; i++){
      let col = [];
      for(let j = 0; j<= numOfCol-1;j++){
        col.push(" ");
      }
      drawBoard.push(col);
    }
  };
    //will hold the last ROW for the letters
    let temp = []
    letterCtr.map(x => temp.push(x));
    //add the letters in the last row
    drawBoard.push(temp);
    
    //starts adding *
    for(let i = 0; i <= letterCtr.length - 1; i++){
      for(let j = drawBoard.length - 2; j >= 0; j--){
        if(drawBoard[drawBoard.length-1][i][1] > 0 ){
          drawBoard[j][i] = "*";
          drawBoard[drawBoard.length-1][i][1] = drawBoard[drawBoard.length-1][i][1] - 1;
        }
      }
    }
    
    // remove right empty spaces
    for(let i=0; i<= drawBoard.length -1;i++){
      for(let j =drawBoard[i].length - 1; j>= 0; j--){
        if(drawBoard[i][j] == " "){
          drawBoard[i].splice(j,1);
        } else {
          break;
        }
      }
    }
    
    //add spaces for formatting
    for(let i = 0; i <= drawBoard.length - 1; i++){
        for(let j = 0; j<= drawBoard[i].length - 1; j++){
          if(i != drawBoard.length - 1){
            if(j == 0){
              convertToString += drawBoard[i][j];
            } else {
              convertToString += " " + drawBoard[i][j];
            }
            
          } else{
            if(j == 0){
              convertToString += drawBoard[i][j][0];
            } else {
              convertToString += " " + drawBoard[i][j][0];
            }
          }
        }
      
        if(i != drawBoard.length - 1){
            convertToString += "\n";
        }
    }
  return convertToString;
}
