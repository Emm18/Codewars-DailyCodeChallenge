//https://www.codewars.com/kata/5e0f6a3a2964c800238ca87d

//Task
//You will receive a string consisting of lowercase letters, uppercase letters and digits as input. 
//Your task is to return this string as blocks separated by dashes ("-"). The elements of a block 
//should be sorted with respect to the hierarchy listed below, and each block cannot contain multiple 
//instances of the same character. Elements should be put into the first suitable block.

//The hierarchy is:

//lowercase letters (a - z), in alphabetical order
//uppercase letters (A - Z), in alphabetical order
//digits (0 - 9), in ascending order
//Examples
//"21AxBz" -> "xzAB12" - since input does not contain repeating characters, you only need 1 block
//"abacad" -> "abcd-a-a" - character "a" repeats 3 times, thus 3 blocks are needed
//"" -> "" - an empty input should result in an empty output
//Good luck!

function blocks(s) {
  let newStr = s.split('')
  let blocks = {};
  let result = [];
  
  for(let i = 0; i < 26; i++){
    let letter = String.fromCharCode(i + 97);
    let ctr = newStr.filter(x => x == letter).length;
    
    for(let j = 0; j < ctr; j++){
      if(blocks[j]){
        blocks[j] = blocks[j] + letter;
      } else {
        blocks[j] = letter;
      };
    };
  };
 
  for(let i = 0; i < 26; i++){
    let letter = String.fromCharCode(i + 65);
    let ctr = newStr.filter(x => x == letter).length;
    
    for(let j = 0; j < ctr; j++){
      if(blocks[j]){
        blocks[j] = blocks[j] + letter;
      } else {
        blocks[j] = letter;
      };
    };
  };

  for(let i = 0; i <= 9; i++){
    let ctr = newStr.filter(x => x == i).length;
    
    for(let j = 0; j < ctr; j++){
      if(blocks[j]){
        blocks[j] = blocks[j] + i.toString();
      } else {
        blocks[j] = i.toString();
      };
    };
  };
  
  for(let o in blocks){
    result.push(blocks[o]);
  };
     
  return result.join('-');
};
