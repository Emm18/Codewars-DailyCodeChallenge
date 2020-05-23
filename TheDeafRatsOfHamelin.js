//https://www.codewars.com/kata/598106cb34e205e074000031

//Story
//The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

//But some of the rats are deaf and are going the wrong way!

//Kata Task
//How many deaf rats are there?

//Legend
//P = The Pied Piper
//O~ = Rat going left
//~O = Rat going right
//Example
//ex1 ~O~O~O~O P has 0 deaf rats
//ex2 P O~ O~ ~O O~ has 1 deaf rat
//ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

var countDeafRats = function(town) {
  let newTown = town.split(' ').join('');
  let indexOfP = newTown.split('').indexOf('P');;
  let deafCtr = 0;
  
  let goingRight = newTown.split('').slice(0, indexOfP);
  
  while(goingRight.length > 0){
    if(goingRight.splice(0,2).join('') != '~O'){
      deafCtr++;
    }
  }
  
  let goingLeft =  newTown.split('').slice(indexOfP + 1, newTown.length + 1);
  
  while(goingLeft.length > 0){
    if(goingLeft.splice(0,2).join('') != 'O~'){
      deafCtr++;
    };
  };
  
  return deafCtr;
};
