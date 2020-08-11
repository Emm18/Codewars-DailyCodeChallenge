//https://www.codewars.com/kata/5878520d52628a092f0002d0

//Given a string, return a new string that has transformed based on the input:

//Change case of every character, ie. lower case to upper case, upper case to lower case.
//Reverse the order of words from the input.
//Note: You will have to handle multiple spaces, and leading/trailing spaces.

//For example:

//"Example Input" ==> "iNPUT eXAMPLE"
//You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
  let newStr = str.split(' ').reverse();
  let result = [];
  
  newStr.map(s => {
    let newS = s.split('');
    let temp = '';
    newS.map(x => {
      if(x == x.toLowerCase()){
        temp += x.toUpperCase();
      } else {
        temp += x.toLowerCase();
      };
    });
    result.push(temp);
  });
  
  return result.join(' ');
};
