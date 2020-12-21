//https://www.codewars.com/kata/5aaae0f5fd8c069e8c00016e

//Given an array of words and a target compound word, your objective is to find the two words which combine into the target word, 
//returning both words in the order they appear in the array, and their respective indices in the order they combine to form the target word. 
//Words in the array you are given may repeat, but there will only be one unique pair that makes the target compound word. If there is no match found, return null/nil/None.

//Note: Some arrays will be very long and may include duplicates, so keep an eye on efficiency.

//Examples:

//fn(['super','bow','bowl','tar','get','book','let'], "superbowl")      =>   ['super','bowl',   [0,2]]
//fn(['bow','crystal','organic','ally','rain','line'], "crystalline")   =>   ['crystal','line', [1,5]]
//fn(['bow','crystal','organic','ally','rain','line'], "rainbow")       =>   ['bow','rain',     [4,0]]
//fn(['bow','crystal','organic','ally','rain','line'], "organically")   =>   ['organic','ally', [2,3]]
//fn(['top','main','tree','ally','fin','line'], "mainline")             =>   ['main','line',    [1,5]]
//fn(['top','main','tree','ally','fin','line'], "treetop")              =>   ['top','tree',     [2,0]]

function compoundMatch(words, target) {
  let newTarget = target.split('');
  
  for(let i = 1; i <= newTarget.length - 1; i++){
    let first = newTarget.slice(0, i).join('');
    let second = newTarget.slice(i, newTarget.length).join('');
    
    if(words.includes(first) && words.includes(second)){
      let fI = words.indexOf(first);
      let sI = words.indexOf(second);
      return fI < sI ? [first, second, [fI, sI]] : [second, first, [fI, sI]];
    };
  };
  
  return null;
};
