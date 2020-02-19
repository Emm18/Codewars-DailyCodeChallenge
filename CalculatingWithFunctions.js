//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(action) {
  if (action) {
    return result(0, action[1], action[0]);
  } else {
    return 0
  }
}
function one(action) {
  if (action) {
    return result(1, action[1], action[0]);
  } else {
    return 1
  }
}
function two(action) {
  if (action) {
    return result(2, action[1], action[0]);
  } else {
    return 2
  }
}
function three(action) {
  if (action) {
    return result(3, action[1], action[0]);
  } else {
    return 3
  }
}
function four(action) {
  if (action) {
    return result(4, action[1], action[0]);
  } else {
    return 4
  }
}
function five(action) {
  if (action) {
    return result(5, action[1], action[0]);
  } else {
    return 5
  }
}
function six(action) {
  if (action) {
    return result(6, action[1], action[0]);
  } else {
    return 6
  }
}
function seven(action) {
  if (action) {
    return result(7, action[1], action[0]);
  } else {
    return 7
  }
}
function eight(action) {
  if (action) {
    return result(8, action[1], action[0]);
  } else {
    return 8
  }
}
function nine(action) {
  if (action) {
    return result(9, action[1], action[0]);
  } else {
    return 9
  }
}

function plus(num) {
  return ['plus', num]
}
function minus(num) {
  return ['minus', num]
}
function times(num) {
  return ['times', num]
}
function dividedBy(num) {
  return ['divide', num]
}

function result(num1, num2, operator) {
  if (operator == 'plus') {
    return num1 + num2;
  } else if (operator == 'minus') {
    return num1 - num2;
  } else if (operator == 'times') {
    return num1 * num2;
  } else if (operator == 'divide') {
    return Math.floor(num1 / num2);
  }
}
