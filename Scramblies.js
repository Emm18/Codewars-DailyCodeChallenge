// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters 
//can be rearranged to match str2, otherwise returns false.

//Notes:

//Only lower case letters will be used (a-z). No punctuation or digits will be included.
//Performance needs to be considered
//Input strings s1 and s2 are null terminated.
//Examples
//scramble('rkqodlw', 'world') ==> True
//scramble('cedewaraaossoqqyt', 'codewars') ==> True
//scramble('katas', 'steak') ==> False


function scramble(str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("");
  let res = true;
  
  for(let i = 0; i <= str2.length -1; i++){
    let found1 = false;
    let ctr = 0;
    for(let j = 0 ; j <= str1.length - 1; j++){
      if(str2[i] == str1[j]){
        ctr += 1;
        if(!found1){
          found1=true;
          str1[j] = "";
        }
        break;
      } 
    }
    if(ctr == 0){
      res = false;
      break;
    }
  }
  
  return res;
}
