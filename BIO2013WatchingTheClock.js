//https://www.codewars.com/kata/5a1ac2a0f72158e049000c46

//This problem is taken from the British Informatics Olympiad 2013 (31st of December 2012).

//Two clocks, which show the time in hours and minutes using the 24 hour clock, are running at different speeds. 
//Each clock is an exact number of minutes per hour fast. Both clocks start showing the same time (00:00) and are 
//checked regularly every hour (starting after one hour) according to an accurate timekeeper. What time will the 
//two clocks show on the first occasion when they are checked and show the same time?

//NB: For this question we only care about the clocks matching when they are checked.

//For example, suppose the first clock runs 1 minute fast (per hour) and the second clock runs 31 minutes fast (per hour).

//• When the clocks are first checked after one hour, the first clock will show 01:01 and the second clock will show 01:31;

//• When the clocks are checked after two hours, they will show 02:02 and 03:02;

//• After 48 hours the clocks will both show 00:48

//Write a function which takes in a two integers as parameters, indicating the number of minutes fast (per hour) of the first and second clock respectively.

//You should output the time shown on the clocks when they first match. Both the hour and the minutes should be displayed with two digits (24 hour format).

function timeAtSync(first, second){
  let isMatch = false;
  let t1 = first;
  let t2 = second;

  while(!isMatch){
    if(t1 == t2){
      isMatch = true;
      break;
    }
    t1 += 60 + first;
    t2 += 60 + second;
    
    if(t1 > 1440){
      t1 = t1 % 1440;
    };
  
    if(t2 > 1440){
      t2 = t2 % 1440;
    };
  };
  t1 += 60;
  t2 += 60;
  

  let getHour = Math.floor(t1/60);
  let getMinutes = t1 % 60;
  let hour = getHour < 10 ? '0' + getHour : getHour == 24 ? '00' : getHour;
  let minutes = getMinutes < 10 ? '0' + getMinutes : getMinutes == 60 ? '00' : getMinutes;
  
  return  hour + ':' + minutes;
};
