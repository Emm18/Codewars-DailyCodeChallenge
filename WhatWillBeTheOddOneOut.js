//https://www.codewars.com/kata/55b080eabb080cd6f8000035

//Complete the function that takes a string as an input, and return a list of all the unpaired characters 
//(i.e. they show up an odd number of times in the string), in the order they were encountered as an array.

//In case of multiple appearances to choose from, take the last occurence of the unpaired character.

//Notes:

//A wide range of characters is used, and some of them may not render properly in your browser.
//Your solution should be linear in terms of string length to pass the last test.
//Examples
//"Hello World"   -->  ["H", "e", " ", "W", "r", "l", "d"]
//"Codewars"      -->  ["C", "o", "d", "e", "w", "a", "r", "s"]
//"woowee"        -->  []
//"wwoooowweeee"  -->  []
//"racecar"       -->  ["e"]
//"Mamma"         -->  ["M"]
//"Mama"          -->  ["M", "m"]

function oddOneOut(str) {
  let newStr = str.split('');
  let obj = {};
  let temp = [];
  let result = [];
  
  for(let i = 0; i <= str.length - 1; i++){
    if(obj[newStr[i]]){
      obj[newStr[i]] = {ctr:obj[newStr[i]].ctr + 1 , index: i};
    } else {
      obj[newStr[i]] = {ctr: 1, index: i};  
    };
  };
  
  for(const val in obj){
     if(obj[val].ctr % 2 == 1){
      temp.push([val, obj[val].index])
    };
  };
  
  temp.sort((a,b) => a[1] - b[1]).map(x => result.push(x[0]));
  
  return result;  
};
