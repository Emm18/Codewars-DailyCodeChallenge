//https://www.codewars.com/kata/534ffb35edb1241eda0015fe

// Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

// The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).

// Scoring rules:
// Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

// Return the highest score of the cards that is less than or equal to 21. If there is no score less than or equal to 21 return the smallest score more than 21.

// Examples
// ["A"]                           ==>  11
// ["A", "J"]                      ==>  21
// ["A", "10", "A"]                ==>  12
// ["5", "3", "7"]                 ==>  15
// ["5", "4", "3", "2", "A", "K"]  ==>  25

function scoreHand(cards) {
  let getTwoToNine = cards.filter(x => parseInt(x) >= 2 && parseInt(x) <= 9).reduce((a, b)=>{return parseInt(a) + parseInt(b)},0);
  let getTens = cards.filter(x => x == "10" || x == "J" || x == "Q" || x == "K").length * 10;
  let getAces = [0,0];
  let countAce = cards.filter(x => x == "A").length;
  let possibleResult1 = 0;
  let possibleResult2 = 0;
  
  if(countAce > 0){
    getAces = [countAce, 11 + (countAce - 1)];
    possibleResult1 = getTwoToNine + getTens + getAces[0]; //index 0 = all aces count as 1
    possibleResult2 = getTwoToNine + getTens + getAces[1]; //index 1 = 1 ace == 11 and the rest count as 1
   
    if(possibleResult2 > 21){ //compare to know which ace value will be used.
      return possibleResult1;
    } else {
      return possibleResult2;
    }
  }
  return getTwoToNine + getTens;
}
