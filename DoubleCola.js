//https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0

// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending 
//machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can,
//drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue 
//(Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will look like this:

// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.

// Input
// The input data consist of an array which contains at least 1 name, and single integer n which may go as 
//high as the biggest number your language of choice supports (if there's such limit, of course).

// Output / Examples
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"

function whoIsNext(names, r) {
  let ctr = names.length;
  let arr = [ctr];
  let arr2 = [];
  let x = 0;
  let last;
  let sub;
  let turn;
  
  while (ctr <= r) {
    arr.push(ctr * 2);
    ctr *= 2;
  };

  for (let i = 0; i <= arr.length - 1; i++) {
    x += arr[i];
    if (x > r) {
      last = arr[i];
      break;
    };
  }
  sub = r - (x - last);

  for (let i = 1; i <= names.length; i++) {
    arr2.push((last / names.length) * i)
  };
  
  for (let i = 0; i <= arr2.length - 1; i++) {
    if (sub <= arr2[i]) {
      turn = i;
      break;
    };
  };
  
  return names[turn];
}
