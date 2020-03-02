//https://www.codewars.com/kata/526989a41034285187000de4

//Implement a function that receives two IPv4 addresses, and returns the number 
//of addresses between them (including the first one, excluding the last one).

//All inputs will be valid IPv4 addresses in the form of strings. The last address will 
//always be greater than the first one.

//Examples
//ipsBetween("10.0.0.0", "10.0.0.50")  ===   50 
//ipsBetween("10.0.0.0", "10.0.1.0")   ===  256 
//ipsBetween("20.0.0.10", "20.0.1.0")  ===  246

function ipsBetween(start, end){
  let newStart = start.split('.');
  let newEnd = end.split('.');
  
  let firstDecimal = newEnd[0] - newStart[0];
  let secondDecimal = newEnd[1] - newStart[1];
  let thirdDecimal = newEnd[2] - newStart[2];
  let fourthDecimal = newEnd[3] - newStart[3];

  return (firstDecimal * 16777216) + (secondDecimal * 65536) + (thirdDecimal * 256) + (fourthDecimal)
}
