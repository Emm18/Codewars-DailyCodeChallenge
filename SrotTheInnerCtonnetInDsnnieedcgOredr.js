//https://www.codewars.com/kata/5898b4b71d298e51b600014b

//#Srot the inner ctnnoet in dsnnieedcg oredr

//You have to sort the inner content of every word of a string in descending order.
//The inner content is the content of a word without first and the last char.

//Some examples:

//"sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
//"wait for me" -> "wiat for me"
//"this kata is easy" -> "tihs ktaa is esay"
//The string will never be null and will never be empty.
//It will contain only lowercase-letters and whitespaces.

function sortTheInnerContent(words){
  let newWords = words.split(' ');
  let result = [];
  
  newWords.map(wrd => {
    let temp = wrd.split('');
    let opening = temp.splice(0,1)[0];
    let closing = temp.length > 0 ? temp.splice(wrd.length - 2, 1)[0] : '';
    
    result.push(opening + temp.sort().reverse().join('') + closing);
  });
  
  return result.join(' ');
};
