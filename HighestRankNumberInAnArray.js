//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

//Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

//Note: no empty arrays will be given.

//Examples
//[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
  let counter = {};
  let highest;
  
  for(let i = 0; i <= arr.length - 1; i++){
    if(counter[arr[i].toString()]){
      counter[arr[i].toString()] = counter[arr[i].toString()] + 1;
    } else {
      counter[arr[i].toString()] = 1;
    };
  };
  
  for(const x in counter){
    if(!highest){
      highest = [x, counter[x]];
    } else {
      if(highest[1] < counter[x]){
        highest = [x, counter[x]];
      } else {
        if(parseInt(highest[1]) < parseInt(x) && highest[1] == counter[x]){
          highest = [x, counter[x]];
        };
      };
    };
  };
  
  return parseInt(highest[0]);
};
