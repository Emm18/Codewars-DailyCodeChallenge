//https://www.codewars.com/kata/5a4adff7e626c53463000015

// Task
// Here are 10 ribbons. The length of each ribbon is 11 units with a unique pattern (number 0-9). Now let's put these ribbons on a 11x11 table. Every time a ribbon is placed, horizontal or vertical. The next ribbon and the last one are in different directions, and ensure that any two ribbons are not completely overlapped.

// Note
// All inputs are valid.

// The first ribbon can be placed either horizontally or vertically.

// For example:
// An empty 11x11 table:

// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// We put a ribbon with pattern 1 on the table:

// ...........
// 11111111111
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// Then, put a ribbon with pattern 2 on the table:

// .2.........
// 12111111111
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// Note that their intersection will be covered with the ribbon above.

// Then, continue to put other ribbons..

// Finally, we get a pattern like the following:

// 62.0.4..8..
// 62101411811
// 62.0.4..8..
// 65505555855
// 63303433833
// 62.0.4..8..
// 77707777877
// 62.0.4..8..
// 99909999999
// 62.0.4..8..
// 62.0.4..8..
// Given the final pattern ribbons, your task is to return the order of these ribbons(from the bottom to the top). For the example above, should return "1234567890".

// Notice that not all the ribbons will be placed on the table, but at least 1 ribbon.

// Still not understand the task? Look at the following example ;-)

// Examples
// For ribbons =

// ...........
// 11111111111
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// ...........
// the output should be "1".

// For ribbons =

// .2.........
// 12111111111
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// the output should be "12".

// For ribbons =

// .2.........
// 12111111111
// .2.........
// .2.........
// 33333333333
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// .2.........
// the output should be "123".

// For ribbons =

// .2...4.....
// 12111411111
// .2...4.....
// .2...4.....
// 33333433333
// .2...4.....
// .2...4.....
// .2...4.....
// .2...4.....
// .2...4.....
// .2...4.....
// the output should be "1234".

// For ribbons =

// 62.0.4..8..
// 62101411811
// 62.0.4..8..
// 65505555855
// 63303433833
// 62.0.4..8..
// 77707777877
// 62.0.4..8..
// 99909999999
// 62.0.4..8..
// 62.0.4..8..
// the output should be "1234567890".


// Happy Coding ^_^

function theOrderOf(ribbons) {
  let newRibbons = ribbons.split('\n');
  let vertical = []
  let verticalCount = [];
  let horizontal = []
  let horizontalCount = [];
  let result = "";
  newRibbons = removeSpaces(newRibbons);
  vertical = getVertical(newRibbons);
  horizontal = getHorizontal(newRibbons);
  verticalCount = count(vertical);
  horizontalCount = count(horizontal);
  result = solveRibbon(verticalCount,horizontalCount);
  return result;
}

function removeSpaces(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i].split(' ').join('');
  }
  return arr;
}

function getVertical(arr) {
  let result = [];
  for (let col = 0; col <= arr[0].length - 1; col++) {
    let tempArr = [];
    for (let row = 0; row <= arr.length - 1; row++) {
      tempArr.push(arr[row][col])
    }
    result.push(tempArr);
  }
  return result;
}

function getHorizontal(arr) {
  let result = [];
  for (let row = 0; row <= arr.length - 1; row++) {
    let tempArr = [];
    for (let col = 0; col <= arr[0].length - 1; col++) {
      tempArr.push(arr[row][col])
    }
    result.push(tempArr);
  }
  return result;
}

function count(arr) {
  let result = [];
  arr.map((x, index) => {
    let tempArr = x.sort();
    let tempArr2 = [];
    x.sort().map((y) => {
      tempArr2.push([y, tempArr.filter(z => z == y).length])
    })
    result.push(tempArr2.sort((a, b) => b[1] - a[1])[0]);
  })
  return result.filter(x => x[0] != '.').sort((a, b) => b[1] - a[1]);
}

function solveRibbon(v,h){
  let que = "";
  let result = "";
  let vert = v.length > 0 ? v[0][1] : 0
  let hori = h.length > 0 ? h[0][1] : 0
  if (vert > hori) {
    que = 'v';
  } else {
    que = 'h'
  }
  while (v.length > 0 || h.length > 0) {
    if (que == 'v') {
      result = v[0][0] + result;
      v.splice(0, 1);
      que = 'h'
    } else {
      result = h[0][0] + result;
      h.splice(0, 1);
      que = 'v'
    }
  } 
  return result;
}
