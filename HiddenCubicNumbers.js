//https://www.codewars.com/kata/55031bba8cba40ada90011c4

//We search non-negative integer numbers, with at most 3 digits, such as the sum of the cubes of their digits is the number itself; we will call them "cubic" numbers.

//153 is such a "cubic" number : 1^3 + 5^3 + 3^3 = 153
//These "cubic" numbers of at most 3 digits are easy to find, even by hand, so they are "hidden" with other numbers and characters in a string.

//The task is to find, or not, the "cubic" numbers in the string and then to make the sum of these "cubic" numbers found in the string, if any, and to return a string such as:

//"number1 number2 (and so on if necessary) sumOfCubicNumbers Lucky" 
//if "cubic" numbers number1, number2, ... were found. The numbers in the output are to be in the order in which they are encountered in the input string.

//If no cubic numbers are found return the string:

//"Unlucky".
//Examples:

// s = "aqdf& 0 1 xyz 153 777.777" must return "0 1 153 154 Lucky"

// s = "QK29 45[&erui" must return "Unlucky".
//Note: In the string "001234" where 3 digits or more follow each other the first packet to examine is "001" and the following is "234". If a packet 
//of at most three digits has been taken, whether or not "cubic", it's over for that packet.

//When a continuous string of digits exceeds 3, the string is split into groups of 3 from the left. The last grouping could have 3, 2 or 1 digits. 
//e.g "24172410" becomes 3 strings comprising "241", "724" and "10" e.g "0785" becomes 2 strings comprising "078" and "5".

function isSumOfCubes(s){
  let newS = s.split('');
  let numbers = [];
  let cubic = [];
  let currentNumber = '';
  
  while(newS.length > 0){
    let temp = newS.splice(0, 1)[0];
    if((currentNumber == '' && parseInt(temp) >= 0) || parseInt(temp) >= 0 ){
      currentNumber += temp;
    } else if(currentNumber != ''){
      numbers.push(currentNumber);
      currentNumber = '';
    };
  };
  numbers.push(currentNumber);
  
  numbers.map(num => {
    let temp = num.split('');
    while(temp.length > 0){
      let x = temp.splice(0,3);
      if(cubicCheck(x)){
        cubic.push(parseInt(x.join('')));
      };
    };
  });
  
  
  return cubic.length > 0 ? cubic.join(' ') + ' ' + cubic.reduce((a,b) => a + b,0) + ' Lucky' : 'Unlucky';
};

const cubicCheck = (num) => {
  let total = parseInt(num.join(''));
  let compute = 0;
  num.map(x => compute += x*x*x);
  return total == compute ? true : false;
};
