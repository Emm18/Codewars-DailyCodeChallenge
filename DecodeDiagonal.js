//https://www.codewars.com/kata/55af0d33f9b829d0a800008d

//Decode the diagonal.
//Given a grid of characters. Output a decoded message as a string.

//Input

//  H Z R R Q
//  D I F C A E A !
//  G H T E L A E 
//  L M N H P R F 
//  X Z R P E
//Output

//HITHERE! (diagonally down right ↘ and diagonally up right ↗ if you can't go further).

//The message ends when there is no space at the right up or down diagonal.

//To make things even clearer: the same example, but in a simplified view

//  H _ _ _ _
//  _ I _ _ _ _ _ !
//  _ _ T _ _ _ E 
//  _ _ _ H _ R _
//  _ _ _ _ E

function getDiagonalCode(grid) {
  let newGrid = [];
  let goingDown = true;
  let direction = 0;
  let str = '';
  let col = grid.split('\n').sort((a,b) => b.length - a.length)[0].split(' ').join('').length;
  grid.split('\n').map(x => newGrid.push(x.split(' ').join('')));
  
  for(let i = 0;i <= col - 1; i++){    
    let temp = newGrid[direction][i];
    
    if(!temp){
      break;
    }
    
    str += temp;
    
    if(direction == 0){
      goingDown = true;
    } else if(direction == newGrid.length - 1){
      goingDown = false;
    };
    
    if(goingDown){
      direction++;
    } else {
      direction--;
    };
    
  };
  
  return str;
};
