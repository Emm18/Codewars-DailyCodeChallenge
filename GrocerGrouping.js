//https://www.codewars.com/kata/593c0ebf8b90525a62000221

//Ever since you started work at the grocer, you have been faithfully logging down each 
//item and its category that passes through. One day, your boss walks in and asks, "Why are 
//we just randomly placing the items everywhere? It's too difficult to find anything in this 
//place!" Now's your chance to improve the system, impress your boss, and get that raise!

//The input is a comma-separated list with category as the prefix in the form "fruit_banana". 
//Your task is to group each item into the 4 categories Fruit, Meat, Other, Vegetable and output 
//a string with a category on each line followed by a sorted comma-separated list of items.

//For example, given:

//"fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange"
//output:

//"fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot"
//Assume that:

//Only strings of the format category_item will be passed in
//Strings will always be in lower case
//Input will not be empty
//Category and/or item will not be empty
//There will be no duplicate items
//All categories may not have items

function solution(input) {
  let newInput = input.split(',');
  let fruits = [];
  let meats = [];
  let vegetables = [];
  let others = [];
  
  newInput.map(str => {
    let temp = str.split('_');
    
    if(temp[0] == 'fruit'){
      fruits.push(temp[1]);
    } else if(temp[0] == 'meat'){
      meats.push(temp[1]);
    } else if(temp[0] == 'vegetable'){
      vegetables.push(temp[1]);
    } else {
      others.push(temp[1]);
    };
  });
  
  return  `fruit:${fruits.sort().join(',')}\nmeat:${meats.sort().join(',')}\nother:${others.sort().join(',')}\nvegetable:${vegetables.sort().join(',')}`
};
