//https://www.codewars.com/kata/5158bfce931c51b69b000001

//Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

//var data = {
//  id: 1,
//  items: [
//    {id: 2},
//    {id: 3, items: [
//      {id: 4},
//      {id: 5}
//    ]}
//  ]
//}

//extractIds(data) // should return [1,2,3,4,5]
//The method should be able to handle the case of empty data being passed in.

//Note: The only arrays that need to be traversed are those assigned to the "items" property.

function extractIds(obj, res = []){
  let result = res.slice();
  let next;
  
  if(obj.length > 0){
    for(let i = 0; i <= obj.length - 1; i++){
      for(let o in obj[i]){
        if(o == 'id'){
          result.push(obj[i][o]);
        };
        
        if(o == 'items'){
          if(next){
            next.concat(obj[i][o]);
          } else {
            next = obj[i][o];
          };
        };
      };
    };
  } else {
    for(let o in obj){
      if(o == 'id'){
        result.push(obj[o]);
      };
      
      if(o == 'items'){
        next = obj[o];
      };
    };
  };
  
  return next ? extractIds(next, result) : result;
};
