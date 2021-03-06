//https://www.codewars.com/kata/5fa6d9e9454977000fb0c1f8

//Unpack delicious sausages!
//A food delivery truck carrying boxes of delicious sausages has arrived and it's your job to unpack them and put them in the store's display counter.

//The truck is filled with boxes of goods. Among the goods, there are various types of sausages. Straight sausages I, curvy sausages ), even twirly sausages @ and many more. The safest way to tell any type of sausage apart from other goods is by the packaging [], used exclusively by sausages. Make sure to ignore other goods, those will be taken care of by someone else. Once you have unpacked all the sausages, just lay them out in the display counter (string) in the same order in which they came in boxes with one space " " in-between every sausage. Oh, and watch out for spoiled or damaged sausage packs, did I tell you about those? The sausages are always packed in fours and each pack contains only one sausage type, so whenever there is any irregularity, the sausages are probably spoiled or damaged and the whole pack should be thrown out!

//Now we're getting to the best part - your reward! Instead of money, you'll be paid in something far better - sausages! Every fifth undamaged processed pack of sausages doesn't go to the counter, instead it's yours to keep. Don't go spending it all at once!

//If the truck arrives completely empty, only with empty boxes or only with goods that are not sausages, the display counter will simply stay empty "". Unlike truck and boxes that may be empty, every existing product is a non-empty string.

//Example:
//Input (truck with 5 boxes containing 11 products):

//[ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU", "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]

//"Truck is an array, packages are arrays, boxes are strings"
//Output (four sets of sausages):

//"I I I I ) ) ) ) l l l l @ @ @ @"

//Explanation:

//The last box is empty and is therefore ignored - ()
//Products that are not sausages are ignored - "(-)", "IuI", "UwU", "IuI", "x"
//One damaged pack got thrown out - "[IlII]"
//Fifth undamaged pack was used as your reward and was therefore excluded from the output: [))))]
//More examples of input and expected output can be seen in the example test cases

function unpackSausages(truck) {
  let result = [];
  let ctr = 0;
  
  truck
    .map(trck => trck.filter(items => items.includes('[')))
      .map(truckWithSausage => 
          truckWithSausage.map(sausage => {
            if(sausage.length == 6 && checkIfValidSausage(sausage)){
              ctr++;
              if(ctr == 5){
                ctr = 0;
              } else {
                result.push(sausage.split('').slice(1,5).join(' '));
              };
            };
          })
      );
  
  return result.join(' ');
};

function checkIfValidSausage(sausage){
  return sausage.split('').slice(1,5).filter(pc => pc == sausage[1]).length == 4 ? true : false;
};
