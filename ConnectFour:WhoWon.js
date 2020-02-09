// https://www.codewars.com/kata/529962509ce9545c76000afa

// Connect Four is a game in which two players take turns dropping red or yellow colored discs 
// into a vertically suspended 7 x 6 grid. Discs fall to the bottom of the grid, occupying the next available space.

// A player wins by connecting four of their discs horizontally, vertically or diagonally.

// Given a multidimensional array representing a Connect Four board, your task is to create a 
// function which can determine who won the game.

// Your connectFour function will be passed an array matrix similar to this:

// [['-','-','-','-','-','-','-'],
//  ['-','-','-','-','-','-','-'],
//  ['-','-','-','R','R','R','R'],
//  ['-','-','-','Y','Y','R','Y'],
//  ['-','-','-','Y','R','Y','Y'],
//  ['-','-','Y','Y','R','R','R']];
// 'R' represents a red disc

// 'Y' represents a yellow disc

// '-' represents an unoccupied space

// In this example the red player won by making a horizontal line of 4 red discs.

// If the red player won, your connectFour function should return 'R'. If the yellow player won, 
// it should return 'Y'. If the board is full and no one won it should return 'draw'. If the game is still in progress 
// it should return 'in progress'.

// You can learn more about how Connect Four is played here: http://en.wikipedia.org/wiki/Connect_Four

function connectFour(board) {
    let col = 7;
    let row = 6;
    let copyOfSlots = board;
    let winner;
    
    //diagonal bottom to top
    for (let i = 0; i <= col - 4; i++) {
      for (let j = 3; j <= row - 1; j++) {
        if (copyOfSlots[j][i] === "Y" &&
          copyOfSlots[j - 1][i + 1] === "Y" &&
          copyOfSlots[j - 2][i + 2] === "Y" &&
          copyOfSlots[j - 3][i + 3] === "Y") {
          winner = "Y";
        } else if(copyOfSlots[j][i] === "R" &&
          copyOfSlots[j - 1][i + 1] === "R" &&
          copyOfSlots[j - 2][i + 2] === "R" &&
          copyOfSlots[j - 3][i + 3] === "R"){
          winner = "R";
        }
      }
    }
    
        //diagonal top to bottom
    for (let i = 0; i <= col - 4; i++) {
      for (let j = 0; j <= row - 4; j++) {
        if (copyOfSlots[j][i] === "Y" &&
          copyOfSlots[j + 1][i + 1] === "Y" &&
          copyOfSlots[j + 2][i + 2] === "Y" &&
          copyOfSlots[j + 3][i + 3] === "Y") {
          winner = "Y";
        } else if (copyOfSlots[j][i] === "R" &&
          copyOfSlots[j + 1][i + 1] === "R" &&
          copyOfSlots[j + 2][i + 2] === "R" &&
          copyOfSlots[j + 3][i + 3] === "R") {
          winner = "R";
        }
      }
    }
    
        //vertical
    for (let i = 0; i <= col - 1; i++) {
      for (let j = 0; j <= row - 4; j++) {
        if (copyOfSlots[j][i] ===  "Y" &&
          copyOfSlots[j + 1][i] ===  "Y" &&
          copyOfSlots[j + 2][i] ===  "Y" &&
          copyOfSlots[j + 3][i] ===  "Y") {
          winner = "Y";
        } else if ( copyOfSlots[j][i] === "R" &&
          copyOfSlots[j + 1][i] === "R" &&
          copyOfSlots[j + 2][i] === "R" &&
          copyOfSlots[j + 3][i] === "R") {
          winner = "R";
          }
      }
    }

    //horizontal
    for (let i = 0; i <= row - 1; i++) {
      for (let j = 0; j <= col - 4; j++) {
        if (copyOfSlots[i][j] === "Y" &&
          copyOfSlots[i][j + 1] === "Y" &&
          copyOfSlots[i][j + 2] === "Y" &&
          copyOfSlots[i][j + 3] === "Y") {
          winner = "Y";
        } else if (copyOfSlots[i][j] ===  "R" &&
          copyOfSlots[i][j + 1] ===  "R" &&
          copyOfSlots[i][j + 2] ===  "R" &&
          copyOfSlots[i][j + 3] ===  "R") {
          winner = "R";
        }
      }
}

    let done = true;
    for (let i = 0; i <= board.length - 1;i++){
      if(board[0].filter(x=> x=='-').length != 0){
        done= false;
      }
    }
    if(done && !winner){
      winner = "draw"
    } else if(!done && !winner) {
      winner = "in progress"
    }
return winner;
}
