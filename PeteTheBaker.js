//https://www.codewars.com/kata/525c65e51bf619685c000059

// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. Can you help him to find out, 
// how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available 
// ingredients (also an object) and returns the maximum number of cakes Pete can bake 
// (integer). For simplicity there are no units for the amounts 
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients 
// that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

function cakes(recipe, available) {
  let usableIngredients = [];
  
  let incompleteIngredients = false;
  // filter out all usable ingredients and check if all the needed ingredients is present
  for(const required in recipe){  
    let hasIt = false;
    for(const currentIngredients in available){
      if( required == currentIngredients ){
        usableIngredients.push([ currentIngredients, available[currentIngredients]]);
        hasIt = true;
      }
    }
    if(!hasIt){
      incompleteIngredients = true;
    }
  }
  
  //return 0 if ingredients is incomplete
  if(incompleteIngredients){
    return 0;
  }
  
  let insufficientIngredients = false;
  //check if all the needed amount of ingredients is met
  for(let i = 0; i <= usableIngredients.length - 1; i++){
    if(usableIngredients[i][1] < recipe[usableIngredients[i][0]]){
      insufficientIngredients = true;
      break;
    }
  }
  
  //return 0 if the amount of ingredients is insufficient
  if(insufficientIngredients){
    return 0;
  }
  
  let qty = [];
  //getting on how many can peter make
  for(let i = 0; i <= usableIngredients.length - 1; i++){
    qty.push(Math.floor(usableIngredients[i][1] / recipe[usableIngredients[i][0]]));
  }
  
  return qty.sort((a,b) => a - b)[0]
}
