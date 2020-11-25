//https://www.codewars.com/kata/525dfedb5b62f6954d000006

//You've just recently been hired to calculate scores for a Dart Board game!

//Scoring specifications:

//0 points - radius above 10
//5 points - radius between 5 and 10 inclusive
//10 points - radius less than 5
//If all radii are less than 5, award 100 BONUS POINTS!

//Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

//An empty array should return 0.

//Examples:
//scoreThrows( [1, 5, 11] )    =>  15
//scoreThrows( [15, 20, 30] )  =>  0
//scoreThrows( [1, 2, 3, 4] )  =>  140

function scoreThrows(radii){
  let score = 0;
  let bonus = true;
  
  if(radii.length == 0){
    return 0;
  };
  
  radii.map(val => {
    if(val > 4){
      bonus = false;
    };
    
    if(val >= 5 && val <= 10){
      score += 5;
    };
    
    if(val < 5){
      score += 10;
    };
  });

  return bonus ? score + 100 : score;
};
