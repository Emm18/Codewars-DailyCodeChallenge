//https://www.codewars.com/kata/5bc5c0f8eba26e792400012a

//Task
//Your task is to implement function printNumber (print_number in C/C++ and Python Kata.printNumber in Java) that returns string that represents given number in text format (see examples below).

//Arguments:

//number — Number that we need to print (num in C/C++/Java)
//char — Character for building number (ch in C/C++/Java)
//Examples
//printNumber(99, "$")
////Should return
////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n
////$                                      $\n
////$   $$$$   $$$$   $$$$   $$$$   $$$$   $\n
////$  $$  $$ $$  $$ $$  $$ $$  $$ $$  $$  $\n
////$  $$  $$ $$  $$ $$  $$ $$  $$ $$  $$  $\n
////$  $$  $$ $$  $$ $$  $$  $$$$   $$$$   $\n
////$  $$  $$ $$  $$ $$  $$   $$     $$    $\n
////$   $$$$   $$$$   $$$$   $$     $$     $\n
////$                                      $\n
////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//printNumber(12345, "*")
////Should return
////****************************************\n
////*                                      *\n
////*    **    ****   ****  **  ** ******  *\n
////*   ***   **  ** **  ** **  ** **      *\n
////*  * **      **     **  **  ** *****   *\n
////*    **     **      **   *****     **  *\n
////*    **    **    **  **     **     **  *\n
////*  ****** ******  ****      ** *****   *\n
////*                                      *\n
////****************************************

//printNumber(67890, "@")
////Should return
////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n
////@                                      @\n
////@     @@  @@@@@@  @@@@   @@@@   @@@@   @\n
////@    @@   @@  @@ @@  @@ @@  @@ @@  @@  @\n
////@   @@@@     @@   @@@@  @@  @@ @@  @@  @\n
////@  @@  @@   @@    @@@@   @@@@  @@  @@  @\n
////@  @@  @@  @@    @@  @@   @@   @@  @@  @\n
////@   @@@@   @@     @@@@   @@     @@@@   @\n
////@                                      @\n
////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//Note, that:

//Number should be 0 <= number <= 99999 and have 5 digits (should have zeros at the start if needed)
//Test cases contains only valid values (integers that are 0 <= number <= 99999) and characters
//Numbers should have the same shape as in the examples (6x6 by the way)
//Returned string should be joined by \n character (except of the end)
//Returned string should have 1 character (height) border (use the same character as for number) + padding (1 character in height vertical and 2 horizontal with ) around borders and 1 character margin between "digits"

function printNumber(number, char) {
  let obj = {
    '0': [' 0000 ','00  00','00  00','00  00','00  00',' 0000 '],
    '1': ['  00  ',' 000  ','0 00  ','  00  ','  00  ','000000'],
    '2': [' 0000 ','00  00','   00 ','  00  ',' 00   ','000000'],
    '3': [' 0000 ','00  00','   00 ','   00 ','00  00',' 0000 '],
    '4': ['00  00','00  00','00  00',' 00000','    00','    00'],
    '5': ['000000','00    ','00000 ','    00','    00','00000 '],
    '6': ['   00 ','  00  ',' 0000 ','00  00','00  00',' 0000 '],
    '7': ['000000','00  00','   00 ','  00  ',' 00   ',' 00   '],
    '8': [' 0000 ','00  00',' 0000 ',' 0000 ','00  00',' 0000 '],
    '9': [' 0000 ','00  00','00  00',' 0000 ','  00  ',' 00   ']
  };
  let newNumber = "00000" + number;
  newNumber = newNumber.substr(newNumber.length - 5).split('');
  
  let res = lines(40, char) + '\n' + spacer(40, char) + '\n';
  for(let i = 0; i < 6; i++){
    res += char + '  ';
    for(let j = 0; j < 5; j++){
      let temp = obj[newNumber[j]][i].split('').map(x => x != ' ' ? char : x).join('');
      res += temp + ' ';
    };
    res += ' ' + char + '\n';
  };
  res += spacer(40, char) + '\n' + lines(40, char);
  
  return res;
};

function lines(ctr, char){
  let result = '';
  for(let i = 0; i < ctr; i++){
    result += char;
  };
  return result;
};

function spacer(ctr, char){
  let result = '';
  for(let i = 0; i < ctr; i++){
    result += i == 0 || i == ctr - 1 ? char : ' ';
  };
  return result;
};
