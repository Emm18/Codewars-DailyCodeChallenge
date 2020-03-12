//https://www.codewars.com/kata/529b418d533b76924600085d

//Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. 
//Lowercase characters can be numbers. If method gets number, it should return string.

//Examples:

//  returns test_controller
//toUnderscore('TestController');

// returns movies_and_books
//toUnderscore('MoviesAndBooks');

// returns app7_test
//toUnderscore('App7Test');

// returns "1"
//toUnderscore(1);

function toUnderscore(string) {
  let newStr;
  let result = [];
  let str = "";
  
  if(string.length > 1){
    newStr = string.split('');
  } else {
    newStr = [string]
  }
  
  let firstLetter = newStr.splice(0,1)[0];

  while(newStr.length >= 0){
    if(newStr.length == 0){
      result.push(str);
      break;
    }
    
    let temp = newStr.splice(0,1);
    
    if(temp[0].charCodeAt(0) >= 65 && temp[0].charCodeAt(0) <= 90){
      result.push(str);
      str = temp[0].toLowerCase();
    } else {
      str += temp[0];
    }
  }
  
  if(isNaN(parseInt(firstLetter))){
    firstLetter = firstLetter.toLowerCase();
  }
  
  return firstLetter + result.join("_");
}
