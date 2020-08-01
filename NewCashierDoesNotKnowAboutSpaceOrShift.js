//https://www.codewars.com/kata/5d23d89906f92a00267bb83d

//Some new cashiers started to work at your restaurant.

//They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

//All the orders they create look something like this:

//"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

//The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

//Their preference is to get the orders as a nice clean string with spaces and capitals like so:

//"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

//The kitchen staff expect the items to be in the same order as they appear in the menu.

//The menu items are fairly simple, there is no overlap in the names of the items:

//1. Burger
//2. Fries
//3. Chicken
//4. Pizza
//5. Sandwich
//6. Onionrings
//7. Milkshake
//8. Coke

function getOrder(input) {
  let menu = ["burger", "fries", "chicken", "pizza", "sandwich", "onionrings", "milkshake", "coke"];
  let newInput = input.split('');
  let tempResult = [];
  let result = [];

  while(newInput.length > 0){
    for(let i = 0; i <= menu.length - 1; i++){
      let temp = newInput.slice(0, menu[i].length);
      if(temp.join('') == menu[i]){
        temp[0] = temp[0].toUpperCase();
        tempResult.push([i,temp.join('')]);
        newInput.splice(0, menu[i].length);
        break;
      };
    };
  };
  
  tempResult.sort((a,b) => a[0] - b[0]).map(item => result.push(item[1]));
  return result.join(' ');
};
