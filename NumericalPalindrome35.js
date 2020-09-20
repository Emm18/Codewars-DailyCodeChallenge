//https://www.codewars.com/kata/58e2708f9bd67fee17000080

//A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

//For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

//In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

//If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

//Examples
//palindrome(1221)      =>  [22, 1221]
//palindrome(34322122)  =>  [22, 212, 343, 22122]
//palindrome(1001331)   =>  [33, 1001, 1331]
//palindrome(1294)      =>  "No palindromes found"
//palindrome("1221")    =>  "Not valid"

function palindrome(num){ 
  if(typeof num != 'number' || num < 0){
    return 'Not valid'
  };
  if(num < 10){
    return 'No palindromes found'
  };

  let newNum = num.toString().split('');
  let result = [];
  
  for(let i = 2; i <= newNum.length; i++){
    for(let j = 0; j < newNum.length - (i-1); j++){
      let strNum = newNum.slice(j, j + i);
      if(strNum.join('') == strNum.reverse().join('') && strNum[0] != '0'){
        if(!result.includes(parseInt(strNum.join('')))){
           result.push(parseInt(strNum.join('')));
        };
      };
    };
  };
  
  return result.length > 0 ? result.sort((a,b) => a - b) : 'No palindromes found';
};
