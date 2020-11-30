//https://www.codewars.com/kata/5357edc90d9c5df39a0013bc

//Your friend has invited you to a party, and tells you to meet them in the line to get in. 
//The one problem is it's a masked party. Everyone in line is wearing a colored mask, including your friend. Find which people in line could be your friend.

//Your friend has told you that he will be wearing a RED mask, and has TWO other friends with him, both wearing BLUE masks.

//Input to the function will be an array of strings, each representing a colored mask. For example:

//var line = ['blue','blue','red','red','blue','green'];
//The output of the function should be the number of people who could possibly be your friend.

//friendFind(['blue','blue','red','red','blue','green','chipmunk'])  // return 1

function friendFind(line){
  let possibilities = ['red+blue+blue', 'blue+red+blue', 'blue+blue+red'];
  let ctr = 0;
  
  for(let i = 0; i <= line.length - 1; i++){
    if(line[i] == 'red'){
      let temp1 = line.slice(i - 1, i + 2).join('+');
      let temp2 = line.slice(i - 2, i + 1).join('+');
      let temp3 = line.slice(i, i + 3).join('+');
      if(possibilities.includes(temp1) || possibilities.includes(temp2) || possibilities.includes(temp3)){
        ctr++;
      };
    };
  };
  
  return ctr;
};
