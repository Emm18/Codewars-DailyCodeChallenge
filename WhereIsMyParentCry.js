//https://www.codewars.com/kata/58539230879867a8cd00011c

//Mothers arranged a dance party for the children in school. At that party, there are only 
//mothers and their children. All are having great fun on the dance floor when suddenly all the 
//lights went out. It's a dark night and no one can see each other. But you were flying nearby 
//and you can see in the dark and have ability to teleport people anywhere you want.

//Legend:
//-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
//-Function input: String contains only letters, uppercase letters are unique.
//Task:
//Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

function findChildren(dancingBrigade){
  let newArr = dancingBrigade.split('');
  let mothers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let result = "";
  for(let i = 0; i <= mothers.length - 1; i++){
    if(newArr.includes(mothers[i])){
      newArr = newArr.filter(x => x != mothers[i]);
      let temp = newArr.filter(x => x != mothers[i].toLowerCase());
      result += mothers[i] + createChildrens(mothers[i].toLowerCase(), newArr.length - temp.length);
      newArr = temp;
    };
  };
  
  return result;
};

function createChildrens(str, n){
  let result = "";
  for(let i = 0; i < n; i++){
    result += str;
  };
  return result;
};
