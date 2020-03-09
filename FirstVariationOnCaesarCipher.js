//https://www.codewars.com/kata/5508249a98b3234f420000fb

// The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places up or down the alphabet.

// This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).

// If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...

// Coding: Parameters and return of function "movingShift"
// param s: a string to be coded

// param shift: an integer giving the initial shift

// The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).

// If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.

// For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.

// You will also implement a "demovingShift" function with two parameters

// Decoding: parameters and return of function "demovingShift"
// 1) an array of strings: s (possibly resulting from "movingShift", with 5 strings)

// 2) an int shift

// "demovingShift" returns a string.

// Example:
// u = "I should have known that you would have a perfect answer for me!!!"

// movingShift(u, 1) returns :

// v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

// (quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)

// and demovingShift(v, 1) returns u.

// #Ref:

// Caesar Cipher : http://en.wikipedia.org/wiki/Caesar_cipher

function movingShift(s, shift) {
  let str = s.split("");
  
  for(let i = 0; i <= str.length-1; i++){
    if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90){
      let shifted = str[i].charCodeAt(0) + shift;
      while(shifted > 90){
        shifted = (shifted - 91) + 65;
      };
      str[i] = String.fromCharCode(shifted);     
    }   
    
    if(str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122){
      let shifted = str[i].charCodeAt(0) + shift;
      while(shifted > 122){
        shifted = (shifted - 123) + 97
      };
      str[i] = String.fromCharCode(shifted);     
    }
    shift++
  }
  
  let result = splitToFive(str.join(''));
  
  return result;
}


function demovingShift(arr, shift) {
  let str = arr.join('').split('');

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
      let shifted = str[i].charCodeAt(0) - shift;
      while (shifted < 65) {
        shifted = shifted + 26;
      };
      str[i] = String.fromCharCode(shifted);
    }

    if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
      let shifted = str[i].charCodeAt(0) - shift;
      while (shifted < 97) {
        shifted = shifted + 26;
      };
      str[i] = String.fromCharCode(shifted);
    }
    shift++
  }

  return str.join('')
}


function splitToFive(arr) {
  let newArr = arr.split('');
  let lengths = [0, 0, 0, 0, 0];
  let remainder = arr.length % 5;
  let result = [];
  
  for (let i = 0; i <= 4; i++) {
    lengths[i] = Math.floor(arr.length / 5);
  }
  
  if (remainder > 0) {
    let lastValue = lengths[lengths.length - 1] - (4 - remainder)
    lengths[lengths.length - 1] = lastValue;
    remainder = (4 - remainder) + remainder;
  }
  
  for (let i = 0; i <= remainder - 1; i++) {
    lengths[i] += 1;
  }
  
  for(let i = 0; i <= lengths.length - 1; i++){
    result.push(newArr.splice(0,lengths[i]).join(''));
  }
  
  return result
}
