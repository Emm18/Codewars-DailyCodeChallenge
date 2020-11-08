//https://www.codewars.com/kata/525b4164eb636fb2f90002a0

//In numerology, every number has a certain meaning that expresses someones connection to the universe! 
//This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date. 
//Each time the sum >= 10, add up the 2 digits.
//For example, new Date('06/14/2010') = 5
//So, what is your number?

function solution(date){
  let newDate = '' + (date.getMonth() + 1) + date.getDate() + date.getFullYear();
  let ctr = 0;
      
  newDate.split('').map(x => {
      ctr += parseInt(x);
      if(ctr >= 10){
        let temp = ctr.toString().split('');
        ctr = parseInt(temp[0]) + parseInt(temp[1]);
      };
  });
  
  return ctr;
};
