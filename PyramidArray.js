//https://www.codewars.com/kata/515f51d438015969f7000013

//Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

//pyramid(0) => [ ]
//pyramid(1) => [ [1] ]
//pyramid(2) => [ [1], [1, 1] ]
//pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
//Note: the subarrays should be filled with 1s

function pyramid(n) {
  let result = [];
  
  for(let i = 0; i < n; i++){
    let temp = [];
    for(let j = 0; j < i + 1; j++){
      temp.push(1);
    };
    result.push(temp);
  };
  
  return result;
};
