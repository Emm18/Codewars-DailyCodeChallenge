//https://www.codewars.com/kata/5a0af37ec374cb092e0000df

//Days in Prison
//Given an integer n (0<=n<=500), return a string to visualize the days in prison in the following format:


//                          |                                        ||||                                |||/
//                          |                                        ||||                                ||/|
//  daysInPrison(1) =>      |                  daysInPrison(4) =>    ||||        daysInPrison(5) =>      |/||
//                          |                                        ||||                                /|||


//                          |||/  |||/  |||/  |||/  |||/  |
//                          ||/|  ||/|  ||/|  ||/|  ||/|  |
//  daysInPrison(26) =>     |/||  |/||  |/||  |/||  |/||  |
//                          /|||  /|||  /|||  /|||  /|||  |



//                          |||/  |||/  |||/  |||/  |||/  |||/  |||/  |||/  |||/  |||/
//                          ||/|  ||/|  ||/|  ||/|  ||/|  ||/|  ||/|  ||/|  ||/|  ||/|
//                          |/||  |/||  |/||  |/||  |/||  |/||  |/||  |/||  |/||  |/||
//                          /|||  /|||  /|||  /|||  /|||  /|||  /|||  /|||  /|||  /|||
//  daysInPrison(56) =>                          
//                          |||/  |
//                          ||/|  |
//                          |/||  |
//                          /|||  |


//I hope you got the idea.

//Rules & Notes
//The first four strokes consists of 4 vertical |
//The fifth strokes crosses the first vertical ones from the right upper corner to the left bottom corner with /
//The 5's are splitted by a tab in each row. You can use \t to split them
//Every Row can contain a maximum of 50 strokes
//Every Row is splitted by an empty line (double newline) => \n\n
//The maximum integer which will be tested is 500, so there will be a maximum of 10 rows
//Return "" when n is 0

function daysInPrison(n){
  let result = '';
  let rows = Math.floor(n / 50);
  let remaining = n % 50;
  
  result += rows > 0 ? fullRow(rows) : "";
  result += result != '' && remaining > 0 ? "\n\n" : "";
  result += remainingDays(remaining);
  
  return result;
};

function fullRow(n){
  let x = [
    "|||/",
    "||/|",
    "|/||",
    "/|||"
  ];  
  let result = [];
  for(let k = 0; k < n; k++){
    let row = [];
    for(let i = 0; i <= 3; i++){
      let temp = [];
      for(let j = 0; j < 10; j++){
        temp.push(x[i]);
      };
      row.push(temp.join('\t'));
    };
    if(k < n - 1){
      row.push('\n');
    };
    result.push(row.join('\n'))
  };
  return result.join('');
};

function remainingDays(n){
  let x = [
    "|||/",
    "||/|",
    "|/||",
    "/|||"
  ];
  let result = [];
    for(let i = 0; i <= 3; i++){
      let temp = [];
      for(let j = 0; j < Math.floor(n/5); j++){
        temp.push(x[i]);
      };
      let tempStr = '';
      for(let k = 0; k < n % 5; k++){
        tempStr += '|';
      };
      if(tempStr != ''){
        temp.push(tempStr);  
      };    
      if(temp.length > 0){
        result.push(temp.join('\t'));  
      };
    };
  return result.join('\n');
};

