//https://www.codewars.com/kata/57f8ff867a28db569e000c4a

//Modify the kebabize function so that it converts a camel case string into a kebab case.

//kebabize('camelsHaveThreeHumps') // camels-have-three-humps
//kebabize('camelsHave3Humps') // camels-have-humps
//Notes:

//the returned string should only contain lowercase letters

function kebabize(str) {
  let newStr = str.split('');
  let result = [];
  let holder = '';
  
  for(let i = 0; i <= newStr.length - 1; i++){
    if(!parseInt(newStr[i]) && parseInt(newStr[i]) != 0){
      if(i != 0 && newStr[i] === newStr[i].toUpperCase()){
        result.push(holder);
        holder = '';
      };
      
      if(!parseInt(newStr[i])){
        holder += newStr[i].toLowerCase();
      };
    };
  };
  
  if(holder){
    result.push(holder);
  };
  
  if(result[0] == ''){
    result.splice(0,1);
  };
  
  if(result[result.lenth - 1] == ''){
    result.splice(result.lenth - 1,1);
  };
  
  return result.join('-');
};
