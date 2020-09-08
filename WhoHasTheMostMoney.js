//https://www.codewars.com/kata/528d36d7cc451cd7e4000339

//You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

//class Student {
//  constructor(name, fives, tens, twenties) {
//    this.name = name;
//    this.fives = fives;
//    this.tens = tens;
//    this.twenties = twenties;
//  }
//}
//As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. 
//If every student has the same amount, then return "all".

//Notes:

//Each student will have a unique name
//There will always be a clear winner: either one person has the most, or everyone has the same amount
//If there is only one student, then that student has the most money

function mostMoney(students) {
  let highest;
  let moneyCounts = [];
  
  students.map(std => {
    let totalMoney = 0;
    
    for(let s in std){
      if(s == 'fives'){
        totalMoney += std[s] * 5;
      };
      if(s == 'tens'){
        totalMoney += std[s] * 10;
      };
      if(s == 'twenties'){
        totalMoney += std[s] * 20;
      };
    };
    moneyCounts.push(totalMoney);
    if(!highest || highest.totalMoney < totalMoney){
      highest = { std, totalMoney };
    };
  });
  
  if(moneyCounts.filter(ctr => ctr == highest.totalMoney).length == students.length && students.length > 1){
    return 'all';
  };
  
  return highest.std.name;
};
