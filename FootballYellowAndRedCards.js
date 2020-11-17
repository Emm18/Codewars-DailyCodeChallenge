//https://www.codewars.com/kata/5cde4e3f52910d00130dc92c

//Most football fans love it for the goals and excitement. Well, this Kata doesn't. 
//You are to handle the referee's little notebook and count the players who were sent off for fouls and misbehavior.

//The rules: Two teams, named "A" and "B" have 11 players each; players on each team are numbered 
//from 1 to 11. Any player may be sent off the field by being given a red card. A player can also receive 
//a yellow warning card, which is fine, but if he receives another yellow card, he is sent off immediately 
//(no need for a red card in that case). If one of the teams has less than 7 players remaining, the game is 
//stopped immediately by the referee, and the team with less than 7 players loses.

//A card is a string with the team's letter ('A' or 'B'), player's number, and card's color ('Y' or 'R') - 
//all concatenated and capitalized. e.g the card 'B7Y' means player #7 from team B received a yellow card.

//The task: Given a list of cards (could be empty), return the number of remaining players on each team at the 
//end of the game (as a tuple of 2 integers, team "A" first). If the game was terminated by the referee for 
//insufficient number of players, you are to stop the game immediately, and ignore any further possible cards.

//Note for the random tests: If a player that has already been sent off receives another card - ignore it.

function menStillStanding(cards) {
  let playersRemaining = {A:11, B:11};
  let teams = {
    A:{1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "", 11: ""},
    B:{1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "", 11: ""}
  };
  
  for(let i = 0; i <= cards.length - 1; i++){
    let temp = cards[i].split('');
    let team = temp.splice(0,1)[0];
    let card = temp.splice(temp.length - 1, 1)[0];
    let player = temp.join('');
    
    if(card == "R" && teams[team][player] != "OUT"){
      teams[team][player] = "OUT";
      playersRemaining[team]--;
    };
    
    if(card == "Y" && teams[team][player] != "OUT"){
      teams[team][player] += "Y";
      
      if(teams[team][player] == "YY"){
        teams[team][player] = "OUT";
        playersRemaining[team]--;
      };
    };
    
    if(playersRemaining["A"] < 7 || playersRemaining["B"] < 7){
      break;
    };
  };
  
  return [playersRemaining["A"], playersRemaining["B"]];
};
