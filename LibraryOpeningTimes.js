//https://www.codewars.com/kata/56898ff4c115980dd8000051

//You are frantically studying for your exams. To do so you need to frequently visit the library to get your revision time in.

//You will be given a string as a parameter letting you know the current time. The passed string will be given in the form:

//"Monday 12:35"
///Your task is to create a function which lets you know either:

//-When the library closes if it is open or,

//-When the library opens if it is closed.

//If the library is closed and opens later in the current day, you want your return string to say:

//"Library opens: today XX:XX"
//Where "XX:XX" is the time the library opens in a 24 hour format.

//If the library is closed and opens the next day, you want your return string to say:

//"Library opens: WEEKDAY XX:XX"
//Where "WEEKDAY" is the next day that the library opens.

//If the library is open, you want to return:

//"Library closes at XX:XX"
//Where "XX:XX" is the time that the Library closes.

//You can see the opening times of the library below.

//Opening Times -
//Monday:  08:00 - 20:00 
//Tuesday:  08:00 - 20:00
//Wednesday:  08:00 - 20:00
//Thursday:  08:00 - 20:00
//Friday:  08:00 - 20:00
//Saturday:  10:00 - 18:00
//Sunday:  12:00 - 16:30
//Some things to note:

//-The string given will always be in the form "WORD XX:XX" Where "X" will always be a digit from 1-9.

//-Capitalisation of the passed string should not affect the outcome.

//-The time is given in a 24 hour format (your return string should also be in this format).

//-If the first word of the passed string is not a weekday or the time is invalid your function should return "Invalid time!".

//-The format of your returned weekday should start with a capital, with all other characters in lower case eg Monday.

//-The first letter of the returned string should always be a capital.

//Examples:

//openingTimes("Monday 09:30"); //returns "Library closes at 20:00" 

//openingTimes("Saturday 00:00"); //returns "Library opens: today 10:00"

//openingTimes("Tuesday 20:00"); //returns "Library opens: Wednesday 08:00"

//openingTimes("MoNDay 07:59"); //returns "Library opens: today 08:00"

//openingTimes("Tuesday 13:61"); //returns "Invalid time!"

//openingTimes("wednsay 12:40"); //returns "Invalid time!"
//Happy coding!

function openingTimes(str) {
  let openings = [
    {day:'Monday', open:[480,1200]},
    {day:'Tuesday', open:[480,1200]},
    {day:'Wednesday', open:[480,1200]},
    {day:'Thursday', open:[480,1200]},
    {day:'Friday', open:[480,1200]}, 
    {day:'Saturday', open:[600,1080]},
    {day:'Sunday', open:[720,990]}
  ];
  let newTime = str.split(' ');
  let day = newTime[0].toLowerCase();
  let tempTime = newTime[1].split(':');
  let isTimeValid = tempTime[0] >= 0 && tempTime[0] < 24 && tempTime[1] >= 0 && tempTime[1] < 60 ? true : false;  
  let time = parseInt(tempTime[0]) * 60 + parseInt(tempTime[1]);
  let when = '';
  
  if(!isTimeValid){
    return 'Invalid time!'
  }
  
  for(let i = 0; i <= openings.length - 1; i++){
    let d = openings[i].day.toLowerCase();
    let opens = openings[i].open[0];
    let closes = openings[i].open[1];
    
    if(day == d){
      if(time >= opens && time < closes){
        when = 'Library closes at ' + minsTo24HFormat(closes);
        break;
      } else if(time < opens) {
        when = 'Library opens: today ' + minsTo24HFormat(opens);
        break;
      } else if(time >= closes){
        let temp = i == openings.length - 1 ? 0 : i + 1;
        let newD = openings[temp].day;
        let newOpens = openings[temp].open[0];
        
        when = 'Library opens: ' + newD + ' ' + minsTo24HFormat(newOpens);
        break;
      };
    };
  };
  
  return when ? when : 'Invalid time!';
};

function minsTo24HFormat(x){
  let getHour = Math.floor(x/60);
  let getMinutes = x % 60;
  let hour = getHour < 10 ? '0' + getHour : getHour == 24 ? '00' : getHour;
  let minutes = getMinutes < 10 ? '0' + getMinutes : getMinutes == 60 ? '00' : getMinutes;
  
  return hour + ':' + minutes;
};
