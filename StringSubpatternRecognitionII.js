//https://www.codewars.com/kata/5a4a391ad8e145cdee0000c4

//Similarly to the previous kata, you will need to return a boolean value if the base string can be expressed as the repetition of one subpattern.

//This time there are two small changes:

//if a subpattern has been used, it will be repeated at least twice, meaning the subpattern has to be shorter than the original string;
//the strings you will be given might or might not be created repeating a given subpattern, then shuffling the result.
//For example:

//hasSubpattern("a") === false; //no repeated shorter sub-pattern, just one character
//hasSubpattern("aaaa") === true; //just one character repeated
//hasSubpattern("abcd") === false; //no repetitions
//hasSubpattern("babababababababa") === true; //repeated "ba"
//hasSubpattern("bbabbaaabbaaaabb") === true; //same as above, just shuffled
//Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) 
//and can be pretty long (keep an eye on performances!).

function hasSubpattern(string){
  let newString = string.split('');
  let arr = [];
  let result = false;
  
  while(newString.length > 0){
    let char = newString.splice(0,1)[0];
    let tempArr = newString.filter(x => x !== char);
    let charCount = newString.length - tempArr.length + 1;
    if(!arr.includes(charCount)){
      arr.push(charCount)
    };
    newString = tempArr;
  };
  
  if(arr.length == 1 && arr[0] > 1){
    return true
  };
  
  arr.sort((a,b) => a - b);
  
  for(let i = arr[0]; i > 1; i--){
    let isPattern = true;
    for(let j = 0; j < arr.length; j++){
      if(arr[j] % i != 0){
        isPattern = false;
        break;
      };
    };
    if(isPattern){
      result = true
      break;
    };
  };
  
  return result;
};
