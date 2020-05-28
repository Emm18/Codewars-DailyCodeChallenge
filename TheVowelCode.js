//https://www.codewars.com/kata/53697be005f803751e0015aa

//Step 1: Create a function called encode() to replace all the lowercase vowels in a given string 
//with numbers according to the following pattern:

//a -> 1
//e -> 2
//i -> 3
//o -> 4
//u -> 5
//For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

//Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

//For example, decode("h3 th2r2") would return "hi there".

//For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
  let newStr = string.split('');
  let encoded = '';
  
  newStr.map(x => {
    if(x == 'a'){
      encoded += '1';
    } else if(x == 'e'){
      encoded += '2';
    } else if(x == 'i'){
      encoded += '3';
    } else if(x == 'o'){
      encoded += '4';
    } else if(x == 'u'){
      encoded += '5';
    } else {
      encoded += x;
    };
  });
  
  return encoded;
};

function decode(string) {
  let newStr = string.split('');
  let decoded = '';
  
  newStr.map(x => {
    if(x == '1'){
      decoded += 'a';
    } else if(x == '2'){
      decoded += 'e';
    } else if(x == '3'){
      decoded += 'i';
    } else if(x == '4'){
      decoded += 'o';
    } else if(x == '5'){
      decoded += 'u';
    } else {
      decoded += x;
    };
  });

  return decoded;
};
