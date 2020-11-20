//https://www.codewars.com/kata/5b1b27c8f60e99a467000041

//Given two words, how many letters do you have to remove from them to make them anagrams?
//Example
//First word : c od e w ar s (4 letters removed)
//Second word : ha c k er r a nk (6 letters removed)
//Result : 10
//Hints
//A word is an anagram of another word if they have the same letters (usually in a different order).
//Do not worry about case. All inputs will be lowercase.
//When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference

function anagramDifference(w1,w2){ 
  let firstW;
  let secondW;
  let removed = 0;
  
  if(w1.length < w2.length){
    firstW = w1.split('');
    secondW = w2.split('');
  } else {
    firstW = w2.split('');
    secondW = w1.split('');
  };
  
  while(firstW.length > 0){
    let temp = firstW.splice(0,1)[0];
    let indexW2 = secondW.indexOf(temp);
    if(indexW2 > -1){
      secondW.splice(indexW2, 1);
    } else {
      removed++;
    };
  };
  removed += firstW.length + secondW.length;
  
  return removed;
};
