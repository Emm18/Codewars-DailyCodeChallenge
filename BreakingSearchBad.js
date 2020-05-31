//https://www.codewars.com/kata/52cd53948d673a6e66000576

//The function must return the sequence of titles that match the string passed as an argument.

//TITLES is a preloaded sequence of strings.

//TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
//search('ock') --> ['Rocky 1', 'Rocky 2']
//But the function return some weird result and skip some of the matching results.

//Does the function have special movie taste?

//Let's figure out !

function search(searchTerm) {
  let result = [];
  TITLES.map(str => {
    if(str.toLowerCase().search(searchTerm.toLowerCase()) > -1){
      result.push(str);
    };
  }); 
  return result;
};
