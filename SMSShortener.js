//https://www.codewars.com/kata/535a69fb36973f2aad000953

//SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. 
//Your task is to shorten the message to 160 characters, starting from end, by replacing spaces with camelCase, as much as necessary.

//For example:

//Original message (169 chars):

//No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.

//Shortened message (160 chars):

//No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.

var shortener = function(message) {
  let newMessage = message.split('');
  
  while(newMessage.length > 160 && newMessage.includes(' ')){
    let i = newMessage.lastIndexOf(' ');
    newMessage[i + 1] = newMessage[i + 1].toUpperCase();
    newMessage.splice(i, 1);
  };
  
  return newMessage.join('');
};
