//https://www.codewars.com/kata/59922ce23bfe2c10d7000057

//The President's phone is broken
//He is not very happy.

//The only letters still working are uppercase E, F, I, R, U, Y.

//An angry tweet is sent to the department responsible for presidential phone maintenance.

//Kata Task
//Decipher the tweet by looking for words with known meanings.

//FIRE = *"You are fired!"*
//FURY = *"I am furious."*
//If no known words are found, or unexpected letters are encountered, then it must be a *"Fake tweet."*

//Notes
//The tweet reads left-to-right.
//Any letters not spelling words FIRE or FURY are just ignored
//If multiple of the same words are found in a row then plural rules apply -
//FIRE x 1 = *"You are fired!"*
//FIRE x 2 = *"You and you are fired!"*
//FIRE x 3 = *"You and you and you are fired!"*
//etc...
//FURY x 1 = *"I am furious."*
//FURY x 2 = *"I am really furious."*
//FURY x 3 = *"I am really really furious."*
//etc...
//Examples
//ex1. FURYYYFIREYYFIRE = *"I am furious. You and you are fired!"*
//ex2. FIREYYFURYYFURYYFURRYFIRE = *"You are fired! I am really furious. You are fired!"*
//ex3. FYRYFIRUFIRUFURE = *"Fake tweet."*

var fireAndFury = function(tweet) {
  let newTweet = tweet.split('');
  let filteredTweet = [];
  let result = [];
  
  if(newTweet.filter(x => x != 'E' && x != 'F' && x != 'I' && x != 'R' && x != 'U' && x != 'Y').length > 0){
    return 'Fake tweet.';
  };
  
  for(let i = 0; i <= newTweet.length - 4;i++){
    let temp = newTweet.slice(i, i + 4).join('');
    if(temp == 'FIRE' || temp == 'FURY'){
      filteredTweet.push(temp);
    };
  };
  
  while(filteredTweet.length > 0){
    let temp = filteredTweet.splice(0,1)[0];
    let ctr = 0;
    while(temp == filteredTweet[0]){
      filteredTweet.splice(0,1);
      ctr++;
    };
    if(temp == 'FIRE'){
      result.push(decodeFire(ctr));
    } else {
      result.push(decodeFury(ctr));
    };
  };
  
  return result.length > 0 ? result.join(' ') : 'Fake tweet.';
};

function decodeFury(ctr){
  let result = 'I am'
   for(let i = 0; i < ctr; i++){
    result += ' really';
  };
  return result + ' furious.';
};

function decodeFire(ctr){
  let result = 'You';
  for(let i = 0; i < ctr; i++){
    result += ' and you';
  };
  return result + ' are fired!';
};
