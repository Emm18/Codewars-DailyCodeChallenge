//https://www.codewars.com/kata/590adadea658017d90000039

//Task
// 	You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
//Rules
//1. There are always exactly three reels
//2. Each reel has 10 different items.
//3. The three reel inputs may be different.
//4. The spin array represents the index of where the reels finish.
//5. The three spin inputs may be different
//6. Three of the same is worth more than two of the same
//7. Two of the same plus one "Wild" is double the score.
//8. No matching items returns 0.
//Scoring
//Item
//                    Three of the same   Two of the same   Two of the same plus one Wild
//Wild                100                 10                N/A
//Star                90                  9                 18
//Bell                80                  8                 16
//Shell               70                  7                 14
//Seven               60                  6                 12
//Cherry              50                  5                 10
//Bar                 40                  4                 8
//King                30                  3                 6
//Queen               20                  2                 4
//Jack                10                  1                 2
 
//Returns
// 	Return an integer of the score.
//Example
//Initialise
//reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
//reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
//reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
//spin = [5,5,5];
//result = fruit([reel1,reel2,reel3],spin);
//Scoring
//reel1[5] == "Cherry"
//reel2[5] == "Cherry"
//reel3[5] == "Cherry"

//Cherry + Cherry + Cherry == 50
//Return
//Good luck and enjoy!

function fruit(reels, spins){
  let reel = {
    "Wild" : [100,10,0],
    "Star" : [90,9,18],
    "Bell" : [80,8,16],
    "Shell" : [70,7,14],
    "Seven" : [60,6,12],
    "Cherry" : [50,5,10],
    "Bar" : [40,4,8],
    "King" : [30,3,6],
    "Queen" : [20,2,4],
    "Jack" : [10,1,2]
  };
  let r1 = reels[0][spins[0]];
  let r2 = reels[1][spins[1]];
  let r3 = reels[2][spins[2]];
  
  if(r1 == r2 && r1 == r3){
    return reel[reels[0][spins[0]]][0];
  };
  
  if (r1 == r2 && r3 == 'Wild' || r1 == r3 & r2 == 'Wild'){
    return reel[reels[0][spins[0]]][2];
  };
  
  if (r2 == r3 && r1 == 'Wild'){
    return reel[reels[1][spins[1]]][2];
  };
  
  if(r1 == r2 || r1 == r3){
    return reel[reels[0][spins[0]]][1];
  };
  
  if(r2 == r3){
    return reel[reels[1][spins[1]]][1];
  };
  
  return 0;
};
