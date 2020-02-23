//https://www.codewars.com/kata/5902bc7aba39542b4a00003d

// Story
// A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...

// All the animals are out and some of them are eating each other!

// It's a Zoo Disaster!
// Here is a list of zoo animals, and what they can eat

// antelope eats grass
// big-fish eats little-fish
// bug eats leaves
// bear eats big-fish
// bear eats bug
// bear eats chicken
// bear eats cow
// bear eats leaves
// bear eats sheep
// chicken eats bug
// cow eats grass
// fox eats chicken
// fox eats sheep
// giraffe eats leaves
// lion eats antelope
// lion eats cow
// panda eats leaves
// sheep eats grass
// Kata Task
// INPUT
// A comma-separated string representing all the things at the zoo

// TASK
// Figure out who eats whom until no more eating is possible.

// OUTPUT
// A list of strings (refer to the example below) where:

// The first element is the initial zoo (same as INPUT)
// The last element is a comma-separated string of what the zoo looks like when all the eating has finished
// All other elements (2nd to last-1) are of the form X eats Y describing what happened
// Notes
// Animals can only eat things beside them

// Animals always eat to their LEFT before eating to their RIGHT

// Always the LEFTMOST animal capable of eating will eat before any others

// Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible

// Example
// Input

// "fox,bug,chicken,grass,sheep"

// Working

// 1	fox can't eat bug	
// "fox,bug,chicken,grass,sheep"
// 2	bug can't eat anything	
// "fox,bug,chicken,grass,sheep"
// 3	chicken eats bug	
// "fox,chicken,grass,sheep"
// 4	fox eats chicken	
// "fox,grass,sheep"
// 5	fox can't eat grass	
// "fox,grass,sheep"
// 6	grass can't eat anything	
// "fox,grass,sheep"
// 7	sheep eats grass	
// "fox,sheep"
// 8	fox eats sheep	
// "fox"
// Output

// ["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]



var whoEatsWho = function(zoo) {
  let result = [zoo];
  let isThereStillEdible;
  zoo = zoo.split(",");
  
  do{
    isThereStillEdible = false;
    for(let i = 0; i <= zoo.length - 1; i++){

      if(i > 0){
        if(isEdible(zoo[i],zoo[i - 1])){
          result.push(zoo[i] + " eats " + zoo[i - 1]);
          zoo.splice(i - 1,1);
          isThereStillEdible = true;
          break;
        }
      }

      if(i < zoo.length -1){
        if(isEdible(zoo[i],zoo[i + 1])){
          result.push(zoo[i] + " eats " + zoo[i + 1]);
          zoo.splice(i + 1,1);
          isThereStillEdible = true;
          break;
        }
      }    
    }
  } while(isThereStillEdible);
  
  result.push(zoo.join(","));
  
  return result;
}

function isEdible(eater,food){
  if((eater == 'bug' && food == 'leaves') || 
        (eater == 'panda' && food == 'leaves') || 
          (eater == 'giraffe' && food == 'leaves') || 
            (eater == 'cow' && food == 'grass') || 
              (eater == 'antelope' && food == 'grass') || 
                (eater == 'sheep' && food == 'grass') || 
                  (eater == 'chicken' && food == 'bug') || 
                    (eater == 'big-fish' && food == 'little-fish') || 
                      (eater == 'lion' && food == 'antelope') ||
                        (eater == 'lion' && food == 'cow') ||
                          (eater == 'fox' && food == 'chicken') ||
                            (eater == 'fox' && food == 'sheep') || 
                              (eater == 'bear' && food == 'chicken') ||
                                (eater == 'bear' && food == 'big-fish') ||
                                  (eater == 'bear' && food == 'bug') ||
                                    (eater == 'bear' && food == 'cow') ||
                                      (eater == 'bear' && food == 'sheep') ||
                                        (eater == 'bear' && food == 'leaves')){
    return true;
  }
return false;
}
