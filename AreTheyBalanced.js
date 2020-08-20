//https://www.codewars.com/kata/57fb44a12b53146fe1000136

//Description:
//Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

//If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

//Examples
//balance("!!","??") === "Right"
//balance("!??","?!!") === "Left"
//balance("!?!!","?!?") === "Left"
//balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left,right){
  let leftECtr = left.split('').filter(x => x == '!').length;
  let leftQCtr = left.length - leftECtr;
  let rightECtr = right.split('').filter(x => x == '!').length;
  let rightQCtr = right.length - rightECtr;
  
  return (leftECtr * 2) + (leftQCtr * 3) > (rightECtr * 2) + (rightQCtr * 3) 
          ? 'Left' 
          : (leftECtr * 2) + (leftQCtr * 3) < (rightECtr * 2) + (rightQCtr * 3)
          ? 'Right'
          : 'Balance';
};
