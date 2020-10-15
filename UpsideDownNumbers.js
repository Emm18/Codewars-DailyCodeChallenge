//https://www.codewars.com/kata/59f7597716049833200001eb

//Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. To clarify, 
//if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

//Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 
//upside down numbers >= 0 and < 10. They are 0, 1, 8.

//More examples in the test cases.

//Good luck!

function solve(x, y) {
  let ctr = 0;
  
  for(let i = x; i < y; i++){
    if(turn(i)){
      ctr++;
    };
  };
  
  return ctr;
};

function turn(number){
  let newNumber = number.toString().split('');
  let turned = '';
  
  for(let i = newNumber.length - 1; i >= 0; i--){
    let temp = parseInt(newNumber[i]);
    if(temp == 1 || temp == 8 || temp == 0) {
      turned += temp;
    } else if(temp == 6){
      turned += '9';
    } else if(temp == 9){
      turned += '6'; 
    } else {
      break;
    };
  };
  
  return number == parseInt(turned) ? true : false;
};
