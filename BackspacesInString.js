//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

//Your task is to process a string with "#" symbols.

//Examples
//"abc#d##c"      ==>  "ac"
//"abc##d######"  ==>  ""
//"#######"       ==>  ""
//""              ==>  ""

function cleanString(s) {
  let newStr = s.split('');
  
  for(let i = 0; i <= newStr.length - 1; i++){
    if(newStr[i] == '#'){
      let start = 1;
      
      while(newStr[i - start] == ''){
        start++;
      };
      
      newStr[i-start]='';
      newStr[i]='';
    };
  };
  
  return newStr.join('');
};
