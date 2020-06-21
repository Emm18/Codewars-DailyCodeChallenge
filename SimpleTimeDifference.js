//https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2

//In this Kata, you will be given a series of times at which an alarm goes off. 
//Your task will be to determine the maximum time interval between alarms. Each 
//alarm starts ringing at the beginning of the corresponding minute and rings for 
//exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

//For example:
//solve(["14:51"]) = "23:59". If the alarm goes off now, it will not go off for another 23 hours and 59 minutes.
//solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not go off is 11 hours and 40 minutes.
//In the second example, the alarm goes off 4 times in a day.

//More examples in test cases. Good luck!

function solve(arr){
  let totalHours = [];
  let gapTime = [];
  
  arr = arr.sort();  
  arr.map(x => {
    let temp = x.split(':');
    totalHours.push((parseInt(temp[0]) * 60) + parseInt(temp[1]));
  });
  
  for(let i = 0; i <= totalHours.length - 1; i++){
    if(i == totalHours.length - 1){
      gapTime.push((((24 * 60) - totalHours[i]) + totalHours[0]) - 1);
    } else {
      gapTime.push((totalHours[i + 1] - totalHours[i]) - 1);
    };
  };
  
  gapTime = gapTime.sort((a,b) => a - b);
  
  let hour = Math.floor(gapTime[gapTime.length - 1] / 60);
  let minutes = gapTime[gapTime.length - 1] % 60;
  
  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  
  return `${hour}:${minutes}`;
};
