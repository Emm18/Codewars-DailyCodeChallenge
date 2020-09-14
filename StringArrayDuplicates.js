//https://www.codewars.com/kata/59f08f89a5e129c543000069

//In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

//For example:

//dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

//dup(["kelless","keenness"]) = ["keles","kenes"].

//Strings will be alphabet characters only. Don't worry about lower and upper case. See test cases for more examples.

//Good luck!

function dup(s) {
  let result = [];
  
  s.map((string) => {
    let newStr = string.split('');
    let filtered = '';
    
    while(newStr.length > 0){
      let temp = newStr.splice(0,1)[0]
      
      while(temp == newStr[0]){
        newStr.splice(0,1);
      };
      filtered += temp;
    };
    result.push(filtered);
  });
  
  return result;
};
