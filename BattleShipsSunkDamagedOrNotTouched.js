//https://www.codewars.com/kata/58d06bfbc43d20767e000074

// Task
// Your task in the kata is to determine how many boats are sunk damaged and untouched from a set amount of attacks. 
// You will need to create a function that takes two arguments, the playing board and the attacks.

// Example Game
// The board
 	
// NOTE CHECK THE PROVIDED LINK FOR BOARD IMAGE EXAMPLE
 

// Boats are placed either horizontally, vertically or diagonally on the board. 0 represents a space not occupied by a boat. 
// Digits 1-3 represent boats which vary in length 1-4 spaces long. There will always be at least 1 boat up to a maximum of 3 
// in any one game. Boat sizes and board dimentions will vary from game to game.

// Attacks
// Attacks are calculated from the bottom left, first the X coordinate then the Y. There will be at least one attack per game, 
// and the array will not contain duplicates.

// [[2, 1], [1, 3], [4, 2]];
// First attack      `[2, 1]` = `3`
// Second attack `[1, 3]` = `0`
// Third attack     `[4, 2]` = `1`
// Function Initialization
// board = [[0,0,0,2,2,0],
//          [0,3,0,0,0,0],
//          [0,3,0,1,0,0],
//          [0,3,0,1,0,0]];
// attacks = [[2, 1], [1, 3], [4, 2]];
// damagedOrSunk(board, attacks);
// Scoring
// 1 point for every whole boat sank.
// 0.5 points for each boat hit at least once (not including boats that are sunk).
// -1 point for each whole boat that was not hit at least once.
// Sunk or Damaged
// `sunk` = all boats that are sunk
// `damaged` = all boats that have been hit at least once but not sunk
// `notTouched/not_touched` = all boats that have not been hit at least once
// Output
// You should return a hash with the following data

// `sunk`, `damaged`, `notTouched`, `points`
// Example Game Output
// In our above example..

// First attack: `boat 3` was damaged, which increases the `points` by `0.5`
// Second attack: miss nothing happens
// Third attack: `boat 1` was damaged, which increases the `points` by `0.5`
// `boat 2` was untouched so `points -1` and `notTouched +1` in Javascript/Java/C# and `not_touched +1` in Python/Ruby.
// No whole boats sank
// Return Hash
// { sunk: 0, damaged: 2 , notTouched: 1, points: 0 }

function damagedOrSunk (board, attacks){
  let boatCoordinates = [];
  let boats = [];
  let afterAttacks = [];
  let sunk = 0;
  let damaged = 0;
  let notTouched = 0;
  
  for(let i = 0; i <= attacks.length - 1; i++){
    let temp1 = board.length - attacks[i][1];
    let temp2 = attacks[i][0] - 1;
    attacks[i][0] = temp1;
    attacks[i][1] = temp2;
  };

  board.map((x, xIndex) => x.map((y,yIndex) => boatCoordinates.push([xIndex, yIndex, y, 0])));
  boatCoordinates.sort((a, b) => a[2] - b[2]);
  
  let temp = boatCoordinates;
  temp = temp.filter(x => x[2] != 0);

  for(let i = 0; i <= temp.length - 1; i++){
    if(!boats.includes(temp[i][2])){
      boats.push(temp[i][2]);
    };
  };
  
  attacks.map(att => {
    for(let i = 0; i <= boatCoordinates.length - 1; i++){
      if(boatCoordinates[i][0] == att[0] && boatCoordinates[i][1] == att[1]){
        boatCoordinates[i][3] = 1;
      };
    };
  });

  boats.map(bt => {
    afterAttacks.push([boatCoordinates.filter(x => x[2] == bt).length, boatCoordinates.filter(x => x[3] == 1 && x[2] == bt).length]);
  });

  afterAttacks.map(att => {
    if(att[1] == 0){
      notTouched += 1;
    };
    
    if(att[0] == att[1]){
      sunk += 1;
    };
    
    if(att[0] != att[1] && att[1] != 0){  
    damaged += 1;
    };
  });
  
  return { sunk, damaged, notTouched, points: (sunk + (damaged * 0.5)) - notTouched };
}
