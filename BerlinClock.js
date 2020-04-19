//https://www.codewars.com/kata/5a1463678ba9145a670000f9

//The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, 
//coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975.

//(CLUE IMAGE)
//NOTE: CHECK LINK FOR MORE INFO

//The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each, 
//alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 
//24-hour format. The third row consists of eleven yellow-and-red fields, which denote five full minutes each 
//(the red ones also denoting 15, 30 and 45 minutes past), and the bottom row has another four yellow fields, which 
//mark one full minute each. The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

//Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), but no fields are lit 
//in the second row; therefore the hour value is 10.
//Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), while the bottom row has 
//one field on (plus one minute). Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

//Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces 
//the Berlin Clock. The parameters should be as follows:

//“O” = Light off
//“R” = Red light
//“Y” = Yellow light

//Example Test Case:
//Input String:
//12:56:01

//Output String:
//O
//RROO
//RROO
//YYRYYRYYRYY
//YOOO

//Please check the example test cases for the required output format.

function berlinClock(time) {
  let newTime = time.split(':');
  let hours = parseInt(newTime[0]);
  let minutes = parseInt(newTime[1]);
  let seconds = parseInt(newTime[2]); 
  let oddEvenRow = [seconds % 2];
  let firstRow = [Math.floor(hours / 5), 4 - Math.floor(hours / 5)];
  
  hours = hours - (Math.floor(hours / 5) * 5);
  
  let secondRow = [hours, 4 - hours];
  let thirdRow = [Math.floor(minutes / 5), 11 - Math.floor(minutes / 5)];
  
  minutes = minutes - (Math.floor(minutes / 5) * 5);
  
  let fourthRow = [minutes, 4 - minutes];
  let result = '';
  
  if(oddEvenRow == 1){
    result += 'O\n' ;
  } else {
    result += 'Y\n';
  }
  
  result += redLight(firstRow[0]) + lightOff(firstRow[1]) + '\n';
  result += redLight(secondRow[0]) + lightOff(secondRow[1]) + '\n';
  result += redYellowLight(thirdRow[0]) + lightOff(thirdRow[1]) + '\n';
  result += yellowLight(fourthRow[0]) + lightOff(fourthRow[1]);
  
  return result;
}

function lightOff(ctr){
  let result = '';
  for(let i = 1; i <= ctr; i++){
    result += 'O';
  }
  return result;
}

function redLight(ctr){
  let result = '';
  for(let i = 1; i <= ctr; i++){
    result += 'R';
  }
  return result;
}

function yellowLight(ctr){
  let result = '';
  for(let i = 1; i <= ctr; i++){
    result += 'Y';
  }
  return result;
}

function redYellowLight(ctr){
  let result = '';
  for(let i = 1; i <= ctr; i++){
    if(i == 3 || i == 6 || i == 9){
      result += 'R';
    } else {
      result += 'Y';
    }
  }
  return result;
}
