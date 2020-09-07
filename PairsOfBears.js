//https://www.codewars.com/kata/57d165ad95497ea150000020

//In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

//You must check within string (s) to find all of the mating pairs, and return a string containing only them. Line them up for inspection.

//Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

//Return an array containing a string of only the mating pairs available. e.g:

//'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

//and true if the number is more than or equal to x, false if not:

//(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

//x will always be a positive integer, and s will never be empty

function bears(x, s){
  let newS = s.split('');
  let pairCtr = 0;
  let pairs = '';
  
  for(let i = 0; i <= newS.length - 2; i++){
    let tryPair = newS[i] + newS[i + 1];
    if(tryPair == '8B'){
      pairs += '8B';
      pairCtr++;
      i++;
    };
    if(tryPair == 'B8'){
      pairs += 'B8';
      pairCtr++;
      i++;
    };
  };
  
  return pairs != '' ? [pairs, pairCtr >= x ? true : false] : ['', x == 0 ? true : false];
};
