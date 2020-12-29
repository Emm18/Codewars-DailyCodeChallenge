//https://www.codewars.com/kata/562e6df5cf2d3908ad00019e

//Don't Drink the Water

//Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. 
//(Lower density floats to the top) The width of the glass will not change from top to bottom.

//======================
//|   Density Chart    |
//======================
//| Honey   | H | 1.36 |
//| Water   | W | 1.00 |
//| Alcohol | A | 0.87 |
//| Oil     | O | 0.80 |
//----------------------

//[                            [
// ['H', 'H', 'W', 'O'],        ['O','O','O','O']
// ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
// ['H', 'H', 'O', 'O']         ['H','H','H','H']
// ]                           ]
//he glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

function separateLiquids(glass) {
  if(glass.length == 0){
    return [];
  };
  
  let chart = ['O','A','W','H'];
  let width = glass[0].length;
  let newGlass = glass.join('').split(',').join('').split('');
  let liquids = [];
  let result = [];
  
  chart.map(i => {
    let temp = newGlass.filter(g => g == i);
    if(temp.length > 0){
      liquids = [...liquids, ...temp];  
    };
  });
  
  while(liquids.length > 0){
    result.push(liquids.splice(0, width));
  };
  
  return result;
};
