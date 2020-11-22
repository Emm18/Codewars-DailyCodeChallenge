//https://www.codewars.com/kata/58f290d0b48966547f00014c

//The Spelling Bee bees are back...

//How many bees are in the beehive?
//bees can be facing UP, DOWN, LEFT, RIGHT, and now also diagonally up/down/left/right
//bees can share parts of other bees
//## Examples
//Ex1

//bee.bee     
//.e..e..
//.b..eeb
//Answer: 5

//Ex2

//beee..     
//eeb.e.
//ebee.b
//Answer: 7

howManyBees = function(hive) {
  if(!hive || hive.length == 0){
    return 0;
  };
  let ctr = 0;
  
  for(let i = 0; i <= hive.length - 1; i++){
    while(hive[i].includes('b')){
      let index = hive[i].indexOf('b');
      let left = index - 2 >= 0 ? hive[i][index] + hive[i][index - 1] + hive[i][index - 2] : '';
      let topLeft = index - 2 >= 0 && i - 2 >= 0 ? hive[i][index] + hive[i - 1][index - 1] + hive[i - 2][index - 2] : '';
      let top = i - 2 >= 0 ? hive[i][index] + hive[i - 1][index] + hive[i - 2][index] : '';
      let topRight = index + 2 <= hive[i].length - 1 && i - 2 >= 0 ? hive[i][index] + hive[i - 1][index + 1] + hive[i - 2][index + 2] : '';
      let right = index + 2 <= hive[i].length - 1 ? hive[i][index] + hive[i][index + 1] + hive[i][index + 2] : '';
      let bottomRight = index + 2 <= hive[i].length - 1 && i + 2 <= hive.length - 1 ? hive[i][index] + hive[i + 1][index + 1] + hive[i + 2][index + 2] : '';
      let bottom = i + 2 <= hive.length - 1 ?  hive[i][index] + hive[i + 1][index] + hive[i + 2][index] : '';      
      let bottomLeft = i + 2 <= hive.length - 1 && index - 2 >= 0 ? hive[i][index] + hive[i + 1][index - 1] + hive[i + 2][index - 2] : '';
      
      ctr += left == 'bee' ? 1 : 0;
      ctr += top == 'bee' ? 1 : 0;
      ctr += topLeft == 'bee' ? 1 : 0;
      ctr += topRight == 'bee' ? 1 : 0;
      ctr += right == 'bee' ? 1 : 0;
      ctr += bottomRight == 'bee' ? 1 : 0;
      ctr += bottom == 'bee' ? 1 : 0;
      ctr += bottomLeft == 'bee' ? 1 : 0;

      hive[i][index]=".";
    };
  };
  
  return ctr;
};
