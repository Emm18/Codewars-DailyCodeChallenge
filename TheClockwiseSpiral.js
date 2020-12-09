//https://www.codewars.com/kata/536a155256eb459b8700077e

//Do you know how to make a spiral? Let's test it!
//Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

//Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN 
//represented as a clockwise spiral.

//Return an empty array if N < 1 or N is not int / number

//Examples:

//N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

//1    2    3    
//8    9    4    
//7    6    5    
//N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]

//1   2   3   4
//12  13  14  5
//11  16  15  6
//10  9   8   7
//N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

//1   2   3   4   5    
//16  17  18  19  6    
//15  24  25  20  7    
//14  23  22  21  8    
//13  12  11  10  9

function createSpiral(N) {
  if(N !== +N || N - Math.floor(N) > 0){
    return [];
  };
  
  let space = [];
  
  for(let i = 0; i <= N - 1; i++){
    let temp = [];
    for(let j = 0; j <= N - 1; j++){
      temp.push('');
    };
    space.push(temp);
  };
  
  let directionOrder = ['r','d','l','u'];
  let direction = 0;
  
  let row = 0;
  let col = 0;
  
  for(let i = 1; i <= N * N; i++){
    space[row][col] = i;
    if(directionOrder[direction] == 'r'){
      col++;
      if(col > N - 1 || space[row][col] != ''){
        col--;
        row++;
        direction = 1;
      };
    } else if(directionOrder[direction] == 'd'){
      row++;
      if(row > N - 1 || space[row][col] != ''){
        row--;
        col--;
        direction = 2;
      };
    } else if(directionOrder[direction] == 'l'){
      col--;
      if(col < 0 || space[row][col] != ''){
        col++;
        row--;
        direction = 3;
      };
    } else if(directionOrder[direction] == 'u'){
      row--;
      if(row < 0 || space[row][col] != ''){
        row++;
        col++;
        direction = 0;
      };
    };
  };
  
  return space;
};
