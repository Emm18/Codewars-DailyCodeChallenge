//https://www.codewars.com/kata/51689e27fe9a00b126000004

//Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 
//'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should 
//be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

//formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
//formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
//formatWords([]) // should return ""

function formatWords(words){
  if(!words || words.join('') == ''){
    return "";
  };
  
  let newWords = words.filter(x => x != '');
  let last = newWords.splice(newWords.length - 1, 1)[0];
  
  if(newWords.length == 0){
    return last;
  };
  
  if(newWords.length == 1){
    return newWords[0] + ' and ' + last;
  };
  
  return newWords.join(', ') + ' and ' + last;
};
