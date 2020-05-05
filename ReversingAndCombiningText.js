//https://www.codewars.com/kata/56b861671d36bb0aa8000819

//Your task is to Reverse and Combine Words.
//It's not too difficult, but there are some things you have to consider...

//So what to do?

//Input: String containing different "words" separated by spaces

//1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
//   (odd number of words => last one stays alone, but has to be reversed too)
//2. Start it again until there's only one word without spaces
//3. Return your result...
//Some easy examples:

//Input:  "abc def"
//Output: "cbafed"

//Input:  "abc def ghi 123"
//Output: "defabc123ghi"

//Input:  "abc def gh34 434ff 55_eri 123 343"
//Output: "43hgff434cbafed343ire_55321"

//I think it's clear?!
//First there are some static tests, later on random tests too...


//Hope you have fun:-)!

function reverse_and_combine_text(str){
  while(str.split(' ').length > 1){
    let arr = str.split(' ');
    let newStr = [];
    let temp = [];
    for(let i = 0; i <= arr.length - 1; i++){
      temp.push(arr[i]);
      if(temp.length == 2){
        newStr.push(reverseThenCombine(temp[0],temp[1]));
        temp = []
      } else {
        if(i == arr.length - 1 && temp.length > 0){
          newStr.push(reverseThenCombine(temp[0], ''));
        };
      };
    };
    str = newStr.join(' ');
  }
  return str;
};

const reverseThenCombine = (str1 = '', str2 = '') => {
  str1 = str1.split('').reverse().join('');
  str2 = str2.split('').reverse().join('');
  return str1 + str2;
};
