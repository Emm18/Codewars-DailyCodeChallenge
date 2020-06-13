//https://www.codewars.com/kata/597cfe0a38015079a0000006

//Given a list of white pawns on a chessboard (any number of them, meaning 
//from 0 to 64 and with the possibility to be positioned everywhere), determine 
//how many of them have their backs covered by another. Pawns attacking upwards since we have only white ones.

//Please remember that a pawn attack(and defend as well) only the 2 square on 
//the sides in front of him. https://en.wikipedia.org/wiki/Pawn_(chess)#/media/File:Pawn_(chess)_movements.gif

//This is how the chess board coordinates are defined:

//  A	 B	C	 D	E	 F G  H
//8	♜	♞	♝	♛	♚	♝	♞	♜
//7	♟	♟	♟	♟	♟	♟	♟	♟
//6								
//5								
//4								
//3								
//2	♙	♙	♙	♙	♙	♙	♙	♙
//1	♖	♘	♗	♕	♔	♗	♘	♖

function coveredPawns(pawns){
  let newPawns = [];
  let ctr = 0;
  
  pawns.map(val => {
    let temp = val.split('').reverse();
    newPawns.push([8 - temp[0], temp[1].charCodeAt(0) - 97]);
  });
  
  newPawns.map(val => {
    let row = val[0] + 1;
    let colLeft = val[1] - 1;
    let colRight = val[1] + 1;
    if(newPawns.filter(x => (x[0] == row && x[1] == colLeft) || (x[0] == row && x[1] == colRight)).length != 0){
      ctr++;
    };
  });
  
  return ctr;
};
