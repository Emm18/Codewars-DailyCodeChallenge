//https://www.codewars.com/kata/5894134c8afa3618c9000146

//Task
//Given two cells on the standard chess board, determine whether they have the same color or not.

//Example
//For cell1 = "A1" and cell2 = "C3", the output should be true.

// check codewars link for imgs

//For cell1 = "A1" and cell2 = "H3", the output should be false.

// check codewars link for imgs

//Input/Output
//[input] string cell1

//[input] string cell2

//[output] a boolean value

//true if both cells have the same color, false otherwise.

function chessBoardCellColor(cell1, cell2) {
  let newC1 = cell1.split('').reverse();
  let newC2 = cell2.split('').reverse();
  let board = [];
  let color = 'w';
  
  for(let i = 0; i <= 7; i++){  
    if(i > 0){
      color = color == 'w' ? 'b' : 'w';
    };
    let tempRow = [];
    let tempColor = color;
    for(let j = 0; j <= 7; j++){
      tempRow.push(tempColor)
      tempColor = tempColor == 'w' ? 'b' : 'w';
    };
    board.push(tempRow);
  };
  
  return board[8 - newC1[0]][getNumValue(newC1[1])] == board[8 - newC2[0]][getNumValue(newC2[1])] ? true : false;
};

function getNumValue(str){
  if(str == 'A'){
    return 0;
  } else if(str == 'B'){
    return 1;
  } else if(str == 'C'){
    return 2;
  } else if(str == 'D'){
    return 3;
  } else if(str == 'E'){
    return 4;
  } else if(str == 'F'){
    return 5;
  } else if(str == 'G'){
    return 6;
  } else if(str == 'H'){
    return 7;
  };
};
