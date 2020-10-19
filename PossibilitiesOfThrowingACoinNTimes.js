//https://www.codewars.com/kata/5ad6266b673f2f067b000004

//In this kata you will be given an integer n, which is the number of times that is thown a coin. 
//You will have to return an array of string for all the possibilities (heads[H] and tails[T]). Examples:

//coin(1) should return {"H", "T"}
//coin(2) should return {"HH", "HT", "TH", "TT"}
//coin(3) should return {"HHH", "HHT", "HTH", "HTT", "THH", "THT", "TTH", "TTT"}

//When finished sort them alphabetically.

//In C and C++ just return a char* with all elements separated by, (without space):
//coin(2) should return "HH,HT,TH,TT"

//INPUT:
//0 < n < 18

//Careful with performance!! You'll have to pass 3 basic test (n = 1, n = 2, n = 3), many medium tests (3 < n <= 10) and many large tests (10 < n < 18)

function coin(n) {
  let starting = createString('0', n);
  let totalPossibilities = Math.pow(2, n);
  let possibilities = [];  
  
  for(let i = 0; i < totalPossibilities; i++){
    let current = starting.split('');
    let possibility = '';
    
    for(let j = 0; j <= current.length - 1; j++){
      possibility += parseInt(current[j]) == 0 ? 'H' : 'T'; 
    };
    
    possibilities.push(possibility);
    
    let next = (parseInt(starting,2) + 1).toString(2);
    starting = createString('0',n).substr(next.length) + next;
  };
  
  return possibilities.sort();
};

function createString(str, ctr){
  let result = '';
  for(let i = 0; i < ctr; i++){
    result += str;
  };
  return result;
};
