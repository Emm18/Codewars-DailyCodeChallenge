//https://www.codewars.com/kata/5f885fa9f130ea00207c7dc8

//Your task is to write a function loneliest() which accepts a string like this:

//'a b  z   p c'
//and should return array of character(s) that have the most spaces to their right and left.

//Examples:

//'a b  c' => ['b']
//'a bcs           d k' => ['d']
//'    a b  sc     p     t   k'  => ['p']
//'a  b  c  de'  => ['b', 'c']
//'     a  b  c de        '  => ['b']
//'abc' => ['a', 'b', 'c']
//Note:

//String can have leading/trailing spaces, you should not count them;

//Strings contain only unique characters from a to z;

//Order of characters in array doesn't matter;

//Good luck!

function loneliest(str) {
  let newStr = str.trim().split('');
  let loneliest = [];
  
  for(let i = 0; i <= newStr.length - 1; i++){
    if(newStr[i] != ' '){
      let ctr = 0;
      let goingLeft = i - 1;
      let goingRight = i + 1;
      
      while(newStr[goingLeft] == ' '){
        ctr++;
        goingLeft--;
      };
      
      while(newStr[goingRight] == ' '){
        ctr++;
        goingRight++;
      };
      
      if(loneliest.length == 0 || ctr > loneliest[0][1]){
        loneliest = [[newStr[i], ctr]];
      } else if(ctr == loneliest[0][1]){
        loneliest.push([newStr[i], ctr]);
      };
    };
  };
  
  return loneliest.map(x => x[0]);
};
