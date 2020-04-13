//https://www.codewars.com/kata/583203e6eb35d7980400002a

//Description:
//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//Rules for a smiling face:
//-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//-Every smiling face must have a smiling mouth that should be marked with either ) or D.
//No additional characters are allowed except for those mentioned.
//Valid smiley face examples:
//:) :D ;-D :~)
//Invalid smiley faces:
//;( :> :} :]

//Example cases:

//countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
//countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
//countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

//Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). 
//Order of the face (eyes, nose, mouth) elements will always be the same
//Happy coding!

function countSmileys(arr) {
  let smileyCtr = 0;
  
  arr.map(val => {
    let newVal = val.split('');
    if(newVal.length == 2){
      if((newVal[0] == ':' || newVal[0] == ';') && 
          (newVal[1] == ')' || newVal[1] == 'D')){
        smileyCtr++;
      }
    } else if(newVal.length == 3){
      if((newVal[0] == ':' || newVal[0] == ';') && 
          (newVal[1] == '-' || newVal[1] == '~') && 
            (newVal[2] == ')' || newVal[2] == 'D')){
        smileyCtr++;
      }
    }
    
  });
  
  return smileyCtr;
}
