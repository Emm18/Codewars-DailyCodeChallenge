//https://www.codewars.com/kata/5e9df3a0a758c80033cefca1

//Imagine if there were no order of operations. Instead, you would do the problem from left to right. For example, 
//he equation a +b *c /da+b∗c/d would become (((a+b)*c)//d)(((a+b)∗c)//d) (Math.floor(((a+b)*c)/d) in JS). Return 
//None/null (depending on your language) if the equation is "".

//Task:
//Given an equation with a random amount of spaces greater than or equal to zero between each number and operation, 
//return the result without order of operations. Note that if two numbers are spaces apart, act as if they were one 
//number: 1 3 = 13. However, if given something % 0 or something / 0, return None/null.

//More about order of operations: here

//Key:
//^ represents **
// / should always be rounded down because the result will always be an integer
//Operations allowed:
//+, -, * , /, ^, %

//Example:
//no_order(2 + 3 - 4 * 1 ^ 3) returns 1
//because:

//  2 + 3 - 4 * 1 ^ 3
//= 2 + 3 - 4 * 1 ^ 3
//= 5 - 4 * 1 ^ 3
//= 1 * 1 ^ 3
//= 1 ^ 3
//= 1

function noOrder(s) {
  let newStr = s.split(' ').join('').split('');
  let total;
  let operator = '';

  while(newStr.length > 0){
    let temp = newStr.splice(0,1)[0];
    
    if(parseInt(temp) >= 0){
      while(parseInt(newStr[0]) || parseInt(newStr[0]) == 0){
        temp += newStr.splice(0,1)[0];
      };
      
      if(total || total == 0){
        if(operator == '%' && temp == 0 || operator == '/' && temp == 0){
          total = null;
          break;
        };
        
        if(operator){
          if(operator == '+'){
            total += parseInt(temp);
          };
          
          if(operator == '-'){
            total = total - parseInt(temp);
          };
          
          if(operator == '*'){
            total = total * parseInt(temp);
          };
          
          if(operator == '/'){
            total = Math.floor(total/parseInt(temp));
          };
          
          if(operator == '^'){
            total = total ** parseInt(temp);
          };
          
          if(operator == '%'){
            total = total % parseInt(temp);
          };
          operator = '';
        };
      } else {
        total = parseInt(temp);
      };
    } else {
      operator = temp;
    };
  };
  
  return total;
};
