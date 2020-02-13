//https://www.codewars.com/kata/52449b062fb80683ec000024

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
  let newStr = str.split(" ");
  let result= [];  
  
  for(let i=0;i<=newStr.length - 1;i++){
    let s = newStr[i].split("");
    if(s[0]){
      s[0] = s[0].toUpperCase();
    }
    s = s.join("");
    result.push(s);
  }
  result = result.join("");

  if(result == "" || result.length >= 140){
    result = false
  }else {
    result = "#" + result
  }

return result; 
}
