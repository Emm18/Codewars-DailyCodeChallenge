//https://www.codewars.com/kata/56b5dc75d362eac53d000bc8

//Here you have to do some mathematical operations on a "dirty string". 
//This kata checks some basics, it's not too difficult.

//So what to do?

//Input: String which consists of two positive numbers (doubles) and exactly one operator 
//like +,-,*,/, always between these numbers. The string is dirty, which means that there 
//are different characters inside too, not only numbers and the operator. You have to combine 
//all digits left and right, perhaps with "." inside (doubles) and to calculate the result 
//which has to be rounded to an integer and converted to a string at the end.

//Easy example:

//Input: "gdfgdf234dg54gf*23oP42"
//Output: "54929268" (because 23454*2342=54929268)
//First there are some static tests, later on random tests too...

//Hope you have fun:-)!

function calculateString(st){
  let newStr = st.split('');
  let firstNum = '';
  let secondNum = '';
  let operator;
  let result;
  
  while(newStr.length > 0){
    let temp = newStr.splice(0,1)[0];
    if(operator){
      if(parseFloat(temp) || parseFloat(temp) == 0 || temp == '.'){
        secondNum += temp;
      };
    } else {
      if(parseFloat(temp) || parseFloat(temp) == 0 || temp == '.'){
        firstNum += temp;
      } else if(temp == '+' || temp == '-' || temp == '*' || temp == '/'){
        operator = temp;
      };
    };
  };
  
  if(operator == '+'){
    result = parseFloat(firstNum) + parseFloat(secondNum);
  } else if(operator == '-'){
    result =  parseFloat(firstNum) - parseFloat(secondNum);
  } else if(operator == '*'){
    result =  parseFloat(firstNum) * parseFloat(secondNum);
  } else if(operator == '/'){
    result =  parseFloat(firstNum) / parseFloat(secondNum);
  };
  
  let temp = result.toString().split('.');
  if(temp.length > 1){
    if(temp[1][0] > 4){
      if(result < 0){
        result = result - 1;
      } else {
        result = result + 1;
      };
    };
  };
  
  return parseInt(result).toString();
};
