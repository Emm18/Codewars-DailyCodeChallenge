//https://www.codewars.com/kata/52dffa05467ee54b93000712

//Given a standard english sentence passed in as a string, write a method that will return a sentence 
//made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

//All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.
//All words that begin with an upper case letter should come after that, and should be sorted in descending order.
//If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. 
//Any punctuation must be discarded.

//Example
//For example, given the input string "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!", 
//your method should return "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut". 
//Lower case letters are sorted a -> l -> l -> o -> o -> t and upper case letters are sorted V -> T -> O -> M -> L -> C.

function sort(sentence){
  let newSentence = sentence.split(' ');
  let lowerCase = [];
  let upperCase = [];
  newSentence.map(str => {
    let temp = str.split('');
    if(temp[str.length - 1].toUpperCase().charCodeAt(0) < 65 || temp[str.length - 1].toUpperCase().charCodeAt(0) > 90){
        temp.splice(str.length - 1, 1);
    };
    if(str[0] == str[0].toUpperCase()){ 
      upperCase.push(temp.join(''));
    } else {
      lowerCase.push(temp.join(''));
    };
  });
  
  let space = lowerCase.length > 0 && upperCase.length > 0 ? ' ' : '';
  return lowerCase.sort().join(' ') + space + upperCase.sort().reverse().join(' ');
};
