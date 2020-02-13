//https://www.codewars.com/kata/5e28ae347036fa001a504bbe

// You have to write a function

// kingIsInCheck
// that takes for input a 8x8 chessboard in the form of a bi-dimensional array of chars 
// (Javascript : strings of length 1) and returns true if the black king is in check or false if it is not.

// The array will include 64 squares which can contain the following characters :

// '♔' for the black King;
// '♛' for a white Queen;
// '♝' for a white Bishop;
// '♞' for a white Knight;
// '♜' for a white Rook;
// '♟' for a white Pawn;
// ' ' (a space) if there is no piece on that square.
// Note : these are actually inverted-color chess Unicode characters because the dark codewars 
// theme makes the white appear black and vice versa. Use the characters shown above.

// There will always be exactly one king, which is the black king, whereas all the other pieces are white.
// The board is oriented from Black's perspective.
// Remember that pawns can only move and take forward.
// Also be careful with the pieces' line of sight ;-) .

// The input will always be valid, no need to validate it. To help you visualize the position, tests 
// will print a chessboard to show you the problematic cases. Looking like this :

// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   | ♜ |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   | ♔ |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|
// |   |   |   |   |   |   |   |   |
// |---|---|---|---|---|---|---|---|

function kingIsInCheck(chessboard) {
  let chessPieceOnBoard = []; //will use 2d array, [chess piece, location]
  let blackKing = []; //will hold the location of the king to check if the king is check or not

  //get all  white chess piece on the board
  for (let i = 0; i <= chessboard.length - 1; i++) {
    //check all piece of they check the king
    for (let j = 0; j <= chessboard[i].length - 1; j++) {
      if (chessboard[i][j] == "♔") {
        blackKing.push(["black king", [i, j]])
      }
      if (chessboard[i][j] == "♛") {
        chessPieceOnBoard.push(["queen", [i, j]])
      }
      if (chessboard[i][j] == "♝") {
        chessPieceOnBoard.push(["bishop", [i, j]])
      }
      if (chessboard[i][j] == "♞") {
        chessPieceOnBoard.push(["knight", [i, j]])
      }
      if (chessboard[i][j] == "♜") {
        chessPieceOnBoard.push(["rook", [i, j]])
      }
      if (chessboard[i][j] == "♟") {
        chessPieceOnBoard.push(["pawn", [i, j]])
      }
    }
  }
  let res = false;
  //check all piece and calculate their moves
  for (let i = 0; i <= chessPieceOnBoard.length - 1; i++) {
    if (chessPieceOnBoard[i][0] == 'queen') {
      res = checkQueensMove(chessPieceOnBoard[i][1], blackKing[0][1], chessboard);
      if (res) {
        break;
      }
    }
    if (chessPieceOnBoard[i][0] == 'bishop') {
      res = checkBishopMove(chessPieceOnBoard[i][1], blackKing[0][1], chessboard);
      if (res) {
        break;
      }
    }
    if (chessPieceOnBoard[i][0] == 'knight') {
      res = checkKnightMove(chessPieceOnBoard[i][1], blackKing[0][1], chessboard);
      if (res) {
        break;
      }
    }
    if (chessPieceOnBoard[i][0] == 'rook') {
      res = checkRookMove(chessPieceOnBoard[i][1], blackKing[0][1], chessboard);
      if (res) {
        break;
      }
    }
    if (chessPieceOnBoard[i][0] == 'pawn') {
      res = checkPawnMove(chessPieceOnBoard[i][1], blackKing[0][1], chessboard);
      if (res) {
        break;
      }
    }
  }
  return res;
}

