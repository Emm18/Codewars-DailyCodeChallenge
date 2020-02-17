//https://www.codewars.com/kata/57c671eaf8392d75b9000033

// They say that only the name is long enough to attract attention. 
// They also said that only a simple Kata will have someone to solve it. 
// This is a sadly story. series #56:
// Make a monthly calendar board

// Description
// Give you the number of year and month, make a monthly calendar board.

// Task
// Complete function calendar() that accepts two arguments year and month.

// Returns a calendar board of this month.

// Note: The first line is centered(see following example).

// Rules & Examples
// An example of calendar(2016,8)

// The first line show the Year and Month. The format should be centered. 
// The second line show Sunday to Saturday, each one shorted to three uppercase 
// chars, separated by spaces. The following line is days of this month. The first 
// digit of day should under the second char of the week title.

//         2016 August
// SUN MON TUE WED THU FRI SAT
//      1   2   3   4   5   6
//  7   8   9   10  11  12  13
//  14  15  16  17  18  19  20
//  21  22  23  24  25  26  27
//  28  29  30  31
// An example of calendar(2016,2)

//        2016 February         <----- This line should be centered.
// SUN MON TUE WED THU FRI SAT         pad 7 spaces on the left 
//      1   2   3   4   5   6          Don't need to pad on the right
//  7   8   9   10  11  12  13         If it can not be symmetrical
//  14  15  16  17  18  19  20         The left side can be 1 space 
//  21  22  23  24  25  26  27         less than the right side.
//  28  29                      <----- Don't forget the leap year
 
function calendar(year, month) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let firstDay = new Date(year, month - 1).getDay() - 1;
  let maxDate = new Date(year, month, 0).getDate();
  let base = "";
  let temp = [];
  let a = 0;

  if(months[month - 1].length >= 9){
    base = "      " + year + " " + months[month - 1];
  } else if (months[month - 1].length >= 5 && months[month - 1].length <= 6) {
    base = "        " + year + " " + months[month - 1];
  } else if(months[month - 1].length <= 4 ){
    base = "         " + year + " " + months[month - 1];
  } else {
    base = "       " + year + " " + months[month - 1];
  }
  
  base += "\n" + "SUN MON TUE WED THU FRI SAT" + "\n";

  for (let i = 0 - firstDay; i <= maxDate; i++) {
    a++;
    if (i <= 0) {
      temp.push("   ");
    } else {
      if ( i == 0- firstDay) {
        temp.push(" " + i + " ");
      } else {
        if (a == 7) {
          if(i == maxDate){
            temp.push(" " + i);
          } else {
            temp.push(" " + i + "\n");
          }  
          a = 0;
        } else {
          if (i < 10) {
            if (a == 1) {
              temp.push(i + " ");
            } else {
              temp.push(" " + i + " ");
            }
          } else {
            if (a == 1) {
              temp.push(i);
            } else {
              temp.push(" " + i);
            }
          }
        }
      }
    }
  }
  return base + temp.join(" ");
}
