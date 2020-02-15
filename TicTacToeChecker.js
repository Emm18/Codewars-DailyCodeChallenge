//https://www.codewars.com/kata/525caa5c1bf619d28c000335

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the 
// board's current state is solved, wouldn't we? Our goal is to create a function 
// that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if 
// a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  let hasWinner = [false,'',0];
  for(let i = 0; i <= 2; i++){
      //CHECK HORIZONTAL
      if(board[i][0] == board[i][1] &&
          board[i][0] == board[i][2] &&
            board[i][1] == board[i][2] &&
              board[i][0] != 0){
        hasWinner = [true,"V",board[i][0]];
        break;
      }
      //CHECK VERTICAL
      if(board[0][i] == board[1][i] &&
          board[0][i] == board[2][i] &&
            board[1][i] == board[2][i] &&
              board[0][i] != 0){
        hasWinner = [true,"H",board[0][i]];
        break;
      }
  }
  //CHECK DIAGONAL LEFT TO RIGHT
  if(board[0][0] == board[1][1] &&
      board[0][0] == board[2][2] &&
        board[1][1] == board[2][2] &&
          board[0][0] != 0){
      hasWinner = [true,"D1",board[2][2]];   
  }
  //CHECK DIAGONAL RIGHT TO LEFT
  if(board[0][2] == board[2][0] &&
      board[0][2] == board[1][1] &&
        board[1][1] == board[2][0] &&
          board[0][2] != 0){
      hasWinner = [true,"D2",board[2][2]];   
  }
  //IF NO WINNER YET CHECK IF THE GAME IS NOT DONE YET OR DRAW
  let foundZero = false;
  if(hasWinner[0] == false){
    for(let i = 0; i<=2; i++){
      if(board[i].includes(0)){
        foundZero = true;
        break;
      }
    }
    if(foundZero){
      return -1;
    } else {
      return 0;
    }
  }
  return hasWinner[2];
}
