//https://www.codewars.com/kata/59325dc15dbb44b2440000af

//Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

//isAlt("amazon")
//// true
//isAlt("apple")
//// false
//isAlt("banana")
//// true
//Arguments consist of only lowercase letters.

function isAlt(word) {
  let vowels = ['a','e','i','o','u'];
  let shouldBeVowel = vowels.includes(word[0]) ? true : false;
  let isAlternate = true;
  
  for(let i = 0; i <= word.length - 1; i++){    
    if(shouldBeVowel){
      if(vowels.includes(word[i])){
        shouldBeVowel = false;
      } else {
        isAlternate = false;
        break;
      };
    } else {
      if(vowels.includes(word[i])){
        isAlternate = false;
        break;
      } else {
        shouldBeVowel = false;
      };
      shouldBeVowel = true;
    };
  };
  
  return isAlternate;
};
