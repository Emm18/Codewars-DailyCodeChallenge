//https://www.codewars.com/kata/5b40a38f6be5d82775000003

//Story
//The word is on the street that you claim to be a safe-cracking jewel thief.

//But are you?

//This Kata will verify your safe-cracking abilities.

//Kata
//To prove you are a real thief you need to crack the combination of the safe, and then open it and tell me the value of the jewels inside!

//The safe object has two methods:

//Method	      Parameter	            Returns
//                                    Type	                Meaning
//`unlock`	    combination	          string	              Sounds you can hear
//                                                                                No Sound
//                                                          click	            The first part of the combination is correct
//                                                          click-click	            The first two parts of the combination are correct
//                                                          click-click-click	    The combination is correct.
//                                                                                  Now you can turn the handle to open the safe.
//`open`	      -	                     int	                            The value of the safe contents (range 0 - 100,000)
//Combination Format
//The safe combination is made up of 3 dial spins.

//safe-dial
//Spin the dial left L or right R
//Numbers on the dial 00 - 99
//Each part of the combination is separated by -
//e.g. L23-R67-R09

var crack = function(safe) {
  let first, second, third;
  
  for(let i = 0; i <= 99; i++){
    let a = i == 0 ? 'L00' : i < 10 ? 'L0' + i : 'L' + i;
    let b = i == 0 ? 'R00' : i < 10 ? 'R0' + i : 'R' + i;
    if(safe.unlock(a) != ''){
      first = a;
      break;
    };
    if(safe.unlock(b) != ''){
      first = b;
      break;
    };
  };
  
  if(first != ''){
    for(let i = 0; i <= 99; i++){
      let a2 = i == 0 ? 'L00' : i < 10 ? 'L0' + i : 'L' + i;
      let b2 = i == 0 ? 'R00' : i < 10 ? 'R0' + i : 'R' + i;
      if(safe.unlock(first + '-' + a2).split('-').length > 1){
        second = a2;
        break;
      };
      if(safe.unlock(first + '-' + b2).split('-').length > 1){
        second = b2;
        break;
      };
    };
  };
  
  if(first != '' && second != ''){
    for(let i = 0; i <= 99; i++){
      let a3 = i == 0 ? 'L00' : i < 10 ? 'L0' + i : 'L' + i;
      let b3 = i == 0 ? 'R00' : i < 10 ? 'R0' + i : 'R' + i;
      if(safe.unlock(first + '-' + second + '-' + a3).split('-').length > 2){
        third = a3;
        break;
      };
      if(safe.unlock(first + '-' + second + '-' + b3).split('-').length > 2){
        third = b3;
        break;
      };
    };
  };
  
  return safe.open();
};
