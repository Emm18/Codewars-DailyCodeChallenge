//https://www.codewars.com/kata/5bab83fffe6c0c52b8000172

//You are given two strings s and t. Both strings have length n and consist of lowercase Latin letters.

//You can successively perform the following move any number of times (possibly, zero):

//swap any two adjacent (neighboring) characters of s (i.e. for any i={0,1,2,…,n−2} you can swap si and si+1).
//Input:
//Strings s and t, which consisting of n(1 ≤ n ≤ 1000) lowercase Latin letters.

//Output:
//The minimum number of moves to transform s to t. If it is impossible to obtain the string t using moves, return -1.

//Examples:

//('abcdef', 'abdfec') => 4
//('abcd', 'accd') => -1
//('ab', 'ab') => 0
//('ab', 'ba') => 1
//('aaa', 'aaa') => 0
//Note:
//In the first example the string s changes as follows: "abcdef" → "abdcef" → "abdcfe" → "abdfce" → "abdfec".

function obtain(s, t) {
  if(s.split('').sort().join('') != t.split('').sort().join('')){
    return -1;
  };
  
  if(s == t){
    return 0;
  };
  
  let newS = s.split('');
  let newT = t.split('');
  let ctr = 0;
  
  while(newS.length > 0){
    let temp1 = newT.splice(0,1)[0];
    let index = newS.indexOf(temp1);
    newS.splice(index, 1);
    ctr += index;
  };

  return ctr;
};
