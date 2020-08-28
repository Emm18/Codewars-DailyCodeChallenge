//https://www.codewars.com/kata/562c3b54746f50d28d000027

//This is a simple string decoding algorithm. The idea is to take a string of characters and decode it into an array. 
//Each character is a single element in the result unless a backslash followed by a positive number is encountered.

//When a backslash followed by a positive number is found, the number indicates how many of the next characters are 
//grouped together as one element.

//Example:

//"abc\5defghi\2jkl" => [ "a", "b", "c", "defgh", "i", "jk", "l" ]
//If the number is larger than the count of remaining characters, treat it as reading the remaining characters.

//If you are reading characters, and you find an escape inside a string, they should be tallied into the string:

//"\5ab\3cde" => [ "ab\3c", "d", "e" ]

function decode(str) {
  let newStr = str.split('');
  let result = [];
  
  while(newStr.length > 0){
    let temp = newStr.splice(0,1)[0];
    if(temp == '\\' ){
      let temp2 = newStr.splice(0,1)[0];
      while(parseInt(newStr) >= 0){
        temp2 += newStr.splice(0,1)[0];
      }
      result.push(newStr.splice(0, temp2).join(''));   
    } else {
      result.push(temp);
    };
  };
  
  return result;
};
