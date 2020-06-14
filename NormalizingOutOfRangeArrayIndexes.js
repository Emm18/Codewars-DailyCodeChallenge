//https://www.codewars.com/kata/5285bf61f8fc1b181700024c

//Implement a function that normalizes out of range sequence indexes (converts them to 'in range' indexes) 
//by making them repeatedly 'loop' around the array. The function should then return the value at that index. 
//Indexes that are not out of range should be handled normally and indexes to empty sequences should return 
//undefined/None depending on the language.

//For positive numbers that are out of range, they loop around starting at the beginning, so

//normIndex(arr, arr.length);     //Returns first element
//normIndex(arr, arr.length + 1); //Returns second element
//normIndex(arr, arr.length + 2); //Returns third element
//And so on...
//normIndex(arr, arr.length * 2); //Returns first element
//For negative numbers, they loop starting from the end, so

//normIndex(arr, -1);    //Returns last element
//normIndex(arr, -2);    //Returns second to last element
//normIndex(arr, -3);    //Returns third to last element
//And so on...
//normIndex(arr, -arr.length); //Returns first element

function normIndex(array, index){
  let ctr = index;
  
  ctr = Math.abs(ctr) % array.length;
  
  if(index < 0){
    ctr = array.length - ctr;
  };
  
  return array[ctr] || array[0];
};
