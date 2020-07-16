//https://www.codewars.com/kata/5276c18121e20900c0000235

//Background:
//You're working in a number zoo, and it seems that one of the numbers has gone missing!

//Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

//In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

//Task:
//Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

//Note: huge lists will be tested.

//Examples:
//[1, 3, 4]  =>  2
//[1, 2, 3]  =>  4
//[4, 2, 3]  =>  1

function findNumber(array) {
  let arrCtr = 0;
  let total = 0;
  
  for(let i = 1; i <= array.length + 1; i++){
    total += i;
    if(array[i - 1]){
      arrCtr += array[i-1];
    };
  };
  
  return total - arrCtr;
};
