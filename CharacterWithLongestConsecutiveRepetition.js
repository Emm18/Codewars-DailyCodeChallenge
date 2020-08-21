//https://www.codewars.com/kata/586d6cefbcc21eed7a001155

//For a given string s find the character c (or C) with longest consecutive repetition and return:

//[c, l]
//where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

//For empty string return:

//["", 0]
//Happy coding! :)

function longestRepetition(s) {
  let current = [];
  let highest = [];
  
  for(let i = 0; i <= s.length - 1; i++){
    if(current.length == 0 || current[0] != s[i]){
      if(highest.length == 0 || current[1] >  highest[1]){
        highest = [...current]
      };
      current = [s[i], 1];
    } else {
      current = [s[i], current[1] + 1];
    };
  };
  
  if(current[1] >  highest[1]){
    highest = [...current];
  };
  
  return highest.length > 0 ? highest : ['',0];
};
