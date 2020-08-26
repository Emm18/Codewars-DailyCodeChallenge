//https://www.codewars.com/kata/5a959662373c2e761d000183

//While using public transport we could see simple displays with a ticker. It often provides information about next stations and expected arrival time.

//Let's implement a function which will return a chunk of text to be displayed on a display of fixed width. The function should take text to display, 
//width of the display and tick as a step of the ticker. The function will be called many times with tick parameter constantly incrementing.

//At very beginning the display is empty. At first step only one character should be displayed in the most right position and so on. When the message 
//is displayed, it should be dissapear char by char to left position and return to blank state of the display. After that cycle should start again.

//For example

//ticker('Hello world!', 10, 4)   // '      Hell'
//We could expect that our function will be called from simple script like this one

//const demo = (text, width) => {
//  let tick = 0;
//  setInterval(_ => {
//    someDisplayFunction(ticker(text, width, tick));
//    tick++ 
//  }, 100);
//}

const ticker = (text, width, tick) => {
  let newText = (createSpace(width) + text).split('');
  let newTick = tick;
  
  while(newTick > newText.length){
    newTick = newTick - newText.length;
  };
  
  let result = newText.splice(newTick, width).join('');
  return result.length > width ? result : result + createSpace(width - result.length);
}
  
const createSpace = (s) => {
  let result = '';
  for(let i = 0; i < s; i++){
    result += ' ';
  };
  return result;
};
