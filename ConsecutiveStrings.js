//https://www.codewars.com/kata/56a5d994ac971f1ac500003e

//You are given an array(list) strarr of strings and an integer k. Your task is to return the 
//first longest string consisting of k consecutive strings taken in the array.

//Example:
//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

//n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

//Note
//consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
  let combined = [];
  
  if(k < 0 || strarr.length < k){
    return '';
  };
  
  for(let i = 0; i <= strarr.length - 1; i++){
    let temp = strarr.slice(i,k).join('');
    combined.push([i,temp.length, temp]);
    k++;
  };
  
  let highest = combined.sort((a, b) => b[1] - a[1])[0][1];
  
  return combined.filter(x => x[1] == highest).sort((a, b) => a[0] - b[0])[0][2];
};
