//https://www.codewars.com/kata/5ecc16daa200d2000165c5b1

//Your goal in this kata is to implement an algorithm, which increases number 
//in the way explained below, and returns the result.

//Input data: number, iterations, step.

//Stage 1:

//We get the: number:143726, iterations: 16, step:3

//And make increment operations in a special way

//Position: We start from 1 position and increment 4th num, besause step is 3

//s - start position

//+ - current increased position

//Position: s - - - - - => - - - + - -

//Number: 1 4 3 7 2 6 => 1 4 3 8 2 6

//Stage 2: repeat stage 1 :)

//Position: - - - s - - => + - - - - -

//Number: 1 4 3 8 2 6 => 2 4 3 8 2 6

//You must remember: if your number overflow into a longer number, the current position gets shifted to the right

//9 9 9 => - - p - before overflow position be at 3rd digit

//1 0 0 0 => - - - p - after overflow position be at 4th digit

//Note:

//9 => 10

//799 => 800 (if you increase second 9) or 809 (if you increase first 9)

//99000 => 100000 (if you increase second 9) or 109000 (if you increase first 9)

function increment(number, iterations, spacer) {
  let index = spacer;
  let newNum = number.toString().split('');

  for(let i = 0; i <= iterations - 1; i++){
  
    if(index >= newNum.length){
      while(index >= newNum.length){
        if(index > newNum.length){
          index = index - newNum.length;
        } else {
          index = newNum.length - index;
        };
      };
    };
    
    let incPrev = false;
    let prevIndexCtr = 0;
    
    do{
      newNum[index - prevIndexCtr] = parseInt(newNum[index - prevIndexCtr]) + 1;
      if(parseInt(newNum[index - prevIndexCtr]) == 10){
        if(index - prevIndexCtr == 0){
          newNum[index - prevIndexCtr] = 10;
          index++;
          incPrev = false;
        } else {
          newNum[index - prevIndexCtr] = 0;
          incPrev = true;
        }
      } else {
        incPrev = false;
      }
      prevIndexCtr++;
    } while(incPrev);
    
    newNum = newNum.join('').split('');
    index += spacer;
  };
  
  return parseInt(newNum.join(''));
};
