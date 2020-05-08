//https://www.codewars.com/kata/5800b6568f7ddad2c10000ae

//Task
//Given a positive integer as input, return the output as a string in the following format:

//Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a 
//way that with the sum of these elements you can obtain the original number.

//Examples
//Input	Output
//0	""
//56	"5*10+6"
//60	"6*10"
//999	"9*100+9*10+9"
//10004	"1*10000+4"
//Note: input >= 0

function simplify(number){
  let newNum = number.toString().split('');
  let result = '';
  
  while(newNum.length > 0){
    let temp = newNum.splice(0,1)[0];
    
    if(temp > 0){
      if(newNum.length > 0){
        result += temp + "*1" + zeroes(newNum.length) + "+";
      } else {
        if(temp > 0){
          result += temp + "+";
        };
      };
    };
  };
  
  if(result[result.length - 1] == '+'){
    result = result.split('');
    result[result.length - 1] = '';
    result = result.join('');
  };
  
  return result;
};

const zeroes = (ctr)=>{
  let z = '';
  
  for(let i = 1; i <= ctr;i++){
    z += '0';
  };
  
  return z;
};
