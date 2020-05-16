//https://www.codewars.com/kata/58223370aef9fc03fd000071

//Given a number, return a string with dash'-'marks before and after 
//each odd integer, but do not begin or end the string with a dash mark.

//Ex:

//dashatize(274) -> '2-7-4'
//dashatize(6815) -> '68-1-5'

function dashatize(num) {
  let newStr = num.toString().split('');
  let result = [];
  
  for(let i = 0; i <= newStr.length - 1; i++){
    if(parseInt(newStr[i]) % 2 == 1){
      if(result[result.length - 1] != '-'){
        result.push('-');
      };
      result.push(newStr[i],'-');
    } else {
      result.push(newStr[i]);
    };
  };
  
  if(result[0] == '-'){
    result.splice(0,1);
  };
  
  if(result[result.length - 1] == '-'){
    result.splice(result.length - 1,1);
  };

  return result.join('');
};
