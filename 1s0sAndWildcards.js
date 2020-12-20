//https://www.codewars.com/kata/588f3e0dfa74475a2600002a

//You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.

//Return an array containing all the possibilities you can reach substituing the ? for a value.

//Examples
//'101?' -> ['1010', '1011']

//'1?1?' -> ['1010', '1110', '1011', '1111']
//Notes:

//Don't worry about sorting the output.
//Your string will never be empty.
//Have fun!

function possibilities(str) {
  let newStr = str.split('');
  let wilds = newStr.filter(x => x == '?').length;
  let ones = 0;
  let combinations = [];
  let result = [];
  
  while((ones).toString(2).padStart(wilds, '0').length == wilds){
    combinations.push((ones).toString(2).padStart(wilds, '0').split(''));
    ones++;
  };
  
  while(combinations.length > 0){
    let current = combinations.splice(0,1)[0];
    result.push(newStr.map(s => s == '?' ? current.splice(0,1)[0] : s).join(''));
  };
  
  return result;
};
