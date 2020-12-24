//https://www.codewars.com/kata/5e8de0515f68a50020683af9

//At first, it may look easy, but it isn't...
//Given two versions of the same line as arguments, you have to find the difference between them.
//You have to write a function which will find:

//The index where the changes begin
//The characters which were added
//The characters which were deleted
//and return an object with the following values:
//{ index: integer, addedText: string, deletedText: string }
//Specification
//addedText and deletedText should be as short as possible.
//If it can be satisfied in several ways by equally short values, the returned object must have a maximum index.
//If the two string arguments are the same, then the function has to return the following
//{index: -1, addedText: '', deletedText: ''}
//Examples
//findDifferent('aasaa','asaa') // {index: 1, addedText: "saa", deletedText: "asaa"} - "incorrect"
//findDifferent('aasaa','asaa') // {index: 1, addedText: "", deletedText: "a"} - "correct"

//findDifferent("added", "added added")
// {index: 0, addedText: "added ", deletedText: ""} - "incorrect"
// {index: 5, addedText: " added", deletedText: ""} - "correct"

//findDifferent("Hello John, how are you?", "Hello Jane, how are you?") 
// {index: 7, addedText: "ane", deletedText: "ohn"}

//findDifferent("Hello, how is going your day?", "Hey, how is going your day?")
// {index: 2, addedText: "y", deletedText: "llo"}

//findDifferent('The same text', 'The same text') // {index: -1, addedText: '', deletedText: ''}; 

function findDifferent(str1, str2){
  if(str1 === str2){
    return { index: -1, addedText: '', deletedText: '' };
  };
  
  let newStr1 = str1.split('');
  let newStr2 = str2.split('');
  let index = 0;
  
  while(newStr1[0] == newStr2[0] && newStr1.length > 0 && newStr2.length > 0){
    newStr1.splice(0,1);
    newStr2.splice(0,1);
    index++;  
  };
  
  while(newStr1[newStr1.length - 1] == newStr2[newStr2.length - 1] && newStr1.length > 0 && newStr2.length > 0){
    newStr1.splice(newStr1.length - 1,1);
    newStr2.splice(newStr2.length - 1,1);
  };
  
  return { index, addedText: newStr2.join(''), deletedText: newStr1.join('')};
};
