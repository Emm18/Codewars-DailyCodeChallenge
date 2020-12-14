//https://www.codewars.com/kata/55679d644c58e2df2a00009c

//Background
//We all know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.

//Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)

//Kata
//Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.

//You must determine if all that is open is then closed, and nothing is closed which is not already open!

//You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.

//You may assume that the second string always has an even number of characters.

//Example
// In this case '(' opens a section, and ')' closes a section
//isBalanced("(Sensei says yes!)", "()")       // => True
//isBalanced("(Sensei says no!", "()")         // => False

// In this case '(' and '[' open a section, while ')' and ']' close a section
//isBalanced("(Sensei [says] yes!)", "()[]")   // => True
//isBalanced("(Sensei [says) no!]", "()[]")    // => False

// In this case a single quote (') both opens and closes a section
//isBalanced("Sensei says 'yes'!", "''")       // => True
//isBalanced("Sensei say's no!", "''")         // => False

function isBalanced(s, caps) {
  let newCaps = caps.split('');
  let newS = s.split('').map((x) => { return newCaps.includes(x) ? x : '' }).join('').split('');
  let diff = [];
  let same = [];
  
  if(newS.length % 2 != 0){
    return false;
  };
  
  while(newCaps.length > 0){
    let temp = newCaps.splice(0,2);
    let opening = temp[0];
    let closing = temp[1];
    
    newS.map((o, index) => {
      if(opening != closing && o == opening){
        diff.push([index, opening, closing]); 
      }else if(o == opening){
        same.push([index, opening, closing]);
      };
    });
  };
  
  if(same.length > 0){
    same.sort((a, b) => a[0] - b[0]);
    
    if(same.length % 2 != 0){
      return false;
    };
    let nestedValid = true; 
    let sideBySideValid = true;
    
    for(let i = 0; i < same.length / 2; i++){
      let o = same[i][1];
      let c = same[(same.length - 1) - i][1];
      if(o != c){
        nestedValid = false;
      };
    };
    
    for(let i = 0; i <= same.length - 2; i+=2){
      let o = same[i][1];
      let c = same[i + 1][1];
      if(o != c){
        sideBySideValid = false;
      };
    };
    
    if(!nestedValid && !sideBySideValid){
      return false;
    };
  };
  
  if(diff.length > 0){
    diff.sort((a,b) => b[0] - a[0]);
    for(let i = 0; i <= diff.length - 1; i++){
      let index = diff[i][0] + 1;
      let closing = diff[i][2];
      
      if(newS[index] != closing){
        return false;
      } else {
        newS.splice(index - 1, 2);
      };
    };
    if(newS.length > 0){
      return false;
    };
  };
  
  return true;
};
