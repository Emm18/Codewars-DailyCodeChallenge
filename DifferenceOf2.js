//https://www.codewars.com/kata/5340298112fa30e786000688

//The objective is to return all pairs of integers from a given collection of integers that have a difference of 2.

//The result should be sorted in ascending order.

//The input will consist of unique values. The order of the integers in the input collection should not matter.

//Examples
//[1, 2, 3, 4]      -->  [[1, 3], [2, 4]]
//[4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
//[1, 23, 3, 4, 7]  -->  [[1, 3]]
//[4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]

function twosDifference(input){
  let result = [];
  for(let i = 0; i <= input.length - 1; i++){
    for(let j = 0; j <= input.length - 1; j++){
      if(i != j){
        if(input[i] - input[j] == 2 || input[i] - input[j] == -2){
          let x = [input[j], input[i]].sort((x, y) => x - y);
          if(result.filter(val => val[0] == x[0] && val[1] == x[1]).length == 0){
            result.push(x);
          }
        }
      }
    }
  }

 return result.sort((x, y) => x[0] - y[0]);
};
