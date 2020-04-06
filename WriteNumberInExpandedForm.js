//https://www.codewars.com/kata/5842df8ccbd22792a4000245

//Write Number in Expanded Form
//You will be given a number and you will need to return it as a string in Expanded Form. For example:

//expandedForm(12); // Should return '10 + 2'
//expandedForm(42); // Should return '40 + 2'
//expandedForm(70304); // Should return '70000 + 300 + 4'
//NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let newNum = num.toString().split('');
  let result = [];
  
  while(newNum.length > 0){
    let temp = newNum.splice(0,1);
    if(temp != '0' && newNum.length > 0){
      result.push(`${temp}${addZeroes(newNum.length - 1)}`);
    } else if(temp != '0' && newNum.length == 0){
      result.push(`${temp}`);
    }
  }
  
  return result.join(' + ');
}

function addZeroes(ctr){
  let result = "0";
  
  for(let i = 0; i <= ctr - 1; i++){
    result += "0";
  }

  return result;
}
