// https://www.codewars.com/kata/5270d0d18625160ada0000e4

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, 
// is to score a throw according to these rules. You will always be given an array with 
// five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet 
// (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450
// In some languages, it is possible to mutate the input to the function. This is something that you 
// should never do. If you mutate the input, you will not be able to pass all the tests.



function score( dice ) {
  let totalPoints = 0;
  
  for(let i = 1; i <= 6; i++){
    let d = dice;
    d = d.filter(x => x == i);
    totalPoints += getPointsValue(i,d);
  }
  
  return totalPoints;
}

function getPointsValue(diceValue, diceDrawn){
  if(diceDrawn.length != 0){
    if(diceValue == 1){
      if(diceDrawn.length >= 3) {
        return 1000 + ((diceDrawn.length - 3) * 100);
      } else {
        return diceDrawn.length * 100;
      }
    } else if (diceValue == 2){
      if(diceDrawn.length >= 3) {
        return 200;
      }
    } else if (diceValue == 3){
      if(diceDrawn.length >= 3) {
        return 300;
      }
    } else if (diceValue == 4){
      if(diceDrawn.length >= 3) {
        return 400;
      }    
    } else if (diceValue == 5){
      if(diceDrawn.length >= 3) {
        return 500 + ((diceDrawn.length - 3) * 50);
      } else {
        return diceDrawn.length * 50;
      }
    } else if (diceValue == 6){
      if(diceDrawn.length >= 3) {
        return 600;
      }    
    }
  } else {
    return 0;
  }
  return 0;
}
