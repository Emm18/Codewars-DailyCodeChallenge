//https://www.codewars.com/kata/5dfa33aacec189000f25e9a9

//One is the loneliest number
//Task
//The range of vision of a digit is its own value. 1 can see one digit to 
//the left and one digit to the right,2 can see two digits, and so on.

//Thus, the loneliness of a digit N is the sum of the digits which it can see.

//Given a non-negative integer, your funtion must determine if there's at least 
//one digit 1 in this integer such that its loneliness value is minimal.

//Example
//number = 34315
//digit	  can see on the left	      can see on the right	      loneliness
//3	      -	                        431	                        4 + 3 + 1 = 8
//4	      3	                        315	                        3 + 3 + 1 + 5 = 12
//3	      34	                      15	                        3 + 4 + 1 + 5 = 13
//1	      3	                        5	                          3 + 5 = 8
//5	      3431	                    -	                          3 + 4 + 3 + 1 = 11
//Is there a 1 for which the loneliness is minimal? Yes.

function loneliest(number) {
  let newNumber = number.toString().split('');
  let ones = [];
  let values = [];
  let result = false;
  
  for(let i = 0; i <= newNumber.length - 1; i++){
    let maxCtr = parseInt(newNumber[i]);
    let leftCtr = 0;
    let rightCtr = 0;
    
    for(let j = 1; j <= maxCtr; j++){
      if(newNumber[i-j]){
        leftCtr += parseInt(newNumber[i - j]);
      };
      if(newNumber[i+j]){
        rightCtr += parseInt(newNumber[i + j]);
      };
    };
    
    values.push([parseInt(newNumber[i]), leftCtr + rightCtr]);
  };
  
  values = values.sort((a, b)=> a[1] - b[1]);
  ones = values.filter(x => x[0] == 1);
  
  ones.map(val => {
    if(val[1] == values[0][1]){
      result = true;
    };
  });
  
  return result;
};
