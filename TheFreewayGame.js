//https://www.codewars.com/kata/59279aea8270cc30080000df

//Back-Story
//Every day I travel on the freeway.

//When I am more bored than usual I sometimes like to play the following counting game I made up:

//As I join the freeway my count is 0
//Add 1 for every car that I overtake
//Subtract 1 for every car that overtakes me
//Stop counting when I reach my exit
//What an easy game! What fun!

//Kata Task
//You will be given

//The distance to my exit (km)
//How fast I am going (kph)
//Information about a lot of other cars
//Their time (relative to me) as I join the freeway. For example,
//-1.5 means they already passed my starting point 1.5 minutes ago
//2.2 means they will pass my starting point 2.2 minutes from now
//How fast they are going (kph)
//Find what is my "score" as I exit the freeway!

//Notes
//Assume all cars travel at a constant speeds
// Safety Warning 

//If you plan to play this "game" remember that it is not really a game. You are in a real car.

//There may be a temptation to try to beat your previous best score.

//Please don't do that...

var freewayGame = function(distKmToExit, mySpeedKph, otherCars) {
  let position = [];
  let ranking = [];
  let munitesToReachExit = distKmToExit / (mySpeedKph/60);
  let score = 0;
  
  position.push(munitesToReachExit * (mySpeedKph/60));
  ranking.push('me');
  
  for(let i = 0; i <= otherCars.length - 1; i++){
    let kpm = otherCars[i][1]/60;
    let time = otherCars[i][0];
    if(otherCars[i][0] <= 0){
      position.push((munitesToReachExit * kpm) + Math.abs(kpm * time));
      ranking.push('front');
    } else {
      position.push((munitesToReachExit * kpm) + (kpm * time * -1));
      ranking.push('back');
    };
  };
  
  for(let i = 1; i <= position.length - 1; i++){
    if(ranking[i] == 'front'){
      if(position[0] > position[i]){
        score++;
        ranking[i] = '-';
      };
    }else if(ranking[i] == 'back'){
      if(position[i] > position[0]){
        score--;
        ranking[i] = '-';
      };
    };
  };
  
  return score;
};
