//https://www.codewars.com/kata/57fd6c4fa5372ead1f0004aa

// Do you ever wish you could talk like Siegfried of KAOS ?
// YES, of course you do!
// https://en.wikipedia.org/wiki/Get_Smart


// Task
// Write the function siegfried to replace the letters of a given sentence.

// Apply the rules using the course notes below. Each week you will learn some more rules.

// Und by ze fifz vek yu vil be speakink viz un aksent lik Siegfried viz no trubl at al!
// Lessons
// Week 1
// ci -> si
// ce -> se
// c -> k (except ch leave alone)
// Week 2
// ph -> f
// Week 3
// remove trailing e (except for all 2 and 3 letter words)
// replace double letters with single letters (e.g. tt -> t)
// Week 4
// th -> z
// wr -> r
// wh -> v
// w -> v
// Week 5
// ou -> u
// an -> un
// ing -> ink (but only when ending words)
// sm -> schm (but only when beginning words)
// Notes
// You must retain the case of the original sentence
// Apply rules strictly in the order given above
// Rules are cummulative. So for week 3 first apply week 1 rules, then week 2 rules, then week 3 rules

var siegfried = function (week, str) {
  let result = "";
  if (week == 1) {
    result = week1(str);
  } else if (week == 2) {
    result = week1(str);
    result = week2(result);
  } else if (week == 3) {
    result = week1(str);
    result = week2(result);
    result = week3(result);
  } else if (week == 4) {
    result = week1(str);
    result = week2(result);
    result = week3(result);
    result = week4(result);
  } else if (week == 5) {
    result = week1(str);
    result = week2(result);
    result = week3(result);
    result = week4(result);
    result = week5(result);
  }
  return result;
}


function week1(str) {
  str = str.split(" ");
  for (let i = 0; i <= str.length - 1; i++) {
    str[i] = str[i].split("");
    if (str[i].includes('c') || str[i].includes('C')) {
      for (let j = 0; j <= str[i].length - 1; j++) {
        if (str[i][j] == 'C' || str[i][j] == 'c') {
          if (str[i][j + 1] == 'i' || str[i][j + 1] == 'I' || str[i][j + 1] == 'e' || str[i][j + 1] == 'E') {
            if (str[i][j] == 'C') {
              str[i][j] = 'S'
            } else {
              str[i][j] = 's'
            }
          } else {
            if (str[i][j + 1] != 'h' && str[i][j + 1] != 'H' && str[i][j + 1] != 'h' && str[i][j + 1] != 'H') {
              if (str[i][j] == 'C') {
                str[i][j] = 'K'
              } else {
                str[i][j] = 'k'
              }
            }
          }
        }
      }
    }
    str[i] = str[i].join("")
  }
  return str.join(" ");
}

function week2(str) {
  str = str.split(" ");
  for (let i = 0; i <= str.length - 1; i++) {
    str[i] = str[i].split("");
    if (str[i].includes('p') || str[i].includes('P')) {
      for (let j = 0; j <= str[i].length - 1; j++) {
        if (str[i][j] == 'P' || str[i][j] == 'p') {
          if (str[i][j + 1] == 'h' || str[i][j + 1] == 'H') {
            if ((str[i][j] == 'P' && str[i][j + 1] == 'H') || (str[i][j] == 'P' && str[i][j + 1] == 'h')) {
              str[i][j] = 'F'
              str[i].splice([j + 1], 1);
            } else if ((str[i][j] == 'p' && str[i][j + 1] == 'H') || (str[i][j] == 'p' && str[i][j + 1] == 'h')) {
              str[i][j] = 'f'
              str[i].splice([j + 1], 1);
            }
          }
        }
      }
    }
    str[i] = str[i].join("")
  }
  return str.join(" ");
}

function week3(str) {
  str = str.split(" ");
  for (let i = 0; i <= str.length - 1; i++) {
    str[i] = str[i].split("");
    for (let j = 0; j <= str[i].length - 2; j++) {
      if (str[i][j].toLowerCase() == str[i][j + 1].toLowerCase() && str[i][j].toLowerCase().charCodeAt(0) >= 97 && str[i][j].toLowerCase().charCodeAt(0) <= 122) {
        str[i][j + 1] = "";
      }
    }
    let temp = [];
    while (!(str[i][str[i].length - 1].toLowerCase().charCodeAt(0) >= 97 && str[i][str[i].length - 1].toLowerCase().charCodeAt(0) <= 122)) {
      temp.push(str[i][str[i].length - 1])
      str[i].splice(str[i].length - 1, 1);
      if (str[i].length < 1) {
        break;
      }
    }
    if (str[i].join("").includes("-")) {
      let temp1 = str[i].join("").split('-');
      for (let k = 0; k <= temp1.length - 1; k++) {
        temp1[k] = temp1[k].split("");
        while (temp1[k][temp1[k].length - 1] == 'e' || temp1[k][temp1[k].length - 1] == 'E') {
          temp1[k].splice(temp1[k].length - 1, 1)
        }
        temp1[k] = temp1[k].join("");
      }
      temp1 = temp1.join("-")
      str[i] = temp1.split("");
    }
    if (str[i].length > 3) {
      while (str[i][str[i].length - 1] == 'e' || str[i][str[i].length - 1] == 'E') {
        str[i].splice(str[i].length - 1, 1);
      }
    }
    str[i] = str[i].join("") + temp.join("")
  }
  return str.join(" ");
}

