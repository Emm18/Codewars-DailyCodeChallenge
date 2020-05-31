//https://www.codewars.com/kata/5245a9138ca049e9a10007b8

//You know how sometimes you write the the same word twice in a sentence, 
//but then don't notice that it happened? For example, you've been distracted 
//for a second. Did you notice that *"the"* is doubled in the first sentence of this description?

//As as aS you can see, it's not easy to spot those errors, especially if words 
//differ in case, like *"as"* at the beginning of the sentence.

//Write a function that counts the number of sections repeating the same word (case insensitive). 
//The occurence of two or more equal words next after each other count as one.

//Example:

//"dog cat"                 --> 0
//"dog DOG cat"             --> 1
//"apple dog cat"           --> 0
//"pineapple apple dog cat" --> 0
//"apple     apple dog cat" --> 1
//"apple dog apple dog cat" --> 0
//"dog dog DOG dog dog dog" --> 1
//"dog dog dog dog cat cat" --> 2
//"cat cat dog dog cat cat" --> 3

function countAdjacentPairs(searchString) {
  let newStr = searchString.toLowerCase().split(' ');
  let ctr = 0;

  while(newStr.length > 0){
    let currentWord = newStr.splice(0, 1)[0];
    let dup = false;
    
    while(currentWord == newStr[0]){
      newStr.splice(0,1);
      dup = true;
    };
    
    if(dup){
      ctr++;
    };
  };
  
  return ctr;  
};
