//https://www.codewars.com/kata/5375f921003bf62192000746

//The word i18n is a common abbreviation of internationalization in the developer community, 
//used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an 
//abbreviation of accessibility.

//Write a function that takes a string and turns any and all "words" (see below) within that string of 
//length 4 or greater into an abbreviation, following these rules:

//A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or 
//hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
//The abbreviated version of the word should have the first letter, then the number of removed characters, then 
//the last letter (eg. "elephant ride" => "e6t r2e").
//Example
//abbreviate("elephant-rides are really fun!")
////          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
//// words (^):   "elephant" "rides" "are" "really" "fun"
////                123456     123     1     1234     1
//// ignore short words:               X              X

//// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
//// all non-word characters (*) remain in place
////                     "-"      " "    " "     " "     "!"
//=== "e6t-r3s are r4y fun!"

function abbreviate(string) {
  let newStr = string.split('');
  let sentence = [];
  let result = [];
  let tempWord = '';
  let tempNonWord = '';
  
  for(let i = 0; i <= newStr.length - 1; i++){  
    if(newStr[i].toUpperCase().charCodeAt(0) < 65 || newStr[i].toUpperCase().charCodeAt(0) > 90){
      if(tempWord){
        sentence.push([tempWord, 1]);
      }
      tempWord = '';
      tempNonWord += newStr[i];
    } else {
      if(tempNonWord){
        sentence.push([tempNonWord, 0]);
      }
      tempNonWord = '';
      tempWord += newStr[i];
    }
    
    if(i == newStr.length - 1){
      sentence.push([tempWord, 1]);
    }
  }
  
  for(let i = 0; i <= sentence.length - 1; i++){
    let str = sentence[i][0].split('');
    
    if(str.length > 3 && sentence[i][1] == 1){
      let firstLetter = str.splice(0,1)[0];
      let lastLetter = str.splice(str.length - 1, 1)[0];
      let ctr = str.length;
      
      result.push(firstLetter + ctr + lastLetter);
    } else {
      result.push(sentence[i][0]);
    }
  }
  
  return result.join('');
}
