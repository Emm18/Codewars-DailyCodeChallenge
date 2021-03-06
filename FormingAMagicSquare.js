//https://www.codewars.com/kata/5bccff463d36b0f6a8001a21

//Define
//We define a magic square to be an n x n matrix of distinct positive integers from 1 to n^2 
//to where the sum of any row, column, or diagonal of length is always equal to the same number: the magic constant.

//Assesment
//You will be given a 3 x 3 matrix of integers in the inclusive range [1,9]. We can convert any 
//digit a to any other digit b in the range [1,9] at cost of |a-b|(the absolute of the amount changed). 
//Given s, convert it into a magic square at minimal cost. Return this cost.

//Example 1:
//Given s:
//5 3 4
//1 5 8
//6 4 2
//We can convert it to the following magic square:
//8 3 4
//1 5 9
//6 7 2
//This took three replacements at a cost of |5-8| + |8-9| + |4-7| = 7.
//The formingMagicSquare function should return an integer that represents the minimal total cost of converting the input square to a magic square.

//Input
//An array of each row with an array of each number. [ [], [], [] ]

//Output
//Return an integer denoting the minimum cost of turning the matrix into a magic square.

//Example 2:
//Given s:
//4 9 2
//3 5 7
//8 1 5
//Output is: 1

//Since changing s[2][2] from 5 to 6 makes this a magic square and |5-6| = 1.
//to get you started, ask yourself how many possible magic squares can exist?.

function formingMagicSquare(s) {
  let magicSquares = [
    [[4,9,2],[3,5,7],[8,1,6]],
    [[8,1,6],[3,5,7],[4,9,2]],
    [[2,9,4],[7,5,3],[6,1,8]],
    [[6,1,8],[7,5,3],[2,9,4]],
    [[4,3,8],[9,5,1],[2,7,6]],
    [[8,3,4],[1,5,9],[6,7,2]],
    [[2,7,6],[9,5,1],[4,3,8]],    
    [[6,7,2],[1,5,9],[8,3,4]]
  ];
  let counts = [];
  
  for(let i = 0; i <= magicSquares.length - 1; i++){
    let temp = 0;
    for(let j = 0; j <= magicSquares[i].length - 1; j++){
      for(let k = 0; k <= magicSquares[i][j].length - 1; k++){    
        let x = magicSquares[i][j][k];
        let y = s[j][k]
        let z = x > y ? x - y : y - x;
        temp += z;       
      };
    };
    counts.push(temp);
  };

  return counts.sort((a,b) => a - b)[0];
};
