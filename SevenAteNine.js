//https://www.codewars.com/kata/59e61c577905df540000016b

//Seven is a hungry number and its favourite food is number 9. Whenever it spots 9 
//through the hoops of 8, it eats it! Well, not anymore, because you are going to 
//help the 9 by locating that particular sequence (7,8,9) in an array of digits and 
//tell 7 to come after 9 instead. Seven "ate" nine, no more! (If 9 is not in danger, 
//just return the same array)

function hungrySeven(arr){
  let isThere789 = true;
  
  while(isThere789){
    isThere789 = false;
    for(let i = 0; i <= arr.length - 3; i++){
      if(arr[i] == 7 && arr[i+1] == 8 && arr[i+2] == 9){
        isThere789 = true;
        arr[i] = 8;
        arr[i+1] = 9; 
        arr[i+2] = 7;
      };
    };
  };

  return arr;
};
