//https://www.codewars.com/kata/5298ad7cd0f550269500051b

//Let's implement the zipObject function that enables such results

//zipObject(['fred', 'barney'], [30, 40])
//=> { 'fred': 30, 'barney': 40 }

//zipObject([['fred', 30], ['barney', 40]])
//=> { 'fred': 30, 'barney': 40 }
//The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional 
//array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

//If only keys are given, then set the values to undefined.

//zipObject(['fred', 'barney'])
//{ fred: undefined, barney: undefined }
//If neither keys nor values are specified, then return {}

//zipObject()
//{}

function zipObject(keys, values) {
  if(!keys && !values){
    return {};
  };
  
  let resultObj = {};
  let copyOfValues = values ? values.slice() : [];
  
  keys.map(key => {
    if(Array.isArray(key)){
      resultObj = {...resultObj, [key[0]]:key[1]};
    } else {
      if(copyOfValues.length > 0){
        resultObj = {...resultObj, [key]:copyOfValues.splice(0,1)[0]};
      } else {
        resultObj = {...resultObj, [key]:undefined};
      };
    };
  });
  
  return resultObj;
};
