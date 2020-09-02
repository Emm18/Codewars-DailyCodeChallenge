//https://www.codewars.com/kata/5c2b4182ac111c05cf388858

//Given time in 24-hour format, convert it to words.

//For example:
//13:00 = one o'clock 
//13:09 = nine minutes past one 
//13:15 = quarter past one 
//13:29 = twenty nine minutes past one
//13:30 = half past one 
//13:31 = twenty nine minutes to two
//13:45 = quarter to two 
//00:48 = twelve minutes to one
//00:08 = eight minutes past midnight
//12:00 = twelve o'clock
//00:00 = midnight

//Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'. 
//More examples in test cases. Good luck!

function solve(time) {
  let strTime = ["one","two","three","four","five",
                 "six","seven","eight","nine","ten",
                 "eleven","twelve","thirteen","fourteen",
                 "fifteen","sixteen","seventeen","eighteen",
                 "nineteen","twenty"];
  let newTime = time.split(':');
  let hour = parseInt(newTime[0]);
  let minutes = parseInt(newTime[1]);
  let h = (x = 0) => hour == '00'
            ? `midnight`
            : hour > 12
              ? strTime[hour - (13-x)]
              : strTime[hour - (1-x)];
  let hPlus = hour >= 12
          ? strTime[hour - 12]
          : strTime[hour];
  let m = minutes < 30 
            ? minutes > 20 
                ? `twenty ${strTime[minutes - 21]}`
                : strTime[minutes - 1]
            : 60 - minutes > 20
                ?  `twenty ${strTime[(60 - minutes) - 21]}`
                : strTime[(60 - minutes) - 1];
  let ms = (str) => str == `one` ? `minute` : `minutes`;
  
  if(hour == '00' && minutes == '00'){
    return `midnight`;
  };
  
  if(minutes == '00'){
    return `${h()} o'clock`;
  };
  
  if(minutes == '15'){
    return `quarter past ${h()}`;
  };
  
  if(minutes < 30){
    return `${m} ${ms(m)} past ${h()}`;
  };
  
  if(minutes == 30){
    return `half past ${h()}`;
  };
  
  if(minutes == 45){
    return hour == 23 ? `quarter to midnight` : `quarter to ${hPlus}`;
  };
  
  if(minutes > 30){
    return hour == 23 ? `${m} ${ms(m)} to midnight` : `${m} ${ms(m)} to ${hPlus}`;
  };
};
