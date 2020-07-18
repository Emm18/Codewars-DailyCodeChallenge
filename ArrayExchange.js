//https://www.codewars.com/kata/5353212e5ee40d4694001114

//Array Exchange and Reversing

//It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

// before
//const myArray = ['a', 'b', 'c'];
//const otherArray = [1, 2, 3];

//exchangeWith(myArray, otherArray);

// after
//myArray => [3, 2, 1]
//otherArray => ['c', 'b', 'a']

function exchangeWith(a, b) {
  let bCount = b.length;
  
  while(a.length > 0){
    b.push(a.splice(0,1)[0]);
  };
  
  for(let i = 0; i <= bCount - 1; i++){
    a.push(b.splice(0,1)[0]);
  };
  
  a.reverse();
  b.reverse();
};
