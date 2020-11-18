//https://www.codewars.com/kata/52ad1db4b2651f744d000394

//Santa puts all the presents into the huge sack. In order to let his reindeers rest a bit, he only takes as many reindeers with him as he is required to do. 
//The others may take a nap.

//Two reindeers are always required for the sleigh and Santa himself. Additionally he needs 1 reindeer per 30 presents. As you know, Santa has 8 reindeers in 
//total, so he can deliver up to 180 presents at once (2 reindeers for Santa and the sleigh + 6 reindeers with 30 presents each).

//Complete the function reindeers(), which takes a number of presents and returns the minimum numbers of required reindeers. If the number of presents is too high, throw an error.

//Examles:

//reindeers(0); // must return 2
//reindeers(1); // must return 3
//reindeers(30); // must return 3
//reindeers(200); // must throw an error

function reindeers(presents) {
  if(presents > 180){
    throw "error";
  };
  
  let ctr = Math.floor(presents / 30);
  let result = 2 + ctr;  

  if(presents % 30 != 0){
    result++;
  };
  
  return result;
};