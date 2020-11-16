//https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

//The Hamming Distance is a measure of similarity between two strings of equal length. 
//Complete the function so that it returns the number of positions where the input strings do not match.

//Examples (in JavaScript):

//hamming("I like turtles","I like turkeys")  //returns 3
//hamming("Hello World","Hello World")  //returns 0
//You can assume that the two input strings are of equal length.

function hamming(a,b) {
  let newA = a.split('');
  let newB = b.split('');
  let ctr = 0;
  
  for(let i = 0; i <= newA.length - 1; i++){
    if(newA[i] !== newB[i]){
      ctr++;
    };
  };
  
  return ctr;
};
