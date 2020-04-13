//https://www.codewars.com/kata/53368a47e38700bd8300030d

//Given: an array containing hashes of names

//Return: a string formatted as a list of names separated by commas except for the last two names, 
//which should be separated by an ampersand.

//Example:

//list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
//// returns 'Bart, Lisa & Maggie'

//list([ {name: 'Bart'}, {name: 'Lisa'} ])
//// returns 'Bart & Lisa'

//list([ {name: 'Bart'} ])
//// returns 'Bart'

//list([])
//// returns ''
//Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
  let str = '';
  
  names.map((val, index) => {
    if(index != names.length - 1){
      if(index != names.length - 2){
        str += val.name + ', ';
      } else {
        str += val.name;
      }
    } else {
      if(names.length > 1){
        str += ' & ' + val.name;
      } else {
        str += val.name;
      }  
    }
  });
  
  return str;
}
