//https://www.codewars.com/kata/54f9f4d7c41722304e000bbb

//Find the first character that repeats in a String and return that character.

//firstDup('tweet') => 't'
//firstDup('like') => undefined
//This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

function firstDup (s) {
  let newStr = s.split('');
  
  for(let i = 0; i < newStr.length; i++){
    if(newStr.filter(x => x == newStr[i]).length > 1){
      return newStr[i];
    };
  };
  
  return;
};
