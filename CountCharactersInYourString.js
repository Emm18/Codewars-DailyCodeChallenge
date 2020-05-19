//https://www.codewars.com/kata/52efefcbcdf57161d4000091

//The main idea is to count all the occurring characters(UTF-8) in string. 
//If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

//What if the string is empty ? Then the result should be empty object literal { }

//For C#: Use a Dictionary<char, int> for this kata!

function count (string) {  
  let newStr = string.split('').sort();
  let result = {};
  
  while(newStr.length > 0){
    let str = newStr.splice(0,1)[0];
    result = {...result, [str] : newStr.filter(x => x == str).length + 1};
    newStr = newStr.filter(x => x != str);
  };
  
   return result;
};
