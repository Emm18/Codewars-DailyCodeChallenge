//https://www.codewars.com/kata/55de9c184bb732a87f000055

//Write a function that will take in any array and reverse it.

//Sounds simple doesn't it?

//NOTES:

//Array should be reversed in place! (no need to return it)
//Usual builtins have been deactivated. Don't count on them.
//You'll have to do it fast enough, so think about performances

function reverse(arr) {
   let arrCount = Math.floor(arr.length / 2);
   let ctr = 0;
   
   while(arrCount > ctr){
     let temp2 = arr[ctr];
     let temp1 = arr[(arr.length - 1) - ctr];
     arr[ctr] = temp1;
     arr[(arr.length - 1) - ctr] = temp2;
     ctr++;
   };
};