checkQueensMove = (queen, king, board) => {
  let isCheck = false;
  
  //left
  for (let i = queen[1] - 1; i >= 0; i--) {
    //is path clear?
    if (board[queen[0]][i] != " ") {
      if (board[queen[0]][i] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == queen[0] && king[1] == i) {
      isCheck = true;
      return isCheck;
    }
  }

  //right
  for (let i = queen[1] + 1; i <= 7; i++) {
    //is path clear?
    if (board[queen[0]][i] != " ") {
      if (board[queen[0]][i] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == queen[0] && king[1] == i) {
      isCheck = true;
      return isCheck;
    }
  }

  //top
  for (let i = queen[0] - 1; i >= 0; i--) {
    //is path clear?
    if (board[i][queen[1]] != " ") {
      if (board[i][queen[1]] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[1] == queen[1] && king[0] == i) {
      isCheck = true;
      return isCheck;
    }
  }

  //down
  for (let i = queen[0] + 1; i <= 7; i++) {
    //is path clear?
    if (board[i][queen[1]] != " ") {
      if (board[i][queen[1]] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[1] == queen[1] && king[0] == i) {
      isCheck = true;
      return isCheck;
    }
  }
  
  //top left
  let row = queen[0] - 1;
  let col = queen[1] - 1;
  while (row > -1 && col > - 1) {
    //is path clear?
    if (board[row][col] != " ") {
      if (board[row][col] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == row && king[1] == col) {
      isCheck = true;
      return isCheck;
    }
    row -= 1;
    col -= 1;
  }

  //top right
  row = queen[0] - 1;
  col = queen[1] + 1;
  while (row > -1 && col < 8) {
    //is path clear?
    if (board[row][col] != " ") {
      if (board[row][col] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == row && king[1] == col) {
      isCheck = true;
      return isCheck;
    }
    row -= 1;
    col += 1;
  }

  //down right
  row = queen[0] + 1;
  col = queen[1] + 1;
  while (row < 8 && col < 8) {
    //is path clear?
    if (board[row][col] != " ") {
      if (board[row][col] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == row && king[1] == col) {
      isCheck = true;
      return isCheck;
    }
    row += 1;
    col += 1;
  }

  //down left
  row = queen[0] + 1;
  col = queen[1] - 1;
  while (row < 8 && col > - 1) {
    //is path clear?
    if (board[row][col] != " ") {
      if (board[row][col] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == row && king[1] == col) {
      isCheck = true;
      return isCheck;
    }
    row += 1;
    col -= 1;
  }
  return isCheck;
}

checkBishopMove = (bishop, king, board) => {
  let isCheck = false;

  //top left
  let row = bishop[0] - 1;
  let col = bishop[1] - 1;
  while (row > -1 && col > - 1) {
    //is path clear?
    if (board[row][col] != " ") {
      if (board[row][col] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == row && king[1] == col) {
      isCheck = true;
      return isCheck;
    }
    row -= 1;
    col -= 1;
  }

  //top right
  row = bishop[0] - 1;
  col = bishop[1] + 1;
  while (row > -1 && col < 8) {
    //is path clear?
    if (board[row][col] != " ") {
      if (board[row][col] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == row && king[1] == col) {
      isCheck = true;
      return isCheck;
    }
    row -= 1;
    col += 1;
  }

  //down right
  row = bishop[0] + 1;
  col = bishop[1] + 1;
  while (row < 8 && col < 8) {
    //is path clear?
    if (board[row][col] != " ") {
      if (board[row][col] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == row && king[1] == col) {
      isCheck = true;
      return isCheck;
    }
    row += 1;
    col += 1;
  }

  //down left
  row = bishop[0] + 1;
  col = bishop[1] - 1;
  while (row < 8 && col > - 1) {
    //is path clear?
    if (board[row][col] != " ") {
      if (board[row][col] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == row && king[1] == col) {
      isCheck = true;
      return isCheck;
    }
    row += 1;
    col -= 1;
  }

  return isCheck;
}

checkRookMove = (rook, king, board) => {
  let isCheck = false;

  //left
  for (let i = rook[1] - 1; i >= 0; i--) {
    //is path clear?
    if (board[rook[0]][i] != " ") {
      if (board[rook[0]][i] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == rook[0] && king[1] == i) {
      isCheck = true;
      return isCheck;
    }
  }

  //right
  for (let i = rook[1] + 1; i <= 7; i++) {
    //is path clear?
    if (board[rook[0]][i] != " ") {
      if (board[rook[0]][i] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[0] == rook[0] && king[1] == i) {
      isCheck = true;
      return isCheck;
    }
  }

  //top
  for (let i = rook[0] - 1; i >= 0; i--) {
    //is path clear?
    if (board[i][rook[1]] != " ") {
      if (board[i][rook[1]] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[1] == rook[1] && king[0] == i) {
      isCheck = true;
      return isCheck;
    }
  }

  //down
  for (let i = rook[0] + 1; i <= 7; i++) {
    //is path clear?
    if (board[i][rook[1]] != " ") {
      if (board[i][rook[1]] != "♔") {
        isCheck = false;
        break;
      }
    }
    if (king[1] == rook[1] && king[0] == i) {
      isCheck = true;
      return isCheck;
    }
  }

  return isCheck;
}

checkKnightMove = (knight, king, board) => {
  let isCheck = false;

  let row;
  let col;

  //left top
  col = knight[1] - 2;
  row = knight[0] - 1;
  if (king[0] == row && king[1] == col) {
    isCheck = true
  }
  //left down
  col = knight[1] - 2;
  row = knight[0] + 1;
  if (king[0] == row && king[1] == col) {
    isCheck = true
  }

  //top left
  col = knight[1] - 1;
  row = knight[0] - 2;
  if (king[0] == row && king[1] == col) {
    isCheck = true
  }

  //top right
  col = knight[1] + 1;
  row = knight[0] - 2;
  if (king[0] == row && king[1] == col) {
    isCheck = true
  }

  //right top
  col = knight[1] + 2;
  row = knight[0] - 1;
  if (king[0] == row && king[1] == col) {
    isCheck = true
  }

  //right down
  col = knight[1] + 2;
  row = knight[0] + 1;
  if (king[0] == row && king[1] == col) {
    isCheck = true
  }

  //down left
  col = knight[1] - 1;
  row = knight[0] + 2;
  if (king[0] == row && king[1] == col) {
    isCheck = true
  }

  //down right
  col = knight[1] + 1;
  row = knight[0] + 2;
  if (king[0] == row && king[1] == col) {
    isCheck = true
  }

  return isCheck;
}

checkPawnMove = (pawn, king, board) => {
  let isCheck = false;

  row = pawn[0] + 1;
  col = pawn[1] + 1;

  if (king[0] == row && king[1] == col) {
    isCheck = true;
  }

  row = pawn[0] + 1;
  col = pawn[1] - 1;
  if (king[0] == row && king[1] == col) {
    isCheck = true;
  }

  return isCheck;
}
