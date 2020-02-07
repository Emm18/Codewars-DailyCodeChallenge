// https://www.codewars.com/kata/52742f58faf5485cae000b9a

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of 
//seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". 
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, 
// a positive integer and one of the valid units of time, separated by a space. The unit of time 
// is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is 
// separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 
// 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 
// seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds 
// is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 
// 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component 
// must not be greater than any valid more significant unit of time.



function formatDuration (seconds) {
  let y, d, h, m, s; //holds the number value
  let year, day, hour, minute, second; //holds the number value and the string value ex. 1 hour


  //get days
  d = Math.floor(seconds / 86400);
  seconds = seconds - (d * 86400);
  
  //if more than 365 days get years
  y = Math.floor(d / 365);
  d = d - (y * 365);
        
  //get hours
  h = Math.floor(seconds / 3600);
  seconds = seconds - (h * 3600);
  
  //get minutes
  m = Math.floor(seconds / 60);
  seconds = seconds - (m * 60);
  
  //seconds
  s = seconds;
  
  // check if now
  if( y == 0 &&
        d == 0 &&
          h == 0 &&
            m == 0 &&
              s == 0 ) {
                return 'now'
              }
  
  //format year
  if( y != 0 ){
    if( y == 1) {
      year = y + " year";
    } else {
      year = y + " years";
    }
  } else {
    year = "";
  }
  
  //format days
  if ( d != 0 ){
    if( d == 1 ) {
      day = d + " day";
    } else {
      day = d + " days";
    }
  } else { 
    day = "";
  }
  
  //format hours
  if ( h != 0 ){
    if( h == 1 ) {
      hour = h + " hour";
    } else {
      hour = h + " hours";
    }
  } else { 
    hour = "";
  }
  
  //format minutes
  if ( m != 0 ){
    if( m == 1 ) {
      minute = m + " minute";
    } else {
      minute = m + " minutes";
    }
  } else { 
    minute = "";
  }  
  
  //format seconds
  if ( s != 0 ){
    if( s == 1 ) {
      second = s + " second";
    } else {
      second = s + " seconds";
    }
  } else { 
    second = "";
  }  
  
  let arr = [year, day, hour, minute, second] // used array to be able to use .filter to filter out empty times
  arr = arr.filter(x => x != ""); // filter our empty times
  let connector = ""; // either "," or "and" or ""
  let result = ""; // will hold the answer

    for(let i = 0; i <= arr.length - 1; i++){
       if(i == arr.length - 1){
         if(i > 0){
           connector = " and ";
         } else {
           connector = "";
         }
       } else {
         if(i > 0){
           connector = ", ";
         } else {
           connector = "";
         }
       }
       result = result + connector + arr[i];
    }
  
  return result;
}
