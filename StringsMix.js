//https://www.codewars.com/kata/5629db57620258aa9d000014

// Given two strings s1 and s2, we want to visualize how different the two strings are. 
// We will only take into account the lowercase letters (a to z). First let us count the frequency 
// of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following 
// we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa 
// stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 
// and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its 
// maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string 
// where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in 
// decreasing order of their length and when they have the same length sorted in ascending lexicographic order 
// (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. 
// See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
// Note for Swift, R, PowerShell
// The prefix =: is replaced by E:

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"

function mix(s1, s2) {
  let string1;
  let string1count = [];
  let string2;
  let string2count = [];
  let string1and2=[];
  
  //remove non lower case
  string1 = s1.split("").filter(x => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122).sort();
  string2 = s2.split("").filter(x => x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122).sort();
  
  
  //count all the letters 
  for(let i = 97;i <= 122;i++){
    let str1 ="";
    for(let a = 0; a <= string1.filter(x => x.charCodeAt(0) == i).length - 1; a++){
      str1 += String.fromCharCode(i);
    }
    string1count.push([1, str1, String.fromCharCode(i)]);
    let str2 = "";
    for(let a = 0; a <= string2.filter(x => x.charCodeAt(0) == i).length - 1; a++){
      str2 += String.fromCharCode(i);
    }
    string2count.push([2, str2, String.fromCharCode(i)]);
  }
  
  //get all lengths > 1 and change if 1/2/"="
  for(let i = 0;i <= 25; i++){
    let s1 = string1count[i];
    let s2 = string2count[i];
    if(s1[1].length > 1 || s2[1].length > 1){
      if(s1[1].length > s2[1].length){
        string1and2.push(s1);
      } else if(s1[1].length < s2[1].length){
        string1and2.push(s2);
      } else{
        string1and2.push(["=",s1[1],s1[2]]);
      }
    }
  }
  
  //sort to get the highestLength to iterate to
  string1and2 = string1and2.sort((a, b) => b[1].length - a[1].length)
   
  //setting the highestLength
  let highestLengths;
  if(string1and2[0]){
      highestLengths = string1and2[0][1].length
  } else {
    highestLengths = 0;
  }
  
  
  let result=[]; //hold the result array
  let res =""; //hold the result
  for(let i = highestLengths; 0 <= i; i --){
  let sameLengths = [];
  let orderByNum = [];
  let orderByLetter = [];
    for(let j = 0; j <= string1and2.length - 1; j++){
      //get all same lengths
      if(string1and2[j][1].length == i){
        sameLengths.push(string1and2[j]);
      }
    }
    //get all 1 then sort
    orderByNum = sameLengths.filter(x => x[0] == 1 && x[1].length == i);
    orderByNum.sort((a, b) => a[2].charCodeAt(0) - b[2].charCodeAt(0))
    orderByNum.map(x => result.push(x));
    
    //get all 2 then sort
    orderByNum = sameLengths.filter(x => x[0] == 2  && x[1].length == i);
    orderByNum.sort((a, b) => a[2].charCodeAt(0) - b[2].charCodeAt(0))
    orderByNum.map(x => result.push(x));
    
    //get all "=" then sort
    orderByNum = sameLengths.filter(x => x[0] == "="  && x[1].length == i);
    orderByNum.sort((a, b) => a[2].charCodeAt(0) - b[2].charCodeAt(0))
    orderByNum.map(x => result.push(x));
  }
  
 
    //converting from array to answer
    for(let i = 0; i <= result.length - 1; i++){
      res += result[i][0] + ":" + result[i][1] + "/"
    }
    //removing the last "/"
    let temp = res.split("");
    temp[temp.length-1] = "";
    res = temp.join("");
    
  return  res;
}
