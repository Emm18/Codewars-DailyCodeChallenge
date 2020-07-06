//https://www.codewars.com/kata/5d7d05d070a6f60015c436d1

//Help prepare for the entrance exams to art school.

//It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, 
//and the only condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that accurately depicts the object.

//Write a function that takes an integer and returns a list of strings with a line-by-line image of the object.

//Below is an example function:

//get_w(3) # should return:
//[
//'*   *   *',
//' * * * * ',
//'  *   *  '
//]

//get_w(5) # should return:
//[
//'*       *       *',
//' *     * *     * ',
//'  *   *   *   *  ',
//'   * *     * *   ',
//'    *       *    '
//]
//Return an empty list for height < 2.

function getW(height) {
  let midDownSpace;
  let midUpSpace = 1;
  let ctr = 0;
  let space = 0;
  let result = [];
  
  if(height < 2){
    return [];
  };
  
  for(let i = 1; i < height; i++){
    midDownSpace = i + ctr;
    ctr++;
  };
  
  for(let i = 0; i < height; i++){
    let temp = '';
    
    temp += createSpace(space);
    temp += '*';
    temp += createSpace(midDownSpace);
    
    if(i == 0){
      temp += '*';
    } else {
      
      if(i != height - 1){
       temp += '*';
      }
      
      temp += createSpace(midUpSpace);      
      temp += '*';
      midUpSpace += 2;
    }
    
    temp += createSpace(midDownSpace);
    if(i != height - 1){
      temp += '*';
    }
    
    temp += createSpace(space);
    result.push(temp);
    space++;
    midDownSpace -= 2;
  };
  
  return result;
};

const createSpace = (num) => {
  let str = '';
  for(let j = 0; j < num; j++){
      str += ' ';
  };
  return str;
};
