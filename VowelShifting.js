//https://www.codewars.com/kata/577e277c9fb2a5511c00001d

//You get a "text" and have to shift the vowels by "n" positions to the right.
//(Negative value for n should shift to the left.)
//"Position" means the vowel's position if taken as one item in a list of all vowels within the string.
//A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

//Shifting over the edges of the text should continue at the other edge.

//Example:

//text = "This is a test!"
//n = 1
//output = "Thes is i tast!"

//text = "This is a test!"
//n = 3
//output = "This as e tist!"

//If text is null or empty return exactly this value.
//Vowels are "a,e,i,o,u".

function vowelShift(text, n) {
  if(!text){
    return text;
  };
  
  let vowels = ['a','e','i','o','u'];
  let newText = text.split('');
  let justVowels = newText.filter(x => vowels.includes(x.toLowerCase()));
  let newN = n % justVowels.length;
  
  for(let i = newN < 0 ? newN * -1 : newN; i > 0; i--){
      if(newN < 0){
        let toMove = justVowels.splice(0,1)[0];
        justVowels.push(toMove);
      } else {
        let toMove = justVowels.splice(justVowels.length - 1,1)[0];
        justVowels = [toMove, ...justVowels];
      };
  };
  
  for(let i = 0; i <= newText.length - 1; i++){
    if(vowels.includes(newText[i].toLowerCase())){
      newText[i] = justVowels.splice(0,1)[0];
    };
  };
  
  return newText.join('');
};
