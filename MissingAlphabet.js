//https://www.codewars.com/kata/5ad1e412cc2be1dbfb000016

//In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

//The function should insert only after the first occurrence of each character of the input string, all the alphabet letters that:

//-are NOT in the original string
//-come after the letter of the string you are processing

//Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

//Example:

//input: "holly"

//missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

//output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

//You don't need to validate input, the input string will always contain a certain amount of lowercase letters (min 1 / max 50).

function insertMissingLetters (str){
  let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let newStr = str.split('');
  let alreadyAdded = [];
  let result = "";
  
  newStr.map(s => {
    if(!alreadyAdded.includes(s)){
      let lettersToAdd = letters.slice(letters.indexOf(s) + 1,letters.length).filter(x => !newStr.includes(x));
      alreadyAdded.push(s); 
      result += s + lettersToAdd.join('').toUpperCase();
    } else {
      result += s;
    };
  });
  
  return result;
};
