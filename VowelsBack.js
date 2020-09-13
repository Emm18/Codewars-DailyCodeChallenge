//https://www.codewars.com/kata/57cfd92c05c1864df2001563

//You need to play around with the provided string (s).

//Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

//Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

//Exceptions:

//If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

//If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

//Provided string will always be lower case, won't be empty and will have no special characters.

function vowelBack(s){
  let newStr = s.split('');
  let vowels = ['a','e','i','o','u'];
  let excempted = ['t','f','i','v'];
  let steps = { c : -1, o : -1, d : -3, e : -4, con : 9, vow : -5 };
  let result = '';
  
  newStr.map(str => {
    if(excempted.includes(str)){
      result += str;
    } else {
      let currentStr = str.charCodeAt(0);
      let direction;
      if(steps[str]){
        currentStr += steps[str]
        direction = '-';
      } else if(vowels.includes(str)){
        currentStr += steps['vow'];
        direction = '-';
      } else {
        currentStr += steps['con'];
        direction = '+';
      };
      
      if(currentStr < 97 || currentStr > 122){
        if(direction == '+'){
          currentStr = (currentStr - 122) + 96;
        } else {
          currentStr = 122 - (96 - currentStr);
        };
      };
      result += String.fromCharCode(currentStr);
    };
  });
  
  return result;
};
