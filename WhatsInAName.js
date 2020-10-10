//https://www.codewars.com/kata/59daf400beec9780a9000045

//What's in a name?
//..Or rather, what's a name in? For us, a particular string is where we are looking for a name.
//Task
//Test whether or not the string contains all of the letters which spell a given name, in order.

//The format
//A function passing two strings, searching for one (the name) within the other. ``function nameInStr(str, name){ return true || false }``
//Examples
//nameInStr("Across the rivers", "chris") --> true
//            ^      ^  ^^   ^
//            c      h  ri   s

//Contains all of the letters in "chris", in order.
//nameInStr("Next to a lake", "chris") --> false

//Contains none of the letters in "chris".
//nameInStr("Under a sea", "chris") --> false
//               ^   ^
//               r   s

//Contains only some of the letters in "chris".
//nameInStr("A crew that boards the ship", "chris") --> false
//             cr    h              s i
//             cr                h  s i  
//             c     h      r       s i
//             ...

//Contains all of the letters in "chris", but not in order.
//nameInStr("A live son", "Allison") --> false
//           ^ ^^   ^^^
//           A li   son

//Contains all of the correct letters in "Allison", in order, 
//but not enough of all of them (missing an 'l').
//Note: testing will not be case-sensitive.

function nameInStr(str, name){
  let newStr = str.toLowerCase().split('');
  let newName = name.toLowerCase().split('');
  let currentIndex = 0;
  let result = true;
  
  for(let i = 0; i <= newName.length - 1; i++){
    if(newStr.includes(newName[i]) && newStr.indexOf(newName[i], currentIndex) > -1){
      currentIndex = str.indexOf(newName[i], currentIndex) + 1;
    } else {
      result = false;
      break;
    };
  };
  
  return result;
};
