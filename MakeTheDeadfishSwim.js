//https://www.codewars.com/kata/51e0007c1f9378fa810002a9

//Write a simple parser that will parse and run Deadfish.

//Deadfish has 4 commands, each 1 character long:

//i increments the value (initially 0)
//d decrements the value
//s squares the value
//o outputs the value into the return array
//Invalid characters should be ignored.

//parse("iiisdoso") => [ 8, 64 ]

function parse(data){
  let initialValue = 0;
  let arr = [];
  let newData = data.split('');
  
  newData.map(val => {
    if(val == 'i'){
      initialValue++;
    } else if(val == 'd'){
      initialValue--;
    } else if(val == 's'){
      initialValue *= initialValue;
    } else if(val == 'o'){
      arr.push(initialValue);
    };
  });
  
  return arr;
}
