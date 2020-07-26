//https://www.codewars.com/kata/57be87d184972da58e0001e2

//They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #49:
//John and Anne's sweet date

//Story
//John and Anne are a pair of lovebirds. They have their own jobs. John works w1 days off for r1 day and Anne works w2 days off for r2 days. Only when they have a rest, they can go out for a sweet date. Please calculate, they can date how many days in a time period? For example:

//John works 3 days off for 1 day 
//Anne works 7 days off for 3 days
//In a time period 10 day
//John: work work work rest work work work rest work work
                                           |
//Anne: work work work work work work work rest rest rest
//They have only one sweet date in 10 days

//In a time period 1000 day
//John: work work work rest work work work rest work work ....
                                           |
//Anne: work work work work work work work rest rest rest ....
//They will have 100 times sweet date in 1000 days
//Task
//Complete function sweetDate() that accepts 5 arguments:

//w1,r1: The work days and rest days of John

//w2,r2: The work days and rest days of Anne

//timePeriod: A time period that we need to calculate the sweet date

//Return a number that How many times can Anne and John have a sweet date.

//Example
//sweetDate(3,1,7,3,10)  === 1

//sweetDate(3,1,7,3,20)  === 2

//sweetDate(4,2,7,3,20)  === 1

//sweetDate(4,2,7,3,30)  === 3

//sweetDate(3,1,7,3,1000)  === 100

function sweetDate(w1,r1,w2,r2,timePeriod){
  let datesCtr = 0;
  let jOffDays = [];
  let aOffDays = [];
  
  let jSched = w1;
  let aSched = w2;
  while(jSched < timePeriod || aSched < timePeriod){
    if(jSched < timePeriod){
      for(let i = jSched + 1; i <= jSched + r1 && i <= timePeriod; i++){
        jOffDays.push(i);
      };
      jSched += w1 + r1;
    };
    if(aSched < timePeriod){
      for(let i = aSched + 1; i <= aSched + r2 && i <= timePeriod; i++){
        aOffDays.push(i);
      };
      aSched += w2 + r2;
    };
  };

  return countSame(jOffDays, aOffDays);
};

function countSame(a1, a2){
  let ctr = 0;
  for(let i = 0; i <= a1.length - 1; i++){
    if(a2.includes(a1[i])){
      ctr++;
    };
  };
  return ctr;
};
