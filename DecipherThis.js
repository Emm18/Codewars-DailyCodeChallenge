//https://www.codewars.com/kata/581e014b55f2c52bb00000f8

//You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

//For each word:

//the second and the last letter is switched (e.g. Hello becomes Holle)
//the first letter is replaced by its character code (e.g. H becomes 72)
//Note: there are no special characters used, only letters and spaces

//Examples

//decipherThis('72olle 103doo 100ya'); // 'Hello good day'
//decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
 let newStr = str.split(' ');
 let result = [];
 
 newStr.map(val => {
   let newVal = val.split('');
   let num = '';
   let holder = '';
   newVal.map(str => {
     if(parseInt(str) || parseInt(str) == 0){
       num += str;
     } else {
       holder += str;
     }
   });
   let temp = '';
   holder = holder.split('');
   temp = holder[0];
   holder[0] = holder[holder.length - 1];
   holder[holder.length - 1] = temp;
   result.push([String.fromCharCode(parseInt(num)) + holder.join('')])
 });
 
  return result.join(' ');
}; 
