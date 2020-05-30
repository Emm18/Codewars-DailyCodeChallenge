//https://www.codewars.com/kata/56eb16655250549e4b0013f4

//What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

//You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of 
//the week in that year. The result has to be a list of days sorted by the order of days in week 
//(e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

//Input: Year as an int.

//Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

//Preconditions:

//Week starts on Monday.
//Year is between 1583 and 4000.
//Calendar is Gregorian.
//Example:

//mostFrequentDays(2427) => ['Friday']
//mostFrequentDays(2185) => ['Saturday']
//mostFrequentDays(2860) => ['Thursday', 'Friday']

function mostFrequentDays(year){
  var untilTo = new Date(year,11,31);
  var daysOfTheWeek = [[0,'Monday'],[0,'Tuesday'],[0,'Wednesday'],[0,'Thursday'],[0,'Friday'],[0,'Saturday'],[0,'Sunday']];
  var result = [];
  
  for (var d = new Date(year, 0, 1); d <= untilTo; d.setDate(d.getDate() + 1)) {
    let day = new Date(d).getDay();
    if(day == 0){
      daysOfTheWeek[6][0] = daysOfTheWeek[6][0] + 1;
    } else if(day == 1){
      daysOfTheWeek[0][0] = daysOfTheWeek[0][0] + 1;
    } else if(day == 2){
      daysOfTheWeek[1][0] = daysOfTheWeek[1][0] + 1;
    } else if(day == 3){
      daysOfTheWeek[2][0] = daysOfTheWeek[2][0] + 1;
    } else if(day == 4){
      daysOfTheWeek[3][0] = daysOfTheWeek[3][0] + 1;
    } else if(day == 5){
      daysOfTheWeek[4][0] = daysOfTheWeek[4][0] + 1;
    } else if(day == 6){
      daysOfTheWeek[5][0] = daysOfTheWeek[5][0] + 1;
    };
  };

  daysOfTheWeek.filter(x => x[0] == 53).map(y => result.push(y[1]));
  
  return result;
};
