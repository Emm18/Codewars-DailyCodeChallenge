//https://www.codewars.com/kata/550554fd08b86f84fe000a58

//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical 
//order of the strings of a1 which are substrings of strings of a2.

//#Example 1: a1 = ["arp", "live", "strong"]

//a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

//returns ["arp", "live", "strong"]

//#Example 2: a1 = ["tarp", "mice", "bull"]

//a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

//returns []

//Notes:
//Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

//In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

//Beware: r must be without duplicates.
//Don't mutate the inputs.

function inArray(array1,array2){
  let newArr1 = [];
  let newArr2 = [];
  let result = [];
  
  array1.map(str => {
    let temp = str.split('');
    temp.push(str);
    newArr1.push(temp);
  });
  
  array2.map(str => newArr2.push(str.split('')));
  
  for(let i = 0; i <= newArr1.length - 1; i++){
    let firstLetter = newArr1[i][0];
    let wordLength = newArr1[i].length - 1;
    
    newArr2.map((x) => {
      let temp = [];
      
      x.map((y, index) => {
        if(y == firstLetter){
          let word = newArr1[i][newArr1[i].length - 1].toLowerCase();
          
          if(x.slice(index, index + wordLength).join('').toLowerCase() == word){
            if(!result.includes(word)){
              result.push(word);
            };
          };
        };
      });
    });
  };
  
  return result.sort();
};
