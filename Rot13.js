//https://www.codewars.com/kata/530e15517bc88ac656000716

//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
//ROT13 is an example of the Caesar cipher.

//Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters 
//included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
/like in the original Rot13 "implementation".

function rot13(message){
  let newMessage = message.split('');
  let encodedMessage = "";
  
  newMessage.map(val => {
    let caseStr = val.charCodeAt(0);
    
    if(caseStr >= 97 && caseStr <= 122){
      caseStr+=13;
      
      if(caseStr > 122){
        caseStr = (caseStr - 122) + 96;
      }
      
      return encodedMessage += String.fromCharCode(caseStr);
    }
    
    if(caseStr >= 65 && caseStr <= 90){
      caseStr+=13;
      
      if(caseStr > 90){
        caseStr = (caseStr - 90) + 64;
      }
      return encodedMessage += String.fromCharCode(caseStr);
    }
    
    return encodedMessage += val;
  });
  
  return encodedMessage;
}