function week4(str) {
  str = str.split(" ");
  for (let i = 0; i <= str.length - 1; i++) {
    str[i] = str[i].split("");
    for (let j = 0; j <= str[i].length - 1; j++) {
      if (str[i][j] == 'T' && str[i][j + 1] == 'H') {
        str[i][j] = 'Z';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'T' && str[i][j + 1] == 'h') {
        str[i][j] = 'Z';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 't' && str[i][j + 1] == 'H') {
        str[i][j] = 'z';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 't' && str[i][j + 1] == 'h') {
        str[i][j] = 'z';
        str[i][j + 1] = "";
      }
    }
    for (let j = 0; j <= str[i].length - 1; j++) {
      if (str[i][j] == 'W' && str[i][j + 1] == 'R') {
        str[i][j] = 'R';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'W' && str[i][j + 1] == 'r') {
        str[i][j] = 'R';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'w' && str[i][j + 1] == 'R') {
        str[i][j] = 'r';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'w' && str[i][j + 1] == 'r') {
        str[i][j] = 'r';
        str[i][j + 1] = "";
      }
    }
    for (let j = 0; j <= str[i].length - 1; j++) {
      if (str[i][j] == 'W' && str[i][j + 1] == 'H') {
        str[i][j] = 'V';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'W' && str[i][j + 1] == 'h') {
        str[i][j] = 'V';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'w' && str[i][j + 1] == 'H') {
        str[i][j] = 'v';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'w' && str[i][j + 1] == 'h') {
        str[i][j] = 'v';
        str[i][j + 1] = "";
      }
    }
    for (let j = 0; j <= str[i].length - 1; j++) {
      if (str[i][j] == 'W') {
        str[i][j] = 'V';
      }
      if (str[i][j] == 'W') {
        str[i][j] = 'V';
      }
      if (str[i][j] == 'w') {
        str[i][j] = 'v';
      }
      if (str[i][j] == 'w') {
        str[i][j] = 'v';
      }
    }
    str[i] = str[i].join('')
  }
  return str.join(' ');
}

function week5(str) {
  str = str.split(" ");
  for (let i = 0; i <= str.length - 1; i++) {
    str[i] = str[i].split("");
    for (let j = 0; j <= str[i].length - 2; j++) {
      if (str[i][j] == 'O' && str[i][j + 1] == 'U') {
        str[i][j] = 'U';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'O' && str[i][j + 1] == 'u') {
        str[i][j] = 'U';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'o' && str[i][j + 1] == 'U') {
        str[i][j] = 'u';
        str[i][j + 1] = "";
      }
      if (str[i][j] == 'o' && str[i][j + 1] == 'u') {
        str[i][j] = 'u';
        str[i][j + 1] = "";
      }
    }
    for (let j = 0; j <= str[i].length - 2; j++) {
      if (str[i][j] == 'A' && str[i][j + 1] == 'N') {
        str[i][j] = 'U';
        str[i][j + 1] = "N";
      }
      if (str[i][j] == 'A' && str[i][j + 1] == 'n') {
        str[i][j] = 'U';
        str[i][j + 1] = "n";
      }
      if (str[i][j] == 'a' && str[i][j + 1] == 'N') {
        str[i][j] = 'u';
        str[i][j + 1] = "N";
      }
      if (str[i][j] == 'a' && str[i][j + 1] == 'n') {
        str[i][j] = 'u';
        str[i][j + 1] = "n";
      }
    }
    str[i] = str[i].join('').split('')
    if (str[i].length >= 2) {
      if (str[i][0] == 'S' && str[i][1] == 'm') {
        str[i][0] = 'Sch';
      }
      if (str[i][0] == 's' && str[i][1] == 'm') {
        str[i][0] = 'sch';
      }
    }
    if (str[i].length >= 3) {
      if (str[i][str[i].length - 3] == 'i' && str[i][str[i].length - 2].toLowerCase() == 'n' && str[i][str[i].length - 1].toLowerCase() == 'g') {
        str[i][str[i].length - 3] = 'i';
        str[i][str[i].length - 2] = 'n';
        str[i][str[i].length - 1] = 'k';
      }
    }
    str[i] = str[i].join('')
  }
  return str.join(' ');
}
