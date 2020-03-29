//https://www.codewars.com/kata/57814d79a56c88e3e0000786

//For building the encrypted string:
//Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
//Do this n times!

//Examples:

//"This is a test!", 1 -> "hsi  etTi sats!"
//"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
//Write two methods:

//function encrypt(text, n)
//function decrypt(encryptedText, n)
//For both methods:
//If the input-string is null or empty return exactly this value!
//If n is <= 0 then return the input text.

function encrypt(text, n) {
  if(!text){
    return text;
  }
  
  for(let i = 0; i < n; i++){
    let odd = '';
    let even = '';
    text = text.split('');
    text.map((str, index) => index % 2 == 0 ? even += str : odd += str );
    text = odd + even;
  }
  
  return text;
}

function decrypt(encryptedText, n) {
  if(!encryptedText){
    return encryptedText;
  }

  encryptedText = encryptedText.split('');
  let length = encryptedText.length;
  let odd = encryptedText.splice(0,length / 2);
  let even = encryptedText;
  
  for(let i = 0; i < n; i++){
    let decrypted = [];
    for(let j = 0; j <= length; j++){
      if(j % 2 == 0){
        decrypted.push(even.splice(0,1));
      } else {
        decrypted.push(odd.splice(0,1));
      }
    }
    odd = decrypted.splice(0,Math.floor(length / 2));
    even = decrypted;
  }
  
  return odd.join('') + even.join('');
}
