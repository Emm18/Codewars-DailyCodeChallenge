//https://www.codewars.com/kata/59cf8bed1a68b75ffb000026

//If we alternate the vowels and consonants in the string "have", we get the following list, 
//arranged alphabetically: ['ahev', 'aveh', 'ehav', 'evah', 'vahe', 'veha']. These are the only 
//possibilities in which vowels and consonants are alternated. The first element, ahev, is alphabetically lowest.

//Given a string:

//alternate the vowels and consonants and return the lexicographically lowest element in the list
//If any two or more vowels or consonants must follow each other, return "failed"
//if the number of vowels and consonants are equal, the first letter of the result must be a vowel.
//Examples:

//solve("codewars") = "failed". However you alternate vowels and consonants, two consonants must follow each other
//solve("oruder") = "edorur"
//solve("orudere") = "ederoru". This is the only option that allows you to alternate vowels & consonants.
//In C, return an allocated string even if the response is "failed".
//Vowels will be any of "aeiou". Input will be a lowercase string, no spaces. See test cases for more examples.

//Good luck!

function solve(s) {
  let vowel = [];
  let consonant = [];
  let goesFirst = [];
  let goesSecond = [];
  let result = [];
  
   s.split('').map(str => {
     if(str.charCodeAt(0) == 97 || str.charCodeAt(0) == 101 || str.charCodeAt(0) == 105 || str.charCodeAt(0) == 111 || str.charCodeAt(0) == 117){
       vowel.push(str)
     }else if(str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122){
       consonant.push(str);
     };
   });
  
  vowel.sort();
  consonant.sort();
  
  if(vowel.length - consonant.length > 1 || vowel.length - consonant.length < -1){
    return 'failed';
  };
  
  if(consonant.length > vowel.length){
    goesFirst = consonant;
    goesSecond = vowel;
  } else {
    goesFirst = vowel;
    goesSecond = consonant;    
  };
  
  let turn = 0;
  while(goesFirst.length > 0 || goesSecond.length > 0){
    if(turn == 0){
      let temp = goesFirst.splice(0,1)[0];
      result.push(temp);
      turn = 1;
    }else {
      let temp = goesSecond.splice(0,1)[0];
      result.push(temp);
      turn = 0;
    };
  };
  
  return result.join('');
};
