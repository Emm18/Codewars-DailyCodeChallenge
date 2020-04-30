//https://www.codewars.com/kata/586538146b56991861000293

//The idea for this Kata came from 9gag today.here

//You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

//Like this:

//** Input: ** If you can read

//** Output: ** India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

//** Some notes **

//Keep the punctuation, and remove the spaces.
//Use Xray without dash or space.

function to_nato(words) {
  let nato = ['Alfa', 'Bravo', 'Charlie', 
              'Delta', 'Echo', 'Foxtrot', 
              'Golf', 'Hotel', 'India', 
              'Juliett', 'Kilo', 'Lima', 
              'Mike', 'November', 'Oscar', 
              'Papa', 'Quebec', 'Romeo', 
              'Sierra', 'Tango', 'Uniform', 
              'Victor', 'Whiskey', 'Xray', 
              'Yankee', 'Zulu'];
  let newWords = words.split('');      
  let result = [];
  
  newWords.map(str => {
    if(str.toUpperCase().charCodeAt(0) >= 65 && str.toUpperCase().charCodeAt(0) <= 90){
      result.push(nato[str.toUpperCase().charCodeAt(0) - 65])
    } else {
      if(str != ' '){
        result.push(str);
      }
    }
  });
  
  return result.join(' ');
};
