//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places.

//Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

//Example

//sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  let odd = [];
  
  for(let i = 0; i <= array.length - 1; i++){
    if(array[i] % 2 == 1){
      odd.push(array[i]);
      array[i] = "";
    }
  }
  odd = odd.sort((a, b) => a - b);
  
  for(let i = 0; i <= array.length - 1; i++){
    if(array[i] === ""){
      array[i] = odd.splice(0,1)[0];
    }
  }
  
  return array;
}
