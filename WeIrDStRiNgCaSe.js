//https://www.codewars.com/kata/52b757663a95b11b3d00062d

//Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string 
//with all even indexed characters in each word upper cased, and all odd indexed characters in each word 
//lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that 
//character should be upper cased.

//The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be 
//present if there are multiple words. Words will be separated by a single space(' ').

//Examples:
//toWeirdCase( "String" );//=> returns "StRiNg"
//toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
  let newStr = string.split(' ');
  let weirded = [];
  
  newStr.map(x => {
    let newX = x.split('');

    for(let i = 0; i <= newX.length - 1; i++){
      if(i % 2 == 0){
        newX[i] = newX[i].toUpperCase();
      };
    };
    weirded.push(newX.join(''));
  });
  
  return weirded.join(' ');
}
