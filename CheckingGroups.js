//https://www.codewars.com/kata/54b80308488cb6cd31000161

//In English and programming, groups can be made using symbols such as () and {} 
//that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.

//Your job in this kata will be to make a program that checks a string for correct 
//grouping. For instance, the following groups are done correctly:

//({})
//[[]()]
//[{()}]
//The next are done incorrectly:

//{(})
//([]
//[])
//A correct string cannot close groups in the wrong order, open a group but fail to close 
//it, or close a group before it is opened.

//Your function will take an input string that may contain any of the symbols (), {} or [] 
//to create groups.

//It should return True if the string is empty or otherwise grouped correctly, or False if it 
//is grouped incorrectly.

function groupCheck(s){
 let newS = s.split('');
 let opening = [];
 let result = true;
 
 newS.map((x, index) => {
   if(x == '(' || x == '[' || x == '{'){
     opening.push([index,x]);
   };
 });
 
 opening.reverse();
 
 for(let i = 0; i <= opening.length - 1; i++){
   let open = newS.splice(opening[i][0], 1);
   let close = newS.splice(opening[i][0], 1);
   
   if(returnClosing(open) != close){
     result = false;
     break;
   };
  };
  
   return newS.length > 0 ? false : result;
 };
 
 function returnClosing(tag){
   if(tag == '('){
     return ')';
   } else if(tag == '{') {
     return '}';
   } else if(tag == '[') {
     return ']';
   };
 };
