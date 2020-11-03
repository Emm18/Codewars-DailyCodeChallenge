//https://www.codewars.com/kata/52fb87703c1351ebd200081f

//Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

//Examples
//"1999" --> "20th"
//"2011" --> "21st"
//"2154" --> "22nd"
//"2259" --> "23rd"
//"1124" --> "12th"
//"2000" --> "20th"

function whatCentury(year){
  let rank = ['st','nd','rd'];
  let century = Math.ceil(parseInt(year) / 100);
  let temp = century % 10;
  
  if(century < 4 || temp > 0 && temp < 4 && century > 13){
    return century + rank[temp - 1];
  };
  
  return century + 'th';
};
